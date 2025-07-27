import { DOWNTIME_DURATION } from '@/constants/config/downtime';
import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { Effect } from './effect';

export interface DowntimeSelectionRule {
  downtimeIds?: string[];
  numberOfSelections: number;
}


export interface DowntimeRestore {
  attributeId: string;
  value: ConstantValue | DiceValue;
  skillCheckId?: string;
  modifierFormula?: string;
}

export interface DowntimeRepair {
  numberOfItems: number;
  value: ConstantValue | DiceValue;
  skillCheckId?: string;
  modifierFormula?: string;
}
export interface DowntimeDetail {
  numberOfUsage: number;
  downTimePointsCost: number;
  restore?: DowntimeRestore[];
  repair?: DowntimeRepair;
  effects?: Effect[];
}

export type DowntimeDuration = typeof DOWNTIME_DURATION[keyof typeof DOWNTIME_DURATION];
export interface DowntimeConfig extends BaseConfig {
  isSystem: boolean;

  duration: Record<DowntimeDuration, DowntimeDetail>;
}
