import type { ClassSkillConfig, GeneralSkillConfig, RoleSkillConfig } from '@/types/config/skill';
import { SKILL_TYPE, SKILL_STACK_TYPE } from '@/constants/config/skill';
import { ADVANTAGE_EFFECT_TYPE, BONUS_EFFECT_TYPE, EFFECT_ID_OPTION, EFFECT_TARGET_TYPE, SPECIALTY_EFFECT_TYPE, TALENT_EFFECT_TYPE } from '@/constants/config/effect';
import { CLASS_ROLE_TYPE } from '@/constants/config/class';

export const mockGeneralSkills: GeneralSkillConfig[] = [
  // Tier 1
  // Promising Skill
  {
    id: 'skill-promising-skill-power',
    name: { en: 'Promising Skill (Power)', th: 'ผู้มีพรสวรรค์ (พละกำลัง)' },
    description: { en: 'You have a promising skill in Power.', th: 'คุณมีพรสวรรค์ในทักษะ (พละกำลัง)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'power-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'power', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-power' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-endurance',
    name: { en: 'Promising Skill (Endurance)', th: 'ผู้มีพรสวรรค์ (ความอดทน)' },
    description: { en: 'You have a promising skill in Endurance.', th: 'คุณมีพรสวรรค์ในทักษะ (ความอดทน)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'endurance-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'endurance', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-endurance' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-stealth',
    name: { en: 'Promising Skill (Stealth)', th: 'ผู้มีพรสวรรค์ (การหลบซ่อน)' },
    description: { en: 'You have a promising skill in Stealth.', th: 'คุณมีพรสวรรค์ในทักษะ (การหลบซ่อน)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'stealth-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'stealth', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-stealth' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-acrobatics',
    name: { en: 'Promising Skill (Acrobatics)', th: 'ผู้มีพรสวรรค์ (กายกรรม)' },
    description: { en: 'You have a promising skill in Acrobatics.', th: 'คุณมีพรสวรรค์ในทักษะ (กายกรรม)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'acrobatics-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'acrobatics', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-acrobatics' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-sprint',
    name: { en: 'Promising Skill (Sprint)', th: 'ผู้มีพรสวรรค์ (การวิ่ง)' },
    description: { en: 'You have a promising skill in Sprint.', th: 'คุณมีพรสวรรค์ในทักษะ (การวิ่ง)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sprint-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'sprint', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-sprint' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-perception',
    name: { en: 'Promising Skill (Perception)', th: 'ผู้มีพรสวรรค์ (การรับรู้)' },
    description: { en: 'You have a promising skill in Perception.', th: 'คุณมีพรสวรรค์ในทักษะ (การรับรู้)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'perception-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'perception', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-perception' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-insight',
    name: { en: 'Promising Skill (Insight)', th: 'ผู้มีพรสวรรค์ (การเข้าใจ)' },
    description: { en: 'You have a promising skill in Insight.', th: 'คุณมีพรสวรรค์ในทักษะ (การเข้าใจ)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'insight-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'insight', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-insight' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-instinct',
    name: { en: 'Promising Skill (Instinct)', th: 'ผู้มีพรสวรรค์ (สัญชาตญาณ)' },
    description: { en: 'You have a promising skill in Instinct.', th: 'คุณมีพรสวรรค์ในทักษะ (สัญชาตญาณ)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'instinct-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'instinct', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-instinct' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-tinker',
    name: { en: 'Promising Skill (Tinker)', th: 'ผู้มีพรสวรรค์ (การซ่อมแซม)' },
    description: { en: 'You have a promising skill in Tinker.', th: 'คุณมีพรสวรรค์ในทักษะ (การซ่อมแซม)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'tinker-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'tinker', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-tinker' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-operate',
    name: { en: 'Promising Skill (Operate)', th: 'ผู้มีพรสวรรค์ (การใช้งาน)' },
    description: { en: 'You have a promising skill in Operate.', th: 'คุณมีพรสวรรค์ในทักษะ (การใช้งาน)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'operate-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'operate', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-operate' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-finesse',
    name: { en: 'Promising Skill (Finesse)', th: 'ผู้มีพรสวรรค์ (ความแม่นยำ)' },
    description: { en: 'You have a promising skill in Finesse.', th: 'คุณมีพรสวรรค์ในทักษะ (ความแม่นยำ)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'finesse-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'finesse', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-finesse' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-recall',
    name: { en: 'Promising Skill (Recall)', th: 'ผู้มีพรสวรรค์ (การจดจำ)' },
    description: { en: 'You have a promising skill in Recall.', th: 'คุณมีพรสวรรค์ในทักษะ (การจดจำ)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'recall-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'recall', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-recall' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-deduction',
    name: { en: 'Promising Skill (Deduction)', th: 'ผู้มีพรสวรรค์ (การอนุมาน)' },
    description: { en: 'You have a promising skill in Deduction.', th: 'คุณมีพรสวรรค์ในทักษะ (การอนุมาน)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'deduction-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'deduction', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-deduction' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-analyze',
    name: { en: 'Promising Skill (Analyze)', th: 'ผู้มีพรสวรรค์ (การวิเคราะห์)' },
    description: { en: 'You have a promising skill in Analyze.', th: 'คุณมีพรสวรรค์ในทักษะ (การวิเคราะห์)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'analyze-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'analyze', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-analyze' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-persuasion',
    name: { en: 'Promising Skill (Persuasion)', th: 'ผู้มีพรสวรรค์ (การโน้มน้าว)' },
    description: { en: 'You have a promising skill in Persuasion.', th: 'คุณมีพรสวรรค์ในทักษะ (การโน้มน้าว)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'persuasion-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'persuasion', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-persuasion' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-deception',
    name: { en: 'Promising Skill (Deception)', th: 'ผู้มีพรสวรรค์ (การหลอกลวง)' },
    description: { en: 'You have a promising skill in Deception.', th: 'คุณมีพรสวรรค์ในทักษะ (การหลอกลวง)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'deception-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'deception', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-deception' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-intimidation',
    name: { en: 'Promising Skill (Intimidation)', th: 'ผู้มีพรสวรรค์ (การข่มขู่)' },
    description: { en: 'You have a promising skill in Intimidation.', th: 'คุณมีพรสวรรค์ในทักษะ (การข่มขู่)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'intimidation-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'intimidation', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-intimidation' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-promising-skill-performance',
    name: { en: 'Promising Skill (Performance)', th: 'ผู้มีพรสวรรค์ (การแสดง)' },
    description: { en: 'You have a promising skill in Performance.', th: 'คุณมีพรสวรรค์ในทักษะ (การแสดง)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'performance-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'performance', 'talent', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'skill-performance' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Basic Saving
  {
    id: 'skill-basic-saving-strength',
    name: { en: 'Basic Saving (Strength)', th: 'หลบเลี่ยงขั้นพื้นฐาน (ด้วยความแข็งแกร่ง)' },
    description: { en: 'You have trained yourself to evade basic threats using your strength.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นพื้นฐาน (ด้วยความแข็งแกร่ง)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'strength-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'strength', 'saving', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'saving-strength' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-basic-saving-speed',
    name: { en: 'Basic Saving (Speed)', th: 'หลบเลี่ยงขั้นพื้นฐาน (ด้วยความเร็ว)' },
    description: { en: 'You have trained yourself to evade basic threats using your speed.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นพื้นฐาน (ด้วยความเร็ว)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'speed-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'speed', 'saving', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'saving-speed' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-basic-saving-sense',
    name: { en: 'Basic Saving (Sense)', th: 'หลบเลี่ยงขั้นพื้นฐาน (ด้วยประสาทสัมผัส)' },
    description: { en: 'You have trained yourself to evade basic threats using your senses.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นพื้นฐาน (ด้วยประสาทสัมผัส)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sense-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'sense', 'saving', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'saving-sense' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-basic-saving-knowledge',
    name: { en: 'Basic Saving (Knowledge)', th: 'หลบเลี่ยงขั้นพื้นฐาน (ด้วยความรู้)' },
    description: { en: 'You have trained yourself to evade basic threats using your knowledge.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นพื้นฐาน (ด้วยความรู้)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'knowledge-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'knowledge', 'saving', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'saving-knowledge' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-basic-saving-technique',
    name: { en: 'Basic Saving (Technique)', th: 'หลบเลี่ยงขั้นพื้นฐาน (ด้วยเทคนิค)' },
    description: { en: 'You have trained yourself to evade basic threats using your technique.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นพื้นฐาน (ด้วยเทคนิค)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'technique-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'technique', 'saving', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'saving-technique' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-basic-saving-presence',
    name: { en: 'Basic Saving (Presence)', th: 'หลบเลี่ยงขั้นพื้นฐาน (ด้วยการตระหนัก)' },
    description: { en: 'You have trained yourself to evade basic threats using your presence.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นพื้นฐาน (ด้วยการตระหนัก)' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'presence-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'presence', 'saving', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PROMISING, attributeId: 'saving-presence' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Special Skills
  {
    id: 'skill-sprint-boost',
    name: { en: 'Sprint Boost', th: 'พุ่งเร็ว' },
    description: { en: 'You can run faster than others.', th: 'คุณสามารถวิ่งได้เร็วกว่าคนทั่วไป' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sprint-boost',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'speed', 'movement', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: BONUS_EFFECT_TYPE.BONUS, target: EFFECT_TARGET_TYPE.ATTRIBUTE, id: 'attr-movement-speed', modifierFormula: '2' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-rapid-recovery',
    name: { en: 'Rapid Recovery', th: 'ฟื้นตัวเร็ว' },
    description: { en: 'You have a fast recovery.', th: 'คุณมีร่างกายที่ฟื้นฟูอย่างรวดเร็ว' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'rapid-recovery',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'recovery', 'rest', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'When you rest, recover 1d4 Hit Points.', th: 'เมื่อเข้าสู่ช่วง rest คุณจะฟื้นฟู Hit points 1d4' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-entertainer',
    name: { en: 'Entertainer', th: 'นักแสดง' },
    description: { en: 'You are a natural entertainer.', th: 'คุณคือผู้สร้างความสนุกสนาน' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'entertainer',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'performance', 'advantage', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE, 
            target: EFFECT_TARGET_TYPE.ATTRIBUTE, 
            id: 'skill-performance'
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-push-your-luck',
    name: { en: 'Push Your Luck', th: 'เสี่ยงโชค' },
    description: { en: 'You gamble on your luck.', th: 'คุณคือนักเสี่ยงโชค' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'push-your-luck',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'luck', 'reroll', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'Once per rest, after a failed roll, you may reroll with +2 bonus. If you fail again, you suffer a penalty set by the GM.', th: 'หนึ่งครั้งต่อ rest หลังจากทอยพลาด คุณสามารถทอยใหม่ได้โดยมีโบนัส +2 หากพลาดอีกจะได้รับบทลงโทษตามที่ GM กำหนด' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-keen-senses',
    name: { en: 'Keen Senses', th: 'ประสาทสัมผัสเฉียบคม' },
    description: { en: 'You have a keen sense of your surroundings.', th: 'คุณมีความสามารถในการสังเขปสิ่งที่อยู่รอบข้าง' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'keen-senses',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'perception', 'instinct', 'advantage', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'Once per rest, you gain Advantage on Perception or Instinct Skill Check.', th: 'หนึ่งครั้งต่อ rest คุณได้รับ Advantage ใน Perception หรือ Instinct Skill Check' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-focused-study',
    name: { en: 'Focused Study', th: 'ตั้งใจศึกษา' },
    description: { en: 'You have a focused mind.', th: 'คุณมีความสามารถในการจดจำสิ่งที่เคยเรียนรู้มาก่อนได้ดี' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'focused-study',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'recall', 'advantage', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'Gain Advantage on Recall Skill Check for topics you have studied before.', th: 'ได้ Advantage ใน Recall Skill Check สำหรับหัวข้อที่เคยเรียนรู้มาก่อน' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-resourceful',
    name: { en: 'Resourceful', th: 'ช่างหาทรัพยากร' },
    description: { en: 'You are a resourceful person.', th: 'คุณคือคนที่ช่างหาทรัพยากร' },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'resourceful',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'resource', 'exploration', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'Find 50% more or in 50% less time when searching for basic resources in suitable environments.', th: 'ค้นหาทรัพยากรพื้นฐานได้มากขึ้น 50% หรือใช้เวลาน้อยลง 50% ในสภาพแวดล้อมที่เหมาะสม' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-brute-strength',
    name: { en: 'Brute Strength', th: 'พละกำลังดิบ' },
    description: { 
      en: 'While others rely on finesse, expression, or subtlety — you let your muscles do the talking.', 
      th: 'ในขณะที่คนอื่นใช้ความพลิ้วไหวหรือสีหน้า คุณปล่อยใช้พละกำลังแก้ไขปัญหา' 
    },
    tier: 1,
    type: SKILL_TYPE.GENERAL,
    stackId: 'brute-strength',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'strength', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'You can choose to gain an "advantage" on your next attack roll, but you will be in the "Reckless" condition until your next turn.', 
              th: 'คุณสามารถใช้ค่าโบนัส "ความแข็งแกร่ง" ในการทอยทักษะ "กายกรรม", "การวิ่งเร็ว", "สัญชาตญาณ" และ "การข่มขู่" แทนได้' 
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },

  // Tier 2
  // Expert Skill
  {
    id: 'skill-expert-skill-power',
    name: { en: 'Expert Skill (Power)', th: 'ผู้เชี่ยวชาญ (พลัง)' },
    description: { en: 'You are an expert in Power.', th: 'คุณเชียวชาญในทักษะ (พละกำลัง)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'power-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'power', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-power' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-endurance',
    name: { en: 'Expert Skill (Endurance)', th: 'ผู้เชี่ยวชาญ (ความทนทาน)' },
    description: { en: 'You are an expert in Endurance.', th: 'คุณเชียวชาญในทักษะ (ความทนทาน)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'endurance-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'endurance', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-endurance' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-stealth',
    name: { en: 'Expert Skill (Stealth)', th: 'ผู้เชี่ยวชาญ (การหลบซ่อน)' },
    description: { en: 'You are an expert in Stealth.', th: 'คุณเชียวชาญในทักษะ (การหลบซ่อน)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'stealth-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'stealth', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-stealth' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-acrobatics',
    name: { en: 'Expert Skill (Acrobatics)', th: 'ผู้เชี่ยวชาญ (กายกรรม)' },
    description: { en: 'You are an expert in Acrobatics.', th: 'คุณเชียวชาญในทักษะ (กายกรรม)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'acrobatics-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'acrobatics', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-acrobatics' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-sprint',
    name: { en: 'Expert Skill (Sprint)', th: 'ผู้เชี่ยวชาญ (การวิ่ง)' },
    description: { en: 'You are an expert in Sprint.', th: 'คุณเชียวชาญในทักษะ (การวิ่ง)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sprint-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'sprint', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-sprint' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-perception',
    name: { en: 'Expert Skill (Perception)', th: 'ผู้เชี่ยวชาญ (การรับรู้)' },
    description: { en: 'You are an expert in Perception.', th: 'คุณเชียวชาญในทักษะ (การรับรู้)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'perception-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'perception', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-perception' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-insight',
    name: { en: 'Expert Skill (Insight)', th: 'ผู้เชี่ยวชาญ (การเข้าใจ)' },
    description: { en: 'You are an expert in Insight.', th: 'คุณเชียวชาญในทักษะ (การเข้าใจ)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'insight-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'insight', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-insight' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-instinct',
    name: { en: 'Expert Skill (Instinct)', th: 'ผู้เชี่ยวชาญ (สัญชาตญาณ)' },
    description: { en: 'You are an expert in Instinct.', th: 'คุณเชียวชาญในทักษะ (สัญชาตญาณ)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'instinct-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'instinct', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-instinct' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-tinker',
    name: { en: 'Expert Skill (Tinker)', th: 'ผู้เชี่ยวชาญ (การซ่อมแซม)' },
    description: { en: 'You are an expert in Tinker.', th: 'คุณเชียวชาญในทักษะ (การซ่อมแซม)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'tinker-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'tinker', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-tinker' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-operate',
    name: { en: 'Expert Skill (Operate)', th: 'ผู้เชี่ยวชาญ (การใช้งาน)' },
    description: { en: 'You are an expert in Operate.', th: 'คุณเชียวชาญในทักษะ (การใช้งาน)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'operate-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'operate', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-operate' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-finesse',
    name: { en: 'Expert Skill (Finesse)', th: 'ผู้เชี่ยวชาญ (ความแม่นยำ)' },
    description: { en: 'You are an expert in Finesse.', th: 'คุณเชียวชาญในทักษะ (ความแม่นยำ)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'finesse-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'finesse', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-finesse' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-recall',
    name: { en: 'Expert Skill (Recall)', th: 'ผู้เชี่ยวชาญ (การจดจำ)' },
    description: { en: 'You are an expert in Recall.', th: 'คุณเชียวชาญในทักษะ (การจดจำ)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'recall-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'recall', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-recall' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-deduction',
    name: { en: 'Expert Skill (Deduction)', th: 'ผู้เชี่ยวชาญ (การอนุมาน)' },
    description: { en: 'You are an expert in Deduction.', th: 'คุณเชียวชาญในทักษะ (การอนุมาน)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'deduction-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'deduction', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-deduction' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-analyze',
    name: { en: 'Expert Skill (Analyze)', th: 'ผู้เชี่ยวชาญ (การวิเคราะห์)' },
    description: { en: 'You are an expert in Analyze.', th: 'คุณเชียวชาญในทักษะ (การวิเคราะห์)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'analyze-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'analyze', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-analyze' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-persuasion',
    name: { en: 'Expert Skill (Persuasion)', th: 'ผู้เชี่ยวชาญ (การโน้มน้าว)' },
    description: { en: 'You are an expert in Persuasion.', th: 'คุณเชียวชาญในทักษะ (การโน้มน้าว)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'persuasion-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'persuasion', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-persuasion' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-skill-deception',
    name: { en: 'Expert Skill (Deception)', th: 'ผู้เชี่ยวชาญ (การหลอกลวง)' },
    description: { en: 'You are an expert in Deception.', th: 'คุณเชียวชาญในทักษะ (การหลอกลวง)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'deception-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'deception', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1'
  },
  {
    id: 'skill-expert-skill-intimidation',
    name: { en: 'Expert Skill (Intimidation)', th: 'ผู้เชี่ยวชาญ (การข่มขู่)' },
    description: { en: 'You are an expert in Intimidation.', th: 'คุณเชียวชาญในทักษะ (การข่มขู่)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'intimidation-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'intimidation', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1'
  },
  {
    id: 'skill-expert-skill-performance',
    name: { en: 'Expert Skill (Performance)', th: 'ผู้เชี่ยวชาญ (การแสดง)' },
    description: { en: 'You are an expert in Performance.', th: 'คุณเชียวชาญในทักษะ (การแสดง)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'performance-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'performance', 'talent', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'skill-performance' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Intermediate Saving
  {
    id: 'skill-intermediate-saving-strength',
    name: { en: 'Intermediate Saving (Strength)', th: 'หลบเลี่ยงขั้นกลาง (ด้วยความแข็งแกร่ง)' },
    description: { en: 'You have trained yourself to evade a lot of threats using your strength.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นกลาง (ด้วยความแข็งแกร่ง)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'strength-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'strength', 'saving', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'saving-strength' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-intermediate-saving-speed',
    name: { en: 'Intermediate Saving (Speed)', th: 'หลบเลี่ยงขั้นกลาง (ความเร็ว)' },
    description: { en: 'You have trained yourself to evade a lot of threats using your speed.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นกลาง (ด้วยความเร็ว)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'speed-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'speed', 'saving', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'saving-speed' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-intermediate-saving-sense',
    name: { en: 'Intermediate Saving (Sense)', th: 'หลบเลี่ยงขั้นกลาง (ด้วยประสาทสัมผัส)' },
    description: { en: 'You have trained yourself to evade a lot of threats using your senses.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นกลาง (ด้วยประสาทสัมผัส)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sense-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'sense', 'saving', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'saving-sense' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-intermediate-saving-knowledge',
    name: { en: 'Intermediate Saving (Knowledge)', th: 'หลบเลี่ยงขั้นกลาง (ด้วยความรู้)' },
    description: { en: 'You have trained yourself to evade a lot of threats using your knowledge.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นกลาง (ด้วยความรู้)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'knowledge-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'knowledge', 'saving', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'saving-knowledge' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-intermediate-saving-technique',
    name: { en: 'Intermediate Saving (Technique)', th: 'หลบเลี่ยงขั้นกลาง (ด้วยเทคนิค)' },
    description: { en: 'You have trained yourself to evade a lot of threats using your technique.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นกลาง (ด้วยเทคนิค)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'technique-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'technique', 'saving', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'saving-technique' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-intermediate-saving-presence',
    name: { en: 'Intermediate Saving (Presence)', th: 'หลบเลี่ยงขั้นกลาง (ด้วยการตระหนัก)' },
    description: { en: 'You have trained yourself to evade a lot of threats using your presence.', th: 'คุณได้ฝึกที่จะหลีกเลี่ยงอันตรายขั้นกลาง (ด้วยการตระหนัก)' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'presence-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'presence', 'saving', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.EXPERT, attributeId: 'saving-presence' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-quality-time',
    name: { en: 'Quality Time', th: 'ใช้เวลาได้คุ้มค่า' },
    description: { en: 'You can make the most of your break.', th: 'คุณสามารถใช้เวลาพักได้อย่างคุ้มค่า' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'quality-time',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'downtime', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [ {
      effects: [ {
        type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
        flavorText: { en: 'Gain +1 Short Rest Downtime Points, +2 Long Rest Downtime Points.', th: 'ได้รับ +1 Short Rest Downtime และ +2 Long Rest Downtime' }
      } ],
      numberOfSelections: 1
    } ]
  },
  {
    id: 'skill-iron-will',
    name: { en: 'Iron Will', th: 'จิตใจแข็งแกร่ง' },
    description: { en: 'You have a strong will to resist mental effects.', th: 'คุณมีจิตใจที่แข็งแกร่งที่จะต้านทานผลกระทบด้านจิตใจ' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'iron-will',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'insight', 'mental', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [ {
      effects: [ {
        type: BONUS_EFFECT_TYPE.BONUS,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'saving-presence',
        modifierFormula: 'floor(character-level/3)'
      } ],
      numberOfSelections: 1
    } ]
  },
  {
    id: 'skill-improvised-tool',
    name: { en: 'Improvised Tool', th: 'เครื่องมือเฉพาะกิจ' },
    description: { en: 'You can adapt tools to your needs.', th: 'คุณสามารถประยุกต์ใช้เครื่องมืออื่นที่คล้ายกันแทนเครื่องมือเฉพาะต่างๆได้' },
    tier: 2,
    type: SKILL_TYPE.GENERAL,
    stackId: 'improvised-tool',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'tool', 'flexibility', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'You can use similar tools for Skill Checks without penalty.', th: 'คุณสามารถใช้เครื่องมืออื่นที่คล้ายกันแทนเครื่องมือเฉพาะสำหรับ Skill Check ได้โดยไม่มีบทลงโทษ' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },

  // Tier 3
  // Prodigious Skill
  {
    id: 'skill-prodigious-skill-power',
    name: { en: 'Prodigious Skill (Power)', th: 'ผู้เป็นอัฉริยะ (พละกำลัง)' },
    description: { en: 'You are an prodigious in Power.', th: 'คุณคืออัฉริยะในทักษะ (พละกำลัง)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'power-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'power', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-power' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-endurance',
    name: { en: 'Prodigious Skill (Endurance)', th: 'ผู้เป็นอัฉริยะ (ความทนทาน)' },
    description: { en: 'You are an prodigious in Endurance.', th: 'คุณคืออัฉริยะในทักษะ (ความทนทาน)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'endurance-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'endurance', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-endurance' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-stealth',
    name: { en: 'Prodigious Skill (Stealth)', th: 'ผู้เป็นอัฉริยะ (การหลบซ่อน)' },
    description: { en: 'You are an prodigious in Stealth.', th: 'คุณคืออัฉริยะในทักษะ (การหลบซ่อน)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'stealth-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'stealth', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-stealth' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-acrobatics',
    name: { en: 'Prodigious Skill (Acrobatics)', th: 'ผู้เป็นอัฉริยะ (กายกรรม)' },
    description: { en: 'You are an prodigious in Acrobatics.', th: 'คุณคืออัฉริยะในทักษะ (กายกรรม)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'acrobatics-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'acrobatics', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-acrobatics' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-sprint',
    name: { en: 'Prodigious Skill (Sprint)', th: 'ผู้เป็นอัฉริยะ (การวิ่ง)' },
    description: { en: 'You are an prodigious in Sprint.', th: 'คุณคืออัฉริยะในทักษะ (การวิ่ง)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sprint-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'sprint', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-sprint' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-perception',
    name: { en: 'Prodigious Skill (Perception)', th: 'ผู้เป็นอัฉริยะ (การรับรู้)' },
    description: { en: 'You are an prodigious in Perception.', th: 'คุณคืออัฉริยะในทักษะ (การรับรู้)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'perception-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'perception', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-perception' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-insight',
    name: { en: 'Prodigious Skill (Insight)', th: 'ผู้เป็นอัฉริยะ (การเข้าใจ)' },
    description: { en: 'You are an prodigious in Insight.', th: 'คุณคืออัฉริยะในทักษะ (การเข้าใจ)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'insight-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'insight', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-insight' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-instinct',
    name: { en: 'Prodigious Skill (Instinct)', th: 'ผู้เป็นอัฉริยะ (สัญชาตญาณ)' },
    description: { en: 'You are an prodigious in Instinct.', th: 'คุณคืออัฉริยะในทักษะ (สัญชาตญาณ)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'instinct-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'instinct', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-instinct' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-tinker',
    name: { en: 'Prodigious Skill (Tinker)', th: 'ผู้เป็นอัฉริยะ (การซ่อมแซม)' },
    description: { en: 'You are an prodigious in Tinker.', th: 'คุณคืออัฉริยะในทักษะ (การซ่อมแซม)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'tinker-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'tinker', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-tinker' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-operate',
    name: { en: 'Prodigious Skill (Operate)', th: 'ผู้เป็นอัฉริยะ (การใช้งาน)' },
    description: { en: 'You are an prodigious in Operate.', th: 'คุณคืออัฉริยะในทักษะ (การใช้งาน)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'operate-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'operate', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-operate' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-finesse',
    name: { en: 'Prodigious Skill (Finesse)', th: 'ผู้เป็นอัฉริยะ (ความแม่นยำ)' },
    description: { en: 'You are an prodigious in Finesse.', th: 'คุณคืออัฉริยะในทักษะ (ความแม่นยำ)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'finesse-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'finesse', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-finesse' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-recall',
    name: { en: 'Prodigious Skill (Recall)', th: 'ผู้เป็นอัฉริยะ (การจดจำ)' },
    description: { en: 'You are an prodigious in Recall.', th: 'คุณคืออัฉริยะในทักษะ (การจดจำ)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'recall-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'recall', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-recall' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-deduction',
    name: { en: 'Prodigious Skill (Deduction)', th: 'ผู้เป็นอัฉริยะ (การอนุมาน)' },
    description: { en: 'You are an prodigious in Deduction.', th: 'คุณคืออัฉริยะในทักษะ (การอนุมาน)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'deduction-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'deduction', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-deduction' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-analyze',
    name: { en: 'Prodigious Skill (Analyze)', th: 'ผู้เป็นอัฉริยะ (การวิเคราะห์)' },
    description: { en: 'You are an prodigious in Analyze.', th: 'คุณคืออัฉริยะในทักษะ (การวิเคราะห์)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'analyze-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'analyze', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-analyze' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-persuasion',
    name: { en: 'Prodigious Skill (Persuasion)', th: 'ผู้เป็นอัฉริยะ (การโน้มน้าว)' },
    description: { en: 'You are an prodigious in Persuasion.', th: 'คุณคืออัฉริยะในทักษะ (การโน้มน้าว)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'persuasion-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'persuasion', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-persuasion' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-deception',
    name: { en: 'Prodigious Skill (Deception)', th: 'ผู้เป็นอัฉริยะ (การหลอกลวง)' },
    description: { en: 'You are an prodigious in Deception.', th: 'คุณคืออัฉริยะในทักษะ (การหลอกลวง)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'deception-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'deception', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-deception' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-intimidation',
    name: { en: 'Prodigious Skill (Intimidation)', th: 'ผู้เป็นอัฉริยะ (การข่มขู่)' },
    description: { en: 'You are an prodigious in Intimidation.', th: 'คุณคืออัฉริยะในทักษะ (การข่มขู่)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'intimidation-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'intimidation', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-intimidation' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-prodigious-skill-performance',
    name: { en: 'Prodigious Skill (Performance)', th: 'ผู้เป็นอัฉริยะ (การแสดง)' },
    description: { en: 'You are an prodigious in Performance.', th: 'คุณคืออัฉริยะในทักษะ (การแสดง)' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'performance-talent',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'performance', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: TALENT_EFFECT_TYPE.PRODIGIOUS, attributeId: 'skill-performance' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Advanced Saving
  {
    id: 'skill-advanced-saving-strength',
    name: { en: 'Advanced Saving (Strength)', th: 'ผู้เชียวชาญการหลบเลี่ยง (ด้วยความแข็งแกร่ง)' },
    description: { en: 'You know how to handle threats properly using your strength.', th: 'คุณรู้วิธีการจัดการกับอันตรายด้วยความแข็งแกร่งของคุณ' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'strength-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'strength', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: TALENT_EFFECT_TYPE.PRODIGIOUS, 
            attributeId: 'saving-strength' 
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-advanced-saving-speed',
    name: { en: 'Advanced Saving (Speed)', th: 'ผู้เชียวชาญการหลบเลี่ยง (ด้วยความเร็ว)' },
    description: { en: 'You know how to handle threats properly using your speed.', th: 'คุณรู้วิธีการจัดการกับอันตรายด้วยความเร็วของคุณ' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'speed-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'speed', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: TALENT_EFFECT_TYPE.PRODIGIOUS, 
            attributeId: 'saving-speed' 
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-advanced-saving-sense',
    name: { en: 'Advanced Saving (Sense)', th: 'ผู้เชียวชาญการหลบเลี่ยง (ด้วยประสาทสัมผัส)' },
    description: { en: 'You know how to handle threats properly using your senses.', th: 'คุณรู้วิธีการจัดการกับอันตรายด้วยประสาทสัมผัสของคุณ' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sense-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'sense', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: TALENT_EFFECT_TYPE.PRODIGIOUS, 
            attributeId: 'saving-sense' 
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-advanced-saving-knowledge',
    name: { en: 'Advanced Saving (Knowledge)', th: 'ผู้เชียวชาญการหลบเลี่ยง (ด้วยความรู้)' },
    description: { en: 'You know how to handle threats properly using your knowledge.', th: 'คุณรู้วิธีการจัดการกับอันตรายด้วยความรู้ของคุณ' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'knowledge-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'knowledge', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: TALENT_EFFECT_TYPE.PRODIGIOUS, 
            attributeId: 'saving-knowledge' 
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-advanced-saving-technique',
    name: { en: 'Advanced Saving (Technique)', th: 'ผู้เชียวชาญการหลบเลี่ยง (ด้วยเทคนิค)' },
    description: { en: 'You know how to handle threats properly using your technique.', th: 'คุณรู้วิธีการจัดการกับอันตรายด้วยเทคนิคของคุณ' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'technique-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'technique', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: TALENT_EFFECT_TYPE.PRODIGIOUS, 
            attributeId: 'saving-technique' 
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-advanced-saving-presence',
    name: { en: 'Advanced Saving (Presence)', th: 'ผู้เชียวชาญการหลบเลี่ยง (ด้วยการตระหนัก)' },
    description: { en: 'You know how to handle threats properly using your presence.', th: 'คุณรู้วิธีการจัดการกับอันตรายด้วยการตระหนักของคุณ' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'presence-saving',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'presence', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: TALENT_EFFECT_TYPE.PRODIGIOUS, 
            attributeId: 'saving-presence' 
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-sky-walker',
    name: { en: 'Sky Walker', th: 'เดินบนท้องฟ้า' },
    description: { en: 'You can walk on the sky as if it were solid ground.', th: 'คุณสามารถเดินบนท้องฟ้าได้ราวกับเดินบนพื้นดิน' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'sky-walker',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'mobility', 'supernatural', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'You can walk on the sky as if it were solid ground.', th: 'คุณสามารถเดินบนท้องฟ้าได้ราวกับเดินบนพื้นดิน' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-expert-of-all-trades',
    name: { en: 'Expert of All Trades', th: 'ผู้เชียวชาญรอบด้าน' },
    description: { en: 'You are an expert of all trades.', th: 'คุณเชียวชาญรอบด้าน' },
    tier: 3,
    type: SKILL_TYPE.GENERAL,
    stackId: 'expert-of-all-trades',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'versatile', 'talent', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.EXPERT,
            attributeId: EFFECT_ID_OPTION.ALL_SKILL
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockAttackerRoleSkills: RoleSkillConfig[] = [
  // Tier 1
  {
    id: 'skill-devastating-attacker',
    name: { en: 'Devastating Attacker', th: 'ผู้โจมตีที่รุนแรง' },
    description: { en: 'You gain Advantage on your damage roll.', th: 'คุณได้ Advantage ในการทอยความเสียหาย' },
    tier: 1,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'devastating-attacker',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'attack', 'advantage', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1'
  },
  {
    id: 'skill-street-brawler',
    name: { en: 'Street Brawler', th: 'นักสู้ข้างถนน' },
    description: { en: 'You can use "Unarmed Attack (Enhanced)" and gain Advantage on your damage roll.', th: 'คุณสามารถใช้ "โจมตีด้วยหมัดเปล่า (เพิ่มความรุนแรง)" และได้ Advantage ในการทอยความเสียหาย' },
    tier: 1,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'street-brawler',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'attack', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    actionSelectionRule: [ {
      actionIds: [ 'action-unarmed-attack-enhanced' ],
      numberOfSelections: 1
    } ]
  },
  {
    id: 'skill-reckless',
    name: { en: 'Reckless', th: 'บ้าบิ่น' },
    description: { en: 'You are reckless and do not care about your safety.', th: 'คุณบ้าบิ่นและไม่คำนึงถึงความปลอดภัยของคุณ' },
    tier: 1,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'reckless',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'attack', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'You can choose to gain an "advantage" on your next attack roll, but you will be in the "Reckless" condition until your next turn.', th: 'คุณสามารถเลือกที่จะ "ได้เปรียบ" ในการทอยโจมตี, แต่คุณจะติดสถานะ "บ้าบิ่น" จนกว่าจะถึงตาของคุณอีกครั้ง' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 2
  {
    id: 'skill-quick-attack',
    name: { en: 'Quick Attack', th: 'การโจมตีอย่างรวดเร็ว' },
    description: { en: 'You can attack twice in a single turn.', th: 'คุณสามารถโจมตีสองครั้งในการต่อสู้ในครั้งเดียวกัน' },
    tier: 2,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'quick-attack',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'attack', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'You can choose to make your first attack a "Fast Attack" action.', 
              th: 'คุณสามารถเลือกให้การ "โจมตี" ด้วยอาวุธหรือมือเปล่าครั้งแรกของคุณมีเป็น "แอคชั่นรวดเร็ว" ได้' 
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-alert',
    name: { en: 'Alert', th: 'ระวังตัว' },
    description: { en: 'You can react to threats immediately.', th: 'คุณรับมือได้ทันทีเมื่อมีอันตรายมาหาคุณ' },
    tier: 2,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'alert',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'alert', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [ {
      effects: [ {
        type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
        flavorText: { en: 'You cannot be Surprised.', th: 'คุณไม่มีทางถูก Surprise' }
      } ],
      numberOfSelections: 1
    } ]
  },
  {
    id: 'skill-fast-reaction',
    name: { en: 'Fast Reaction', th: 'การตอบสนองอย่างรวดเร็ว' },
    description: { en: 'You can react to threats immediately.', th: 'คุณรับมือได้ทันทีเมื่อมีอันตรายมาหาคุณ' },
    tier: 2,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'fast-reaction',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'reaction', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [ {
      effects: [ {
        type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'attr-initiative'
      } ],
      numberOfSelections: 1
    } ]
  },
  // Tier 3
  {
    id: 'skill-full-throttle',
    name: { en: 'Full Throttle', th: 'ทุ่มสุดแรง' },
    description: { 
      en: 'You unleash your full potential without restraint',
      th: 'คุณปลดปล่อยพลังทั้งหมดโดยไม่ยั้ง' 
    },
    tier: 3,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'full-throttle',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'attack', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'You can choose to gain a bonus +10 "STR Dmg" on your next attack roll, but you will be in the "Reckless" condition until your next turn.', 
              th: 'คุณสามารถเลือกที่จะเพิ่มโบนัส "ความเสียจากกำลัง" + 10, แต่คุณจะติดสถานะ "บ้าบิ่น" จนกว่าจะถึงตาของคุณอีกครั้ง' 
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-command-overload',
    name: { en: 'Command Overload', th: 'ทะลุขีดจำกัดของบัญชา' },
    description: { 
      en: 'You pushed beyond your limits to cast Command.', 
      th: 'คุณใส่พลังจนเกินขีดจำกัดในการร่าย "บัญชา"' 
    },
    tier: 3,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.ATTACKER,
    stackId: 'full-throttle',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'attack', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'Once per combat, you may choose to cast Command at 2 levels higher than normal without spending additional Focus Points. However, you become Fatigued until the start of your next turn.', 
              th: 'หนึ่งครั้งต่อการต่อสู้ คุณสามารถเลือกที่จะร่าย "บัญชา" ด้วยระดับที่สูงกว่าเดิมได้ 2 ขั้นโดยไม่ต้องเสีย "แต้มโฟกัส" เพิ่ม แต่คุณจะติดสถานะ "หมดแรง" จนกว่าจะถึงตาของคุณอีกครั้ง' 
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockDefenderRoleSkills: RoleSkillConfig[] = [
  // Tier 1
  {
    id: 'skill-life-overflow',
    name: { en: 'Life Overflow', th: 'พลังชีวิตล้นเหลือ' },
    description: { en: 'You gain additional 2 Hit Points when you gain a new level.', th: 'คุณได้รับพลังชีวิตสูงสุดเพิ่มอีก 2 เมื่อคุณเลเวลอัพ' },
    tier: 1,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.DEFENDER,
    stackId: 'life-overflow',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'defense', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [ {
      effects: [ {
        type: BONUS_EFFECT_TYPE.BONUS,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'attr-hit-points',
        modifierFormula: '2 * character-level'
      } ],
      numberOfSelections: 1
    } ]
  },
  {
    id: 'skill-danger-sense',
    name: { en: 'Danger Sense', th: 'รับรู้อันตราย' },
    description: { en: 'You have a good sense of danger, which helps you avoid danger quickly.', th: 'คุณรับรู้อันตรายได้อย่างรวดเร็ว ซึ่งช่วยทำให้คุณสามารถหลบหนีอันตรายได้อย่างรวดเร็ว' },
    tier: 1,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.DEFENDER,
    stackId: 'danger-sense',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'defense', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE, target: EFFECT_TARGET_TYPE.ATTRIBUTE, id: 'saving-agility' }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 3
  {
    id: 'skill-environmental-adaptation',
    name: { en: 'Environmental Adaptation', th: 'ปรับตัวกับสิ่งแวดล้อม' },
    description: { en: 'You can survive in extreme environments without penalty for extended periods.', th: 'คุณสามารถอยู่ในสภาพแวดล้อมที่รุนแรงได้โดยไม่มีบทลงโทษเป็นเวลานาน' },
    tier: 3,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.DEFENDER,
    stackId: 'environmental-adaptation',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'adaptation', 'environment', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'Once per rest, you can choose to ignore a negative area effect of your choice during this combat.', th: 'หนึ่งครั้งต่อ rest คุณสามารถเลือกที่จะละเว้นผลกระทบพื้นที่ที่เป็นลบต่อคุณในการต่อสู้นี้' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockSupportRoleSkills: RoleSkillConfig[] = [
  // Tier 1
  {
    id: 'skill-specialized-command',
    name: { en: 'Specialized Command', th: 'บัญชาที่เชียวชาญ' },
    description: { en: 'You have trained yourself to use commands with ease.', th: 'คุณฝึกฝนที่จะใช้บัญชาได้อย่างใจนึก' },
    tier: 1,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.SUPPORT,
    stackId: 'specialized-command',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'command', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    actionSelectionRule: [
      {
        filterOptions: {
          commandLevels: [ 1 ],
          includeTags: [ 'innate' ]
        },
        numberOfSelections: 1
      }
    ]
  },
  // Tier 2
  {
    id: 'skill-calm-presence',
    name: { en: 'Calm Presence', th: 'ที่พึ่งทางใจ' },
    description: { 
      en: 'You are a calm and composed presence, which helps your allies stay focused and confident.', 
      th: 'คุณให้ความสงบและความมั่นใจให้กับผู้อื่น' 
    },
    tier: 2,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.SUPPORT,
    stackId: 'calm-presence',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'calm', 'presence', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'Your allies within 2 meters of you cannot be "Frightened".', 
              th: 'สมาชิกปารตี้ที่อยู่ในระยะ 2 เมตรของคุณจะไม่ติดสถานะ "หวาดกลัว"' 
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },

  // Tier 3
  {
    id: 'skill-unbreakable-focus',
    name: { en: 'Unbreakable Focus', th: 'สมาธิแน่วแน่' },
    description: { en: 'You can maintain concentration.', th: 'คุณสามารถรักษาสมาธิได้' },
    tier: 3,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.SUPPORT,
    stackId: 'unbreakable-focus',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'concentration', 'saving', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { en: 'You can maintain concentration.', th: 'คุณสามารถรักษาสมาธิได้' }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  {
    id: 'skill-strategic-mind',
    name: { en: 'Strategic Mind', th: 'วางแผนกลยุทธ์' },
    description: { en: 'You can plan your actions to gain an advantage.', th: 'คุณชำนาญการวางแผนกลยุทธ์เพื่อชิงความได้เปรียบ' },
    tier: 3,
    type: SKILL_TYPE.ROLE,
    role: CLASS_ROLE_TYPE.SUPPORT,
    stackId: 'strategic-mind',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'strategy', 'initiative', 'advantage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [ {
          type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
          flavorText: { en: 'Once per rest, spend 10 minutes planning with allies. All participants gain Advantage on their next Initiative roll.', th: 'หนึ่งครั้งต่อ rest ใช้เวลา 10 นาทีวางแผนกับพันธมิตร ทุกคนที่เข้าร่วมจะได้ Advantage ใน Initiative ครั้งถัดไป' }
        } ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockSupportClassSkills: ClassSkillConfig[] = [
  // Tier 1
  {
    id: 'skill-inspiration',
    name: { en: 'Inspiration', th: 'ให้แรงบรรดาลใจ' },
    tier: 1,
    type: SKILL_TYPE.CLASS,
    classIds: [ 'class-conductor' ],
    stackId: 'inspiration',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'inspiration', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    actionSelectionRule: [
      {
        actionIds: [ 'action-inspire' ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 2
  {
    id: 'skill-motivate-inspiration',
    name: { en: 'Motivate Inspiration', th: 'ปลุกแรงบรรดาลใจ' },
    tier: 2,
    type: SKILL_TYPE.CLASS,
    classIds: [ 'class-conductor' ],
    stackId: 'inspiration',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 2,
    usedSlots: 1,
    tags: [ 'motivation', 'inspiration', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    actionSelectionRule: [
      {
        actionIds: [ 'action-motivate' ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 3
  {
    id: 'skill-conduct-inspiration',
    name: { en: 'Conduct Inspiration', th: 'นำแรงบรรดาลใจ' },
    tier: 3,
    type: SKILL_TYPE.CLASS,
    classIds: [ 'class-conductor' ],
    stackId: 'conduct',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 3,
    usedSlots: 1,
    tags: [ 'conduct', 'inspiration', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    actionSelectionRule: [
      {
        actionIds: [ 'action-conduct' ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockDefenderClassSkills: ClassSkillConfig[] = [
  // Tier 1
  {
    id: 'skill-rage',
    name: { en: 'Rage', th: 'คลั่ง' },
    tier: 1,
    type: SKILL_TYPE.CLASS,
    classIds: [ 'class-berserker' ],
    stackId: 'rage',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'rage', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    actionSelectionRule: [
      {
        actionIds: [ 'action-rage' ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 2
  {
    id: 'skill-berserkers-sweep',
    name: { en: 'Berserker\'s Sweep', th: 'หวดอย่างบ้าคลั่ง' },
    description: { 
      en: 'In a moment of frenzy, you abandon precision for sheer force — striking all within your reach.', 
      th: 'ในห้วงแห่งความคลั่ง คุณละทิ้งความแม่นยำ ใช้เพียงแรงดิบฟาดทุกสิ่งที่อยู่ในระยะ' 
    },
    tier: 2,
    type: SKILL_TYPE.CLASS,
    classIds: [ 'class-berserker' ],
    stackId: 'berserkers-sweep',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'berserker', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'Once per turn, you may choose to convert a single-target melee attack into a wide swing, affecting multiple enemies within melee range. The exact number and positioning of targets is determined by the GM.', 
              th: 'หนึ่งครั้งต่อการต่อสู้ คุณสามารถเลือกที่จะเปลี่ยนการโจมตีที่มีเป้าหมายเพียงคนเดียวให้เป็นการโจมตีที่มีรัศมีการกระทบกว้าง ทำให้สัมผัสกับศัตรูหลายคนที่อยู่ในระยะการโจมตี โดยที่จำนวนและตำแหน่งของเป้าหมายจะถูกกำหนดโดย GM' 
            }
          }
        ],
        numberOfSelections: 1
      }
    ]
  },
  // Tier 3
  {
    id: 'skill-relentless-rage',
    name: { en: 'Relentless Rage', th: 'ตะเกียกตะกายอย่างบ้าคลั่ง' },
    description: { 
      en: 'Desperation fuels your every move — you refuse to stay down.', 
      th: 'แม้แต่ความสิ้นหวังก็ยังกลายเป็นเชื้อไฟ — คุณไม่ยอมล้ม ไม่ว่าอะไรจะเกิดขึ้น' 
    },
    tier: 3,
    type: SKILL_TYPE.CLASS,
    classIds: [ 'class-berserker' ],
    stackId: 'relentless-rage',
    stackType: SKILL_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    usedSlots: 1,
    tags: [ 'rage', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effectSelectionRule: [
      {
        effects: [
          { 
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: { 
              en: 'If you drop to 0 Hit Points while your Rage is active and don\'t die outright, you can make a DC 5 Death saving. If you succeed, your Hit Points instead change to a 1. Each time you use this feature after the first, the DC increases by 5. When you finish a Short or Long Rest, the DC resets to 10.', 
              th: 'ถ้าค่าพลังชีวิตของคุณลดลงเหลือ 0 ขณะที่คุณมีสถานะ "คลั่ง" อยู่ คุณไม่ตายทันทีแต่คุณสามารถทอย "การหลบเลี่ยงความตาย" ด้วย DC 5 ถ้าคุณทอยผ่านพลังชีวิตของคุณจะเปลี่ยนเป็น 1 แทน ทุกครั้งที่คุณใช้คุณสมบัตินี้หลังจากครั้งแรก DC จะเพิ่มขึ้นอีก 5 จนกว่าคุณจะทำการ "พัก' 
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
  ...mockGeneralSkills,
  ...mockAttackerRoleSkills,
  ...mockDefenderRoleSkills
];

export default mockAllSkills;
