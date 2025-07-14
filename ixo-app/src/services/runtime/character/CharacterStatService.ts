import { CharacterStatRepository } from '@/repositories/runtime/character/CharacterStatRepository';
import type { CharacterStat } from '@/types/runtime/character/CharacterStat';
import { BaseService } from '@/services/BaseService';

export class CharacterStatService extends BaseService<CharacterStat, CharacterStatRepository> {
  constructor () {
    super(new CharacterStatRepository());
  }
} 