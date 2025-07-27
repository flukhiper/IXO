import { SKILL_STACK_TYPE } from '@/constants/config/skill';
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

export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];
export type SkillTier = NumberRange<1, 3>;
export interface BaseSkillConfig extends BaseConfig {
  usedSlots: number;
  stackId: string;
  stackType: SkillStackType;
  stackPriority?: number;
  actionSelectionRule?: ActionSelectionRule;
  downtimeSelectionRule?: DowntimeSelectionRule;
  effects?: Effect[];
}

export interface GeneralSkillConfig extends BaseSkillConfig {
  tier: SkillTier;
  isGeneral: true;
}

export interface ClassSkillConfig extends BaseSkillConfig {
  classIds: string[];
  tier: SkillTier;
  isGeneral: false;
}

export interface RoleSkillConfig extends BaseSkillConfig {
  role: ClassRole;
  tier: SkillTier;
  isGeneral: false;
} 

export type SkillConfig =
  | BaseSkillConfig
  | GeneralSkillConfig
  | ClassSkillConfig
  | RoleSkillConfig;