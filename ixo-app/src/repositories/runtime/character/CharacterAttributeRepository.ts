import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterAttributeModel } from '@/models/mongoose/runtime/character/CharacterAttribute';
import type { CharacterAttribute } from '@/types/runtime/character/CharacterAttribute';

export class CharacterAttributeRepository extends BaseRepository<CharacterAttribute> {
  constructor () {
    super(CharacterAttributeModel);
  }
} 