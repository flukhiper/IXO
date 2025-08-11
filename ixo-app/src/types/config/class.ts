import { CLASS_STAT_MODIFIER_OPTION, MAX_CLASS_GAIN_LEVEL } from '@/constants/config/class';
import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { EffectSelectionRule } from './effect';
import type { DowntimeSelectionRule } from './downtime';
import type { SkillSelectionRule } from './skill';

export type ClassGain = {
  proficiencyPoints?: number;
  statModifierChoice?: {
    statIds: (typeof CLASS_STAT_MODIFIER_OPTION.ALL | string)[];
    numberOfSelections: number;
  };
  skillSelectionRule?: SkillSelectionRule[];
  actionSelectionRule?: ActionSelectionRule[];
  effectSelectionRule?: EffectSelectionRule[];
  downtimeSelectionRule?: DowntimeSelectionRule[];
};

export type ClassGainLevel = typeof MAX_CLASS_GAIN_LEVEL[number];

export interface ClassConfig extends BaseConfig {
  gain: Record<ClassGainLevel, ClassGain>;
}