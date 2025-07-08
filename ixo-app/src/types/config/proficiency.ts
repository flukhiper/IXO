import type { BaseConfig, DiceValue, FixedValue } from './base';

export interface ProficiencyGainConfig {
  statModifier: {
    statId: string;
    value: number;
  }[];
  attributeModifier: {
    attributeId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  }[];

  skillGain: {
    includedSkillTags?: string[];   // Must include ALL these tags
    excludedSkillTags?: string[];   // Must NOT include ANY of these tags
    numberOfSkill: number; // number of skills player can choose from the pool
  }[];
  actionGain: {
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