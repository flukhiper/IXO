// ixo-app/src/services/CharacterService.ts
import type { Character, CharacterInventoryItem } from '@/types/character';
import { CharacterRepository } from '@/repositories/CharacterRepository';
import { BaseService } from './BaseService';

export class CharacterService extends BaseService<Character, CharacterRepository> {
  constructor () {
    super(new CharacterRepository());
  }

  // --- Business Logic Methods ---

  /**
   * Create a new character with validation
   */
  async createCharacter (characterData: Partial<Character>): Promise<Character> {
    // Validate character data
    await this.validateCharacterCreation(characterData);
    
    // Generate unique character ID
    const character: Character = {
      id: crypto.randomUUID(),
      ...characterData,
      createdAt: new Date(),
      updatedAt: new Date()
    } as Character;

    await this.repository.saveOne(character);
    return character;
  }

  /**
   * Validate character creation data
   */
  async validateCharacterCreation (data: Partial<Character>): Promise<void> {
    const errors: string[] = [];

    // Basic validation
    if (!data.name?.trim()) {
      errors.push('Character name is required');
    }

    if (!data.playerID) {
      errors.push('Player ID is required');
    }

    if (!data.gameSystemId) {
      errors.push('Game system ID is required');
    }

    if (!data.originId) {
      errors.push('Origin ID is required');
    }

    if (!data.level || data.level < 1 || data.level > 12) {
      errors.push('Level must be between 1 and 12');
    }

    // Check name uniqueness
    if (data.name && data.playerID) {
      const isUnique = await this.repository.isNameUnique(data.playerID, data.name);
      if (!isUnique) {
        errors.push('Character name must be unique for this player');
      }
    }

    // Validate class levels
    if (data.classes && data.level) {
      const totalLevels = data.classes.reduce((sum, charClass) => sum + charClass.level, 0);
      if (totalLevels !== data.level) {
        errors.push('Total class levels must equal character level');
      }
    }

    // Validate trait selection
    if (data.traits) {
      const fullTraits = data.traits.filter(trait => trait.isActive).length;
      if (fullTraits > 1) {
        errors.push('Only one full trait can be active');
      }
    }

    if (errors.length > 0) {
      throw new Error(`Character validation failed: ${errors.join(', ')}`);
    }
  }

  /**
   * Update character with validation
   */
  async updateCharacter (id: string, updates: Partial<Character>): Promise<Character> {
    const character = await this.repository.getById(id);
    if (!character) {
      throw new Error('Character not found');
    }

    // Validate updates
    await this.validateCharacterUpdate(character, updates);

    await this.repository.updateOne(id, updates);
    return { ...character, ...updates } as Character;
  }

  /**
   * Validate character updates
   */
  async validateCharacterUpdate (currentCharacter: Character, updates: Partial<Character>): Promise<void> {
    const errors: string[] = [];

    // Check name uniqueness if name is being updated
    if (updates.name && updates.name !== currentCharacter.name) {
      const isUnique = await this.repository.isNameUnique(currentCharacter.playerID, updates.name, currentCharacter.id);
      if (!isUnique) {
        errors.push('Character name must be unique for this player');
      }
    }

    // Validate level changes
    if (updates.level && updates.level !== currentCharacter.level) {
      if (updates.level < 1 || updates.level > 12) {
        errors.push('Level must be between 1 and 12');
      }
    }

    if (errors.length > 0) {
      throw new Error(`Character update validation failed: ${errors.join(', ')}`);
    }
  }

  // --- Inventory Management Methods ---

  /**
   * Add item to character inventory
   */
  async addInventoryItem (
    characterId: string,
    itemConfigId: string,
    position: { row: number; column: number },
    containerId?: string
  ): Promise<CharacterInventoryItem> {
    const character = await this.repository.getById(characterId);
    if (!character) {
      throw new Error('Character not found');
    }

    // Validate position
    this.validateInventoryPosition(position);

    // Check if position is available
    if (!this.isPositionAvailable(character, position, containerId)) {
      throw new Error('Position is not available');
    }

    const newItem: CharacterInventoryItem = {
      id: crypto.randomUUID(),
      itemConfigId,
      position
    };

    if (containerId) {
      // Add to specific container
      if (!character.inventory.containers[containerId]) {
        character.inventory.containers[containerId] = { rows: 6, columns: 12, items: [] };
      }
      character.inventory.containers[containerId].items.push(newItem);
    } else {
      // Add to base inventory
      character.inventory.base.items.push(newItem);
    }

    await this.repository.updateOne(characterId, character);
    return newItem;
  }

