import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { DowntimeSelectionRule } from './downtime';
import type { EffectSelectionRule } from './effect';

export interface OriginConfig extends BaseConfig {
  effectSelectionRule?: EffectSelectionRule[];
  actionSelectionRule?: ActionSelectionRule[];
  downtimeSelectionRule?: DowntimeSelectionRule[];
}