export const EFFECT_ID_OPTION = {
  ALL_SKILL: 'all-skill',
  ALL_SAVING: 'all-saving'
} as const;

export const EFFECT_TARGET_TYPE = {
  ATTRIBUTE: 'attribute',
  STAT: 'stat'
} as const;

export const EFFECT_PROFICIENCY_LEVEL = {
  TERRIBLE: 'terrible',
  UNFAVORED: 'unfavored',
  PROFICIENCY: 'proficiency',
  EXPERT: 'expert',
  MASTER: 'master',
  GENIUS: 'genius'
};

export const EFFECT_TYPE = {
  // Proficiency
  PROFICIENCY: 'proficiency',

  // Bonus
  BONUS: 'bonus',

  // Advantage
  ADVANTAGE: 'advantage',

  // Damage Boost
  DAMAGE_BOOST: 'damage-boost',

  // Specialty
  SPECIAL: 'special',

  // Condition
  CONDITION: 'condition'
} as const;