import { SkillConfig } from '@/types/config/skill';

export const mockSkill: SkillConfig[] = // --- Sample Skill Configurations matching mockTraits ---
[
  // 🐉 Dragonoid Traits
  {
    id: 'dragonoid-fearless-will',
    name: { en: 'Fearless Will', th: 'เจตจำนงไร้ความกลัว' },
    description: { en: 'Your draconic will makes you immune to the Frightened condition.', th: 'เจตจำนงดุจมังกรของคุณทำให้คุณไม่กลัวสิ่งใด' },
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
      }
    ]
  },
  {
    id: 'dragonoid-hardened-scales',
    name: { en: 'Hardened Scales', th: 'เกล็ดแข็งแกร่ง' },
    description: { en: 'Your natural scales provide enhanced protection against Physical damage types.', th: 'เกล็ดธรรมชาติของคุณให้การป้องกันที่เพิ่มขึ้นจากการโจมตีทางกายภาพ' },
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
        formula: '2'
      },
      {
        type: 'reduce-damage',
        damageTypeId: 'bludgeoning',
        value: { type: 'fixed', value: 2 }
      },
      {
        type: 'reduce-damage',
        damageTypeId: 'piercing',
        value: { type: 'fixed', value: 2 }
      },
      {
        type: 'reduce-damage',
        damageTypeId: 'slashing',
        value: { type: 'fixed', value: 2 }
      }
    ]
  },

  // 💀 Kijin Traits
  {
    id: 'kijin-pain-fury',
    name: { en: 'Pain Fury', th: 'โทสะแห่งความเจ็บปวด' },
    description: { en: 'When below 50% Hit Points, gain condition Fury.', th: 'เมื่อพลังชีวิตต่ำกว่า 50% ได้รับสถานะโทสะ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🩸',
    tags: [ 'berserker', 'combat', 'conditional' ],
    stack: { id: 'pain-fury-overwrite', type: 'overwrite', priority: 5 },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'conditional-condition',
        conditionIds: [ 'fury' ],
        requirements: [ 'attribute(hit-point).current < attribute(hit-point).max / 2' ]
      }
    ]
  },
  {
    id: 'kijin-unkillable-instinct',
    name: { en: 'Unkillable Instinct', th: 'สัญชาตญาณอมตะ' },
    description: { en: 'When below 0 Hit Points, gain condition Relentless.', th: 'เมื่อพลังชีวิตต่ำกว่า 0 ได้รับสถานะไม่หยุดยั้ง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '💪',
    tags: [ 'berserker', 'survival', 'passive' ],
    stack: { id: 'unkillable-instinct-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'conditional-condition',
        conditionIds: [ 'relentless' ],
        requirements: [ 'attribute(hit-point).current <= 0' ]
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
        attributeId: 'carry-capacity',
        formula: 'attribute(carry-capacity).max * 0.5'
      }
    ]
  },
  {
    id: 'mechina-restless-processor',
    name: { en: 'Restless Processor', th: 'หน่วยประมวลผลไม่หยุดหย่อน' },
    description: { en: 'You require less downtime to restore your energy and can perform +1 additional downtime activity and extra downtime Maintenance with half intensity.', th: 'คุณต้องการเวลาพักผ่อนน้อยลงในการฟื้นฟูพลังงาน และสามารถทำกิจกรรมช่วงเวลาสั้นๆ ได้เพิ่ม +1 และกิจกรรมบำรุงรักษาเพิ่มด้วยความเข้มข้นครึ่งหนึ่ง' },
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
        downtimeId: 'maintenance',
        intense: 'half'
      }
    ]
  },

  // 🐾 Werebeast Traits
  {
    id: 'werebeast-obsessive-focus',
    name: { en: 'Obsessive Focus', th: 'การจดจ่ออย่างหมกมุ่น' },
    description: { en: 'Select a skill at character creation that grants a stat modifier bonus.', th: 'เลือกทักษะเมื่อสร้างตัวละครที่ให้โบนัสตัวปรับสถานะ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎯',
    tags: [ 'animalistic', 'character-creation', 'choice' ],
    stack: { id: 'obsessive-focus-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'selectable',
        effects: [
          {
            name: { en: 'Power Obsession', th: 'หมกมุ่นพลัง' },
            description: { en: 'Gain +2 to Strength Modifier.', th: 'ได้รับ +2 ให้ตัวปรับความแข็งแกร่ง' },
            type: 'stat-modify',
            statId: 'strength',
            formula: '2'
          },
          {
            name: { en: 'Knowledge Obsession', th: 'หมกมุ่นความรู้' },
            description: { en: 'Gain +2 to Intelligence Modifier.', th: 'ได้รับ +2 ให้ตัวปรับสติปัญญา' },
            type: 'stat-modify',
            statId: 'intelligence',
            formula: '2'
          },
          {
            name: { en: 'Fame Obsession', th: 'หมกมุ่นชื่อเสียง' },
            description: { en: 'Gain +2 to Charisma Modifier.', th: 'ได้รับ +2 ให้ตัวปรับเสน่ห์' },
            type: 'stat-modify',
            statId: 'charisma',
            formula: '2'
          }
        ]
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
        type: 'attribute-modify',
        attributeId: 'perceive',
        formula: '2'
      },
      {
        type: 'attribute-modify',
        attributeId: 'initiative',
        formula: '2'
      }
    ]
  },

  // 🌿 Elf Traits
  {
    id: 'elf-timeless-composure',
    name: { en: 'Timeless Composure', th: 'ความสงบที่อยู่เหนือกาลเวลา' },
    description: { en: 'Your long life grants you an innate calm, making you resistant to mind-based interactions.', th: 'ชีวิตที่ยืนยาวของคุณทำให้คุณสงบนิ่งโดยธรรมชาติ ทำให้คุณต้านทานปฏิสัมพันธ์ที่เกี่ยวกับจิตใจ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🧘',
    tags: [ 'ancient', 'mental-resilience', 'passive' ],
    stack: { id: 'timeless-composure-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'attribute-modify',
        attributeId: 'sense-saving-throw',
        formula: '2'
      },
      {
        type: 'block-condition',
        tags: [ 'charmed', 'sleep' ]
      }
    ]
  },
  {
    id: 'elf-ancient-gift',
    name: { en: 'Ancient Gift', th: 'พรแห่งโบราณ' },
    description: { en: 'During any short or full downtime, choose or replace your current Ancient Gift action with any other from the predefined Ancient Gift action list.', th: 'ในช่วงเวลาพักผ่อนสั้นหรือเต็ม คุณสามารถเลือกหรือเปลี่ยนการกระทำ Ancient Gift ปัจจุบันของคุณด้วยการกระทำอื่น ๆ จากรายการ Ancient Gift ที่กำหนดไว้ล่วงหน้า' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎁',
    tags: [ 'ancient', 'versatility', 'downtime' ],
    stack: { id: 'ancient-gift-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'action',
        actionIds: [ 'echo-step', 'spark-of-force', 'ancestral-guard', 'ancient-instinct' ]
      }
    ]
  },

  // 😈 Demonia Traits
  {
    id: 'demonia-adaptive-copycat',
    name: { en: 'Adaptive Copycat', th: 'นักเลียนแบบปรับตัว' },
    description: { en: 'Once per rest, you may mimic one enemy action used against you and use it next turn (once only).', th: 'หนึ่งครั้งต่อการพักผ่อน คุณสามารถเลียนแบบการกระทำของศัตรูที่ใช้ต่อคุณและใช้ได้ในเทิร์นถัดไป (เพียงครั้งเดียว)' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '👻',
    tags: [ 'superior', 'mimicry', 'active' ],
    stack: { id: 'adaptive-copycat-overwrite', type: 'overwrite', priority: 5 },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'action',
        actionIds: [ 'mimic-ability' ]
      }
    ]
  },
  {
    id: 'demonia-harshborn',
    name: { en: 'Harshborn', th: 'กำเนิดจากความโหดร้าย' },
    description: { en: 'Immune to environmental hazards. Gain resistance to one elemental damage type of your choice.', th: 'ภูมิคุ้มกันต่ออันตรายจากสิ่งแวดล้อม ได้รับความต้านทานต่อความเสียหายธาตุประเภทหนึ่งที่คุณเลือก' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🌋',
    tags: [ 'superior', 'survival', 'resilience', 'choice' ],
    stack: { id: 'harshborn-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'block-condition',
        tags: [ 'environmental-hazard' ]
      },
      {
        type: 'selectable',
        effects: [
          {
            name: { en: 'Fire Resistance', th: 'ต้านทานไฟ' },
            description: { en: 'Gain resistance to Fire damage.', th: 'ได้รับความต้านทานความเสียหายไฟ' },
            type: 'resistence',
            damageTypeId: 'fire',
            damageScaleId: 'resistant'
          },
          {
            name: { en: 'Cold Resistance', th: 'ต้านทานความเย็น' },
            description: { en: 'Gain resistance to Cold damage.', th: 'ได้รับความต้านทานความเสียหายความเย็น' },
            type: 'resistence',
            damageTypeId: 'cold',
            damageScaleId: 'resistant'
          },
          {
            name: { en: 'Lightning Resistance', th: 'ต้านทานสายฟ้า' },
            description: { en: 'Gain resistance to Lightning damage.', th: 'ได้รับความต้านทานความเสียหายสายฟ้า' },
            type: 'resistence',
            damageTypeId: 'lightning',
            damageScaleId: 'resistant'
          },
          {
            name: { en: 'Acid Resistance', th: 'ต้านทานกรด' },
            description: { en: 'Gain resistance to Acid damage.', th: 'ได้รับความต้านทานความเสียหายกรด' },
            type: 'resistence',
            damageTypeId: 'acid',
            damageScaleId: 'resistant'
          },
          {
            name: { en: 'Poison Resistance', th: 'ต้านทานพิษ' },
            description: { en: 'Gain resistance to Poison damage.', th: 'ได้รับความต้านทานความเสียหายพิษ' },
            type: 'resistence',
            damageTypeId: 'poison',
            damageScaleId: 'resistant'
          }
        ]
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
        attributeId: 'persuasion',
        formula: '2'
      },
      {
        type: 'attribute-modify',
        attributeId: 'deception',
        formula: '2'
      }
    ]
  },
  {
    id: 'siren-song-of-entrapment',
    name: { en: 'Song of Entrapment', th: 'บทเพลงแห่งการล่อลวง' },
    description: { en: 'Once per combat, force enemies in range (e.g. 3 tiles) to make a Sense save or become Dazed for 1 turn.', th: 'หนึ่งครั้งต่อการต่อสู้ บังคับศัตรูในระยะ (เช่น 3 ช่อง) ให้ทำการทอยช่วยสัมผัส มิฉะนั้นจะติดสถานะมึนงงเป็นเวลา 1 เทิร์น' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎼',
    tags: [ 'alluring', 'control', 'active' ],
    stack: { id: 'song-of-entrapment-overwrite', type: 'overwrite', priority: 5 },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'action',
        actionIds: [ 'siren-lullaby' ]
      }
    ]
  },

  // 💎 Aethel (Unchanged) Traits
  {
    id: 'aethel-obedient-role',
    name: { en: 'Obedient Role', th: 'บทบาทที่เชื่อฟัง' },
    description: { en: 'Select a skill at character creation and must follow an assigned Quest or Law or suffer a penalty.', th: 'เลือกทักษะเมื่อสร้างตัวละครและต้องปฏิบัติตามภารกิจหรือกฎหมายที่กำหนด มิฉะนั้นจะได้รับโทษ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🔗',
    tags: [ 'aethel', 'character-creation', 'choice' ],
    stack: { id: 'obedient-role-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'selectable',
        effects: [
          { name: { en: 'Bodyguard', th: 'องครักษ์' }, description: { en: 'Gain +2 Athletics.', th: 'ได้รับ +2 พลศึกษา' }, type: 'attribute-modify', attributeId: 'athletics', formula: '2' },
          { name: { en: 'Messenger', th: 'ผู้ส่งสาร' }, description: { en: 'Gain +2 Sprint.', th: 'ได้รับ +2 วิ่งเร็ว' }, type: 'attribute-modify', attributeId: 'sprint', formula: '2' },
          { name: { en: 'Performer', th: 'นักแสดง' }, description: { en: 'Gain +2 Acrobatics.', th: 'ได้รับ +2 กายกรรม' }, type: 'attribute-modify', attributeId: 'acrobatics', formula: '2' },
          { name: { en: 'Explorer', th: 'นักสำรวจ' }, description: { en: 'Gain +2 Sleight of Hand.', th: 'ได้รับ +2 ความคล่องแคล่ว' }, type: 'attribute-modify', attributeId: 'sleight-of-hand', formula: '2' },
          { name: { en: 'Technician', th: 'ช่างเทคนิค' }, description: { en: 'Gain +2 Mechanical.', th: 'ได้รับ +2 กลไก' }, type: 'attribute-modify', attributeId: 'mechanical', formula: '2' },
          { name: { en: 'Spy', th: 'สายลับ' }, description: { en: 'Gain +2 Stealth.', th: 'ได้รับ +2 ซ่อนตัว' }, type: 'attribute-modify', attributeId: 'stealth', formula: '2' },
          { name: { en: 'Scholar', th: 'นักวิชาการ' }, description: { en: 'Gain +2 Recall.', th: 'ได้รับ +2 การเรียกคืน' }, type: 'attribute-modify', attributeId: 'recall', formula: '2' },
          { name: { en: 'Detective', th: 'นักสืบ' }, description: { en: 'Gain +2 Comprehend.', th: 'ได้รับ +2 ความเข้าใจ' }, type: 'attribute-modify', attributeId: 'comprehend', formula: '2' },
          { name: { en: 'Researcher', th: 'นักวิจัย' }, description: { en: 'Gain +2 Analyze.', th: 'ได้รับ +2 การวิเคราะห์' }, type: 'attribute-modify', attributeId: 'analyze', formula: '2' },
          { name: { en: 'Sentinel', th: 'ทหารยาม' }, description: { en: 'Gain +2 Perceive.', th: 'ได้รับ +2 การรับรู้' }, type: 'attribute-modify', attributeId: 'perceive', formula: '2' },
          { name: { en: 'Strategist', th: 'นักวางแผน' }, description: { en: 'Gain +2 Insight.', th: 'ได้รับ +2 วิปัสสนา' }, type: 'attribute-modify', attributeId: 'insight', formula: '2' },
          { name: { en: 'Healer', th: 'ผู้รักษา' }, description: { en: 'Gain +2 Energy Sense.', th: 'ได้รับ +2 สัมผัสพลังงาน' }, type: 'attribute-modify', attributeId: 'energy-sense', formula: '2' },
          { name: { en: 'Politician', th: 'นักการเมือง' }, description: { en: 'Gain +2 Persuasion.', th: 'ได้รับ +2 การโน้มน้าว' }, type: 'attribute-modify', attributeId: 'persuasion', formula: '2' },
          { name: { en: 'Actor', th: 'นักแสดง' }, description: { en: 'Gain +2 Deception.', th: 'ได้รับ +2 การหลอกลวง' }, type: 'attribute-modify', attributeId: 'deception', formula: '2' },
          { name: { en: 'Warrior', th: 'นักรบ' }, description: { en: 'Gain +2 Intimidation.', th: 'ได้รับ +2 การข่มขู่' }, type: 'attribute-modify', attributeId: 'intimidation', formula: '2' },
          { name: { en: 'Storyteller', th: 'นักเล่าเรื่อง' }, description: { en: 'Gain +2 Performance.', th: 'ได้รับ +2 การแสดง' }, type: 'attribute-modify', attributeId: 'performance', formula: '2' }
        ]
      }
    ]
  },
  {
    id: 'aethel-hidden-spark',
    name: { en: 'Hidden Spark', th: 'ประกายที่ซ่อนอยู่' },
    description: { en: 'Once per full downtime, may reroll any failed action or save as if you had advantage (internal potential awakens).', th: 'หนึ่งครั้งต่อการพักผ่อนเต็ม อาจทอยซ้ำการกระทำหรือการทอยช่วยที่ล้มเหลวราวกับว่าคุณมีข้อได้เปรียบ (ศักยภาพภายในตื่นขึ้น)' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '✨',
    tags: [ 'aethel', 'potential', 'reroll', 'downtime' ],
    stack: { id: 'hidden-spark-stack', type: 'stack' },
    pathId: 'any',
    requiredCharacterLevel: 1,
    effects: [
      {
        type: 'flavor-text',
        name: { en: 'Internal Potential', th: 'ศักยภาพภายใน' },
        description: { en: 'This skill grants a powerful reroll mechanic accessible during full downtime.', th: 'ทักษะนี้ให้กลไกการทอยซ้ำที่มีประสิทธิภาพซึ่งสามารถเข้าถึงได้ในช่วงเวลาพักผ่อนเต็ม' }
      }
    ]
  }
];
