export const ACTION_ITEM_OPTION = {
  RANGE: 'item-range',
  ARMOR_CLASS: 'item-armor-class',
  ARMOR_CLASS_VALUE_ONLY: 'item-armor-class-value-only',
  DAMAGE: 'item-damage',
  DAMAGE_VALUE_ONLY: 'item-damage-value-only',
  RESTORE: 'item-restore',
  RESTORE_VALUE_ONLY: 'item-restore-value-only',
  PROFICIENCY: 'item-proficiency'
} as const;

export const ACTION_USAGE_TYPE = {
  COMBAT: 'combat',
  DOWNTIME: 'downtime',
  LONG_DOWNTIME: 'long downtime'
} as const;

export const ACTION_HIT_TYPE = {
  ATTACK_ROLL: 'attack-roll',
  DIFFICULTY_CLASS: 'difficulty-class',
  SELF: 'self'
} as const;

export const ACTION_HIT_TARGET_TYPE = {
  AIM: 'aim',
  CLONE: 'clone'
} as const;

export const ACTION_REQUIRED_ITEM_TYPE = {
  MAIN_HANDED: 'main-handed',
  OFF_HANDED: 'off-handed',
  ARMOUR: 'armour',
  ANY: 'any'
} as const;

export const ACTION_COST_TYPE = {
  NORMAL: 'normal',
  FAST: 'fast',
  SLOW: 'slow',
  REACTION: 'reaction'
} as const;

export const ACTION_STACK_TYPE = {
  STACK: 'stack',
  OVERWRITE: 'overwrite'
} as const;

export const ACTION_TYPE = {
  WEAPON_MELEE: 'weapon-melee',
  WEAPON_RANGED: 'weapon-ranged',
  UNARMED: 'unarmed',
  COMMAND_MELEE: 'command-melee',
  COMMAND_RANGED: 'command-ranged',
  BLOCK: 'block',
  UTILITY: 'utility'
} as const;