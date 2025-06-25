import { RACE_GAIN_TYPE } from '@/constants/race';
import type { BaseMapSchema } from './base';
import type { ReferenceValueSchema } from './value';

export interface RaceGainModifierSchema {
  type: typeof RACE_GAIN_TYPE.MODIFIER;
  attribute: ReferenceValueSchema;
  modifier: string;
}

export interface RaceGainAcquireSchema {
  type: typeof RACE_GAIN_TYPE.ACQUIRE;
  reference: ReferenceValueSchema;
}

export type RaceGainSchema = RaceGainModifierSchema | RaceGainAcquireSchema;

export interface RaceConfigSchema extends BaseMapSchema {
  tags?: string[];
  gains: RaceGainSchema[];
}
