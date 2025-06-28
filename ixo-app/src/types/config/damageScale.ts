import { BaseConfig } from './base';

export interface DamageScaleConfig extends BaseConfig {
  multiplier: number; // e.g., 0.5 for resistance, 2 for vulnerability
  tags?: string[]; // optional groupings like "resistance", "vulnerability", "immunity"
}
