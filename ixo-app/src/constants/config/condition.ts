// Tick types for RemoveTickConfig
export const CONDITION_TICK_TYPE = {
  PHASE: 'phase',
  IMMEDIATE: 'immediate',
  DAMAGE: 'damage',
  HIT: 'hit',
  ATTRIBUTE: 'attribute'
} as const;

// Condition effect types
export const CONDITION_EFFECT_TYPE = {
  MODIFY_STAT: 'modify-stat',
  MODIFY_ATTRIBUTE: 'modify-attribute',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  BLOCK_CONDITION: 'block-condition',
  GAIN_ACTION: 'gain-action',
  GAIN_ADVANTAGE: 'gain-advantage',
  GAIN_RESISTENCE: 'gain-resistence',
  REDUCE_DAMAGE: 'reduce-damage',
  FORCE_ACTION: 'force-action',
  DO_DAMAGE_OVER_TIME: 'do-damage-over-time',
  DO_RESTORE_OVER_TIME: 'do-restore-over-time',
  SHOW_FLAVOR_TEXT: 'show-flavor-text'
} as const;

export const CONDITION_STACK_TYPE = {
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite',
  ADDITIVE: 'additive',
  STACK: 'stack'
} as const;