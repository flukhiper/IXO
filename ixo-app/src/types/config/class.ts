import { CLASS_ROLE_TYPE } from '@/constants/config/class';
import type { BaseConfig } from './base';
import type { StringRange } from './common';
import type { SkillSelectionRule } from './skill';

export type ClassGain = {
  proficiencyPoints?: number;
  statModifierChoice?: {
    statIds?: string[];
    numberOfSelections: number;
  };
  skillSelectionRule?: SkillSelectionRule;
};

export type ClassGainLevel = StringRange<1, 13>;
export type ClassRole = keyof typeof CLASS_ROLE_TYPE;

export interface ClassConfig extends BaseConfig {
  role: ClassRole;
  gain: Record<ClassGainLevel, ClassGain>;
}