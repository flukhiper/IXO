import type { ConditionConfig } from '@/types/config/condition';

export const mockConditions: ConditionConfig[] = // --- Sample Condition Configurations ---
[
  {
    id: 'burned',
    name: { en: 'Burned', th: 'ติดไฟ' },
    description: { en: 'The target is taking ongoing fire damage and is more susceptible to fire attacks.', th: 'เป้าหมายได้รับความเสียหายไฟอย่างต่อเนื่องและอ่อนไหวต่อการโจมตีด้วยไฟมากขึ้น' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/FF6347/FFFFFF?text=🔥',
    tags: [ 'debuff', 'damage-over-time', 'elemental' ],
    stack: { id: 'burned-stack', type: 'stack' },
    removeTicks: [
      {
        type: 'start-turn',
        duration: 3,
        versusSaving: 'constitution-saving-throw',
        formula: 'stat(constitution)'
      }
    ],
    effects: [
      {
        type: 'damage-over-time',
        damageTypeId: 'fire',
        value: { type: 'dice', formula: '1d4' },
        tick: 'start-turn'
      },
      {
        type: 'resistence',
        damageTypeId: 'fire',
        damageScaleId: 'vulnerable'
      }
    ]
  },
  {
    id: 'stunned',
    name: { en: 'Stunned', th: 'มึนงง' },
    description: { en: 'The target is incapacitated, unable to move or take actions.', th: 'เป้าหมายถูกทำให้หมดความสามารถ ไม่สามารถเคลื่อนไหวหรือกระทำใดๆ ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/8A2BE2/FFFFFF?text=😵',
    tags: [ 'debuff', 'control', 'incapacitated' ],
    stack: { id: 'stunned-overwrite', type: 'overwrite', priority: 10 },
    removeTicks: [
      {
        type: 'end-turn',
        duration: 1
      }
    ],
    effects: [
      {
        type: 'restrict-action',
        tags: [ 'common', 'attack', 'support', 'debuff', 'summon', 'special' ]
      },
      {
        type: 'attribute-modify',
        attributeId: 'armor-class',
        formula: '-5'
      }
    ]
  },
  {
    id: 'vulnerable',
    name: { en: 'Vulnerable', th: 'อ่อนแอ' },
    description: { en: 'The target takes increased damage from all sources.', th: 'เป้าหมายได้รับความเสียหายเพิ่มขึ้นจากทุกแหล่ง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/FF0000/FFFFFF?text=❗',
    tags: [ 'debuff', 'damage' ],
    stack: { id: 'vulnerable-stack', type: 'overwrite', priority: 5 },
    removeTicks: [
      {
        type: 'end-turn',
        duration: 1
      }
    ],
    effects: [
      {
        type: 'resistence',
        damageTypeId: 'all', // "all" would be a special case for your damage scaling logic
        damageScaleId: 'vulnerable'
      }
    ]
  },
  {
    id: 'inspired',
    name: { en: 'Inspired', th: 'ได้รับแรงบันดาลใจ' },
    description: { en: 'The target feels uplifted, gaining advantage on certain rolls and a bonus to energy points.', th: 'เป้าหมายรู้สึกมีกำลังใจ ได้รับความได้เปรียบในการทอยบางอย่างและโบนัสแต้มพลังงาน' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/DAA520/000000?text=✨',
    tags: [ 'buff', 'morale', 'positive' ],
    stack: { id: 'inspired-stack', type: 'stack' },
    removeTicks: [
      {
        type: 'end-round',
        duration: 2
      }
    ],
    effects: [
      {
        type: 'advantage-attribute',
        attributeIds: [ 'attack-roll', 'charisma-saving-throw' ],
        isDisadvantage: false
      },
      {
        type: 'attribute-modify',
        attributeId: 'energy-point',
        formula: '2'
      }
    ]
  },
  {
    id: 'furious-rampage',
    name: { en: 'Furious Rampage', th: 'คลั่งระห่ำ' },
    description: { en: 'A state of battle fury, increasing damage dealt but reducing defenses.', th: 'สภาวะคลั่งในการต่อสู้ เพิ่มความเสียหายที่ทำได้แต่ลดการป้องกัน' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/B22222/FFFFFF?text=R',
    tags: [ 'buff', 'berserk', 'combat' ],
    stack: { id: 'furious-rampage-stack', type: 'stack' },
    removeTicks: [
      {
        type: 'end-turn',
        duration: 2,
        versusSaving: 'sense-saving-throw',
        formula: 'level'
      }
    ],
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'strength',
        formula: '4'
      },
      {
        type: 'attribute-modify',
        attributeId: 'armor-class',
        formula: '-2'
      }
    ]
  },
  {
    id: 'enhanced-precision',
    name: { en: 'Enhanced Precision', th: 'ความแม่นยำขั้นสูง' },
    description: { en: 'Your attacks are incredibly precise, increasing your chance to hit a single target.', th: 'การโจมตีของคุณแม่นยำอย่างเหลือเชื่อ เพิ่มโอกาสในการโจมตีเป้าหมายเดียว' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/006400/FFFFFF?text=🎯',
    tags: [ 'buff', 'precision', 'combat' ],
    stack: { id: 'enhanced-precision-stack', type: 'stack' },
    removeTicks: [
      {
        type: 'end-turn',
        duration: 1
      }
    ],
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'attack-roll',
        formula: '3'
      }
    ]
  },
  {
    id: 'charmed',
    name: { en: 'Charmed', th: 'หลงเสน่ห์' },
    description: { en: 'The target is charmed and might be influenced by the charmer. It cannot attack the charmer.', th: 'เป้าหมายถูกทำให้หลงเสน่ห์และอาจถูกผู้ทำให้หลงเสน่ห์ชักจูง ไม่สามารถโจมตีผู้ทำให้หลงเสน่ห์ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/FFB6C1/000000?text=💖',
    tags: [ 'debuff', 'control', 'mental' ],
    stack: { id: 'charmed-overwrite', type: 'overwrite', priority: 8 },
    removeTicks: [
      {
        type: 'end-turn',
        duration: 3,
        versusSaving: 'sense-saving-throw',
        formula: 'stat(sense)'
      }
    ],
    effects: [
      {
        type: 'restrict-action',
        tags: [ 'attack' ] // Restrict attacking the charmer, specific rule logic needed for charmer target
      },
      {
        type: 'advantage-attribute',
        attributeIds: [ 'charisma-saving-throw' ],
        isDisadvantage: true
      }
    ]
  },
  {
    id: 'sleep',
    name: { en: 'Sleep', th: 'หลับ' },
    description: { en: 'The target is unconscious and falls prone. It awakens if it takes damage.', th: 'เป้าหมายหมดสติและล้มลง จะตื่นขึ้นหากได้รับความเสียหาย' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/ADD8E6/000000?text=💤',
    tags: [ 'debuff', 'control', 'incapacitated' ],
    stack: { id: 'sleep-overwrite', type: 'overwrite', priority: 9 },
    removeTicks: [
      {
        type: 'damage',
        damageTypeId: 'any' // Awakens on any damage
      },
      {
        type: 'end-turn',
        duration: 5
      }
    ],
    effects: [
      {
        type: 'restrict-action',
        tags: [ 'common', 'attack', 'support', 'debuff', 'summon', 'special' ]
      },
      {
        type: 'attribute-modify',
        attributeId: 'armor-class',
        formula: '-10' // Easy to hit
      }
    ]
  },
  {
    id: 'frightened',
    name: { en: 'Frightened', th: 'หวาดกลัว' },
    description: { en: 'The target has disadvantage on attack rolls and ability checks while the source of its fear is within line of sight.', th: 'เป้าหมายเสียเปรียบในการทอยโจมตีและการตรวจสอบความสามารถขณะที่แหล่งที่มาของความกลัวอยู่ในสายตา' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/8B0000/FFFFFF?text=😨',
    tags: [ 'debuff', 'mental', 'control' ],
    stack: { id: 'frightened-stack', type: 'stack' },
    removeTicks: [
      {
        type: 'end-turn',
        duration: 2,
        versusSaving: 'sense-saving-throw',
        formula: 'stat(sense)'
      }
    ],
    effects: [
      {
        type: 'advantage-attribute',
        attributeIds: [ 'attack-roll', 'strength', 'dexterity', 'intelligence', 'sense', 'charisma' ],
        isDisadvantage: true
      }
    ]
  }
];
