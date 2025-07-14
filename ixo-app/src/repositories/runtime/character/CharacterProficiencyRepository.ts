import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterProficiencyModel } from '@/models/mongoose/runtime/character/CharacterProficiency';
import type { CharacterProficiency } from '@/types/runtime/character/CharacterProficiency';

export class CharacterProficiencyRepository extends BaseRepository<CharacterProficiency> {
  constructor () {
    super(CharacterProficiencyModel);
  }
} 