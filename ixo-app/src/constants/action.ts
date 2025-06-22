export const ACTION_REF_ID = 'action' as const;

// Action apply to types
export const ACTION_TYPE = {
  COMMON: 'common',
  ATTACK: 'attack',
  SUPPORT: 'support',
  DEBUFF: 'debuff',
  SUMMON: 'summon'
} as const;

export const ACTION_REQUIREMENT = {
  ADVANTAGE: 'advantage'
} as const;

// Action apply to types
export const ACTION_CONDITION_APPLY_TO_TYPE = {
  SELF: 'self',
  TARGET: 'target'
} as const;

// Hit types
export const ACTION_HIT_TYPE = {
  ALWAYS: 'always',
  ATTACK_ROLL: 'attack-roll',
  DIFFICULTY_CLASS: 'difficulty-class'
} as const;

// Target types
export const ACTION_TARGET_TYPE = {
  SELF: 'self',
  SINGLE: 'single',
  MULTIPLE: 'multiple',
  AREA: 'area'
} as const;

// Area types
export const ACTION_TARGET_AREA_TYPE = {
  POINT: 'point',
  RADIUS: 'radius',
  CUBE: 'cube',
  CONE: 'cone'
} as const;