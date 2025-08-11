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
  modifierFormula?: string;
}

export interface DowntimeRepair {
  numberOfItems: number;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}
export interface DowntimeDetail {
  maxNumberOfUse: number;
  
  downTimePointsCost: number;
  skillCheckId?: string;
  restore?: DowntimeRestore;
  repair?: DowntimeRepair;
  effects?: Effect[];
}

export type DowntimeDuration = typeof DOWNTIME_DURATION[keyof typeof DOWNTIME_DURATION];
export interface DowntimeConfig extends BaseConfig {
  duration: Partial<Record<DowntimeDuration, DowntimeDetail>>;
}
