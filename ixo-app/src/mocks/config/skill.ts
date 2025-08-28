import { EFFECT_PROFICIENCY_LEVEL, EFFECT_TARGET_TYPE, EFFECT_TYPE } from '@/constants/config/effect';
import { SKILL_ARCHETYPE, SKILL_STACK_TYPE, SKILL_TYPE, SKILL_USAGE_TYPE } from '@/constants/config/skill';
import type { SkillConfig } from '@/types/config/skill';

export const mockSkills: SkillConfig[] = [];

export const mockAttackSkills: SkillConfig[] = [
  // Tier 1
  {
    id: 'skill-quick-reaction',
    name: {
      en: 'Quick Reaction',
      th: 'การตอบสนองรวดเร็ว'
    },
    description: {
      en: 'You can react to an attack before it happens.',
      th: 'คุณสามารถตอบสนองต่อการโจมตีก่อนที่จะเกิดขึ้น'
    },
    icon: 'skill-quick-reaction',
    thumbnail: 'skill-quick-reaction',
    tags: [ 'combat', 'attack' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    type: SKILL_TYPE.COMBAT,
    archetype: SKILL_ARCHETYPE.ATTACK,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'quick-reaction',
      priority: 1
    },
    tier: 1,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.BONUS,
            target: EFFECT_TARGET_TYPE.ATTRIBUTE,
            id: 'attribute-initiative',
            modifierFormula: '2'
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockDefenseSkills: SkillConfig[] = [
  // Tier 2
  {
    id: 'skill-vigilant',
    name: { 
      en: 'vigilant', 
      th: 'เฝ้าระวัง' 
    },
    description: { 
      th: 'คุณไม่เคยปล่อยให้ตัวเองตกอยู่ในสภาพไร้การป้องกัน ดวงตาและสัญชาตญาณของคุณเฝ้าจับตามองทุกสิ่งรอบตัวอยู่เสมอ', 
      en: 'You never let yourself be in a vulnerable position. Your eyes and instincts are always watching everything around you.'
    },
    icon: 'skill-vigilant',
    thumbnail: 'skill-vigilant',
    tags: [ 'special', 'defense' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    type: SKILL_TYPE.COMBAT,
    archetype: SKILL_ARCHETYPE.DEFENSE,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'vigilant',
      priority: 1
    },
    tier: 2,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'You cannot be surprised.',
              th: 'คุณไม่สามารถถูกโจมตีแบบที่เผลอได้'
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 3
  {
    id: 'skill-sixth-sense',
    name: { 
      en: 'Sixth Sense', 
      th: 'สัมผัสพิเศษ' 
    },
    description: { 
      th: 'สัมผัสพิเศษที่ไม่น่าเป็นไปได้ บอกคุณล่วงหน้าว่าภัยกำลังมา แม้ก่อนที่ศัตรูจะขยับตัว', 
      en: 'A heightened, improbable sense tells you in advance that danger is coming, even before an enemy moves.'
    },
    icon: 'skill-sixth-sense',
    thumbnail: 'skill-sixth-sense',
    tags: [ 'special', 'defense' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    type: SKILL_TYPE.COMBAT,
    archetype: SKILL_ARCHETYPE.DEFENSE,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'sixth-sense',
      priority: 1
    },
    tier: 3,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'Whenever you are targeted by an attack roll, the attacker must roll with disadvantage.',
              th: 'ทุกครั้งที่มีการทอยโจมตีที่มีเป้าหมายเป็นคุณ ให้ผู้โจมตีทอยด้วย ความเสียเปรียบ'
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockGeneralSkills: SkillConfig[] = [
  // Proficiency Skills
  {
    id: 'skill-proficiency-skill',
    name: {
      en: 'Proficiency Skill',
      th: 'ทักษะเชี่ยวชาญ'
    },
    description: {
      en: 'You have a proficiency in a skill.',
      th: 'คุณมีความเชี่ยวชาญในทักษะหนึ่ง'
    },
    icon: 'skill-proficiency-skill',
    thumbnail: 'skill-proficiency-skill',
    tags: [ 'general' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.GENERAL,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'proficiency',
      priority: 1
    },
    tier: 1,
    usedSlots: 1,
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
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill',
    name: {
      en: 'Expert Skill',
      th: 'ทักษะผู้เชี่ยวชาญ'
    },
    description: {
      en: 'You have an expertise in a skill.',
      th: 'คุณมีความเชี่ยวชาญสูงสุดในทักษะหนึ่ง'
    },
    icon: 'skill-expert-skill',
    thumbnail: 'skill-expert-skill',
    tags: [ 'general' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.GENERAL,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'proficiency',
      priority: 2
    },
    tier: 2,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-power',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-endurance',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-stealth',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-acrobatics',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-sprint',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-perception',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-insight',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-instinct',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-tinker',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-operate',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-finesse',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-recall',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-deduction',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-analyze',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-persuasion',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-deception',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-intimidation',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-performance',
            level: EFFECT_PROFICIENCY_LEVEL.EXPERT
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-master-skill',
    name: {
      en: 'Master Skill',
      th: 'ทักษะผู้เชี่ยวชาญสูงสุด'
    },
    description: {
      en: 'You have a mastery in a skill.',
      th: 'คุณมีความสามารถสูงสุดในทักษะหนึ่ง'
    },
    icon: 'skill-master-skill',
    thumbnail: 'skill-master-skill',
    tags: [ 'general' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.GENERAL,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'proficiency',
      priority: 3
    },
    tier: 3,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-power',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-endurance',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-stealth',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-acrobatics',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-sprint',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-perception',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-insight',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-instinct',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-tinker',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-operate',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-finesse',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-recall',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-deduction',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-analyze',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-persuasion',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-deception',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-intimidation',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          },
          {
            type: EFFECT_TYPE.PROFICIENCY,
            attributeId: 'skill-check-performance',
            level: EFFECT_PROFICIENCY_LEVEL.MASTER
          }
        ],
        numberOfSelections: 1
      }
    ]
  },

  // Tier 1
  {
    id: 'skill-jack-of-all-trades',
    name: { 
      en: 'Jack of All Trades', 
      th: 'สารพัดช่าง' 
    },
    description: { 
      th: 'คุณอาจไม่ใช่ผู้เชี่ยวชาญ แต่ก็ไม่เคยปล่อยให้ตัวเองไร้ความสามารถในเรื่องใด คุณพร้อมหยิบใช้ทักษะที่จำเป็นในทุกสถานการณ์ แม้จะไม่ใช่ในระดับสูงสุดก็ตาม', 
      en: 'You may not be an expert, but you have never let yourself be without a skill in any situation. You are ready to use the skills you need in every situation, even if they are not at the highest level.'
    },
    icon: 'skill-jack-of-all-trades',
    thumbnail: 'skill-jack-of-all-trades',
    tags: [ 'special', 'general' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.GENERAL,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'jack-of-all-trades',
      priority: 1
    },
    tier: 1,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'You get a bonus equal to the level of highest class / 3 rounded down to any roll using a skill you do not have proficiency in.',
              th: 'คุณได้รับโบนัสเท่ากับ เลเวลคลาสสูงสุด / 3 ปัดลง ในการทอยที่ใช้ทักษะใดๆ ที่คุณไม่มีความเชี่ยวชาญ'
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockClassMeisterSkills: SkillConfig[] = [
  {
    id: 'skill-gundam-blue-print',
    name: { 
      en: 'Gundam Blue Print', 
      th: 'แบบแปลน กันดั้ม' 
    },
    description: { 
      th: 'จากความปรารถนาที่สั่งสมมานาน คุณได้วางแผนอย่างละเอียดว่ากันดั้มในอุดมคติของคุณต้องสร้างอย่างไร', 
      en: 'From a long-held desire, you have meticulously planned how your ideal Gundam must be built.'
    },
    icon: 'skill-gundam-blue-print',
    thumbnail: 'skill-gundam-blue-print',
    tags: [ 'special', 'meister' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.CLASS,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'gundam-blue-print',
      priority: 1
    },
    classIds: [ 'class-meister' ],
    tier: 1,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'You have a complete blueprint for building a Gundam in your mind. The conditions and methods for its construction are subject to the Game Master\'s discretion. You cannot remove this skill.',
              th: 'คุณมีแบบแปลนการสร้างกันดั้มอยู่ในหัว เงื่อนไขและวิธีการสร้างขึ้นอยู่กับดุลยพินิจของเกมมาสเตอร์ คุณไม่สามารถถอดสกิลนี้ออกได้'
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-meister-survival',
    name: { 
      en: 'Meister Survival', 
      th: 'ทักษะเอาตัวรอดของ ไมสเตอร์' 
    },
    description: { 
      th: 'น็อตหนึ่งตัว ลวดหนึ่งเดียว หรือแม้แต่เทปพันสายไฟก็กลายสามารถกลายเป็นฟันเฟือง ให้ยังสามารถออกไปต่อสู้ได้', 
      en: 'One bolt, one wire, or even a twisted wire can become a gear, allowing you to keep fighting.'
    },
    icon: 'skill-meister-survival',
    thumbnail: 'skill-meister-survival',
    tags: [ 'special', 'meister' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.CLASS,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'meister-survival',
      priority: 1
    },
    classIds: [ 'class-meister' ],
    tier: 2,
    usedSlots: 1,
    usage: {
      type: SKILL_USAGE_TYPE.PER_REST,
      maxNumberOfUse: 1
    },
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'Before combat, you can repair your mecha to restore its durability by 1d8.',
              th: 'ก่อนเริ่มการต่อสู้ คุณสามารถซ่อมบำรุงฉุกเฉินให้หุ่นยนต์ของคุณ ฟื้นค่าความคงทาน เท่ากับ 1d8'
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-new-type',
    name: { 
      en: 'New Type', 
      th: 'นิวไทป์' 
    },
    description: { 
      en: 'I am a Gundam.', 
      th: 'ฉันคือ กันดั้ม' 
    },
    icon: 'skill-new-type',
    thumbnail: 'skill-new-type',
    tags: [ 'special', 'meister' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: SKILL_TYPE.CLASS,
    archetype: SKILL_ARCHETYPE.UTILITY,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'new-type',
      priority: 1
    },
    classIds: [ 'class-meister' ],
    tier: 3,
    usedSlots: 1,
    effectSelectionRule: [
      {
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'While driving a mecha, you get a +2 bonus to your armor class and a bonus when rolling attack rolls.',
              th: 'ในขณะที่ขับหุ่นยนต์ คุณได้รับโบนัส +2 ให้กับระดับเกราะ และได้รับความได้เปรียบเปรียบเมื่อทอยโจมตี'
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

// Combined export for all attributes
export const mockAllSkills = [
  ...mockSkills,
  ...mockAttackSkills,
  ...mockDefenseSkills,
  ...mockGeneralSkills,
  ...mockClassMeisterSkills
];

export default mockAllSkills;
