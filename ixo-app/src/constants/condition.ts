export const CONDITION_REF_ID = 'condition' as const;

// Stack types for ConditionStackConfig
export const CONDITION_STACK_TYPE = {
  STACK: 'stack',
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite',
  ADDITIVE: 'additive'
} as const;

// Tick types for TickTrigger
export const CONDITION_TICK_TYPE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  IMMEDIATE: 'immediate',
  DAMAGE: 'damage',
  TAG: 'tag',
  CONDITION: 'condition'
} as const;

// Condition effect types
export const CONDITION_EFFECT_TYPE = {
  ADVANTAGE: 'advantage',
  DISADVANTAGE: 'disadvantage',
  MODIFIER: 'modifier',
  BOOST: 'boost',
  WEAK: 'weak',
  DAMAGE: 'damage',
  RESISTENCE: 'resistence',
  ACTION: 'action',
  DISABLE: 'disable',
  FORCE: 'force',
  FUSION: 'fusion'
} as const;

// Condition tick source
export const CONDITION_TYPE_SOURCE = {
  ACTION: 'action',
  CONDITION: 'condition'
} as const;