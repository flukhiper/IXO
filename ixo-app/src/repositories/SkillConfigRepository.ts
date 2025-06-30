import { BaseRepository } from './BaseRepository';
import { SkillConfigModel } from '@/models/mongoose/SkillConfig';
import type { SkillConfig } from '@/types/config/skill';

export class SkillConfigRepository extends BaseRepository<SkillConfig> {
  constructor () {
    super(SkillConfigModel);
  }
  // Add any SkillConfig-specific methods here if needed
} 