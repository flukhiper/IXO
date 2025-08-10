import type { ConditionConfig } from '@/types/config/condition';
import { CONDITION_STACK_TYPE } from '@/constants/config/condition';
import { ADVANTAGE_EFFECT_TYPE, BONUS_EFFECT_TYPE, DISADVANTAGE_EFFECT_TYPE, EFFECT_ID_OPTION, EFFECT_TARGET_TYPE, SPECIALTY_EFFECT_TYPE } from '@/constants/config/effect';

export const mockConditions: ConditionConfig[] = [

  // System Conditions
  {
    id: 'condition-reckless',
    name: { en: 'Reckless', th: 'บ้าบิ่น' },
    description: { en: 'You are reckless and do not care about your safety.', th: 'คุณบ้าบิ่นและไม่คำนึงถึงความปลอดภัยของคุณ' },
    isSystem: true,
    stackId: 'reckless',
    stackType: CONDITION_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    icon: 'reckless-icon.svg',
    thumbnail: 'reckless-thumbnail.jpg',
    tags: [ 'reckless' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effects: [
      {
        type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
        flavorText: { en: 'All attack rolls you are targeted by will gain an "advantage".', th: 'ทุกการทอยโจมตีที่มีคุณเป็นเป้าหมายจะ "ได้เปรียบ" ในการทอยโจมตีนั้น' }
      }
    ]
  },
  {
    id: 'condition-fatigued',
    name: { en: 'Fatigued', th: 'หมดแรง' },
    description: { en: 'You are fatigued and cannot act.', th: 'คุณหมดแรงและไม่สามารถทำอะไรได้' },
    isSystem: true,
    stackId: 'fatigued',
    stackType: CONDITION_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    icon: 'fatigued-icon.svg',
    thumbnail: 'fatigued-thumbnail.jpg',
    tags: [ 'fatigued' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effects: [
      {
        type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
        flavorText: { 
          en: 'You cannot do anything except move.', 
          th: 'คุณไม่สามารถทำอะไรนอกจากเดิน' 
        }
      }
    ]
  },
  {
    id: 'condition-frightened',
    name: { en: 'Frightened', th: 'หวาดกลัว' },
    description: { en: 'You are frightened and cannot act.', th: 'คุณหวาดกลัวและไม่สามารถทำอะไรได้' },
    isSystem: true,
    stackId: 'frightened',
    stackType: CONDITION_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    icon: 'frightened-icon.svg',
    thumbnail: 'frightened-thumbnail.jpg',
    tags: [ 'frightened' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effects: [
      {
        type: BONUS_EFFECT_TYPE.BONUS,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'attr-movement-speed',
        modifierFormula: '-movement-speed'
      },
      {
        type: DISADVANTAGE_EFFECT_TYPE.DISADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: EFFECT_ID_OPTION.ALL_SKILL 
      },
      {
        type: DISADVANTAGE_EFFECT_TYPE.DISADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'attr-attack-roll' 
      }
    ]
  },
  // Custom Conditions
  {
    id: 'condition-rage',
    name: { en: 'Rage', th: 'คลั่ง' },
    description: { 
      en: 'You are consumed by battle fury, gaining increased combat prowess but losing some control.', 
      th: 'คุณถูกครอบงำด้วยความคลั่งในสงคราม ได้รับพลังการต่อสู้ที่เพิ่มขึ้นแต่สูญเสียการควบคุมบางส่วน' 
    },
    isSystem: false,
    stackId: 'rage',
    stackType: CONDITION_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    icon: 'rage-icon.svg',
    thumbnail: 'rage-thumbnail.jpg',
    tags: [ 'rage', 'berserker' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effects: [
      {
        type: BONUS_EFFECT_TYPE.BONUS,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'attr-damage-reduction',
        modifierFormula: 'ceil(character-level/2)'
      },
      {
        type: BONUS_EFFECT_TYPE.BONUS,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'attr-str-based-damage',
        modifierFormula: 'ceil(character-level/3)'
      },
      {
        type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'skill-power'
      },
      {
        type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'skill-endurance'
      },
      {
        type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'saving-strength'
      },
      {
        type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
        flavorText: { en: 'You must have 0 focus points and must deal damage once per turn to maintain this condition.', th: 'คุณต้องมีแต้มโฟกัสเป็น 0 และต้องสร้างความเสียหาย 1 ครั้งทุกเทิร์นเพื่อรักษาสถานะนี้' }
      }
    ]
  },
  {
    id: 'condition-inspired',
    name: { en: 'Inspired', th: 'ได้รับแรงบรรดาลใจ' },
    description: { 
      en: 'You are inspired by your allies, allowing you to use your abilities more effectively.', 
      th: 'คุณเกิดแรงบรรดาลใจทำให่้คุณใช้ความสามารถของคุณได้มากขึ้น' 
    },
    isSystem: false,
    stackId: 'inspired',
    stackType: CONDITION_STACK_TYPE.OVERWRITE,
    stackPriority: 1,
    icon: 'inspired-icon.svg',
    thumbnail: 'inspired-thumbnail.jpg',
    tags: [ 'inspired', 'berserker' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    effects: [
      {
        type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
        flavorText: {
          en: 'You can choose to add +2 to "Attack Roll", "Difficulty Class", or "Armor Class" after using this condition. After using this condition, the condition will disappear.', 
          th: 'คุณสามารถเลือกที่จะเพิ่มโบนัส +2 ให้กับ "การทอยโจมตี", "ระดับความยาก", "ระดับเกราะ" อย่างใดอย่างหนึ่ง โดยหลังจากใช้งานโบนัสแล้วสถานะนี้จะหายไป'
        }
      }
    ]
  }
];

export default mockConditions;
