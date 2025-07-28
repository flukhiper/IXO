import { CLASS_ROLE_TYPE, MAX_CLASS_GAIN_LEVEL } from '@/constants/config/class';
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

const _maxClassGainLevel = MAX_CLASS_GAIN_LEVEL + 1;

export type ClassGainLevel = StringRange<1, typeof _maxClassGainLevel>;
export type ClassRole = keyof typeof CLASS_ROLE_TYPE;

export interface ClassConfig extends BaseConfig {
  role: ClassRole;
  gain: Record<ClassGainLevel, ClassGain>;
}