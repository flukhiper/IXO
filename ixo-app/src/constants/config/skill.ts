// Skill effect types
export const SKILL_EFFECT_TYPE = {
  STAT_MODIFY: 'stat-modify',
  ATTRIBUTE_MODIFY: 'attribute-modify',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  BLOCK_CONDITION: 'block-condition',
  CONDITIONAL_CONDITION: 'conditional-condition',
  ACTION: 'action',
  RESISTENCE: 'resistence',
  ADVANTAGE_ATTRIBUTE: 'advantage-attribute',
  EXTRA_DOWNTIME: 'extra-downtime',
  DOWNTIME: 'downtime',
  EXTRA_PROFICIENCY: 'extra-proficiency',
  EQUIPMENT_SLOT: 'equipment_slot'
} as const;