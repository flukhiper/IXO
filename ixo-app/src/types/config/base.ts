import { CONDITION_OPERATOR, ON_EVENT_TYPE, PHASE_TYPE, RESTORE_PHASE, VALUE_TYPE } from '@/constants/config/base';

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


export type ConditionOperator = typeof CONDITION_OPERATOR[keyof typeof CONDITION_OPERATOR];
export interface ConditionFormula {
  operator: ConditionOperator;
  formula: string;
}

export type PhaseType = typeof PHASE_TYPE[keyof typeof PHASE_TYPE];

export type OnEventType = typeof ON_EVENT_TYPE[keyof typeof ON_EVENT_TYPE];

export interface BaseOnEventConfig {
  priority: number;
}
export interface OnEventActionConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ACTION;
  actionIds: string[];
}
export interface OnEventConditionConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_CONDITION;
  conditionIds: string[];
}
export interface OnEventAdvantageConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ADVANTAGE;
  attributeIds: string[];
}
export interface OnEventDisadvantageConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_DISADVANTAGE;
  attributeIds: string[];
}
export interface OnEventResistenceConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_RESISTENCE;
  damageTypeId: string;
  scaleId: string;
}
export interface OnEventAttributeConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ATTRIBUTE;
  attributeId: string;
  conditionFormulas: ConditionFormula[];
}
export interface OnEventStatConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_STAT;
  statId: string;
  conditionFormulas: ConditionFormula[];
}
export interface OnEventGotDamageConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_GOT_DAMAGE;
  damageTypeId: string;
  conditionFormulas: ConditionFormula[];
}
export interface OnEventGotHitConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_GOT_HIT;
  tagIds: string[];
}
export interface OnEventEquipmentSlotConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_EQUIPMENT_SLOT;
  equipmentSlotId: string;
  tags: string[];
}
export interface OnEventPhaseConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_PHASE;
  phase: PhaseType;
}

export interface InventorySpace {
  rows: number;      // e.g., 6
  columns: number;   // e.g., 12
}