import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterActionModel } from '@/models/mongoose/runtime/character/CharacterAction';
import type { CharacterAction } from '@/types/runtime/character/CharacterAction';

export class CharacterActionRepository extends BaseRepository<CharacterAction> {
  constructor () {
    super(CharacterActionModel);
  }
} 