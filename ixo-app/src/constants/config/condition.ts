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