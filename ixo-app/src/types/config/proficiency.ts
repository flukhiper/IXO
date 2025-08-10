import { MAX_PROFICIENCY_GAIN_LEVEL } from '@/constants/config/proficiency';
import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { EffectSelectionRule } from './effect';


export type ProficiencyGain = {
  actionSelectionRule?: ActionSelectionRule[];
  effectSelectionRule?: EffectSelectionRule[];
};

export type ProficiencyGainLevel = typeof MAX_PROFICIENCY_GAIN_LEVEL[number];
export interface ProficiencyConfig extends BaseConfig {
  gain: Partial<Record<ProficiencyGainLevel, ProficiencyGain>>;
}