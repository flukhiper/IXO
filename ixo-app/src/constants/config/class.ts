export const CLASS_STAT_MODIFIER_OPTION = {
  ALL: 'all'
} as const;

export const CLASS_TYPE = {
  ENFORCER: 'enforcer',
  SCOUT: 'scout',
  SEER: 'seer',
  OPERATOR: 'operator',
  INVOKER: 'invoker',
  HERALD: 'herald'
} as const;

export const CLASS_ROLE_TYPE = {
  ATTACKER: 'attacker',
  DEFENDER: 'defender',
  SUPPORT: 'support',
  SPECIALIST: 'specialist'
} as const;

export const MAX_CLASS_GAIN_LEVEL = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] as const;