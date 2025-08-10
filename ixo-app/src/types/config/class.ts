import { CLASS_ROLE_TYPE, CLASS_STAT_MODIFIER_OPTION, MAX_CLASS_GAIN_LEVEL } from '@/constants/config/class';
import type { BaseConfig } from './base';
import type { SkillSelectionRule } from './skill';

export type ClassGain = {
  proficiencyPoints?: number;
  statModifierChoice?: {
    statIds?: string[] | typeof CLASS_STAT_MODIFIER_OPTION.ALL;
    numberOfSelections: number;
  };
  skillSelectionRule?: SkillSelectionRule[];
};

export type ClassGainLevel = typeof MAX_CLASS_GAIN_LEVEL[number];
export type ClassRole = typeof CLASS_ROLE_TYPE[keyof typeof CLASS_ROLE_TYPE];

export interface ClassConfig extends BaseConfig {
  roles: ClassRole[];
  gain: Record<ClassGainLevel, ClassGain>;
}