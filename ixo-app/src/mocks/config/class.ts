import type { ClassConfig } from '@/types/config/class';
import { CLASS_TYPE, ARCHETYPE_ROLE_TYPE } from '@/constants/config/class';
import { KEYWORD_TYPE, PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';
import { SKILL_TYPE } from '@/constants/config/skill';

export const mock: ClassConfig[] = [
  {
    id: 'bruiser-attacker',
    name: { en: 'Bruiser' },
    description: { en: 'A powerhouse of raw melee force. Bruisers charge headfirst into enemies, break lines, and draw attention through sheer aggression.' },
    ownerId: 'system', // assuming system-generated
    gameSystemId: 'my-trpg-system',
    class: CLASS_TYPE.ENFORCER,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'martial', 'melee', 'frontline' ],
    progression: {
      1: {
        statModifier: [
          { statId: 'strength', value: 1 }
        ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [
          {
            name: { en: 'Unstoppable Force' },
            description: { en: 'When you hit with a melee attack, push the target 5 feet (no opportunity attack).' },
            keywords: [
              { type: KEYWORD_TYPE.STANDARD },
              { type: KEYWORD_TYPE.ATTACK_ROLL },
              { type: KEYWORD_TYPE.TARGET, range: 5, numberOfTargets: 1 },
              { type: KEYWORD_TYPE.CONDITION, conditionId: 'pushed', durationFormula: 'instant' }
            ]
          }
        ],
        proficiencyPoint: 1
      },
      2: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [],
        skillGain: [
          {
            tier: 1,
            skillType: SKILL_TYPE.GENERAL,
            numberOfSkill: 1
          }
        ]
      },
      3: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [],
        skillGain: [
          {
            tier: 1,
            skillType: SKILL_TYPE.ROLE,
            roleId: 'bruiser',
            numberOfSkill: 1
          }
        ]
      },
      4: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: []
      },
      5: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [
          {
            name: { en: 'Shattering Blow' },
            description: {
              en: 'When you crit with a melee attack, reduce enemy weapon or armor effectiveness (-1 damage or -1 DR).'
            },
            keywords: [
              { type: KEYWORD_TYPE.ATTACK_ROLL },
              { type: KEYWORD_TYPE.WEAPON_ROLL, equipSlotId: 'main-hand' },
              { type: KEYWORD_TYPE.CONDITION, conditionId: 'sundered', durationFormula: 'stacking' },
              { type: KEYWORD_TYPE.SUNDER, value: 1 }
            ]
          }
        ]
      },
      6: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [],
        skillGain: [
          {
            tier: 2,
            skillType: SKILL_TYPE.GENERAL,
            numberOfSkill: 1
          }
        ]
      },
      7: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [],
        skillGain: [
          {
            tier: 2,
            skillType: SKILL_TYPE.ROLE,
            roleId: 'bruiser',
            numberOfSkill: 1
          }
        ]
      },
      8: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: []
      },
      9: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [
          {
            name: { en: 'Overwhelming Presence' },
            description: {
              en: 'Enemies in 15-ft radius have disadvantage when not attacking you. Enemies you hit cannot Disengage next turn. Lasts 1 minute.'
            },
            keywords: [
              { type: KEYWORD_TYPE.FULL },
              { type: KEYWORD_TYPE.RADIUS, radius: 15, range: 0, numberOfTargets: 10 },
              { type: KEYWORD_TYPE.CONDITION, conditionId: 'menaced', durationFormula: '1 minute' },
              { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT }
            ]
          }
        ]
      },
      10: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [],
        skillGain: [
          {
            tier: 3,
            skillType: SKILL_TYPE.GENERAL,
            numberOfSkill: 1
          }
        ]
      },
      11: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: [],
        skillGain: [
          {
            tier: 3,
            skillType: SKILL_TYPE.ROLE,
            roleId: 'bruiser',
            numberOfSkill: 1
          }
        ]
      },
      12: {
        statModifier: [ { statId: 'strength', value: 1 } ],
        attributeModifier: [
          {
            attributeId: 'hp',
            baseValue: { type: VALUE_TYPE.FIXED, value: 8 }
          }
        ],
        effects: []
      }
    }
  }
]; 