export const VALUE_TYPE = {
  FIXED: 'fixed',
  DICE: 'dice',
  REF: 'ref',
  FULL: 'full',
  HALF: 'half'
} as const;

export const RESTORE_PHASE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  SHORT_DOWNTIME: 'short-downtime',
  FULL_DOWNTIME: 'full-downtime'
} as const;

export const CONDITION_OPERATOR = {
  GREATER_THAN: '>',
  LESS_THAN: '<',
  GREATER_THAN_OR_EQUAL: '>=',
  LESS_THAN_OR_EQUAL: '<=',
  EQUAL: '==',
  NOT_EQUAL: '!='
} as const;

export const PHASE_TYPE = {
  SHORT_DOWNTIME: 'short-downtime',
  FULL_DOWNTIME: 'full-downtime',
  ROUND: 'round',
  COMBAT: 'combat'
} as const;

////////////////////////////////////////////////////////////////////////////////////////////////////

export const KEYWORD_TYPE = {
  // Permanent Bonus Keywords
  ATTRIBUTE_GIFTED: 'attribute-gifted',
  ATTRIBUTE_LEARNED: 'attribute-learned',
  ATTRIBUTE_MASTERY: 'attribute-mastery',
  SAVING_THROW_GIFTED: 'saving-throw-gifted',
  SAVING_THROW_LEARNED: 'saving-throw-learned',
  SAVING_THROW_MASTERY: 'saving-throw-mastery',
  SKILL_CHECK_GIFTED: 'skill-check-gifted',
  SKILL_CHECK_LEARNED: 'skill-check-learned',
  SKILL_CHECK_MASTERY: 'skill-check-mastery',

  // Mechanical Bonus Keywords
  TOUGH: 'tough',
  AIM: 'aim',
  BLOCK: 'block',
  SWIFT: 'swift',
  REFLEX: 'reflex',

  // Combat Feature Keywords
  ARMOR_PIERCE: 'armor-pierce',
  SUNDER: 'sunder',
  BOOST: 'boost',
  DOUBLE_ATTACK: 'double-attack',
  PRECISE: 'precise',
  TRUE_STRIKE: 'true-strike',
  COOLDOWN: 'cooldown',

  // Action Keywords
  STANDARD: 'standard',
  FREE: 'free',
  FULL: 'full',
  USAGE: 'usage',
  STANCE: 'stance',
  COMMAND: 'command',
  REACTION: 'reaction',

  // Action Target Keywords
  CONE: 'cone',
  TARGET: 'target',
  RADIUS: 'radius',
  CUBE: 'cube',

  // Action Hit Keywords
  ATTACK_ROLL: 'attack-roll',
  SAVING_THROW: 'saving-throw',
  WEAPON_ROLL: 'weapon-roll',
  COMMAND_ROLL: 'command-roll',

  // Action Damage Keywords
  DAMAGE: 'damage',
  BOUND_DAMAGE: 'bound-damage',
  INVOKED_DAMAGE: 'invoked-damage',
  WEAPON_DAMAGE: 'weapon-damage',
  UNARMED_DAMAGE: 'unarmed-damage',

  // Action Resource Keywords
  EXPAND: 'expand',
  LIMIT: 'limit',
  RESTORE: 'restore',
  REDUCE: 'reduce',

  // Condition Keywords
  CONDITION: 'condition',
  CONCENTRATION: 'concentration',
  
  // Item Keywords
  REPAIR: 'repair',
  MAKE: 'make'
} as const;

export const KEYWORD_VALUE_TYPE = {
  ANY: 'any',
  ALL: 'all'
} as const;
