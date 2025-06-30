import { RESTORE_PHASE, VALUE_TYPE, STACK_TYPE } from '@/constants/config/base';

export interface LocalizeText {
  [local: string]: string;
}

export interface BaseConfig {
  id: string;
  name: LocalizeText;
  description?: LocalizeText; // Optional short flavor (can move fully to Game Codex later)
  createdAt?: string;
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

export interface RefValue {
  type: typeof VALUE_TYPE.REF;
  ref: string; // e.g. 'attribute', 'equip-slot', etc.
  id: string; // e.g. 'attack-roll', 'main-weapon', etc.
}

export type RestorePhase = typeof RESTORE_PHASE[keyof typeof RESTORE_PHASE];

export type RestoreValue =
  | FixedValue
  | DiceValue;

export interface StatThresholdRequirement {
  statId: string;
  min?: number;
  max?: number;
}

export type StackType = typeof STACK_TYPE[keyof typeof STACK_TYPE];
export interface StackConfig {
  id: string;
  type: StackType;
  priority?: number; // only used with 'overwrite'
}

export interface InventorySpace {
  rows: number;      // e.g., 6
  columns: number;   // e.g., 12
}