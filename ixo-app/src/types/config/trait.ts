import type { BaseConfig, EffectConfig } from './base';

export interface TraitConfig extends BaseConfig {
  icon?: string;
  tags?: string[]; // e.g., ["special", "natural", "construct"]
  isFullTrait: boolean; // true = represents large transformation, counts as 2 traits
  effects: EffectConfig[];
}
