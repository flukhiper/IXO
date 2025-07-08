export const ATTRIBUTE_TYPE = {
  COMBAT: 'combat', // Armor Class, Speed, Attack Roll, etc.
  RESOURCE: 'resource', // Hit Point, Movement, Carry Capacity, Action Slot, Action Point, Energy Point
  SKILL_CHECK: 'skill-check', // Athletics, Sprint
  SAVING_THROW: 'saving-throw' // Resists dangers
} as const;
