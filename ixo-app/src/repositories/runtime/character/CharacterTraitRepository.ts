import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterTraitModel } from '@/models/mongoose/runtime/character/CharacterTrait';
import type { CharacterTrait } from '@/types/runtime/character/CharacterTrait';

export class CharacterTraitRepository extends BaseRepository<CharacterTrait> {
  constructor () {
    super(CharacterTraitModel);
  }
} 