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

export const EFFECT_ACTIVATE_ON = {
  ON_ATTRIBUTE_CHANGE: 'on-attribute-change'
};

export const EFFECT_TYPE = {

  // Bonus
  BONUS: 'bonus',

  // Advantage
  ADVANTAGE: 'advantage',

  // Damage Boost
  DAMAGE_BOOST: 'damage-boost',

  // Condition
  CONDITION: 'condition',

  // Proficiency
  PROFICIENCY: 'proficiency',

  // Gain
  GAIN: 'gain',

  // Activate
  ACTIVATE: 'activate',

  // Prevent Condition
  PREVENT_CONDITION: 'prevent-condition',

  // Special
  SPECIAL: 'special'
} as const;