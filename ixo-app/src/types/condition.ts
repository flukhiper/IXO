import {
  CONDITION_STACK_TYPE,
  CONDITION_TICK_TYPE,
  CONDITION_EFFECT_TYPE,
  CONDITION_TYPE_SOURCE
} from '@/constants/condition';

import type { ConditionValue, DiceValue, FixValue, ModifierValue, SavingValue } from './value';

export type StackType = typeof CONDITION_STACK_TYPE[keyof typeof CONDITION_STACK_TYPE];

export interface ConditionStackConfig {
  id: string;
  type: StackType;
  priority?: number; // only used with 'overwrite'
}

// --- Tick Trigger Types ---
export type TickType = typeof CONDITION_TICK_TYPE[keyof typeof CONDITION_TICK_TYPE];
export type TickSource = typeof CONDITION_TYPE_SOURCE[keyof typeof CONDITION_TYPE_SOURCE];

export interface TickTagTrigger {
  type: typeof CONDITION_TICK_TYPE.TAG;
  source: TickSource;
  tags: string[];
}

export interface TickDamageTrigger {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  damageTypes: string[]; // DamageTypeConfig.id[]
}

export interface TickDurationTrigger {
  type: typeof CONDITION_TICK_TYPE.START_ROUND | typeof CONDITION_TICK_TYPE.END_ROUND | typeof CONDITION_TICK_TYPE.START_TURN | typeof CONDITION_TICK_TYPE.END_TURN;
  duration: number;
  saving?: SavingValue;
}

export interface TickConditionTrigger {
  type: typeof CONDITION_TICK_TYPE.CONDITION;
  condition: ConditionValue;
}

export interface TickImmediateTrigger {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}

export type TickTrigger =
  | TickTagTrigger
  | TickDamageTrigger
  | TickDurationTrigger
  | TickConditionTrigger
  | TickImmediateTrigger;

// --- Effects ---
export type ConditionEffectType = typeof CONDITION_EFFECT_TYPE[keyof typeof CONDITION_EFFECT_TYPE];

// Damage effect
export interface DamageEffect {
  type: typeof CONDITION_EFFECT_TYPE.DAMAGE;
  damage: {
    type: string; // DamageTypeConfig.id
    value: DiceValue | FixValue;
  };
}

// Resistance effect
export interface ResistanceEffect {
  type: typeof CONDITION_EFFECT_TYPE.RESISTENCE;
  damage: {
    types: string[]; // DamageTypeConfig.id[]
    scale: string;   // DamageScaleConfig.id
  };
}

// Modifier effect
export interface ModifierEffect {
  type: typeof CONDITION_EFFECT_TYPE.MODIFIER;
  modifier: ModifierValue;
}

// Disable action
export interface DisableEffect {
  type: typeof CONDITION_EFFECT_TYPE.DISABLE;
  tags: string[]; // action tags
}

// Disadvantage effect
export interface DisadvantageEffect {
  type: typeof CONDITION_EFFECT_TYPE.DISADVANTAGE;
  attributes: string[]; // attribute IDs or special values like 'all-ability'
}

// Advantage effect
export interface AdvantageEffect {
  type: typeof CONDITION_EFFECT_TYPE.ADVANTAGE;
  attributes: string[]; // attribute IDs or special values like 'all-saving'
}

// Fusion effect
export interface FusionEffect {
  type: typeof CONDITION_EFFECT_TYPE.FUSION;
  baseConditions: string[];   // tag or ID
  resultConditions: string[]; // condition ID to apply
}

// Action/Boost/Weak/Force effect (you can expand these similarly)
export interface ActionEffect {
  type: typeof CONDITION_EFFECT_TYPE.ACTION;
  actions: string[]; // action ID or definition
}

export interface BoostEffect {
  type: typeof CONDITION_EFFECT_TYPE.BOOST;
  damage: {
    type: string;
    value: DiceValue | FixValue;
  };
}

export interface WeakEffect {
  type: typeof CONDITION_EFFECT_TYPE.WEAK;
  damage: {
    type: string;
    value: DiceValue | FixValue;
  };
}

export interface ForceEffect {
  type: typeof CONDITION_EFFECT_TYPE.FORCE;
  actions: string[];
}

export type ConditionEffect =
  | DamageEffect
  | ResistanceEffect
  | ModifierEffect
  | DisableEffect
  | DisadvantageEffect
  | AdvantageEffect
  | FusionEffect
  | ActionEffect
  | BoostEffect
  | WeakEffect
  | ForceEffect;

// --- Final ConditionConfig ---
export interface ConditionConfig {
  id: string;
  name: string;
  description?: string;
  tags?: string[];

  stack?: ConditionStackConfig;

  ticks: TickTrigger[]; // empty = permanent until removed manually

  effects: ConditionEffect[];
}