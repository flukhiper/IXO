// Skill effect types
export const SKILL_EFFECT_TYPE = {
  MODIFY_STAT: 'modify-stat',
  MODIFY_ATTRIBUTE: 'modify-attribute',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  BLOCK_CONDITION: 'block-condition',
  GAIN_CONDITION: 'gain-condition',
  GAIN_ACTION: 'gain-action',
  GAIN_ADVANTAGE: 'gain-advantage',
  GAIN_RESISTENCE: 'gain-resistence',
  ADD_DOWNTIME: 'add-downtime',
  ADD_PROFICIENCY_POINTS: 'add-proficiency-points',
  ADD_PROFICIENCY_LEVEL: 'add-proficiency-level',
  ADD_EQUIPMENT_SLOT: 'add-equipment-slot',
  REDUCE_DAMAGE: 'reduce-damage',
  SHOW_FLAVOR_TEXT: 'show-flavor-text',
  SELECT_EFFECT: 'select-effect'
} as const;

export const SKILL_STACK_TYPE = {
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite'
} as const;