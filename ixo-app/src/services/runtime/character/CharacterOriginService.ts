import { CharacterOriginRepository } from '@/repositories/runtime/character/CharacterOriginRepository';
import type { CharacterOrigin } from '@/types/runtime/character/CharacterOrigin';
import { BaseService } from '@/services/BaseService';

export class CharacterOriginService extends BaseService<CharacterOrigin, CharacterOriginRepository> {
  constructor () {
    super(new CharacterOriginRepository());
  }
} 