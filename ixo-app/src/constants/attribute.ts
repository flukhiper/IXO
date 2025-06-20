export const ATTRIBUTE_TYPE_OTHER = {
  COMMON: 'common', 
  MODIFIER: 'modifier'
} as const;

export const ATTRIBUTE_TYPE_FIX_VALUE = {
  ACTION_SLOT: 'action-slot', 
  ARMOR_CLASS: 'armor-class', 
  DIFFICULTY_CLASS: 'difficulty-class', 
  JUMP_DISTANCE: 'jump-distance', 
  SIZE: 'size'
} as const;

export const ATTRIBUTE_TYPE_DICE_VALUE = {
  SAVING: 'saving', 
  ABILITY: 'ability', 
  INITIATIVE: 'initiative', 
  ATTACK_ROLL: 'attack-roll'
} as const;

export const ATTRIBUTE_TYPE_EXPENDABLE_VALUE = {
  HIT_POINT: 'hit-point', 
  MOVEMENT: 'movement', 
  CARRYING_CAPACITY: 'carrying-capacity'
} as const;
