import { TRAIT_EFFECT_TYPE } from '@/constants/config/trait';
import type { BaseConfig } from './base';

export interface TraitEffectSkillConfig {
  type: typeof TRAIT_EFFECT_TYPE.SKILL;
  skillIds: string[]; // Skills granted by this trait
}

export type TraitEffectType = typeof TRAIT_EFFECT_TYPE[keyof typeof TRAIT_EFFECT_TYPE];
export type TraitEffectConfig =
  | TraitEffectSkillConfig;

export interface TraitConfig extends BaseConfig {
  icon?: string;
  tags?: string[]; // e.g., ["special", "natural", "construct"]
  isSpecial?: boolean; // true = represents large transformation, counts as 2 traits
  effects: TraitEffectConfig[];
}
