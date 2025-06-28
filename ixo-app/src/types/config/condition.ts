import { CONDITION_EFFECT_TYPE, CONDITION_TICK_TYPE } from '@/constants/config/condition';
import type { BaseConfig, FixedValue, DiceValue, RefValue } from './base';
import type { StackConfig } from './common';

export type ConditionEffectType = typeof CONDITION_EFFECT_TYPE[keyof typeof CONDITION_EFFECT_TYPE];
export type ConditionEffectConfig =
| ConditionEffectStatModifyConfig
| ConditionEffectAttributeModifyConfig
| ConditionEffectDamageOverTimeConfig
| ConditionEffectRestrictActionConfig
| ConditionEffectRestrictEquipmentConfig
| ConditionEffectActionConfig
| ConditionEffectForceActionConfig
| ConditionEffectResistenceConfig
| ConditionEffectAdvantageAttributeConfig;
// Passive stat adjustment (possible to be possitive and negetive)
export interface ConditionEffectStatModifyConfig {
  type: typeof CONDITION_EFFECT_TYPE.STAT_MODIFY;
  statId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
// Passive attribute adjustment (possible to be possitive and negetive)
export interface ConditionEffectAttributeModifyConfig {
  type: typeof CONDITION_EFFECT_TYPE.ATTRIBUTE_MODIFY;
  attributeId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
// Ongoing damage
export interface ConditionEffectDamageOverTimeConfig {
  type: typeof CONDITION_EFFECT_TYPE.DAMAGE_OVER_TIME;
  damageTypeId: string;
  value: FixedValue | DiceValue | RefValue;
  tick: typeof CONDITION_TICK_TYPE.START_TURN | typeof CONDITION_TICK_TYPE.END_TURN | typeof CONDITION_TICK_TYPE.START_ROUND | typeof CONDITION_TICK_TYPE.END_ROUND;
}
// Prevent usage of specific actions or action tags
export interface ConditionEffectRestrictActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESTRICT_ACTION;
  tags?: string[]; // e.g., "melee", "magic"
}
// Prevent equipment slot usage
export interface ConditionEffectRestrictEquipmentConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESTRICT_EQUIPMENT;
  tags?: string[]; // e.g., "main-hand", "off-hand"
}
// Action available to use when in condition
export interface ConditionEffectActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.ACTION;
  actionIds?: string[];
}
// Force to use specific action if available
export interface ConditionEffectForceActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.FORCE_ACTION;
  actionIds?: string[];
}
// Chanage character resistance
export interface ConditionEffectResistenceConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESISTENCE;
  damageTypeId: string;    // Reference to DamageTypeConfig id (e.g., 'fire', 'piercing')
  damageScaleId: string;   // Reference to DamageScaleConfig id (e.g., 'resistant', 'vulnerable')
}
export interface ConditionEffectAdvantageAttributeConfig {
  type: typeof CONDITION_EFFECT_TYPE.ADVANTAGE_ATTRIBUTE;
  attributeIds: string[]; // Only valid for attributes of type 'ability' or 'saving'
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}

export type ConditionRemoveTickType = typeof CONDITION_TICK_TYPE[keyof typeof CONDITION_TICK_TYPE];
export type ConditionRemoveTickConfig = 
| ConditionRemoveTickDurationConfig
| ConditionRemoveTickImmediateConfig
| ConditionRemoveTickDamageConfig
| ConditionRemoveTickConditionConfig;
export interface ConditionRemoveTickDurationConfig {
  type: typeof CONDITION_TICK_TYPE.START_TURN | typeof CONDITION_TICK_TYPE.END_TURN | typeof CONDITION_TICK_TYPE.START_ROUND | typeof CONDITION_TICK_TYPE.END_ROUND;
  duration: number;
  versusSaving?: string; // attributeId of saving throw
  scalingFormula?: string;
}
export interface ConditionRemoveTickImmediateConfig {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}
export interface ConditionRemoveTickDamageConfig {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  damageTypeId: string; // e.g. 'fire', 'piercing'
  versusSaving?: string; // attributeId of saving throw
  scalingFormula?: string;
}
export interface ConditionRemoveTickConditionConfig {
  type: typeof CONDITION_TICK_TYPE.CONDITION;
  conditions: string[]; // e.g.  ['attr(action-point) > 1', attr(hit-point).current > attr(hit-point).max / 2 ]
}

export interface ConditionConfig extends BaseConfig {
  icon?: string;
  tags?: string[]; // e.g., ["debuff", "control", "status"]
  
  stack: StackConfig;
  removeTicks?: ConditionRemoveTickConfig[]; 

  // Effects to apply during condition
  effects: ConditionEffectConfig[];
}
