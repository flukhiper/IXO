import { MAX_SKILL_TIER, SKILL_ROLE, SKILL_STACK_TYPE, SKILL_TYPE, SKILL_USAGE_TYPE } from '@/constants/config/skill';
import type { BaseConfig } from './base';
import type { EffectSelectionRule } from './effect';
import type { ActionSelectionRule } from './action';
import type { DowntimeSelectionRule } from './downtime';
import { MAX_CHARACTER_GAIN_LEVEL } from '@/constants/config/gameSystem';

export interface SkillSelectionRule {
  skillIds?: string[];
  filterOptions?: {
    types?: SkillType[];
    roles?: SkillRole[];
    tiers?: SkillTier[];
    includeTags?: string[];
    excludeTags?: string[];
  };
  numberOfSelections: number;
}

export type SkillType = typeof SKILL_TYPE[keyof typeof SKILL_TYPE];
export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];
export type SkillUsageType = typeof SKILL_USAGE_TYPE[keyof typeof SKILL_USAGE_TYPE];

export type SkillRole = typeof SKILL_ROLE[keyof typeof SKILL_ROLE];
export type SkillTier = typeof MAX_SKILL_TIER[number];

export type SkillGainLevel = typeof MAX_CHARACTER_GAIN_LEVEL[number];

export interface SkillGain {
  actionSelectionRule?: ActionSelectionRule[];
  downtimeSelectionRule?: DowntimeSelectionRule[];
  effectSelectionRule?: EffectSelectionRule[];
}

export interface BaseSkillConfig extends BaseConfig {
  type: SkillType;
  stack: {
    type: SkillStackType;
    id: string;
    priority?: number;
  };

  usage?: {
    type: SkillUsageType;
    maxNumberOfUse: number;
  };

  requiredSkillId?: string;
  
  gain: Partial<Record<SkillGainLevel, SkillGain>>;
}

export interface FactionSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.FACTION;
}

export interface TraitSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.TRAIT;
}

export interface TalentSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.TALENT;
  tier: SkillTier;
  gain: Record<1, SkillGain>;
}

export interface RoleSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.ROLE;
  role: SkillRole;
  tier: SkillTier;
  usedSlots: number;
  gain: Record<1, SkillGain>;
}

export type SkillConfig =
  | BaseSkillConfig
  | FactionSkillConfig
  | TraitSkillConfig
  | RoleSkillConfig;