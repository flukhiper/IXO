export const SKILL_REF_ID = 'skill' as const;

// Skill stack types
export const SKILL_STACK_TYPE = {
  STACK: 'stack',
  IGNORE: 'ignore',
  OVERWRITE: 'overwrite'
} as const;

// Skill requirement types
export const SKILL_REQUIREMENT_TYPE = {
  PATH: 'path',
  SKILL: 'skill',
  ATTRIBUTE: 'attribute',
  STAT: 'stat',
  LEVEL: 'level'
} as const;

// Skill effect types
export const SKILL_EFFECT_TYPE = {
  MODIFIER: 'modifier',
  ACTION: 'action',
  CONDITION: 'condition',
  PROFICIENCY: 'proficiency'
} as const;


// Skill effect types
export const SKILL_EFFECT_CONDITION_WHEN = {
  START_ROUND: 'start-round'
} as const;