import { CONDITION_OPERATOR, EFFECT_TYPE, ON_EVENT_TYPE, PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';

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

export interface FullValue {
  type: typeof VALUE_TYPE.FULL;
}

export interface HalfValue {
  type: typeof VALUE_TYPE.HALF;
}


export type ConditionOperator = typeof CONDITION_OPERATOR[keyof typeof CONDITION_OPERATOR];
export interface ConditionFormula {
  operator: ConditionOperator;
  formula: string;
}

export type EffectOn = 
| OnEventActionPerformedConfig
| OnEventConditionAppliedConfig
| OnEventAdvantageGainedConfig
| OnEventDisadvantageGainedConfig
| OnEventResistenceGainedConfig
| OnEventAttributeChangedConfig
| OnEventStatChangedConfig
| OnEventPhaseChangedConfig
| OnEventGotDamageConfig
| OnEventGotHitConfig
| OnEventGotRestoreConfig
| OnEventItemEquippedConfig;

export type PhaseType = typeof PHASE_TYPE[keyof typeof PHASE_TYPE];
export type OnEventType = typeof ON_EVENT_TYPE[keyof typeof ON_EVENT_TYPE];
export interface BaseOnEventConfig {
  priority: number;
}
export interface OnEventActionPerformedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ACTION_PERFORMED;
  actionIds: string[];
}
export interface OnEventConditionAppliedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_CONDITION_APPLIED;
  conditionIds: string[];
}
export interface OnEventAdvantageGainedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ADVANTAGE_GAINED;
  attributeIds: string[];
}
export interface OnEventDisadvantageGainedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_DISADVANTAGE_GAINED;
  attributeIds: string[];
}
export interface OnEventResistenceGainedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_RESISTENCE_GAINED;
  damageTypeIds: string[];
  scaleId: string;
}
export interface OnEventAttributeChangedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ATTRIBUTE_CHANGED;
  attributeId: string;
  conditionFormulas: ConditionFormula[];
}
export interface OnEventStatChangedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_STAT_CHANGED;
  statId: string;
  conditionFormulas: ConditionFormula[];
}
export interface OnEventPhaseChangedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_PHASE_CHANGED;
  phases: PhaseType[];
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
export interface OnEventGotRestoreConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_GOT_RESTORE;
  attributeId: string;
  conditionFormulas: ConditionFormula[];
}
export interface OnEventItemEquippedConfig extends BaseOnEventConfig {
  type: typeof ON_EVENT_TYPE.ON_ITEM_EQUIPED;
  equipmentSlotId: string;
  tags: string[];
}

export type EffectType = typeof EFFECT_TYPE[keyof typeof EFFECT_TYPE];
export type EffectConfig = 
| EffectActivateBlockConditionConfig
| EffectActivateConditionConfig
| EffectActivateAdvantageConfig
| EffectActivateReduceDamageConfig
| EffectActivateDoDamageConfig
| EffectActivateDoRestoreConfig
| EffectActivateShowFlavorTextConfig
| EffectModifyStatConfig
| EffectModifyAttributeConfig
| EffectRestrictActionConfig
| EffectRestrictEquipmentConfig
| EffectBlockConditionConfig
| EffectGainConditionConfig
| EffectGainActionConfig
| EffectGainAdvantageConfig
| EffectGainResistenceConfig
| EffectAddDowntimeConfig
| EffectAddProficiencyPointsConfig
| EffectAddProficiencyLevelConfig
| EffectAddEquipmentSlotConfig
| EffectShowFlavorTextConfig
| EffectSelectEffectConfig;

export interface EffectActivateBaseConfig {
  type: EffectType;
  usageLimit: {
    maxUse: number;
    cooldown: number;
  };
  ons: EffectOn[];
}

export interface EffectActivateBlockConditionConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_BLOCK_CONDITION;
  conditionIds: string[];
}
export interface EffectActivateConditionConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_CONDITION;
  conditionIds: string[];
}
export interface EffectActivateAdvantageConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_ADVANTAGE;
  attributeIds: string[];
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}
export interface EffectActivateReduceDamageConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_REDUCE_DAMAGE;
  damageTypeIds: string[];
  baseValue: FixedValue | DiceValue;
  on: OnEventGotDamageConfig;
  formula?: string;
}
export interface EffectActivateDoDamageConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_DO_DAMAGE;
  damageTypeIds: string[];
  baseValue: FixedValue | DiceValue;
  on: OnEventActionPerformedConfig;
  formula?: string;
}
export interface EffectActivateDoRestoreConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_DO_RESTORE;
  attributeIds: string[];
  baseValue: FixedValue | DiceValue | FullValue | HalfValue;
  formula?: string;
}
export interface EffectActivateDoDamageOverTimeConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_DO_DAMAGE_OVER_TIME;
  damageTypeIds: string[];
  baseValue: FixedValue | DiceValue;
  on: OnEventPhaseChangedConfig;
  formula?: string;
}
export interface EffectActivateDoRestoreOverTimeConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_DO_RESTORE_OVER_TIME;
  attributeIds: string[];
  baseValue: FixedValue | DiceValue | FullValue | HalfValue;
  on: OnEventPhaseChangedConfig;
  formula?: string;
}
export interface EffectActivateShowFlavorTextConfig extends EffectActivateBaseConfig {
  type: typeof EFFECT_TYPE.ACTIVATE_SHOW_FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
}
export interface EffectModifyStatConfig {
  type: typeof EFFECT_TYPE.MODIFY_STAT;
  statIds: string[];
  baseValue: FixedValue | DiceValue; // e.g., "-2"
  formula?: string; // e.g., "stat(strength) * 0.5"
}
export interface EffectModifyAttributeConfig {
  type: typeof EFFECT_TYPE.MODIFY_ATTRIBUTE;
  attributeIds: string[];
  baseValue: FixedValue | DiceValue; // e.g., "-2"
  formula?: string; // e.g., "stat(strength) * 0.5"
}
export interface EffectRestrictActionConfig {
  type: typeof EFFECT_TYPE.RESTRICT_ACTION;
  tags: string[]; // e.g., "melee", "magic"
}
export interface EffectRestrictEquipmentConfig {
  type: typeof EFFECT_TYPE.RESTRICT_EQUIPMENT;
  equipmentSlotIds: string[]; // e.g., "main-hand", "off-hand"
  tags: string[]; // e.g., "melee", "magic"
}
export interface EffectBlockConditionConfig {
  type: typeof EFFECT_TYPE.BLOCK_CONDITION;
  tags: string[]; // e.g., ["frightened", "fatigue"]
}
export interface EffectGainConditionConfig {
  type: typeof EFFECT_TYPE.GAIN_CONDITION;
  conditionIds: string[];
}
export interface EffectGainActionConfig {
  type: typeof EFFECT_TYPE.GAIN_ACTION;
  actionIds: string[];
}
export interface EffectGainAdvantageConfig {
  type: typeof EFFECT_TYPE.GAIN_ADVANTAGE;
  attributeIds: string[];
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}
export interface EffectGainResistenceConfig {
  type: typeof EFFECT_TYPE.GAIN_RESISTENCE;
  damageTypeIds: string[];
  scaleId: string;
}
export interface EffectAddDowntimeConfig {
  type: typeof EFFECT_TYPE.ADD_DOWNTIME;
  downtimeIds: string[];
}
export interface EffectAddProficiencyPointsConfig {
  type: typeof EFFECT_TYPE.ADD_PROFICIENCY_POINTS;
  points: number; // typically 1
}
export interface EffectAddProficiencyLevelConfig {
  type: typeof EFFECT_TYPE.ADD_PROFICIENCY_LEVEL;
  proficiencyIds: string[];
  points: number; // typically 1
}
export interface EffectAddEquipmentSlotConfig {
  type: typeof EFFECT_TYPE.ADD_EQUIPMENT_SLOT;
  equipmentSlotIds: string[];
  bonus: number; // e.g., 1
}
export interface EffectShowFlavorTextConfig {
  type: typeof EFFECT_TYPE.SHOW_FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
}
export interface EffectSelectEffectConfig {
  type: typeof EFFECT_TYPE.SELECT_EFFECT;
  effects: EffectConfig[];
}

export interface InventorySpace {
  rows: number;      // e.g., 6
  columns: number;   // e.g., 12
}