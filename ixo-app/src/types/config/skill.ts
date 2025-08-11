import { MAX_SKILL_TIER, SKILL_ARCHETYPE, SKILL_STACK_TYPE, SKILL_TYPE } from '@/constants/config/skill';
import type { BaseConfig } from './base';
import type { EffectSelectionRule } from './effect';
import type { ActionSelectionRule } from './action';
import type { DowntimeSelectionRule } from './downtime';

export interface SkillSelectionRule {
  skillIds?: string[];
  filterOptions?: {
    types?: SkillType[];
    archetypes?: SkillArchetype[];
    tiers?: SkillTier[];
    classIds?: string[];
    includeTags?: string[];
    excludeTags?: string[];
  };
  numberOfSelections: number;
}

export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];
export type SkillTier = typeof MAX_SKILL_TIER[number];
export type SkillType = typeof SKILL_TYPE[keyof typeof SKILL_TYPE];
export type SkillArchetype = typeof SKILL_ARCHETYPE[keyof typeof SKILL_ARCHETYPE];
export interface BaseSkillConfig extends BaseConfig {
  type: SkillType;
  archetype: SkillArchetype;
  stack: {
    type: SkillStackType;
    id: string;
    priority?: number;
  };

  usedSlots?: number;
  
  actionSelectionRule?: ActionSelectionRule[];
  downtimeSelectionRule?: DowntimeSelectionRule[];
  effectSelectionRule?: EffectSelectionRule[];
}

export interface GeneralSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.GENERAL;
  tier: SkillTier;
  usedSlots: number;
}

export interface ClassSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.CLASS;
  classIds: string[];
  tier: SkillTier;
  usedSlots: number;
}

export interface CombatSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.COMBAT;
  tier: SkillTier;
  usedSlots: number;
} 

export type SkillConfig =
  | BaseSkillConfig
  | GeneralSkillConfig
  | ClassSkillConfig
  | CombatSkillConfig;