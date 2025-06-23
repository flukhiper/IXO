import type { BaseMapConfig } from './base';
import type { FixValue } from './value';

export interface DamageScaleConfig extends BaseMapConfig {
  value: FixValue;
}

export interface DamageTypeConfig extends BaseMapConfig {
}