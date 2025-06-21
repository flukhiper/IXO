import {
  CONDITION_STACK_TYPE,
  CONDITION_TICK_TYPE,
  CONDITION_EFFECT_TYPE,
  CONDITION_TYPE_SOURCE
} from '@/constants/condition';

import type { ConditionValue, DiceValue, FixValue, ModifierValue, SavingValue } from '../value';
import type { MultiLangText } from '../common';

export type ConditionStackType = typeof CONDITION_STACK_TYPE[keyof typeof CONDITION_STACK_TYPE];

export interface ConditionStackConfig {
  id: string;
  type: ConditionStackType;
  priority?: number; // only used with 'overwrite'
}

// --- Tick Trigger Types ---
export type ConditionTickType = typeof CONDITION_TICK_TYPE[keyof typeof CONDITION_TICK_TYPE];
export type ConditionTickSource = typeof CONDITION_TYPE_SOURCE[keyof typeof CONDITION_TYPE_SOURCE];

export interface ConditionTickTagTrigger {
  type: typeof CONDITION_TICK_TYPE.TAG;
  source: ConditionTickSource;
  tags: string[];
}

export interface ConditionTickDamageTrigger {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  damageTypes: string[]; // DamageTypeConfig.id[]
  saving?: SavingValue;
}

export interface ConditionTickDurationTrigger {
  type: typeof CONDITION_TICK_TYPE.START_ROUND | typeof CONDITION_TICK_TYPE.END_ROUND | typeof CONDITION_TICK_TYPE.START_TURN | typeof CONDITION_TICK_TYPE.END_TURN;
  duration: number;
  saving?: SavingValue;
}

export interface ConditionTickConditionTrigger {
  type: typeof CONDITION_TICK_TYPE.CONDITION;
  condition: ConditionValue;
}

export interface ConditionTickImmediateTrigger {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}

export type ConditionTickTrigger =
  | ConditionTickTagTrigger
  | ConditionTickDamageTrigger
  | ConditionTickDurationTrigger
  | ConditionTickConditionTrigger
  | ConditionTickImmediateTrigger;

// --- Effects ---
export type ConditionEffectType = typeof CONDITION_EFFECT_TYPE[keyof typeof CONDITION_EFFECT_TYPE];

// Damage effect
export interface ConditionDamageEffect {
  type: typeof CONDITION_EFFECT_TYPE.DAMAGE;
  damage: {
    type: string; // DamageTypeConfig.id
    value: DiceValue | FixValue;
  };
}

// Resistance effect
export interface ConditionResistanceEffect {
  type: typeof CONDITION_EFFECT_TYPE.RESISTENCE;
  damage: {
    types: string[]; // DamageTypeConfig.id[]
    scale: string;   // DamageScaleConfig.id
  };
}

// Modifier effect
export interface ConditionModifierEffect {
  type: typeof CONDITION_EFFECT_TYPE.MODIFIER;
  modifier: ModifierValue;
}

// Disable action
export interface ConditionDisableEffect {
  type: typeof CONDITION_EFFECT_TYPE.DISABLE;
  tags: string[]; // action tags
}

// Disadvantage effect
export interface ConditionDisadvantageEffect {
  type: typeof CONDITION_EFFECT_TYPE.DISADVANTAGE;
  attributes: string[]; // attribute IDs or special values like 'all-ability'
}

// Advantage effect
export interface ConditionAdvantageEffect {
  type: typeof CONDITION_EFFECT_TYPE.ADVANTAGE;
  attributes: string[]; // attribute IDs or special values like 'all-saving'
}

// Fusion effect
export interface ConditionFusionEffect {
  type: typeof CONDITION_EFFECT_TYPE.FUSION;
  baseConditions: string[];   // tag or ID
  resultConditions: string[]; // condition ID to apply
}

// Action/Boost/Weak/Force effect (you can expand these similarly)
export interface ConditionActionEffect {
  type: typeof CONDITION_EFFECT_TYPE.ACTION;
  actions: string[]; // action ID or definition
}

export interface ConditionBoostEffect {
  type: typeof CONDITION_EFFECT_TYPE.BOOST;
  damage: {
    type: string;
    value: DiceValue | FixValue;
  };
}

export interface ConditionWeakEffect {
  type: typeof CONDITION_EFFECT_TYPE.WEAK;
  damage: {
    type: string;
    value: DiceValue | FixValue;
  };
}

export interface ConditionForceEffect {
  type: typeof CONDITION_EFFECT_TYPE.FORCE;
  actions: string[];
}

export type ConditionEffect =
  | ConditionDamageEffect
  | ConditionResistanceEffect
  | ConditionModifierEffect
  | ConditionDisableEffect
  | ConditionDisadvantageEffect
  | ConditionAdvantageEffect
  | ConditionFusionEffect
  | ConditionActionEffect
  | ConditionBoostEffect
  | ConditionWeakEffect
  | ConditionForceEffect;

// --- Final ConditionConfig ---
export interface ConditionConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];

  stack?: ConditionStackConfig;

  ticks: ConditionTickTrigger[]; // empty = permanent until removed manually

  effects: ConditionEffect[];
}