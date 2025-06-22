export const ITEM_REF_ID = 'item' as const;

export const ITEM_TYPE = {
  WEAPON: 'weapon',
  SHIELD: 'shield',
  ARMOR: 'armor',
  ACCESSORY: 'accessory',
  CONSUMABLE: 'consumable',
  UTILITY: 'utility'
  // ...add more as needed
} as const;

export const ITEM_REQUIREMENT_TYPE = {
  PROFICIENCY: 'proficiency',
  LEVEL: 'level',
  STAT: 'stat'
  // ...add more as needed
} as const;

export const ITEM_PROPERTY_TYPE = {
  VERSATILE: 'versatile',
  FITNESS: 'fitness',
  UPGRADE: 'upgrade',
  ENHANCE: 'enhance',
  TWO_HAND: 'two-hand',
  EXTRA_REACH: 'extra-reach'
  // ...add more as needed
} as const;