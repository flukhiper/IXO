import { SkillConfigRepository } from '@/repositories/SkillConfigRepository';
import type { SkillConfig } from '@/types/config/skill';
import { BaseConfigService } from './BaseConfigService';

export class SkillConfigService extends BaseConfigService<SkillConfig, SkillConfigRepository> {
  constructor () {
    super(new SkillConfigRepository());
  }
} 