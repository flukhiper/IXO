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
  STAT_MODIFY: 'stat-modify',
  ATTRIBUTE_MODIFY: 'attribute-modify',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  ACTION: 'action',
  RESISTENCE: 'resistence',
  CONDITION: 'condition',
  ADVANTAGE_ATTRIBUTE: 'advantage-attribute'
} as const;