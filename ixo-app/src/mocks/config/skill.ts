import { SkillConfig } from '@/types/config/skill';

// --- Sample Skill Configurations matching mockTraits ---
export const mockSkill: SkillConfig[] = [
  // 🐉 Dragonoid Traits
  {
    id: 'dragonoid-fearless-will',
    name: { en: 'Fearless Will', th: 'เจตจำนงไร้ความกลัว' },
    description: { en: 'Your draconic will makes you immune to fear and grants advantage on mental saving throws.', th: 'เจตจำนงดุจมังกรของคุณทำให้คุณไม่กลัวสิ่งใด และได้เปรียบในการทอยช่วยทางจิตใจ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🛡️',
    tags: [ 'draconic', 'mental-resilience', 'passive' ],
    stack: { id: 'fearless-will-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'block-condition',
        tags: [ 'frightened' ]
      },
      {
        type: 'advantage-attribute',
        attributeIds: [ 'wisdom-saving-throw', 'intelligence-saving-throw', 'charisma-saving-throw' ]
      }
    ]
  },
  {
    id: 'dragonoid-hardened-scales',
    name: { en: 'Hardened Scales', th: 'เกล็ดแข็งแกร่ง' },
    description: { en: 'Your natural scales provide enhanced protection against physical attacks.', th: 'เกล็ดธรรมชาติของคุณให้การป้องกันที่เพิ่มขึ้นจากการโจมตีทางกายภาพ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🧱',
    tags: [ 'draconic', 'defense', 'passive' ],
    stack: { id: 'hardened-scales-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'armor-class',
        formula: '1 + floor(stat(constitution) / 4)'
      },
      {
        type: 'resistence',
        damageTypeId: 'piercing',
        damageScaleId: 'resistant'
      },
      {
        type: 'resistence',
        damageTypeId: 'bludgeoning',
        damageScaleId: 'resistant'
      }
    ]
  },

  // 💀 Kijin Traits
  {
    id: 'kijin-pain-fury',
    name: { en: 'Pain Fury', th: 'โทสะแห่งความเจ็บปวด' },
    description: { en: 'When gravely injured, you enter a state of furious rampage, increasing your damage output.', th: 'เมื่อบาดเจ็บสาหัส คุณจะเข้าสู่สภาวะคลั่งที่เพิ่มพลังโจมตีของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🩸',
    tags: [ 'berserker', 'combat', 'conditional' ],
    stack: { id: 'pain-fury-overwrite', type: 'overwrite', priority: 5 },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'conditional-condition',
        conditionIds: [ 'furious-rampage' ], // Assumed condition to be defined elsewhere
        requirements: [ 'attr(hit-point).current < attr(hit-point).max / 4' ]
      }
    ]
  },
  {
    id: 'kijin-unkillable-instinct',
    name: { en: 'Unkillable Instinct', th: 'สัญชาตญาณอมตะ' },
    description: { en: 'Your will to survive allows you to shrug off lethal blows that would fell others.', th: 'เจตจำนงในการเอาชีวิตรอดของคุณทำให้คุณสามารถทนทานต่อการโจมตีถึงตายที่ผู้อื่นจะล้ม' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '💪',
    tags: [ 'berserker', 'survival', 'passive' ],
    stack: { id: 'unkillable-instinct-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'hit-point',
        formula: 'if (attr(hit-point).current <= 0 && dice(1d20) + stat(constitution) >= 15, attr(hit-point).max * 0.1, 0)'
      }
    ]
  },

  // ⚙️ Mechina Traits
  {
    id: 'mechina-extra-load',
    name: { en: 'Extra Load', th: 'บรรทุกพิเศษ' },
    description: { en: 'Your internal storage allows you to carry more items without penalty.', th: 'พื้นที่เก็บของภายในช่วยให้คุณพกพาของได้มากขึ้นโดยไม่มีข้อจำกัด' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '📦',
    tags: [ 'construct', 'utility', 'passive' ],
    stack: { id: 'extra-load-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'inventory-capacity', // Assumed attribute ID for inventory space/weight limit
        formula: '5 + stat(strength)'
      }
    ]
  },
  {
    id: 'mechina-restless-processor',
    name: { en: 'Restless Processor', th: 'หน่วยประมวลผลไม่หยุดหย่อน' },
    description: { en: 'You require less downtime to restore your energy and can perform a short downtime activity faster.', th: 'คุณต้องการเวลาพักผ่อนน้อยลงในการฟื้นฟูพลังงาน และสามารถทำกิจกรรมช่วงเวลาสั้นๆ ได้เร็วขึ้น' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '⚡',
    tags: [ 'construct', 'restoration', 'downtime' ],
    stack: { id: 'restless-processor-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'extra-downtime',
        bonusActivities: 1
      },
      {
        type: 'downtime',
        downtimeId: 'short-rest-efficiency', // Assumed downtime ID that reduces short rest time
        intense: 'half'
      }
    ]
  },

  // 🐾 Werebeast Traits
  {
    id: 'werebeast-obsessive-focus',
    name: { en: 'Obsessive Focus', th: 'การจดจ่ออย่างหมกมุ่น' },
    description: { en: 'When targeting a single enemy, your attacks become incredibly precise.', th: 'เมื่อเล็งเป้าหมายศัตรูเดียว การโจมตีของคุณจะแม่นยำอย่างเหลือเชื่อ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎯',
    tags: [ 'animalistic', 'combat', 'precision' ],
    stack: { id: 'obsessive-focus-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'conditional-condition',
        conditionIds: [ 'enhanced-precision' ], // Assumed condition for bonus to attack rolls
        requirements: [ 'targetCount == 1' ] // Hypothetical condition check on target
      }
    ]
  },
  {
    id: 'werebeast-predator-senses',
    name: { en: 'Predator Senses', th: 'สัมผัสผู้ล่า' },
    description: { en: 'Your senses are heightened, allowing you to detect hidden foes and dangers.', th: 'สัมผัสของคุณคมชัดขึ้น ทำให้คุณสามารถตรวจจับศัตรูและอันตรายที่ซ่อนอยู่ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '👁️',
    tags: [ 'animalistic', 'perception', 'exploration' ],
    stack: { id: 'predator-senses-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'advantage-attribute',
        attributeIds: [ 'perception', 'investigation' ], // Assumed ability attributes
        isDisadvantage: false
      }
    ]
  },

  // 🌿 Elf Traits
  {
    id: 'elf-timeless-composure',
    name: { en: 'Timeless Composure', th: 'ความสงบที่อยู่เหนือกาลเวลา' },
    description: { en: 'Your long life grants you an innate calm, making you resistant to charm and sleep.', th: 'ชีวิตที่ยืนยาวของคุณทำให้คุณสงบนิ่งโดยธรรมชาติ ทำให้คุณต้านทานเวทมนตร์เสน่ห์และการหลับได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🧘',
    tags: [ 'ancient', 'mental-resilience', 'passive' ],
    stack: { id: 'timeless-composure-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'block-condition',
        tags: [ 'charmed', 'sleep' ] // Assumed condition tags
      },
      {
        type: 'advantage-attribute',
        attributeIds: [ 'charisma-saving-throw' ],
        isDisadvantage: false
      }
    ]
  },
  {
    id: 'elf-ancient-gift',
    name: { en: 'Ancient Gift', th: 'พรแห่งโบราณ' },
    description: { en: 'Elven insight allows you to learn an additional skill from any path.', th: 'ความเข้าใจของเอลฟ์ช่วยให้คุณเรียนรู้ทักษะเพิ่มเติมจากเส้นทางใดก็ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎁',
    tags: [ 'ancient', 'versatility', 'passive' ],
    stack: { id: 'ancient-gift-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'extra-proficiency',
        points: 1 // Represents gaining an additional skill choice
      }
    ]
  },

  // 😈 Demonia Traits
  {
    id: 'demonia-adaptive-copycat',
    name: { en: 'Adaptive Copycat', th: 'นักเลียนแบบปรับตัว' },
    description: { en: 'You can temporarily mimic the abilities of a fallen foe.', th: 'คุณสามารถเลียนแบบความสามารถของศัตรูที่ล้มลงได้ชั่วคราว' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '👻',
    tags: [ 'superior', 'mimicry', 'active' ],
    stack: { id: 'adaptive-copycat-overwrite', type: 'overwrite', priority: 5 },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'action',
        actionIds: [ 'mimic-ability' ] // Assumed action that triggers the mimicry
      }
    ]
  },
  {
    id: 'demonia-harshborn',
    name: { en: 'Harshborn', th: 'กำเนิดจากความโหดร้าย' },
    description: { en: 'Born from harsh environments, you gain innate resistance to one type of elemental damage.', th: 'เกิดจากสภาพแวดล้อมที่โหดร้าย คุณได้รับความต้านทานต่อความเสียหายธาตุประเภทหนึ่งโดยกำเนิด' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🌋',
    tags: [ 'superior', 'survival', 'resilience' ],
    stack: { id: 'harshborn-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'resistence',
        damageTypeId: 'fire', // Example: Demonia might be naturally resistant to fire
        damageScaleId: 'resistant'
      }
    ]
  },

  // 🎶 Siren Traits
  {
    id: 'siren-enchanting-aura',
    name: { en: 'Enchanting Aura', th: 'ออร่าแห่งมนต์เสน่ห์' },
    description: { en: 'Your mere presence makes others more receptive to your charms.', th: 'เพียงแค่การปรากฏตัวของคุณก็ทำให้ผู้อื่นคล้อยตามเสน่ห์ของคุณได้ง่ายขึ้น' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '✨',
    tags: [ 'alluring', 'social', 'passive' ],
    stack: { id: 'enchanting-aura-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'charisma',
        formula: '2' // Direct bonus to Charisma
      },
      {
        type: 'advantage-attribute',
        attributeIds: [ 'persuasion', 'deception' ], // Assumed ability attributes
        isDisadvantage: false
      }
    ]
  },
  {
    id: 'siren-song-of-entrapment',
    name: { en: 'Song of Entrapment', th: 'บทเพลงแห่งการล่อลวง' },
    description: { en: 'You can sing a magical melody that temporarily charms and disorients foes.', th: 'คุณสามารถร้องเพลงเวทมนตร์ที่ทำให้ศัตรูหลงเสน่ห์และสับสนชั่วคราวได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎼',
    tags: [ 'alluring', 'control', 'active' ],
    stack: { id: 'song-of-entrapment-overwrite', type: 'overwrite', priority: 5 },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'action',
        actionIds: [ 'siren-lullaby' ] // Assumed action to be defined elsewhere, e.g., an action that applies "charmed" condition
      }
    ]
  },

  // 💎 Aethel (Unchanged) Traits
  {
    id: 'aethel-obedient-role',
    name: { en: 'Obedient Role', th: 'บทบาทที่เชื่อฟัง' },
    description: { en: 'You are bound by a greater purpose, allowing you to avoid certain distractions or mental interference.', th: 'คุณถูกผูกมัดด้วยวัตถุประสงค์ที่ยิ่งใหญ่กว่า ทำให้คุณหลีกเลี่ยงสิ่งรบกวนหรือการรบกวนทางจิตใจบางอย่างได้' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🔗',
    tags: [ 'aethel', 'control-immunity', 'passive' ],
    stack: { id: 'obedient-role-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'block-condition',
        tags: [ 'controlled', 'manipulated' ] // Assumed condition tags related to mind control
      }
    ]
  },
  {
    id: 'aethel-hidden-spark',
    name: { en: 'Hidden Spark', th: 'ประกายที่ซ่อนอยู่' },
    description: { en: 'Though your current path is defined, a dormant power within you allows for unexpected versatility.', th: 'แม้เส้นทางปัจจุบันของคุณจะถูกกำหนดไว้ พลังที่ซ่อนอยู่ภายในตัวคุณก็ช่วยให้คุณมีความหลากหลายที่คาดไม่ถึง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '✨',
    tags: [ 'aethel', 'versatility', 'potential' ],
    stack: { id: 'hidden-spark-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'extra-downtime',
        bonusActivities: 1
      },
      {
        type: 'extra-proficiency',
        points: 1
      }
    ]
  }
];
