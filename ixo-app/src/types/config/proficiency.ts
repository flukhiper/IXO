import type { BaseConfig, DiceValue, EffectConfig, FixedValue } from './base';
import { SkillType } from './skill';

export interface ProficiencyGainConfig {
  statModifier?: {
    statId: string;
    value: number;
  }[];
  attributeModifier: {
    attributeId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  }[];

  effects: EffectConfig[];

  skillGain?: {
    tier?: number; // must be 1, 2, or 3
    skillType?: SkillType; // must be 'class', 'general', or 'role'
    classId?: string; // must be a valid class ID
    roleId?: string; // must be a valid role ID
    includedSkillTags?: string[];   // Must include ALL these tags
    excludedSkillTags?: string[];   // Must NOT include ANY of these tags
    numberOfSkill: number; // number of skills player can choose from the pool
  }[];
  actionGain?: {
    includedActionTags?: string[];   // Must include ALL these tags
    excludedActionTags?: string[];   // Must NOT include ANY of these tags
    numberOfAction: number; // number of actions player can choose from the pool
  }[];
}

export interface ProficiencyConfig extends BaseConfig {
  tags?: string[]; // Optional grouping, e.g., ["weapon", "ranged", "tool"]
  icon?: string; // Optional icon URL or key for UI

  progression: Record<number, ProficiencyGainConfig>;
}