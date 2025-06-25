import {
  CONDITION_STACK_TYPE,
  CONDITION_TICK_TYPE,
  CONDITION_EFFECT_TYPE,
  CONDITION_TYPE_SOURCE
} from '@/constants/condition';

import type { AllAttributeValue, AllSavingValue, ConditionValue, DiceValue, FixValue, ModifierValue, ReferenceValue } from './value';
import type { BaseMapConfig } from './base';

export type ConditionStackType = typeof CONDITION_STACK_TYPE[keyof typeof CONDITION_STACK_TYPE];

export interface ConditionStackConfig {
  id: string;
  type: ConditionStackType;
  priority?: number; // only used with 'overwrite'
}

// --- Tick Trigger Types ---
export type ConditionTickType = typeof CONDITION_TICK_TYPE[keyof typeof CONDITION_TICK_TYPE];
export type ConditionTickSource = typeof CONDITION_TYPE_SOURCE[keyof typeof CONDITION_TYPE_SOURCE];

export interface ConditionTickTagTriggerConfig {
  type: typeof CONDITION_TICK_TYPE.TAG;
  source: ConditionTickSource;
  tags: string[];
}

export interface ConditionTickDamageTriggerConfig {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  damageTypes: ReferenceValue[]; // DamageTypeConfig.id[]
  saving?: ReferenceValue;
  difficultyClass?: FixValue;
}

export type ConditionTickDurationTriggerType = typeof CONDITION_TICK_TYPE.START_ROUND | typeof CONDITION_TICK_TYPE.END_ROUND | typeof CONDITION_TICK_TYPE.START_TURN | typeof CONDITION_TICK_TYPE.END_TURN;
export interface ConditionTickDurationTriggerConfig {
  type: ConditionTickDurationTriggerType;
  duration: FixValue;
  saving?: ReferenceValue;
  difficultyClass?: FixValue;
}

export interface ConditionTickConditionTriggerConfig {
  type: typeof CONDITION_TICK_TYPE.CONDITION;
  condition: ConditionValue;
}

export interface ConditionTickImmediateTriggerConfig {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}

export type ConditionTickTriggerConfig =
  | ConditionTickTagTriggerConfig
  | ConditionTickDamageTriggerConfig
  | ConditionTickDurationTriggerConfig
  | ConditionTickConditionTriggerConfig
  | ConditionTickImmediateTriggerConfig;

// --- Effects ---
export type ConditionEffectType = typeof CONDITION_EFFECT_TYPE[keyof typeof CONDITION_EFFECT_TYPE];

// Damage effect
export interface ConditionDamageEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.DAMAGE;
  damage: {
    damageType: ReferenceValue; // DamageTypeConfig.id
    value: DiceValue | FixValue;
  };
}

// Resistance effect
export interface ConditionResistanceEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.RESISTENCE;
  damage: {
    damageTypes: ReferenceValue[]; // DamageTypeConfig.id[]
    damageScale: ReferenceValue;   // DamageScaleConfig.id
  };
}

// Modifier effect
export interface ConditionModifierEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.MODIFIER;
  reference: ReferenceValue;
  modifier: ModifierValue;
}

// Disable action
export interface ConditionDisableEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.DISABLE;
  tags: string[]; // action tags
}

type ConditionEffectConfigAttributeValue = ReferenceValue | AllSavingValue | AllAttributeValue;
// Disadvantage effect
export interface ConditionDisadvantageEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.DISADVANTAGE;
  attributes: ConditionEffectConfigAttributeValue[]; // attribute IDs or special values like 'all-ability'
}

// Advantage effect
export interface ConditionAdvantageEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.ADVANTAGE;
  attributes: ConditionEffectConfigAttributeValue[]; // attribute IDs or special values like 'all-saving'
}

// Fusion effect
export interface ConditionFusionEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.FUSION;
  baseConditionTags: string[];   // tag or ID
  resultConditions: ReferenceValue[]; // condition ID to apply
}

// Action/Boost/Weak/Force effect (you can expand these similarly)
export interface ConditionActionEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.ACTION;
  actions: ReferenceValue[]; // action ID or definition
}

export interface ConditionBoostEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.BOOST;
  damage: {
    damageType: ReferenceValue;
    value: DiceValue | FixValue;
  };
}

export interface ConditionWeakEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.WEAK;
  damage: {
    damageType: ReferenceValue;
    value: DiceValue | FixValue;
  };
}

export interface ConditionForceEffectConfig {
  type: typeof CONDITION_EFFECT_TYPE.FORCE;
  actions: ReferenceValue[];
}

export type ConditionEffectConfig =
  | ConditionDamageEffectConfig
  | ConditionResistanceEffectConfig
  | ConditionModifierEffectConfig
  | ConditionDisableEffectConfig
  | ConditionDisadvantageEffectConfig
  | ConditionAdvantageEffectConfig
  | ConditionFusionEffectConfig
  | ConditionActionEffectConfig
  | ConditionBoostEffectConfig
  | ConditionWeakEffectConfig
  | ConditionForceEffectConfig;

// --- Final ConditionConfig ---
export interface ConditionConfig extends BaseMapConfig {
  tags?: string[];

  stack?: ConditionStackConfig;

  ticks: ConditionTickTriggerConfig[]; // empty = permanent until removed manually

  effects: ConditionEffectConfig[];
}