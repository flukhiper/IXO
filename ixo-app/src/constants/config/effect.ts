export const EFFECT_ID_OPTION = {
  ALL_SKILL: 'all-skill',
  ALL_SAVING: 'all-saving'
} as const;

export const EFFECT_TARGET_TYPE = {
  ATTRIBUTE: 'attribute',
  STAT: 'stat'
} as const;

export const EFFECT_TYPE = {
  // Talent
  TERRIBLE: 'terrible',
  UNFAVORED: 'unfavored',
  AVERAGE: 'average',
  LEARNED: 'learned',
  PROMISING: 'promising',
  EXPERT: 'expert',
  PRODIGIOUS: 'prodigious',
  GOD: 'god',

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