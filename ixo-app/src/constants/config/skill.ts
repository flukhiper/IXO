export const SKILL_TYPE = {
  GENERAL: 'general',
  CLASS: 'class',
  COMBAT: 'combat',
  SPECIAL: 'special'
} as const;

export const SKILL_STACK_TYPE = {
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite'
} as const;

export const SKILL_ARCHETYPE = {
  ATTACK: 'attack',
  DEFENSE: 'defense',
  SUPPORT: 'support',
  UTILITY: 'utility'
} as const;

export const SKILL_USAGE_TYPE = {
  PER_COMBAT: 'per-combat',
  PER_REST: 'per-rest',
  PER_LONG_REST: 'per-long-rest'
} as const;

export const MAX_SKILL_TIER = [ 1, 2, 3 ] as const;