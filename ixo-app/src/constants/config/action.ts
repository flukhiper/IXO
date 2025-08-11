export const ACTION_OPTION = {
  // Item
  ITEM_RANGE: 'item-range',
  ITEM_ARMOR_CLASS: 'item-armor-class',
  ITEM_ARMOR_CLASS_VALUE_ONLY: 'item-armor-class-value-only',
  ITEM_DAMAGE: 'item-damage',
  ITEM_DAMAGE_VALUE_ONLY: 'item-damage-value-only',
  ITEM_PROFICIENCY: 'item-proficiency',
  
  // Damage
  ACTION_DAMAGE: 'action-damage',

  // Armor Class
  ACTION_ARMOR_CLASS: 'action-armor-class',

  // Cost
  ALL_COST: -1
} as const;

export const ACTION_USAGE_TYPE = {
  PER_COMBAT: 'per-combat',
  PER_REST: 'per-rest',
  PER_LONG_REST: 'per-long-rest'
} as const;

export const ACTION_RANGE_TYPE = {
  MELEE: 'melee',
  RANGE: 'range'
} as const;

export const ACTION_HIT_TYPE = {
  ATTACK_ROLL: 'attack-roll',
  DIFFICULTY_CLASS: 'difficulty-class',
  SELF: 'self',
  ALWAYS_HIT: 'always-hit'
} as const;

export const ACTION_HIT_TARGET_TYPE = {
  AIM: 'aim',
  CLONE: 'clone',
  SPHERE: 'sphere'
} as const;

export const ACTION_REQUIRED_ITEM_TYPE = {
  MAIN_HANDED: 'main-handed',
  OFF_HANDED: 'off-handed',
  ARMOR: 'armor',
  SHIELD: 'shield',
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

export const ACTION_ARCHETYPE = {
  ATTACK: 'attack',
  DEFENSE: 'defense',
  SUPPORT: 'support',
  UTILITY: 'utility'
} as const;

export const ACTION_TYPE = {
  COMMON: 'common',
  COMBAT_ART: 'combat-art',
  COMMAND: 'command'
} as const;

export const MAX_ACTION_LEVEL = [ 1, 2, 3, 4, 5 ] as const;