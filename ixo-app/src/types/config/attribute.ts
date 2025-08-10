import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { BaseConfig, DiceValue, ConstantValue } from './base';

export type AttributeType = typeof ATTRIBUTE_TYPE[keyof typeof ATTRIBUTE_TYPE];

export interface BaseAttributeConfig extends BaseConfig {
  type: AttributeType;
  
  value: ConstantValue | DiceValue;
  modiferFomular?: string;
  abbreviation: string;

  isSystem: boolean;
}

export interface ResourceAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.RESOURCE;
  value: ConstantValue;
}

export interface ConstantAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.CONSTANT;
  value: ConstantValue;
}

export interface DiceAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.DICE;
  value: DiceValue;
}

export interface SkillCheckAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SKILL_CHECK;
  value: DiceValue;
}

export interface SavingThrowAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SAVING_CHECK;
  value: DiceValue;
}

export type AnyAttributeConfig =
  | ResourceAttributeConfig
  | ConstantAttributeConfig
  | DiceAttributeConfig
  | SkillCheckAttributeConfig
  | SavingThrowAttributeConfig;