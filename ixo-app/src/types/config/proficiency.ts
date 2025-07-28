import { MAX_PROFICIENCY_GAIN_LEVEL } from '@/constants/config/proficiency';
import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { StringRange } from './common';
import type { Effect } from './effect';


export type ProficiencyGain = {
  actionSelectionRule?: ActionSelectionRule;
  effects?: Effect[];
};

const _maxProficiencyGainLevel = MAX_PROFICIENCY_GAIN_LEVEL + 1;
export type ProficiencyGainLevel = StringRange<1, typeof _maxProficiencyGainLevel>;
export interface ProficiencyConfig extends BaseConfig {
  gain: Record<ProficiencyGainLevel, ProficiencyGain>;
}