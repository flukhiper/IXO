export const ACTION_TYPE = {
  COMMON: 'common',
  ATTACK: 'attack',
  SUPPORT: 'support',
  DEBUFF: 'debuff',
  SUMMON: 'summon',
  SPECIAL: 'special',
  REACTION: 'reaction'
} as const;

export const ACTION_TARGET_TYPE = {
  SELF: 'self',
  SELECT: 'select',
  AREA: 'area',
  CONE: 'cone',
  LINE: 'line'
} as const;

export const ACTION_HIT_TYPE = {
  ATTACK_ROLL: 'attack-roll',
  DIFFICULTY_CLASS: 'difficulty-class',
  ALWAYS_HIT: 'always-hit'
} as const;