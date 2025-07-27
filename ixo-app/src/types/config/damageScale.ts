import { BaseConfig } from './base';

export interface DamageScaleConfig extends BaseConfig {
  multiplier: number;
  
  isSystem: boolean;
}
