import { CONDITION_OPERATOR, PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';
import type { Keyword } from './keyword/base';

export interface LocalizeText {
  [local: string]: string;
}

export interface BaseModel {
  id: string;
  name: LocalizeText;
  description?: LocalizeText; // Optional short flavor (can move fully to Game Codex later)
  ownerId: string; // User ID of the creator
  createdAt?: string;
  updatedAt?: string;
}
export interface BaseConfig extends BaseModel {
  gameSystemId: string; // Reference to GameSystem
}

export type ValueType = typeof VALUE_TYPE[keyof typeof VALUE_TYPE];

export interface BaseValue {
  type: ValueType;
}

export interface FixedValue extends BaseValue {
  type: typeof VALUE_TYPE.FIXED;
  value: number; // e.g. 8
}

export interface DiceValue extends BaseValue {
  type: typeof VALUE_TYPE.DICE;
  formula: string; // e.g. "1d8"
}

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

export interface EffectConfig {
  name?: LocalizeText;
  description?: LocalizeText;
  keywords: Keyword[];
}