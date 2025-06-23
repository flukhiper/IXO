import { RACE_GAIN_TYPE } from '@/constants/race';

import type { BaseMapConfig } from './base';
import type { ModifierValue, ReferenceValue } from './value';

export type RaceGainType = typeof RACE_GAIN_TYPE[keyof typeof RACE_GAIN_TYPE];

export interface RaceGainModifierConfig {
  type: typeof RACE_GAIN_TYPE.MODIFIER;
  attribute: ReferenceValue;
  modifier: ModifierValue;
}
export interface RaceGainAcquireConfig {
  type: typeof RACE_GAIN_TYPE.ACQUIRE;
  reference: ReferenceValue;
}

export type RaceGainConfig = RaceGainModifierConfig | RaceGainAcquireConfig;

export interface RaceConfig extends BaseMapConfig {
  tags?: string[];
  gains: RaceGainConfig[];
}
