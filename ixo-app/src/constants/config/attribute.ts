export const ATTRIBUTE_TYPE = {
  COMBAT: 'combat', // Armor Class, Speed, Attack Roll, etc.
  RESOURCE: 'resource', // Hit Point, Movement, Carry Capacity, Action Slot, Action Point, Energy Point
  TURN_ORDER: 'turn-order', // Initiative
  ABILITY: 'ability', // Strength, Agility, Acrobatics, etc.
  SAVING_THROW: 'saving-throw', // Resists dangers
  MODIFIER: 'modifier' // Boosts other calculations
} as const;
