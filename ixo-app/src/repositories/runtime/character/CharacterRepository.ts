import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterModel } from '@/models/mongoose/runtime/character/Character';
import type { Character } from '@/types/runtime/character/Character';

export class CharacterRepository extends BaseRepository<Character> {
  constructor () {
    super(CharacterModel);
  }
  // Add custom methods here if needed
} 