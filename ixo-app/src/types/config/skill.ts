import { MAX_SKILL_TIER, SKILL_STACK_TYPE, SKILL_TYPE } from '@/constants/config/skill';
import type { BaseConfig } from './base';
import type { ClassRole } from './class';
import type { NumberRange } from './common';
import type { Effect } from './effect';
import type { ActionSelectionRule } from './action';
import type { DowntimeSelectionRule } from './downtime';

export interface SkillSelectionRule {
  skillIds?: string[];
  filterOptions?: {
    classIds?: string[];
    roles?: ClassRole[];
    tiers?: SkillTier[];
    isGeneral?: boolean;
    includeTags?: string[];
    excludeTags?: string[];
  };
  numberOfSelections: number;
}

const _maxSkillTier = MAX_SKILL_TIER + 1;
export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];
export type SkillTier = NumberRange<1, typeof _maxSkillTier>;
export type SkillType = typeof SKILL_TYPE[keyof typeof SKILL_TYPE];
export interface BaseSkillConfig extends BaseConfig {
  type: SkillType;

  usedSlots: number;
  stackId: string;
  stackType: SkillStackType;
  stackPriority?: number;
  
  isGeneral: boolean;
  
  actionSelectionRule?: ActionSelectionRule;
  downtimeSelectionRule?: DowntimeSelectionRule;
  effects?: Effect[];
}

export interface GeneralSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.GENERAL;
  tier: SkillTier;
}

export interface ClassSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.CLASS;
  classIds: string[];
  tier: SkillTier;
}

export interface RoleSkillConfig extends BaseSkillConfig {
  type: typeof SKILL_TYPE.ROLE;
  role: ClassRole;
  tier: SkillTier;
} 

export type SkillConfig =
  | BaseSkillConfig
  | GeneralSkillConfig
  | ClassSkillConfig
  | RoleSkillConfig;