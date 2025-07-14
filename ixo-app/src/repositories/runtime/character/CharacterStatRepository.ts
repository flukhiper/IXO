import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterStatModel } from '@/models/mongoose/runtime/character/CharacterStat';
import type { CharacterStat } from '@/types/runtime/character/CharacterStat';

export class CharacterStatRepository extends BaseRepository<CharacterStat> {
  constructor () {
    super(CharacterStatModel);
  }
} 