import { CharacterProficiencyRepository } from '@/repositories/runtime/character/CharacterProficiencyRepository';
import type { CharacterProficiency } from '@/types/runtime/character/CharacterProficiency';
import { BaseService } from '@/services/BaseService';

export class CharacterProficiencyService extends BaseService<CharacterProficiency, CharacterProficiencyRepository> {
  constructor () {
    super(new CharacterProficiencyRepository());
  }
} 