import { SKILL_EFFECT_TYPE } from '@/constants/config/skill';

export const mockSkills = [
  // Dragonoid Skills
  {
    id: 'dragonoid-fearless-will',
    name: { en: 'Dragonoid - Fearless Will' },
    stack: { id: 'dragonoid-fearless-will', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.BLOCK_CONDITION,
        tags: [ 'frightened' ]
      },
      {
        type: SKILL_EFFECT_TYPE.STAT_MODIFY,
        statId: 'willpower',
        formula: '+1' // +1 to checks against fear-based effects
      }
    ]
  },
  {
    id: 'dragonoid-hardened-scales',
    name: { en: 'Dragonoid - Hardened Scales' },
    stack: { id: 'dragonoid-hardened-scales', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ATTRIBUTE_MODIFY,
        attributeId: 'armor-class',
        formula: '+2'
      }
    ]
  },

  // Kijin Skills
  {
    id: 'kijin-pain-fury',
    name: { en: 'Kijin - Pain Fury' },
    stack: { id: 'kijin-pain-fury', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.CONDITIONAL_CONDITION,
        conditionIds: [ 'condition-action-point-bonus' ],
        requirements: [ 'attr(hit-point).current < attr(hit-point).max / 2' ]
      }
    ]
  },
  {
    id: 'kijin-unkillable-instinct',
    name: { en: 'Kijin - Unkillable Instinct' },
    stack: { id: 'kijin-unkillable-instinct', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.CONDITIONAL_CONDITION,
        conditionIds: [ 'condition-stay-at-1-hp-once-per-combat' ],
        requirements: [ 'first-time-hit-0-hp-in-combat' ]
      }
    ]
  },

  // Mechina Skills
  {
    id: 'mechina-extra-load',
    name: { en: 'Mechina - Extra Load' },
    stack: { id: 'mechina-extra-load', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ATTRIBUTE_MODIFY,
        attributeId: 'carry-capacity',
        formula: 'attr(carry-capacity) * 0.5' // +50%
      },
      {
        type: SKILL_EFFECT_TYPE.EQUIPMENT_SLOT,
        slot: 'weapon',
        bonus: 1
      },
      {
        type: SKILL_EFFECT_TYPE.EQUIPMENT_SLOT,
        slot: 'utility',
        bonus: 1
      }
    ]
  },
  {
    id: 'mechina-restless-processor',
    name: { en: 'Mechina - Restless Processor' },
    stack: { id: 'mechina-restless-processor', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.EXTRA_DOWNTIME,
        bonusActivities: 1
      },
      {
        type: SKILL_EFFECT_TYPE.DOWNTIME,
        downtimeId: 'downtime-name-x-2',
        multiplier: 0.5
      }
    ]
  },

  // Werebeast Skills
  {
    id: 'werebeast-obsessive-focus',
    name: { en: 'Werebeast - Obsessive Focus' },
    stack: { id: 'werebeast-obsessive-focus', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ADVANTAGE_ATTRIBUTE,
        attributeIds: [ 'stealth', 'melee' ], // example tags selected at creation, placeholder
        isDisadvantage: false
      }
    ]
  },
  {
    id: 'werebeast-predator-senses',
    name: { en: 'Werebeast - Predator Senses' },
    stack: { id: 'werebeast-predator-senses', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.STAT_MODIFY,
        statId: 'perceive',
        formula: '+3'
      },
      {
        type: SKILL_EFFECT_TYPE.STAT_MODIFY,
        statId: 'initiative',
        formula: '+2'
      }
    ]
  },

  // Elf Skills
  {
    id: 'elf-timeless-composure',
    name: { en: 'Elf - Timeless Composure' },
    stack: { id: 'elf-timeless-composure', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.BLOCK_CONDITION,
        tags: [ 'fatigue' ]
      },
      {
        type: SKILL_EFFECT_TYPE.CONDITIONAL_CONDITION,
        conditionIds: [ 'condition-restore-action-point-extra' ],
        requirements: [ 'phase == "full-downtime"' ]
      }
    ]
  },
  {
    id: 'elf-ancient-gift',
    name: { en: 'Elf - Ancient Gift' },
    stack: { id: 'elf-ancient-gift', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ACTION,
        actionIds: [ 'action-echo-step', 'action-spark-of-force', 'action-ancestral-guard', 'action-ancient-instinct', 'action-surge-of-the-past' ]
      }
    ]
  },

  // Demonia Skills
  {
    id: 'demonia-adaptive-copycat',
    name: { en: 'Demonia - Adaptive Copycat' },
    stack: { id: 'demonia-adaptive-copycat', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ACTION,
        actionIds: [ 'action-copy-enemy-once-per-rest' ]
      }
    ]
  },
  {
    id: 'demonia-harshborn',
    name: { en: 'Demonia - Harshborn' },
    stack: { id: 'demonia-harshborn', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.BLOCK_CONDITION,
        tags: [ 'environmental-hazard' ]
      },
      {
        type: SKILL_EFFECT_TYPE.RESISTENCE,
        damageTypeId: 'any',
        damageScaleId: 'resistant'
      }
    ]
  },

  // Siren Skills
  {
    id: 'siren-enchanting-aura',
    name: { en: 'Siren - Enchanting Aura' },
    stack: { id: 'siren-enchanting-aura', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ADVANTAGE_ATTRIBUTE,
        attributeIds: [ 'persuasion', 'deception' ],
        isDisadvantage: false
      }
    ]
  },
  {
    id: 'siren-song-of-entrapment',
    name: { en: 'Siren - Song of Entrapment' },
    stack: { id: 'siren-song-of-entrapment', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ACTION,
        actionIds: [ 'action-song-of-entrapment' ]
      }
    ]
  },

  // Aethel (Unchanged) Skills
  {
    id: 'aethel-obedient-role',
    name: { en: 'Aethel - Obedient Role' },
    stack: { id: 'aethel-obedient-role', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.EXTRA_PROFICIENCY,
        points: 1
      }
    ]
  },
  {
    id: 'aethel-hidden-spark',
    name: { en: 'Aethel - Hidden Spark' },
    stack: { id: 'aethel-hidden-spark', type: 'replace' },
    pathId: 'any',
    effects: [
      {
        type: SKILL_EFFECT_TYPE.ACTION,
        actionIds: [ 'action-reroll-failed' ]
      }
    ]
  }
];
