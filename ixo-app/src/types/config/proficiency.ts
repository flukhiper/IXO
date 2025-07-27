import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { StringRange } from './common';
import type { Effect } from './effect';


export type ProficiencyGain = {
  actionSelectionRule?: ActionSelectionRule;
  effects?: Effect[];
};

export type ProficiencyGainLevel = StringRange<1, 13>;
export interface ProficiencyConfig extends BaseConfig {
  gain: Record<ProficiencyGainLevel, ProficiencyGain>;
}