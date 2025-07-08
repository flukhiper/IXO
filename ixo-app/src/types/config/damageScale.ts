import { BaseConfig } from './base';

export interface DamageScaleConfig extends BaseConfig {
  multiplier: number;
  tags?: string[];
  icon?: string;
}
