// Tick types for RemoveTickConfig
export const CONDITION_TICK_TYPE = {
  PHASE: 'phase',
  IMMEDIATE: 'immediate',
  DAMAGE: 'damage',
  HIT: 'hit',
  ATTRIBUTE: 'attribute'
} as const;

export const CONDITION_STACK_TYPE = {
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite',
  ADDITIVE: 'additive',
  STACK: 'stack'
} as const;

export const CONDITION_EFFECT_TYPE = {
  REDUCE_DAMAGE: 'reduce_damage',
  DO_DAMAGE_OVER_TIME: 'do_damage_over_time',
  DO_RESTORE_OVER_TIME: 'do_restore_over_time',
  SHOW_FLAVOR_TEXT: 'show_flavor_text',
  MODIFY_STAT: 'modify_stat',
  MODIFY_ATTRIBUTE: 'modify_attribute',
  RESTRICT_ACTION: 'restrict_action',
  RESTRICT_EQUIPMENT: 'restrict_equipment',
  BLOCK_CONDITION: 'block_condition',
  GAIN_ACTION: 'gain_action',
  GAIN_ADVANTAGE: 'gain_advantage',
  GAIN_RESISTENCE: 'gain_resistence'
} as const;