import { ARCHETYPE_ROLE_TYPE, CLASS_TYPE } from '@/constants/config/class';
import type { BaseConfig, DiceValue, EffectConfig, FixedValue } from './base';
import { SkillType } from './skill';

export interface ClassGainConfig {
  statModifier?: {
    statId: string;
    value: number;
  }[];
  attributeModifier?: {
    attributeId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  }[];

  effects: EffectConfig[];

  proficiencyPoint?: number; // number of points player can assign to proficiencies at creation

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

export type ArchetypeRoleType = typeof ARCHETYPE_ROLE_TYPE[keyof typeof ARCHETYPE_ROLE_TYPE];
export type ClassType = (typeof CLASS_TYPE)[keyof typeof CLASS_TYPE];

/**
 * ClassConfig represents a character's class/profession/occupation.
 * It grants features, abilities, and advancement options.
 */
export interface ClassConfig extends BaseConfig {

  /** Tags for grouping, e.g., ["martial", "arcane", "divine", "hybrid"] */
  tags?: string[];

  /** Optional icon for UI */
  icon?: string;

  /** Base stat reference */
  class: ClassType; 

  /** Archetype role */
  role: ArchetypeRoleType; 

  progression: Record<number, ClassGainConfig>;
}