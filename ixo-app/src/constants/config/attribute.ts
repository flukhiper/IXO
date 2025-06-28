export const ATTRIBUTE_TYPE = {
  COMBAT: 'combat', // Hit Point, Armor Class, Movement, etc.
  ACTION_RESOURCE: 'action-resource', // Action Slot, Action Point, Energy Point
  TURN_ORDER: 'turn-order', // Initiative
  ABILITY: 'ability', // Strength, Agility, Acrobatics, etc.
  SAVING_THROW: 'saving-throw', // Resists dangers
  MODIFIER: 'modifier' // Boosts other calculations
} as const;
