import { CONDITION_OPERATOR, PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';
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

/////////////////////
// TBD
/////////////////////



export interface RefValue extends BaseValue {
  type: typeof VALUE_TYPE.REF;
  ref: string; // e.g. 'attribute', 'equip-slot', etc.
  id: string; // e.g. 'attack-roll', 'main-weapon', etc.
}

export interface SelectValue extends BaseValue {
  type: typeof VALUE_TYPE.SELECT;
}

export interface FullValue extends BaseValue {
  type: typeof VALUE_TYPE.FULL;
}

export interface HalfValue extends BaseValue {
  type: typeof VALUE_TYPE.HALF;
}

export type ConditionOperator = typeof CONDITION_OPERATOR[keyof typeof CONDITION_OPERATOR];
export interface ConditionFormula {
  operator: ConditionOperator;
  formula: string;
}

export type PhaseType = typeof PHASE_TYPE[keyof typeof PHASE_TYPE];
