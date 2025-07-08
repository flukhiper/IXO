import type { BaseConfig, EffectConfig } from './base';

export interface DowntimeConfig extends BaseConfig {
  icon?: string;
  tags?: string[];

  requiredProficiencies: {
    proficiencyId: string;
    level: number;
  }[];

  shortDowntime?: {
    cost: number; // activity slots cost
    duration: number; // in hours
    effects: EffectConfig[];
  };
  longDowntime?: {
    cost: number; // activity slots cost
    duration: number; // in hours
    effects: EffectConfig[];
  };
}
