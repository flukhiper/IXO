import type { BaseConfig } from './base';

export interface TraitConfig extends BaseConfig {
  icon?: string;
  tags?: string[]; // e.g., ["special", "natural", "construct"]
  isSpecial: boolean; // true = represents large transformation, counts as 2 traits
  skillIds: string[];
}
