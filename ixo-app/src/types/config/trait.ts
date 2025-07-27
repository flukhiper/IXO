import type { ActionSelectionRule } from './action';
import type { BaseConfig } from './base';
import type { DowntimeSelectionRule } from './downtime';
import type { Effect } from './effect';

export interface TraitConfig extends BaseConfig {
  value: 1 | 2;
  actionSelectionRule?: ActionSelectionRule;
  downtimeSelectionRule?: DowntimeSelectionRule;
  effects?: Effect[];
}
