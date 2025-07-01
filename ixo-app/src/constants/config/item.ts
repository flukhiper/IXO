export const ITEM_TYPE = {
  WEAPON: 'weapon',
  SHIELD: 'shield',
  ARMOR: 'armor',
  ACCESSORY: 'accessory',
  CONSUMABLE: 'consumable',
  UTILITY: 'utility'
  // ...add more as needed
} as const;

export const ITEM_CUSTOMIZE_TYPE = {
  DAMAGE: 'damage',
  EFFECT: 'effect'
} as const;

export const ITEM_WEIGHT = {
  LIGHT: 'light',
  MEDIUM: 'medium',
  HEAVY: 'heavy'
} as const;

// Item bonus effect types
export const ITEM_BONUS_EFFECT_TYPE = {
  MODIFY_STAT: 'modify-stat',
  MODIFY_ATTRIBUTE: 'modify-attribute',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  BLOCK_CONDITION: 'block-condition',
  GAIN_CONDITION: 'gain-condition',
  GAIN_ACTION: 'gain-action',
  GAIN_ADVANTAGE: 'gain-advantage',
  GAIN_RESISTENCE: 'gain-resistence',
  ADD_DAMAGE: 'add-damage',
  REDUCE_DAMAGE: 'reduce-damage',
  SHOW_FLAVOR_TEXT: 'show-flavor-text'
} as const;