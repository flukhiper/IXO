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