export const ITEM_TYPE = {
  WEAPON: 'weapon',
  SHIELD: 'shield',
  ARMOR: 'armor',
  ACCESSORY: 'accessory',
  BACKPACK: 'backpack',
  UTILITY: 'utility'
} as const;

export const ITEM_RARITY = {
  COMMON: 'common',
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  VERY_RARE: 'very-rare',
  LEGENDARY: 'legendary'
} as const;

export const ITEM_EQUIPPED_SLOT = {
  MAIN_HANDED: 'main-handed',
  OFF_HANDED: 'off-handed',
  ARMOR: 'armor',
  ACCESSORY: 'accessory',
  BACKPACK: 'backpack',
  UTILITY: 'utility'
} as const;

export const ITEM_ARMOR_TYPE = {
  CLOTHING: 'clothing',
  LIGHT: 'light',
  MEDIUM: 'medium',
  HEAVY: 'heavy'
} as const;

export const MAX_ITEM_REFINED_LEVEL = [ 1, 2, 3 ] as const;