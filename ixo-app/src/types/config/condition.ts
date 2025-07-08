import { CONDITION_EFFECT_TYPE, CONDITION_STACK_TYPE, CONDITION_TICK_TYPE } from '@/constants/config/condition';
import { PHASE_TYPE } from '@/constants/config/base';
import type { BaseConfig, ConditionFormula, DiceValue, FixedValue, FullValue, HalfValue, LocalizeText } from './base';

export type ConditionEffectConfig =
| ConditionEffectReduceDamageConfig
| ConditionEffectDoDamageOverTimeConfig
| ConditionEffectDoRestoreOverTimeConfig
| ConditionEffectShowFlavorTextConfig
| ConditionEffectModifyStatConfig
| ConditionEffectModifyAttributeConfig
| ConditionEffectRestrictActionConfig
| ConditionEffectRestrictEquipmentConfig
| ConditionEffectBlockConditionConfig
| ConditionEffectGainActionConfig
| ConditionEffectGainAdvantageConfig
| ConditionEffectGainResistenceConfig
| ConditionEffectShowFlavorTextConfig;

export interface ConditionEffectReduceDamageConfig {
  type: typeof CONDITION_EFFECT_TYPE.REDUCE_DAMAGE;
  damageTypeIds: string[];
  baseValue: FixedValue | DiceValue;
  numberOfUsages?: number; // if provided, the effect will be applied for the number of times specified.
}
export interface ConditionEffectDoDamageOverTimeConfig {
  type: typeof CONDITION_EFFECT_TYPE.DO_DAMAGE_OVER_TIME;
  phase: typeof PHASE_TYPE;
  when: 'start' | 'end';
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
}
export interface ConditionEffectDoRestoreOverTimeConfig {
  type: typeof CONDITION_EFFECT_TYPE.DO_RESTORE_OVER_TIME;
  phase: typeof PHASE_TYPE;
  when: 'start' | 'end';
  attributeId: string;
  baseValue: FixedValue | DiceValue | FullValue | HalfValue;
}
export interface ConditionEffectModifyStatConfig {
  type: typeof CONDITION_EFFECT_TYPE.MODIFY_STAT;
  statId: string;
  baseValue: FixedValue | DiceValue; // e.g., "-2"
}
export interface ConditionEffectModifyAttributeConfig {
  type: typeof CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE;
  attributeId: string;
  baseValue: FixedValue | DiceValue; // e.g., "-2"
}
export interface ConditionEffectRestrictActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESTRICT_ACTION;
  actionTags: string[];
}
export interface ConditionEffectRestrictEquipmentConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESTRICT_EQUIPMENT;
  equipmentSlotId: string;
  itemTags: string[];
}
export interface ConditionEffectBlockConditionConfig {
  type: typeof CONDITION_EFFECT_TYPE.BLOCK_CONDITION;
  conditionTags: string[]; // e.g., ["frightened", "fatigue"]
}
export interface ConditionEffectGainActionConfig {
  type: typeof CONDITION_EFFECT_TYPE.GAIN_ACTION;
  actionId: string;
}
export interface ConditionEffectGainAdvantageConfig {
  type: typeof CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE;
  attributeId: string;
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}
export interface ConditionEffectGainResistenceConfig {
  type: typeof CONDITION_EFFECT_TYPE.GAIN_RESISTENCE;
  damageTypeId: string;
  scaleId: string;
}
export interface ConditionEffectShowFlavorTextConfig {
  type: typeof CONDITION_EFFECT_TYPE.SHOW_FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
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
  phase: typeof PHASE_TYPE;
  when: 'start' | 'end';
  duration: number;
  saving?: {
    savingThrowId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  };
}
export interface ConditionRemoveTickImmediateConfig {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
  saving?: { // if saving is provided, the condition will be removed if pass the saving throw. if not provided, the condition will be removed immediately.
    savingThrowId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  };
}
export interface ConditionRemoveTickHitConfig {
  type: typeof CONDITION_TICK_TYPE.HIT;
  saving?: { // if saving is provided, the condition will be removed if pass the saving throw. if not provided, the condition will be removed immediately.
    savingThrowId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  };
}
export interface ConditionRemoveTickDamageConfig {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  damageTypeIds: string[];
  conditionFormulas?: ConditionFormula;
  saving?: { // if saving is provided, the condition will be removed if pass the saving throw. if not provided, the condition will be removed immediately.
    savingThrowId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  };
}
export interface ConditionRemoveTickConditionConfig {
  type: typeof CONDITION_TICK_TYPE.ATTRIBUTE;
  attributeId: string;
  conditionFormulas?: ConditionFormula;
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
