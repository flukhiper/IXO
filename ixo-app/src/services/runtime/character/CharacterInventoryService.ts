import { CharacterInventoryRepository } from '@/repositories/runtime/character/CharacterInventoryRepository';
import type { CharacterInventory } from '@/types/runtime/character/CharacterInventory';
import { BaseService } from '@/services/BaseService';

export class CharacterInventoryService extends BaseService<CharacterInventory, CharacterInventoryRepository> {
  constructor () {
    super(new CharacterInventoryRepository());
  }
} 