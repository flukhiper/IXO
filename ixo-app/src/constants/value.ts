export const VALUE_TYPE = {
  MODIFIER: 'modifier',
  SAVING: 'saving',
  CONDITION: 'condition',
  FIX: 'fix',
  DICE: 'dice',
  FORMULA: 'formula',
  FULL: 'full',
  EXPENDABLE: 'expendable'
} as const;

export const RESTORE_VALUE_TYPE = {
  SHORT_REST: 'short-rest',
  LONG_REST: 'long-rest',
  TURN: 'turn',
  NONE: 'none'
} as const;

export const CONDITION_VALUE_COMPARATOR = {
  LT: '<',
  GT: '>',
  EQ: '='
} as const;
