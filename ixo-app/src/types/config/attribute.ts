import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export type AttributeType = typeof ATTRIBUTE_TYPE[keyof typeof ATTRIBUTE_TYPE];
export interface BaseAttributeConfig extends BaseConfig {
  type: AttributeType;
  
  abbreviation: string;
  modifier: string | typeof NONE_VALUE.STRING;
}

export interface ResourceAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.RESOURCE;
  value: number;
}

export interface ConstantAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.CONSTANT;
  value: number;
}
export interface DiceAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.DICE;
  value: string;
}

export interface SkillCheckAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SKILL_CHECK;
  value: string;
}

export interface SavingThrowAttributeConfig extends BaseAttributeConfig {
  type: typeof ATTRIBUTE_TYPE.SAVING_THROW;
  value: string;
}

export type AttributeConfig =
  | ResourceAttributeConfig
  | ConstantAttributeConfig
  | DiceAttributeConfig
  | SkillCheckAttributeConfig
  | SavingThrowAttributeConfig;