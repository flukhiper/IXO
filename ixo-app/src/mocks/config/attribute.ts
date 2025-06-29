import { AttributeConfig } from '@/types/config/attribute';

export const mockAttributes: AttributeConfig[] = // --- Sample Attribute Configurations ---
[
  // --- Common Combat & Resource Attributes ---
  {
    id: 'hit-point',
    name: { en: 'Hit Points', th: 'พลังชีวิต' },
    description: { en: 'Your character\'s health.', th: 'พลังชีวิตของตัวละคร' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 8 },
    tags: [ 'health' ],
    formula: 'stat(strength)'
  },
  {
    id: 'carry-capacity',
    name: { en: 'Carry Capacity', th: 'ความจุในการแบก' },
    description: { en: 'The maximum weight your character can carry.', th: 'น้ำหนักสูงสุดที่ตัวละครของคุณสามารถแบกได้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 140 },
    tags: [ 'utility' ],
    formula: 'stat(strength) * 10'
  },
  {
    id: 'speed',
    name: { en: 'Speed', th: 'ความเร็ว' },
    description: { en: 'Your character\'s movement speed.', th: 'ความเร็วในการเคลื่อนที่ของตัวละคร' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'movement' ],
    formula: 'stat(agility)'
  },
  {
    id: 'armor-class',
    name: { en: 'Armor Class', th: 'ค่าป้องกัน' },
    description: { en: 'Difficulty to hit your character.', th: 'ค่าความยากในการโจมตีโดนตัวละครของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 10 },
    tags: [ 'defense' ],
    formula: 'stat(agility)'
  },
  {
    id: 'movement',
    name: { en: 'Movement', th: 'การเคลื่อนไหว' },
    description: { en: 'Available movement points per turn.', th: 'แต้มการเคลื่อนไหวที่ใช้ได้ต่อเทิร์น' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 9 },
    tags: [ 'movement' ],
    formula: 'stat(agility)'
  },
  {
    id: 'attack-roll',
    name: { en: 'Attack Roll', th: 'การทอยโจมตี' },
    description: { en: 'The roll used to determine if an attack hits.', th: 'การทอยที่ใช้ตัดสินว่าการโจมตีโดนหรือไม่' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'offense' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'action-slot',
    name: { en: 'Action Slot', th: 'ช่องแอคชั่น' },
    description: { en: 'Determines available action slots.', th: 'กำหนดจำนวนช่องแอคชั่นที่ใช้ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'action-resource',
    baseValue: { type: 'fixed', value: 3 },
    tags: [ 'resource' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'initiative',
    name: { en: 'Initiative', th: 'การริเริ่ม' },
    description: { en: 'Decides who goes first in combat.', th: 'ตัดสินว่าใครไปก่อนในการต่อสู้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'turn-order',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'combat' ],
    formula: 'stat(sense)'
  },
  {
    id: 'action-point',
    name: { en: 'Action Point', th: 'แต้มการกระทำ' },
    description: { en: 'How many actions can be used.', th: 'จำนวนการกระทำที่ใช้ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'action-resource',
    baseValue: { type: 'fixed', value: 2 },
    restoreOns: [ 'start-turn' ],
    restoreValue: { type: 'fixed', value: 2 },
    tags: [ 'resource' ]
  },
  {
    id: 'energy-point',
    name: { en: 'Energy Point', th: 'แต้มพลัง' },
    description: { en: 'Used as cost for some Crucial Actions.', th: 'ใช้เป็นค่าใช้จ่ายสำหรับการกระทำที่สำคัญบางอย่าง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'action-resource',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'resource' ],
    formula: 'stat(sense)'
  },

  // --- Modifier Attributes ---
  {
    id: 'strength-modifier',
    name: { en: 'Strength Modifier', th: 'ตัวปรับความแข็งแกร่ง' },
    description: { en: 'Boosts Strength-based Weapon Damage and Attack Difficulty Class.', th: 'เพิ่มความเสียหายอาวุธตามความแข็งแกร่ง และค่าความยากในการโจมตี' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    formula: 'stat(strength)'
  },
  {
    id: 'agility-modifier',
    name: { en: 'Agility Modifier', th: 'ตัวปรับความคล่องตัว' },
    description: { en: 'Boosts No-Heavy Armor Armor Class (no more than 2).', th: 'เพิ่มค่าป้องกันเกราะที่ไม่ใช่ชุดเกราะหนัก (ไม่เกิน 2)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    formula: 'stat(agility)'
  },
  {
    id: 'dexterity-modifier',
    name: { en: 'Dexterity Modifier', th: 'ตัวปรับความชำนาญ' },
    description: { en: 'Boosts Dexterity-based Weapon Damage and Shield Armor Class.', th: 'เพิ่มความเสียหายอาวุธตามความชำนาญ และค่าป้องกันโล่' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'intelligence-modifier',
    name: { en: 'Intelligence Modifier', th: 'ตัวปรับสติปัญญา' },
    description: { en: 'Boosts Power Difficulty Class.', th: 'เพิ่มค่าความยากพลัง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'sense-modifier',
    name: { en: 'Sense Modifier', th: 'ตัวปรับสัมผัส' },
    description: { en: 'Boosts Regeneration Power Slot when using Gather Power.', th: 'เพิ่มการฟื้นฟูช่องพลังเมื่อใช้รวบรวมพลัง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    formula: 'stat(sense)'
  },
  {
    id: 'charisma-modifier',
    name: { en: 'Charisma Modifier', th: 'ตัวปรับเสน่ห์' },
    description: { en: 'Boosts Buff/Debuff modifier effect.', th: 'เพิ่มผลกระทบตัวปรับบัฟ/ดีบัฟ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    formula: 'stat(charisma)'
  },

  // --- Core Ability Scores ---
  {
    id: 'strength-ability',
    name: { en: 'Strength', th: 'ความแข็งแกร่ง' },
    description: { en: 'Your raw physical power.', th: 'พลังกายดิบของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'core-ability' ],
    formula: 'stat(strength)'
  },
  {
    id: 'agility-ability',
    name: { en: 'Agility', th: 'ความคล่องตัว' },
    description: { en: 'Your quickness and reflexes.', th: 'ความเร็วและการตอบสนองของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'core-ability' ],
    formula: 'stat(agility)'
  },
  {
    id: 'dexterity-ability',
    name: { en: 'Dexterity', th: 'ความชำนาญ' },
    description: { en: 'Your hand-eye coordination and precision.', th: 'การประสานงานมือและตาและความแม่นยำของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'core-ability' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'intelligence-ability',
    name: { en: 'Intelligence', th: 'สติปัญญา' },
    description: { en: 'Your reasoning and knowledge.', th: 'การใช้เหตุผลและความรู้ของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'core-ability' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'sense-ability',
    name: { en: 'Sense', th: 'สัมผัส' },
    description: { en: 'Your awareness and intuition.', th: 'การรับรู้และสัญชาตญาณของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'core-ability' ],
    formula: 'stat(sense)'
  },
  {
    id: 'charisma-ability',
    name: { en: 'Charisma', th: 'เสน่ห์' },
    description: { en: 'Your force of personality and leadership.', th: 'พลังบุคลิกภาพและความเป็นผู้นำของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'core-ability' ],
    formula: 'stat(charisma)'
  },

  // --- Derived Abilities (Skills) ---
  {
    id: 'athletics',
    name: { en: 'Athletics', th: 'พลศึกษา' },
    description: { en: 'Ability for physical feats like climbing, jumping, and swimming.', th: 'ความสามารถสำหรับความสามารถทางกายภาพ เช่น การปีน การกระโดด และการว่ายน้ำ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(strength)'
  },
  {
    id: 'sprint',
    name: { en: 'Sprint', th: 'วิ่งเร็ว' },
    description: { en: 'Ability for burst movement.', th: 'ความสามารถในการเคลื่อนที่แบบกะทันหัน' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(agility)'
  },
  {
    id: 'acrobatics',
    name: { en: 'Acrobatics', th: 'กายกรรม' },
    description: { en: 'Ability for agility, balance, and tumbling.', th: 'ความสามารถด้านความคล่องตัว ความสมดุล และการม้วนตัว' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(agility)'
  },
  {
    id: 'sleight-of-hand',
    name: { en: 'Sleight of Hand', th: 'ความคล่องแคล่ว' },
    description: { en: 'Ability for dexterity-based tasks like picking pockets or disarming traps.', th: 'ความสามารถสำหรับงานที่ต้องใช้ความชำนาญ เช่น การล้วงกระเป๋า หรือการปลดกับดัก' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'mechanical',
    name: { en: 'Mechanical', th: 'กลไก' },
    description: { en: 'Ability for working with mechanisms and technology.', th: 'ความสามารถในการทำงานกับกลไกและเทคโนโลยี' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'stealth',
    name: { en: 'Stealth', th: 'ซ่อนตัว' },
    description: { en: 'Ability for moving unseen and unheard.', th: 'ความสามารถในการเคลื่อนที่โดยไม่ถูกมองเห็นและไม่ได้ยิน' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'recall',
    name: { en: 'Recall', th: 'การเรียกคืน' },
    description: { en: 'Ability for remembering facts and lore.', th: 'ความสามารถในการจดจำข้อเท็จจริงและตำนาน' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'comprehend',
    name: { en: 'Comprehend', th: 'ความเข้าใจ' },
    description: { en: 'Ability for understanding languages and complex concepts.', th: 'ความสามารถในการทำความเข้าใจภาษาและแนวคิดที่ซับซ้อน' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'analyze',
    name: { en: 'Analyze', th: 'การวิเคราะห์' },
    description: { en: 'Ability for critical thinking and problem-solving.', th: 'ความสามารถในการคิดเชิงวิพากษ์และการแก้ปัญหา' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'perceive',
    name: { en: 'Perceive', th: 'การรับรู้' },
    description: { en: 'Ability for noticing details and detecting hidden things.', th: 'ความสามารถในการสังเกตรายละเอียดและตรวจจับสิ่งซ่อนเร้น' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(sense)'
  },
  {
    id: 'insight',
    name: { en: 'Insight', th: 'วิปัสสนา' },
    description: { en: 'Ability for reading people and situations.', th: 'ความสามารถในการอ่านผู้คนและสถานการณ์' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(sense)'
  },
  {
    id: 'energy-sense',
    name: { en: 'Energy Sense', th: 'สัมผัสพลังงาน' },
    description: { en: 'Ability for sensing magical or cosmic energies.', th: 'ความสามารถในการสัมผัสพลังงานเวทมนตร์หรือพลังงานจักรวาล' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(sense)'
  },
  {
    id: 'persuasion',
    name: { en: 'Persuasion', th: 'การโน้มน้าว' },
    description: { en: 'Ability for influencing others with words.', th: 'ความสามารถในการโน้มน้าวผู้อื่นด้วยคำพูด' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(charisma)'
  },
  {
    id: 'deception',
    name: { en: 'Deception', th: 'การหลอกลวง' },
    description: { en: 'Ability for misleading others.', th: 'ความสามารถในการหลอกลวงผู้อื่น' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(charisma)'
  },
  {
    id: 'intimidation',
    name: { en: 'Intimidation', th: 'การข่มขู่' },
    description: { en: 'Ability for coercing others through threats.', th: 'ความสามารถในการบีบบังคับผู้อื่นด้วยการข่มขู่' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(charisma)'
  },
  {
    id: 'performance',
    name: { en: 'Performance', th: 'การแสดง' },
    description: { en: 'Ability for entertaining and captivating audiences.', th: 'ความสามารถในการสร้างความบันเทิงและดึงดูดผู้ชม' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'skill' ],
    formula: 'stat(charisma)'
  },

  // --- Saving Throw Attributes ---
  {
    id: 'strength-saving-throw',
    name: { en: 'Strength Saving Throw', th: 'การทอยช่วยความแข็งแกร่ง' },
    description: { en: 'Resist effects that test physical might.', th: 'ต้านทานผลกระทบที่ทดสอบพละกำลังทางกายภาพ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'saving-throw' ],
    formula: 'stat(strength)'
  },
  {
    id: 'agility-saving-throw',
    name: { en: 'Agility Saving Throw', th: 'การทอยช่วยความคล่องตัว' },
    description: { en: 'Resist effects that test quickness and reflexes.', th: 'ต้านทานผลกระทบที่ทดสอบความรวดเร็วและการตอบสนอง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'saving-throw' ],
    formula: 'stat(agility)'
  },
  {
    id: 'dexterity-saving-throw',
    name: { en: 'Dexterity Saving Throw', th: 'การทอยช่วยความชำนาญ' },
    description: { en: 'Resist effects that test precision and hand-eye coordination.', th: 'ต้านทานผลกระทบที่ทดสอบความแม่นยำและการประสานงานมือและตา' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'saving-throw' ],
    formula: 'stat(dexterity)'
  },
  {
    id: 'intelligence-saving-throw',
    name: { en: 'Intelligence Saving Throw', th: 'การทอยช่วยสติปัญญา' },
    description: { en: 'Resist effects that test reasoning and mental fortitude.', th: 'ต้านทานผลกระทบที่ทดสอบเหตุผลและความแข็งแกร่งทางจิตใจ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'saving-throw' ],
    formula: 'stat(intelligence)'
  },
  {
    id: 'sense-saving-throw',
    name: { en: 'Sense Saving Throw', th: 'การทอยช่วยสัมผัส' },
    description: { en: 'Resist effects that test awareness and intuition.', th: 'ต้านทานผลกระทบที่ทดสอบการรับรู้และสัญชาตญาณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'saving-throw' ],
    formula: 'stat(sense)'
  },
  {
    id: 'charisma-saving-throw',
    name: { en: 'Charisma Saving Throw', th: 'การทอยช่วยเสน่ห์' },
    description: { en: 'Resist effects that test force of personality and social influence.', th: 'ต้านทานผลกระทบที่ทดสอบพลังบุคลิกภาพและอิทธิพลทางสังคม' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '2d10' },
    tags: [ 'saving-throw' ],
    formula: 'stat(charisma)'
  }
];
