import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterSkillModel } from '@/models/mongoose/runtime/character/CharacterSkill';
import type { CharacterSkill } from '@/types/runtime/character/CharacterSkill';

export class CharacterSkillRepository extends BaseRepository<CharacterSkill> {
  constructor () {
    super(CharacterSkillModel);
  }
} 