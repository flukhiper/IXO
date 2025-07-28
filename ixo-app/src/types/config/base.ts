import { VALUE_TYPE } from '@/constants/config/base';
import type { LocalizeText } from './common';

/////////////////////
// Config Model
/////////////////////
export interface BaseModel {
  id: string;
  name: LocalizeText;
  description?: LocalizeText;
  icon?: string;
  thumbnail?: string;
  tags?: string[];
  ownerId: string; // User ID of the creator
  createdAt?: string;
  updatedAt?: string;
}
export interface BaseConfig extends BaseModel {
  gameSystemId: string; // Reference to GameSystem
}

/////////////////////
// Value Types
/////////////////////

export type ValueType = typeof VALUE_TYPE[keyof typeof VALUE_TYPE];

export interface BaseValue {
  type: ValueType;
}

export interface ConstantValue extends BaseValue {
  type: typeof VALUE_TYPE.CONSTANT;
  value: number;
}
export interface DiceValue extends BaseValue {
  type: typeof VALUE_TYPE.DICE;
  formula: string;
}