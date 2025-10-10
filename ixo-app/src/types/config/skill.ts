import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export interface SkillConfig extends BaseConfig {
  required: SkillRequirement;
}

export interface SkillRequirement {
  skillId: string | typeof NONE_VALUE.STRING;
  level: number | typeof NONE_VALUE.NUMBER;
}