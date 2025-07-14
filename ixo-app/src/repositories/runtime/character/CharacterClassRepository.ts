import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterClassModel } from '@/models/mongoose/runtime/character/CharacterClass';
import type { CharacterClass } from '@/types/runtime/character/CharacterClass';

export class CharacterClassRepository extends BaseRepository<CharacterClass> {
  constructor () {
    super(CharacterClassModel);
  }
} 