import { EFFECT_PROFICIENCY_LEVEL, EFFECT_TYPE } from '@/constants/config/effect';
import type { OriginConfig } from '@/types/config/origin';

export const mockOrigins: OriginConfig[] = [
  
];

export const mockSpecialOrigins: OriginConfig[] = [
  {
    id: 'origin-the-covenant-of-origin',
    name: {
      en: 'The Covenant of Origin',
      th: 'พันธะดั้งเดิม'
    },
    description: {
      en: '\'Purity is Peace. Change is Chaos.\' The Covenant of Origin is dedicated to eradicating the Defiled, regardless of whether they are Aetherborn, Eminent, Ascendant, or even Transcendant.',
      th: '\'ความบริสุทธิ์คือความสงบ การเปลี่ยนแปลงคือความวุ่นวาย\' องค์กรที่มีเป้าหมายที่กำจัดพวก แปดเปื้อน ไม่ว่าจะเป็น อีเธอร์บอร์น, เอ็มมิเน็นท์, แอสเซ็น หรือแม้แต่ ทรานส์เซ็น'
    },
    icon: 'covenant-of-origin',
    thumbnail: 'covenant-of-origin',
    tags: [ 'special', 'covenant' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
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
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-the-lantern',
    name: {
      en: 'The Lantern',
      th: 'ตะเกียงไฟ'
    },
    description: {
      en: '\'No spark, no flame.\' An organization that cares not for who is right or wrong, only for who or what might ignite conflict — and ensures its eradication.',
      th: '\'ไร้ประกายไฟ ก็ไร้เปลวเพลิง\' องค์กรที่ไม่ได้สนใจว่าใครผิดหรือถูก สนใจเพียงว่า ใครหรืออะไร จะเป็นเหตุให้ความขัดแย้งเกิดขึ้น แล้วกำจัดให้สิ้น'
    },
    icon: 'the-lantern',
    thumbnail: 'the-lantern',
    tags: [ 'special', 'lantern' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
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
        numberOfSelections: 2
      }
    ]
  }
];

export const mockAllOrigins = [
  ...mockOrigins,
  ...mockSpecialOrigins
];

export default mockAllOrigins;
