import { RESTORE_PHASE, VALUE_TYPE } from '@/constants/config/value';

export interface LocalizeText {
  [local: string]: string;
}

export interface BaseConfig {
  id: string;
  name: LocalizeText;
  description?: LocalizeText; // Optional short flavor (can move fully to Game Codex later)
  createdAt: string;
  updatedAt?: string;
}

export type ValueType = typeof VALUE_TYPE[keyof typeof VALUE_TYPE];

export interface FixedValue {
  type: typeof VALUE_TYPE.FIXED;
  value: number; // e.g. 8
}

export interface DiceValue {
  type: typeof VALUE_TYPE.DICE;
  formula: string; // e.g. "1d8"
}

export interface FractionValue {
  type: typeof VALUE_TYPE.FRACTION;
  numerator: number;   // e.g. 1
  denominator: number; // e.g. 2
}

export interface RefValue {
  type: typeof VALUE_TYPE.REF;
  ref: string; // e.g. 'attack-roll', 'main-weapon', etc.
}

export type ParsedValue = FixedValue | DiceValue | FractionValue;

export type RestorePhase = typeof RESTORE_PHASE[keyof typeof RESTORE_PHASE];

export type RestoreValue =
  | FixedValue
  | DiceValue
  | FractionValue;