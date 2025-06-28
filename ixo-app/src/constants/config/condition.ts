// Tick types for RemoveTickConfig
export const CONDITION_TICK_TYPE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  IMMEDIATE: 'immediate',
  DAMAGE: 'damage',
  CONDITION: 'condition'
} as const;

// Condition effect types
export const CONDITION_EFFECT_TYPE = {
  STAT_MODIFY: 'stat-modify',
  ATTRIBUTE_MODIFY: 'attribute-modify',
  DAMAGE_OVER_TIME: 'damage-over-time',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  ACTION: 'action',
  FORCE_ACTION: 'force-action',
  RESISTENCE: 'resistence',
  ADVANTAGE_ATTRIBUTE: 'advantage-attribute'
} as const;