import { CharacterTraitRepository } from '@/repositories/runtime/character/CharacterTraitRepository';
import type { CharacterTrait } from '@/types/runtime/character/CharacterTrait';
import { BaseService } from '@/services/BaseService';

export class CharacterTraitService extends BaseService<CharacterTrait, CharacterTraitRepository> {
  constructor () {
    super(new CharacterTraitRepository());
  }
} 