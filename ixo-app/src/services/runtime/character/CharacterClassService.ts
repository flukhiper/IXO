import { CharacterClassRepository } from '@/repositories/runtime/character/CharacterClassRepository';
import type { CharacterClass } from '@/types/runtime/character/CharacterClass';
import { BaseService } from '@/services/BaseService';

export class CharacterClassService extends BaseService<CharacterClass, CharacterClassRepository> {
  constructor () {
    super(new CharacterClassRepository());
  }
} 