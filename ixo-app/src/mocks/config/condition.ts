import type { ConditionConfig } from '@/types/config/condition';
import { CONDITION_STACK_TYPE, CONDITION_TICK_TYPE, CONDITION_EFFECT_TYPE } from '@/constants/config/condition';
import { PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';

export const mock: ConditionConfig[] = [
  {
    id: 'burned',
    name: { en: 'Burned', th: 'ติดไฟ' },
    description: { en: 'Suffering ongoing fire damage and increased vulnerability to fire.', th: 'ได้รับความเสียหายไฟต่อเนื่องและอ่อนแอต่อไฟ' },
    icon: 'https://placehold.co/32x32/FF6347/FFFFFF?text=🔥',
    tags: [ 'debuff', 'damage-over-time', 'elemental' ],
    stack: { id: 'burned', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'start',
        duration: 3,
        saving: {
          savingThrowId: 'attribute-strength-save',
          baseValue: { type: VALUE_TYPE.FIXED, value: 10 } // Placeholder for stat(constitution)
        }
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.DO_DAMAGE_OVER_TIME,
        phase: PHASE_TYPE.ROUND,
        when: 'start',
        damageTypeId: 'fire',
        baseValue: { type: VALUE_TYPE.DICE, formula: '1d4' }
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_RESISTENCE,
        damageTypeId: 'fire',
        scaleId: 'vulnerable'
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'stunned',
    name: { en: 'Stunned', th: 'มึนงง' },
    description: { en: 'Unable to act and easier to hit.', th: 'ไม่สามารถกระทำการและถูกโจมตีง่ายขึ้น' },
    icon: 'https://placehold.co/32x32/8A2BE2/FFFFFF?text=😵',
    tags: [ 'debuff', 'control', 'incapacitated' ],
    stack: { id: 'stunned', type: CONDITION_STACK_TYPE.OVERWRITE, priority: 10 },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 1
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.RESTRICT_ACTION,
        actionTags: [ 'common', 'attack', 'support', 'debuff', 'summon', 'special' ]
      },
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-armor-class',
        baseValue: { type: VALUE_TYPE.FIXED, value: -5 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'vulnerable',
    name: { en: 'Vulnerable', th: 'อ่อนแอ' },
    description: { en: 'Takes increased damage from all sources.', th: 'ได้รับความเสียหายเพิ่มจากทุกแหล่ง' },
    icon: 'https://placehold.co/32x32/FF0000/FFFFFF?text=❗',
    tags: [ 'debuff', 'damage' ],
    stack: { id: 'vulnerable', type: CONDITION_STACK_TYPE.OVERWRITE, priority: 5 },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 1
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.GAIN_RESISTENCE,
        damageTypeId: 'all',
        scaleId: 'vulnerable'
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'inspired',
    name: { en: 'Inspired', th: 'ได้รับแรงบันดาลใจ' },
    description: { en: 'Bolstered morale and increased energy.', th: 'ขวัญกำลังใจสูงและพลังงานเพิ่มขึ้น' },
    icon: 'https://placehold.co/32x32/DAA520/000000?text=✨',
    tags: [ 'buff', 'morale', 'positive' ],
    stack: { id: 'inspired', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.COMBAT,
        when: 'end',
        duration: 2
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-attack-roll'
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-presence-save'
      },
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-energy-point',
        baseValue: { type: VALUE_TYPE.FIXED, value: 2 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'furious-rampage',
    name: { en: 'Furious Rampage', th: 'คลั่งระห่ำ' },
    description: { en: 'Overwhelmed by rage, gaining strength but losing defense.', th: 'คลั่งด้วยความโกรธ ได้พลังแต่เสียการป้องกัน' },
    icon: 'https://placehold.co/32x32/B22222/FFFFFF?text=R',
    tags: [ 'buff', 'berserk', 'combat' ],
    stack: { id: 'furious-rampage', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 2,
        saving: {
          savingThrowId: 'attribute-sense-save',
          baseValue: { type: VALUE_TYPE.FIXED, value: 10 } // Placeholder for level
        }
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-strength-ability',
        baseValue: { type: VALUE_TYPE.FIXED, value: 4 }
      },
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-armor-class',
        baseValue: { type: VALUE_TYPE.FIXED, value: -2 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'enhanced-precision',
    name: { en: 'Enhanced Precision', th: 'ความแม่นยำขั้นสูง' },
    description: { en: 'Sharpened focus increases attack accuracy.', th: 'สมาธิที่เฉียบคมเพิ่มความแม่นยำในการโจมตี' },
    icon: 'https://placehold.co/32x32/006400/FFFFFF?text=🎯',
    tags: [ 'buff', 'precision', 'combat' ],
    stack: { id: 'enhanced-precision', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 1
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-attack-roll',
        baseValue: { type: VALUE_TYPE.FIXED, value: 3 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'charmed',
    name: { en: 'Charmed', th: 'หลงเสน่ห์' },
    description: { en: 'Magically beguiled and less able to resist influence.', th: 'ถูกสะกดจิตและต้านทานอิทธิพลได้น้อยลง' },
    icon: 'https://placehold.co/32x32/FFB6C1/000000?text=💖',
    tags: [ 'debuff', 'control', 'mental' ],
    stack: { id: 'charmed', type: CONDITION_STACK_TYPE.OVERWRITE, priority: 8 },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 3,
        saving: {
          savingThrowId: 'attribute-sense-save',
          baseValue: { type: VALUE_TYPE.FIXED, value: 10 } // Placeholder for stat(sense)
        }
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.RESTRICT_ACTION,
        actionTags: [ 'attack' ]
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-presence-save',
        isDisadvantage: true
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'sleep',
    name: { en: 'Sleep', th: 'หลับ' },
    description: { en: 'Magically forced into slumber.', th: 'ถูกเวทมนตร์ทำให้หลับ' },
    icon: 'https://placehold.co/32x32/ADD8E6/000000?text=💤',
    tags: [ 'debuff', 'control', 'incapacitated' ],
    stack: { id: 'sleep', type: CONDITION_STACK_TYPE.OVERWRITE, priority: 9 },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.DAMAGE,
        damageTypeIds: [ 'all' ]
      },
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 5
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.RESTRICT_ACTION,
        actionTags: [ 'common', 'attack', 'support', 'debuff', 'summon', 'special' ]
      },
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-armor-class',
        baseValue: { type: VALUE_TYPE.FIXED, value: -10 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'frightened',
    name: { en: 'Frightened', th: 'หวาดกลัว' },
    description: { en: 'Overcome by fear, less able to fight or act.', th: 'ถูกความกลัวครอบงำ ทำให้ต่อสู้หรือกระทำการได้แย่ลง' },
    icon: 'https://placehold.co/32x32/8B0000/FFFFFF?text=😨',
    tags: [ 'debuff', 'mental', 'control' ],
    stack: { id: 'frightened', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 2,
        saving: {
          savingThrowId: 'attribute-sense-save',
          baseValue: { type: VALUE_TYPE.FIXED, value: 10 } // Placeholder for stat(sense)
        }
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-attack-roll',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-strength-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-agility-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-intelligence-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-sense-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-presence-ability',
        isDisadvantage: true
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'fury',
    name: { en: 'Fury', th: 'ความโกรธ' },
    description: { en: 'Overwhelmed by rage, gaining strength but losing defense.', th: 'คลั่งด้วยความโกรธ ได้พลังแต่เสียการป้องกัน' },
    icon: 'https://placehold.co/32x32/B22222/FFFFFF?text=R',
    tags: [ 'buff', 'berserk', 'combat' ],
    stack: { id: 'fury', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 2,
        saving: {
          savingThrowId: 'attribute-sense-save',
          baseValue: { type: VALUE_TYPE.FIXED, value: 10 } // Placeholder for level
        }
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-strength-ability',
        baseValue: { type: VALUE_TYPE.FIXED, value: 4 }
      },
      {
        type: CONDITION_EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeId: 'attribute-armor-class',
        baseValue: { type: VALUE_TYPE.FIXED, value: -2 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'relentless',
    name: { en: 'Relentless', th: 'ไม่หยุดยั้ง' },
    description: { en: 'Defies death and recovers quickly.', th: 'ท้าทายความตายและฟื้นตัวอย่างรวดเร็ว' },
    icon: 'https://placehold.co/32x32/4B0082/FFFFFF?text=☠️',
    tags: [ 'buff', 'survival', 'death-defiance' ],
    stack: { id: 'relentless', type: CONDITION_STACK_TYPE.OVERWRITE, priority: 15 },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 1
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.DO_RESTORE_OVER_TIME,
        phase: PHASE_TYPE.ROUND,
        when: 'start',
        attributeId: 'attribute-hit-points',
        baseValue: { type: VALUE_TYPE.FIXED, value: 1 }
      },
      {
        type: CONDITION_EFFECT_TYPE.REDUCE_DAMAGE,
        damageTypeIds: [ 'all' ],
        baseValue: { type: VALUE_TYPE.FIXED, value: 5 }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'dazed',
    name: { en: 'Dazed', th: 'มึนงง' },
    description: { en: 'Mentally impaired and less able to act.', th: 'สติปัญญาลดลงและกระทำการได้แย่ลง' },
    icon: 'https://placehold.co/32x32/FFD700/000000?text=暈',
    tags: [ 'debuff', 'control', 'mental' ],
    stack: { id: 'dazed', type: CONDITION_STACK_TYPE.STACK },
    removeTicks: [
      {
        type: CONDITION_TICK_TYPE.PHASE,
        phase: PHASE_TYPE.ROUND,
        when: 'end',
        duration: 1
      }
    ],
    effects: [
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-strength-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-agility-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-intelligence-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-sense-ability',
        isDisadvantage: true
      },
      {
        type: CONDITION_EFFECT_TYPE.GAIN_ADVANTAGE,
        attributeId: 'attribute-presence-ability',
        isDisadvantage: true
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 