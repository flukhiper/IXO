import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterInventoryModel } from '@/models/mongoose/runtime/character/CharacterInventory';
import type { CharacterInventory } from '@/types/runtime/character/CharacterInventory';

export class CharacterInventoryRepository extends BaseRepository<CharacterInventory> {
  constructor () {
    super(CharacterInventoryModel);
  }
} 