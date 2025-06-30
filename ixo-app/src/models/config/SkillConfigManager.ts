import type { SkillConfig } from '@/types/config/skill';
import { mockSkill } from '@/mocks/config/skill';
import { BaseConfigManager } from './BaseConfigManager';

export class SkillConfigManager extends BaseConfigManager<SkillConfig> {
  constructor () {
    super(mockSkill);
  }
} 