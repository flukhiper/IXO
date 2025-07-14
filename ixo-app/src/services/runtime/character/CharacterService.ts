import { CharacterRepository } from '@/repositories/runtime/character/CharacterRepository';
import type { Character } from '@/types/runtime/character/Character';
import { BaseService } from '@/services/BaseService';

export class CharacterService extends BaseService<Character, CharacterRepository> {
  constructor () {
    super(new CharacterRepository());
  }
  // Add custom business logic methods here if needed
} 