export const SKILL_TYPE = {
  FACTION: 'faction',
  TRAIT: 'trait',
  TALENT: 'talent',
  ROLE: 'role'
} as const;

export const SKILL_STACK_TYPE = {
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite'
} as const;

export const SKILL_USAGE_TYPE = {
  PER_COMBAT: 'per-combat',
  PER_REST: 'per-rest',
  PER_LONG_REST: 'per-long-rest'
} as const;

export const SKILL_ROLE = {
  ATTACKER: 'attacker',
  DEFENDER: 'defender',
  SUPPORTER: 'supporter',
  ANY: 'any'
} as const;

export const MAX_SKILL_TIER = [ 0, 1, 2, 3 ] as const;