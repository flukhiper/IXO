import { BaseRepository } from '../BaseRepository';
import { SkillConfigModel } from '@/models/mongoose/config/SkillConfig';
import type { SkillConfig } from '@/types/config/skill';

export class SkillConfigRepository extends BaseRepository<SkillConfig> {
  constructor () {
    super(SkillConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
