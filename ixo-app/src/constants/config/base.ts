export const VALUE_TYPE = {
  FIXED: 'fixed',
  DICE: 'dice',
  REF: 'ref',
  FRACTION: 'fraction'
} as const;

export const RESTORE_PHASE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  SHORT_DOWNTIME: 'short-downtime',
  FULL_DOWNTIME: 'full-downtime'
} as const;

export const CONDITION_OPERATOR = {
  GREATER_THAN: '>',
  LESS_THAN: '<',
  GREATER_THAN_OR_EQUAL: '>=',
  LESS_THAN_OR_EQUAL: '<=',
  EQUAL: '==',
  NOT_EQUAL: '!='
} as const;

export const ON_EVENT_TYPE = {
  ON_ACTION: 'on-action',
  ON_CONDITION: 'on-condition',
  ON_ADVANTAGE: 'on-advantage',
  ON_DISADVANTAGE: 'on-disadvantage',
  ON_RESISTENCE: 'on-resistence',
  ON_ATTRIBUTE: 'on-attribute',
  ON_STAT: 'on-stat',
  ON_GOT_DAMAGE: 'on-got-damage',
  ON_GOT_HIT: 'on-got-hit',
  ON_EQUIPMENT_SLOT: 'on-equipment-slot',
  ON_PHASE: 'on-phase'
} as const;

export const PHASE_TYPE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  SHORT_DOWNTIME: 'short-downtime',
  FULL_DOWNTIME: 'full-downtime'
} as const;