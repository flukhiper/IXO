// Character-specific inventory position
export interface CharacterInventoryPosition {
  row: number;
  column: number;
}

// Character-specific inventory grid
export interface CharacterInventoryGrid {
  rows: number;
  columns: number;
  items: CharacterInventoryItem[];
}

// Character-specific inventory item (references item config by ID)
export interface CharacterInventoryItem {
  id: string; // Unique identifier for this inventory item instance
  itemConfigId: string; // Reference to the item config
  position: CharacterInventoryPosition;
  containerId?: string; // Reference to container item (e.g., backpack), null for base inventory
}

export interface CharacterInventory {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  base: CharacterInventoryGrid; // The character's body inventory (6x12 grid)
  containers: {
    [containerItemId: string]: CharacterInventoryGrid; // e.g., backpack, pouch, etc.
  };
  currency: {
    gold: number;
    // Add more currencies (e.g., silver, copper) as needed
  };
} 