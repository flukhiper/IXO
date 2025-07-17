import { ARCHETYPE_ROLE_TYPE, CLASS_TYPE } from '@/constants/config/class';
import type { BaseConfig, DiceValue, EffectConfig, FixedValue } from './base';
import { SkillType } from './skill';

export interface StatModifierChoice {
  statId?: string;
  includeTags?: string[];
  excludeTags?: string[];
}
export interface AttributeModifierChoice {
  attributeId?: string;
  includeTags?: string[];
  excludeTags?: string[];
}
export interface SkillGainChoice {
  skillId?: string;
  tier?: number; // must be 1, 2, or 3
  skillType?: SkillType; // must be 'class', 'general', or 'role'
  classId?: string; // must be a valid class ID
  roleId?: string; // must be a valid role ID
  includedTags?: string[];   // Must include ALL these tags
  excludedTags?: string[];   // Must NOT include ANY of these tags
}
export interface ActionGainChoice {
  actionId?: string;
  includedTags?: string[];   // Must include ALL these tags
  excludedTags?: string[];   // Must NOT include ANY of these tags
}

export interface ClassGainConfig {
  statModifier?: {
    choices: StatModifierChoice[];
    choice: number;
    value: number; // How much bonus is gained from this progression
  };
  attributeModifier?: {
    choices: AttributeModifierChoice[];
    choice: number;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  };
  skillGain?: {
    choices: SkillGainChoice[];
    choice: number;
  };
  actionGain?: {
    choices: ActionGainChoice[];
    choice: number;
  };
  effects?: EffectConfig[];
  proficiencyPoint?: number;
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