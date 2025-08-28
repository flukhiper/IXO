import { MAX_TRAIT_VALUE } from '@/constants/config/trait';
import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { DowntimeSelectionRule } from './downtime';
import type { EffectSelectionRule } from './effect';

export interface TraitConfig extends BaseConfig {
  value: typeof MAX_TRAIT_VALUE[number];
  proficiencyPoints?: number;
  actionSelectionRule?: ActionSelectionRule[];
  downtimeSelectionRule?: DowntimeSelectionRule[];
  effectSelectionRule?: EffectSelectionRule[];
}
