import { CharacterAttributeRepository } from '@/repositories/runtime/character/CharacterAttributeRepository';
import type { CharacterAttribute } from '@/types/runtime/character/CharacterAttribute';
import { BaseService } from '@/services/BaseService';

export class CharacterAttributeService extends BaseService<CharacterAttribute, CharacterAttributeRepository> {
  constructor () {
    super(new CharacterAttributeRepository());
  }
} 