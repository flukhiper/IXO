import { EFFECT_TYPE } from '@/constants/config/base';
import { TraitConfig } from '@/types/config/trait';

export const mockTraits: TraitConfig[] = [
  // --- Special Traits ---
  {
    id: 'dragonoid',
    name: { en: 'Dragonoid', th: 'ดราโกนอยด์' },
    description: { en: 'Arrogant and resilient beings blessed with dragon scales and unwavering will.', th: 'สิ่งมีชีวิตที่เย่อหยิ่งและยืดหยุ่น ได้รับพรด้วยเกล็ดมังกรและเจตจำนงที่แน่วแน่' },
    icon: '🐉',
    tags: [ 'special', 'draconic' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Increases Armor Class by 2
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'armor-class' ],
        baseValue: { type: 'fixed', value: 2 }
      },
      // Immune to the Frightened condition twice per downtime
      {
        type: EFFECT_TYPE.BLOCK_CONDITION,
        tags: [ 'frightened' ]
      }
    ]
  },
  {
    id: 'kijin',
    name: { en: 'Kijin', th: 'คิจิน' },
    description: { en: 'Battle-driven beings that grow fiercer as they bleed.', th: 'สิ่งมีชีวิตที่ถูกขับเคลื่อนด้วยการต่อสู้ซึ่งเติบโตดุร้ายขึ้นเมื่อพวกมันเลือดออก' },
    icon: '💀',
    tags: [ 'special', 'berserker' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // When HP < 50%, crucial actions don't consume all Action Points (Show flavor text only)
      {
        type: EFFECT_TYPE.SHOW_FLAVOR_TEXT,
        name: { en: 'Fury Unleashed', th: 'ปลดปล่อยโทสะ' },
        description: { en: 'When HP < 50%, crucial actions don\'t consume all Action Points.', th: 'เมื่อ HP < 50% การกระทำสำคัญไม่ใช้ Action Point ทั้งหมด' }
      },
      // When HP < 0, restore Hit Points to 1 instead of gaining the Downed condition
      {
        type: EFFECT_TYPE.ACTIVATE_DO_RESTORE,
        attributeIds: [ 'hit-point' ],
        baseValue: { type: 'fixed', value: 1 },
        usageLimit: { maxUse: 1, cooldown: 0 },
        ons: [
          {
            type: 'on-attribute-changed',
            attributeId: 'hit-point',
            priority: 1,
            conditionFormulas: [
              { operator: '<', formula: '0' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mechina',
    name: { en: 'Mechina', th: 'เมคินา' },
    description: { en: 'Construct-like beings with unmatched adaptability and relentless efficiency.', th: 'สิ่งมีชีวิตคล้ายโครงสร้างที่ปรับตัวได้ดีเยี่ยมและมีประสิทธิภาพไม่หยุดยั้ง' },
    icon: '⚙️',
    tags: [ 'special', 'construct' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Increases the Augmented Slot +2 (one slot, bonus 2)
      {
        type: EFFECT_TYPE.ADD_EQUIPMENT_SLOT,
        equipmentSlotIds: [ 'augmented' ],
        bonus: 2
      },
      // Gain the Power Recharge downtime and increase Downtime Points +1
      {
        type: EFFECT_TYPE.ADD_DOWNTIME,
        downtimeIds: [ 'power-recharge' ]
      }
    ]
  },
  {
    id: 'werebeast',
    name: { en: 'Werebeast', th: 'วายร้าย' },
    description: { en: 'Driven by obsession and empowered by primal senses.', th: 'ถูกขับเคลื่อนด้วยความหลงใหลและได้รับพลังจากสัมผัสแห่งสัตว์ป่า' },
    icon: '🐾',
    tags: [ 'special', 'animalistic' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Increase Carry Capacity 50%
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'carry-capacity' ],
        baseValue: { type: 'fixed', value: 0 },
        formula: 'attribute(carry-capacity).max * 0.5'
      },
      // Choose one of these effects
      {
        type: EFFECT_TYPE.SELECT_EFFECT,
        effects: [
          {
            type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
            attributeIds: [ 'strength-modifier' ],
            baseValue: { type: 'fixed', value: 1 }
          },
          {
            type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
            attributeIds: [ 'agility-modifier' ],
            baseValue: { type: 'fixed', value: 1 }
          },
          {
            type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
            attributeIds: [ 'dexterity-modifier' ],
            baseValue: { type: 'fixed', value: 1 }
          },
          {
            type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
            attributeIds: [ 'intelligence-modifier' ],
            baseValue: { type: 'fixed', value: 1 }
          },
          {
            type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
            attributeIds: [ 'sense-modifier' ],
            baseValue: { type: 'fixed', value: 1 }
          },
          {
            type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
            attributeIds: [ 'charisma-modifier' ],
            baseValue: { type: 'fixed', value: 1 }
          }
        ]
      }
    ]
  },
  {
    id: 'fairy',
    name: { en: 'Fairy', th: 'แฟรี่' },
    description: { en: 'Graceful and ancient, the fairies thrive on timeless intuition.', th: 'สง่างามและเก่าแก่ เหล่าแฟรี่เจริญรุ่งเรืองด้วยสัญชาตญาณอันเป็นนิรันดร์' },
    icon: '🌿',
    tags: [ 'special', 'ancient' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Gain the Fly action
      {
        type: EFFECT_TYPE.GAIN_ACTION,
        actionIds: [ 'fly' ]
      },
      // Gain the Ancient Recall downtime
      {
        type: EFFECT_TYPE.ADD_DOWNTIME,
        downtimeIds: [ 'ancient-recall' ]
      }
    ]
  },
  {
    id: 'demonia',
    name: { en: 'Demonia', th: 'เดโมเนีย' },
    description: { en: 'Mimics of others, born to outlast the harshest places.', th: 'ผู้เลียนแบบผู้อื่น เกิดมาเพื่ออยู่รอดในสถานที่ที่โหดร้ายที่สุด' },
    icon: '😈',
    tags: [ 'special', 'superior' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Gain the Mimic action
      {
        type: EFFECT_TYPE.GAIN_ACTION,
        actionIds: [ 'mimic' ]
      },
      // Choose one of these effects
      {
        type: EFFECT_TYPE.SELECT_EFFECT,
        effects: [
          {
            type: EFFECT_TYPE.GAIN_RESISTENCE,
            damageTypeIds: [ 'fire' ],
            scaleId: 'resist'
          },
          {
            type: EFFECT_TYPE.GAIN_RESISTENCE,
            damageTypeIds: [ 'cold' ],
            scaleId: 'resist'
          },
          {
            type: EFFECT_TYPE.GAIN_RESISTENCE,
            damageTypeIds: [ 'lightning' ],
            scaleId: 'resist'
          },
          {
            type: EFFECT_TYPE.GAIN_RESISTENCE,
            damageTypeIds: [ 'acid' ],
            scaleId: 'resist'
          },
          {
            type: EFFECT_TYPE.GAIN_RESISTENCE,
            damageTypeIds: [ 'poison' ],
            scaleId: 'resist'
          }
        ]
      }
    ]
  },
  {
    id: 'siren',
    name: { en: 'Siren', th: 'ไซเรน' },
    description: { en: 'Charming voices and enchanting power, hard to resist.', th: 'เสียงอันไพเราะและพลังที่น่าหลงใหล ยากที่จะต้านทาน' },
    icon: '🎶',
    tags: [ 'special', 'alluring' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Gain the Siren Lullaby action
      {
        type: EFFECT_TYPE.GAIN_ACTION,
        actionIds: [ 'siren-lullaby' ]
      },
      // Increase Persuasion +1 and Deception +1
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'persuasion', 'deception' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'aethel-unchanged',
    name: { en: 'Aethel (Unchanged)', th: 'เอเธล (ไม่เปลี่ยนแปลง)' },
    description: { en: 'Bound by purpose, yet holding great hidden potential.', th: 'ถูกผูกมัดด้วยจุดประสงค์ แต่ยังคงมีศักยภาพที่ซ่อนเร้นอันยิ่งใหญ่' },
    icon: '💎',
    tags: [ 'special', 'aethel', 'unchanged' ],
    isSpecial: true,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      // Choose two of these effects
      {
        type: EFFECT_TYPE.SELECT_EFFECT,
        effects: [
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'athletics' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'sprint' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'acrobatics' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'sleight-of-hand' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'mechanical' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'stealth' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'recall' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'comprehend' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'analyze' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'perceive' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'insight' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'frac-point' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'persuasion' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'deception' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'intimidation' ], baseValue: { type: 'fixed', value: 1 } },
          { type: EFFECT_TYPE.MODIFY_ATTRIBUTE, attributeIds: [ 'performance' ], baseValue: { type: 'fixed', value: 1 } }
        ]
      },
      // Can reroll any die twice per long downtime
      {
        type: EFFECT_TYPE.ACTIVATE_SHOW_FLAVOR_TEXT,
        name: { en: 'Reroll', th: 'ทอยใหม่' },
        description: { en: 'Can reroll any die twice per long downtime.', th: 'สามารถทอยลูกเต๋าใหม่ได้สองครั้งต่อการพักผ่อนยาว' }
      }
    ]
  },

  // --- Normal Traits ---
  {
    id: 'dragonic-scales',
    name: { en: 'Dragonic Scales', th: 'เกล็ดมังกร' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'armor-class' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'armor-class' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'augmented-body',
    name: { en: 'Augmented Body', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'equipment-slot-add', 'augmented-slot' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.ADD_EQUIPMENT_SLOT,
        equipmentSlotIds: [ 'augmented' ],
        bonus: 1
      }
    ]
  },
  {
    id: 'wings',
    name: { en: 'Wings', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'action-gain', 'fly' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.GAIN_ACTION,
        actionIds: [ 'fly' ]
      }
    ]
  },
  {
    id: 'beastly-strength',
    name: { en: 'Beastly Strength', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'hit-points' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'hit-point' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'beastly-agility',
    name: { en: 'Beastly Agility', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'speed', 'movement' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'speed', 'movement' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'beastly-dexterity',
    name: { en: 'Beastly Dexterity', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'attack-roll' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'attack-roll' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'beastly-tail',
    name: { en: 'Beastly Tail', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'action-slots' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'recall', 'analyze' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'beastly-ears',
    name: { en: 'Beastly Ears', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'frac-points' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'initiative' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ]
  },
  {
    id: 'beastly-charm',
    name: { en: 'Beastly Charm', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'attribute-modify', 'persuasion', 'intimidation' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.MODIFY_ATTRIBUTE,
        attributeIds: [ 'persuasion', 'intimidation' ],
        baseValue: { type: 'fixed', value: 1 }
      }
    ]
  },
  {
    id: 'fearless',
    name: { en: 'Fearless', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'condition-block', 'frightened' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.BLOCK_CONDITION,
        tags: [ 'frightened' ]
      }
    ]
  },
  {
    id: 'relentless',
    name: { en: 'Relentless', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'condition-gain', 'hit-point', 'strength-saving-throw', 'downed' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.GAIN_CONDITION,
        conditionIds: [ 'relentless' ]
      }
    ]
  },
  {
    id: 'power-nap',
    name: { en: 'Power Nap', th: '' },
    description: { en: '', th: '' },
    icon: '',
    tags: [ 'normal', 'downtime-add', 'attribute-modify', 'downtime-points' ],
    isSpecial: false,
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: '',
    effects: [
      {
        type: EFFECT_TYPE.ADD_DOWNTIME,
        downtimeIds: [ 'power-nap' ]
      }
    ]
  }
];
