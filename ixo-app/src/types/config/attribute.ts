import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { BaseConfig, DiceValue, FixedValue, FullValue, HalfValue, PhaseType } from './base';

export type AttributeType = typeof ATTRIBUTE_TYPE[keyof typeof ATTRIBUTE_TYPE];

// Base interface for all non-stat attributes
export interface BaseAttributeConfig extends BaseConfig {
  type: AttributeType; // 'resource', 'combat', 'saving-throw', etc.
  abbreviation?: string;
  tags?: string[];
  icon?: string;
  isSystem: boolean; // true mean this attribute is system attribute, false mean this attribute is user attribute
  isHidden: boolean; // true mean this attribute is hidden from the player
  baseValue: FixedValue | DiceValue;
  formula?: string; // Universal formula for derived values
}

// Resource attribute (HP, MP, Action Points, etc.)
export interface ResourceAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.RESOURCE;
  restores: {
    phase: PhaseType;
    baseValue: FixedValue | DiceValue | FullValue | HalfValue;
    formula?: string;
  }[];
}

// Combat attribute (Armor Class, Initiative, Attack Roll, etc.)
export interface CombatAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.COMBAT;
}

// Skill check attribute (Athletics, Sprint, Perception, etc.)
export interface SkillCheckAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SKILL_CHECK;
}

// Saving throw attribute (Fortitude, Reflex, Will, etc.)
export interface SavingThrowAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SAVING_THROW;
}

// Union type for all attribute configs
export type AnyAttributeConfig =
  | ResourceAttributeConfig
  | CombatAttributeConfig
  | SkillCheckAttributeConfig
  | SavingThrowAttributeConfig;