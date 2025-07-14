import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterOriginModel } from '@/models/mongoose/runtime/character/CharacterOrigin';
import type { CharacterOrigin } from '@/types/runtime/character/CharacterOrigin';

export class CharacterOriginRepository extends BaseRepository<CharacterOrigin> {
  constructor () {
    super(CharacterOriginModel);
  }
} 