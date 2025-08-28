import { EFFECT_PROFICIENCY_LEVEL, EFFECT_TYPE } from '@/constants/config/effect';
import type { TraitConfig } from '@/types/config/trait';

export const mockTraits: TraitConfig[] = [
];

export const mockFullTraits: TraitConfig[] = [
  {
    id: 'trait-telari',
    name: {
      en: 'Telari',
      th: 'เทลารี'
    },
    description: {
      en: 'In every drop of their blood… there is a shadow of what they \'may be\' just as large as what they \'are\'.',
      th: 'ในทุกหยดเลือดของพวกเขา… มีเงาแห่งสิ่งที่พวกเขา \'อาจเป็น\' มากพอ ๆ กับสิ่งที่พวกเขา \'เป็นอยู่\''
    },
    icon: 'telari-trait',
    thumbnail: 'telari-trait.jpg',
    tags: [ 'telari', 'defensive', 'dragon', 'wraith' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    proficiencyPoints: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-power',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-endurance',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-stealth',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-acrobatics',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-sprint',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-perception',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-insight',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-instinct',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-tinker',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-operate',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-finesse',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-recall',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-deduction',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-analyze',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-persuasion',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-deception',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-intimidation',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-performance',
            level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
          }
        ],
        numberOfSelections: 3
      }
    ]
  }
];

export const mockAllTraits = [
  ...mockTraits
];

export default mockAllTraits;
