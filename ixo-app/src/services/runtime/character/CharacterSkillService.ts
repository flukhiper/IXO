import { CharacterSkillRepository } from '@/repositories/runtime/character/CharacterSkillRepository';
import type { CharacterSkill } from '@/types/runtime/character/CharacterSkill';
import { BaseService } from '@/services/BaseService';

export class CharacterSkillService extends BaseService<CharacterSkill, CharacterSkillRepository> {
  constructor () {
    super(new CharacterSkillRepository());
  }
} 