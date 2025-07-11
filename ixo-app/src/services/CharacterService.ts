// ixo-app/src/services/CharacterService.ts
import type { Character } from '@/types/character';
import { CharacterRepository } from '@/repositories/CharacterRepository';
import { BaseService } from './BaseService';

export class CharacterService extends BaseService<Character, CharacterRepository> {
  constructor () {
    super(new CharacterRepository());
  }

  // Add any character-specific business logic or validation here
  // Example:
  // async validateCharacterCreation(data: Character) { ... }
}