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