  /**
   * Remove item from character inventory
   */
  async removeInventoryItem (characterId: string, itemId: string, containerId?: string): Promise<boolean> {
    const character = await this.repository.getById(characterId);
    if (!character) {
      throw new Error('Character not found');
    }

    let removed = false;

    if (containerId) {
      // Remove from specific container
      const container = character.inventory.containers[containerId];
      if (container) {
        const index = container.items.findIndex((item: CharacterInventoryItem) => item.id === itemId);
        if (index !== -1) {
          container.items.splice(index, 1);
          removed = true;
        }
      }
    } else {
      // Remove from base inventory
      const index = character.inventory.base.items.findIndex((item: CharacterInventoryItem) => item.id === itemId);
      if (index !== -1) {
        character.inventory.base.items.splice(index, 1);
        removed = true;
      }
    }

    if (removed) {
      await this.repository.updateOne(characterId, character);
    }

    return removed;
  }

  /**
   * Move item within character inventory
   */
  async moveInventoryItem (
    characterId: string,
    itemId: string,
    newPosition: { row: number; column: number },
    containerId?: string
  ): Promise<CharacterInventoryItem | null> {
    const character = await this.repository.getById(characterId);
    if (!character) {
      throw new Error('Character not found');
    }

    // Validate new position
    this.validateInventoryPosition(newPosition);

    // Check if new position is available
    if (!this.isPositionAvailable(character, newPosition, containerId, itemId)) {
      throw new Error('New position is not available');
    }

    let item: CharacterInventoryItem | null = null;

    if (containerId) {
      // Move within specific container
      const container = character.inventory.containers[containerId];
      if (container) {
        item = container.items.find((item: CharacterInventoryItem) => item.id === itemId) || null;
        if (item) {
          item.position = newPosition;
        }
      }
    } else {
      // Move within base inventory
      item = character.inventory.base.items.find((item: CharacterInventoryItem) => item.id === itemId) || null;
      if (item) {
        item.position = newPosition;
      }
    }

    if (item) {
      await this.repository.updateOne(characterId, character);
    }

    return item;
  }

  /**
   * Get inventory item by ID
   */
  async getInventoryItem (characterId: string, itemId: string): Promise<{ item: CharacterInventoryItem; containerId: string | null } | null> {
    const character = await this.repository.getById(characterId);
    if (!character) {
      throw new Error('Character not found');
    }

    // Search in base inventory
    let item = character.inventory.base.items.find((item: CharacterInventoryItem) => item.id === itemId);
    if (item) return { item, containerId: null };

    // Search in containers
    for (const [ containerId, container ] of Object.entries(character.inventory.containers)) {
      item = container.items.find((item: CharacterInventoryItem) => item.id === itemId);
      if (item) return { item, containerId };
    }

    return null;
  }

  // --- Helper Methods ---

  /**
   * Validate inventory position
   */
  private validateInventoryPosition (position: { row: number; column: number }): void {
    if (position.row < 0 || position.row >= 6) {
      throw new Error('Row must be between 0 and 5');
    }
    if (position.column < 0 || position.column >= 12) {
      throw new Error('Column must be between 0 and 11');
    }
  }

  /**
   * Check if position is available in inventory
   */
  private isPositionAvailable (
    character: Character,
    position: { row: number; column: number },
    containerId?: string,
    excludeItemId?: string
  ): boolean {
    const items = containerId
      ? character.inventory.containers[containerId]?.items || []
      : character.inventory.base.items;

    return !items.some((item: CharacterInventoryItem) => 
      item.position.row === position.row && 
      item.position.column === position.column &&
      item.id !== excludeItemId
    );
  }

  /**
   * Get characters by player with pagination
   */
  async getPlayerCharacters (playerID: string, page: number = 1, limit: number = 20) {
    return this.repository.findWithPagination({ playerID }, page, limit);
  }

  /**
   * Get public characters with pagination
   */
  async getPublicCharacters (gameSystemId?: string, page: number = 1, limit: number = 20) {
    const filter: Partial<Character> = { isPublic: true };
    if (gameSystemId) filter.gameSystemId = gameSystemId;
    return this.repository.findWithPagination(filter, page, limit);
  }

  /**
   * Get character statistics
   */
  async getCharacterStatistics (playerID?: string) {
    return this.repository.getCharacterStats(playerID);
  }
}