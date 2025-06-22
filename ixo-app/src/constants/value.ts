export const VALUE_TYPE = {
  FIX: 'fix',
  DICE: 'dice',
  FULL: 'full',
  INFINITE: 'infinite',
  ALL_SAVING: 'all-saving',
  ALL_ATTRIBUTE: 'all-attribute',
  MODIFIER: 'modifier',
  REFERENCE: 'reference',
  EXPENDABLE: 'expendable',
  CONDITION: 'condition'
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
