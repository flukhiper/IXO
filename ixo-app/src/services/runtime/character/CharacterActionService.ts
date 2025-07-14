import { CharacterActionRepository } from '@/repositories/runtime/character/CharacterActionRepository';
import type { CharacterAction } from '@/types/runtime/character/CharacterAction';
import { BaseService } from '@/services/BaseService';

export class CharacterActionService extends BaseService<CharacterAction, CharacterActionRepository> {
  constructor () {
    super(new CharacterActionRepository());
  }
} 