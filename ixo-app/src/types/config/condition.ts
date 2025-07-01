import {  CONDITION_EFFECT_TYPE, CONDITION_STACK_TYPE, CONDITION_TICK_TYPE } from '@/constants/config/condition';
import type { BaseConfig, OnEventPhaseConfig, OnEventGotDamageConfig, OnEventAttributeConfig, OnEventActionConfig, OnEventStatConfig, OnEventEquipmentSlotConfig, OnEventGotHitConfig, DiceValue, FixedValue, LocalizeText } from './base';

export type ConditionEffectType = typeof CONDITION_EFFECT_TYPE[keyof typeof CONDITION_EFFECT_TYPE];
export type ConditionEffectConfig =
| ConditionEffectModifyStatConfig
| ConditionEffectModifyAttributeConfig
| ConditionEffectRestrictActionConfig
| ConditionEffectRestrictEquipmentConfig
| ConditionEffectBlockConditionConfig
| ConditionEffectGainActionConfig
| ConditionEffectGainAdvantageConfig
| ConditionEffectGainResistenceConfig
| ConditionEffectReduceDamageConfig
| ConditionEffectDoDamageOverTimeConfig
| ConditionEffectDoRestoreOverTimeConfig
| ConditionEffectForceActionConfig
| ConditionEffectShowFlavorTextConfig;
export interface ConditionEffectModifyStatConfig {
  type: typeof CONDITION_EFFECT_TYPE.MODIFY_STAT;
  statId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
export interface ConditionEffectModifyAttributeConfig {
  type: typeof CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE;
  attributeId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
export interface ConditionEffectRestrictActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESTRICT_ACTION;
  tags: string[]; // e.g., "melee", "magic"
}
export interface ConditionEffectRestrictEquipmentConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESTRICT_EQUIPMENT;
  equipmentSlotId: string; // e.g., "main-hand", "off-hand"
  tags: string[]; // e.g., "melee", "magic"
}
export interface ConditionEffectBlockConditionConfig {
  type: typeof CONDITION_EFFECT_TYPE.BLOCK_CONDITION;
  tags: string[]; // e.g., ["frightened", "fatigue"]
}
export interface ConditionEffectGainActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.GAIN_ACTION;
  actionIds: string[];
}
export interface ConditionEffectGainAdvantageConfig {
  type: typeof CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE;
  attributeIds: string[];
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}
export interface ConditionEffectGainResistenceConfig {
  type: typeof CONDITION_EFFECT_TYPE.GAIN_RESISTENCE;
  damageTypeId: string;
  scaleId: string;
}
export interface ConditionEffectReduceDamageConfig {
  type: typeof CONDITION_EFFECT_TYPE.REDUCE_DAMAGE;
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface ConditionEffectForceActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.FORCE_ACTION;
  actionId: string;
}
export interface ConditionEffectShowFlavorTextConfig {
  type: typeof CONDITION_EFFECT_TYPE.SHOW_FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
}
export type ConditionEffectDamageOverTimeOn = 
| OnEventActionConfig
| OnEventAttributeConfig
| OnEventStatConfig
| OnEventGotDamageConfig
| OnEventGotHitConfig
| OnEventEquipmentSlotConfig
| OnEventPhaseConfig;
export interface ConditionEffectDoDamageOverTimeConfig {
  type: typeof CONDITION_EFFECT_TYPE.DO_DAMAGE_OVER_TIME;
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  on: ConditionEffectDamageOverTimeOn;
  formula?: string;
}
export type ConditionEffectRestoreOverTimeOn = 
| OnEventActionConfig
| OnEventAttributeConfig
| OnEventStatConfig
| OnEventGotDamageConfig
| OnEventGotHitConfig
| OnEventEquipmentSlotConfig
| OnEventPhaseConfig;
export interface ConditionEffectDoRestoreOverTimeConfig {
  type: typeof CONDITION_EFFECT_TYPE.DO_RESTORE_OVER_TIME;
  attributeId: string;
  baseValue: FixedValue | DiceValue;
  on: ConditionEffectRestoreOverTimeOn;
  formula?: string;
}

export type ConditionRemoveTickType = typeof CONDITION_TICK_TYPE[keyof typeof CONDITION_TICK_TYPE];
export type ConditionRemoveTickConfig = 
| ConditionRemoveTickPhaseConfig
| ConditionRemoveTickImmediateConfig
| ConditionRemoveTickHitConfig
| ConditionRemoveTickDamageConfig
| ConditionRemoveTickConditionConfig;
export interface ConditionRemoveTickPhaseConfig {
  type: typeof CONDITION_TICK_TYPE.PHASE;
  on: OnEventPhaseConfig;
  duration: number;
  formula?: string;
  saving?: {
    attributeId: string;
    formula: string;
  };
}
export interface ConditionRemoveTickImmediateConfig {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}
export interface ConditionRemoveTickHitConfig {
  type: typeof CONDITION_TICK_TYPE.HIT;
  on: OnEventGotHitConfig;
  saving?: {
    attributeId: string;
    formula: string;
  };
}
export interface ConditionRemoveTickDamageConfig {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  on: OnEventGotDamageConfig;
  saving?: {
    attributeId: string;
    formula: string;
  };
}
export interface ConditionRemoveTickConditionConfig {
  type: typeof CONDITION_TICK_TYPE.ATTRIBUTE;
  ons: OnEventAttributeConfig[];
}

export type ConditionStackType = typeof CONDITION_STACK_TYPE[keyof typeof CONDITION_STACK_TYPE];
export interface ConditionConfig extends BaseConfig {
  icon?: string;
  tags?: string[]; // e.g., ["debuff", "control", "status"]
  
  stack: {
    id: string;
    type: ConditionStackType;
    priority?: number; // only used with 'overwrite'
  };
  removeTicks?: ConditionRemoveTickConfig[]; 

  // Effects to apply during condition
  effects: ConditionEffectConfig[];
}
