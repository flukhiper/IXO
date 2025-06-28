import { AttributeConfig } from '@/types/config/attribute';

export const mockAttributes: AttributeConfig[] = // --- Sample Attribute Configurations ---
[
  // --- Common Combat & Resource Attributes ---
  {
    id: 'hit-point',
    name: { en: 'Hit Points', th: 'พลังชีวิต' },
    description: { en: 'Your character\'s health. Reaching 0 means Death.', th: 'พลังชีวิตของตัวละคร ถึง 0 หมายถึงความตาย' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 8 },
    tags: [ 'health' ],
    scalingFormula: 'base + (stat(strength) * 2)'
  },
  {
    id: 'carry-capacity',
    name: { en: 'Carry Capacity', th: 'ความจุในการแบก' },
    description: { en: 'The maximum weight your character can carry. Reaching 20% means Encumbered. Reaching 100% means Heavy Encumbered.', th: 'น้ำหนักสูงสุดที่ตัวละครของคุณสามารถแบกได้ ถึง 20% หมายถึงติดภาระ ถึง 100% หมายถึงติดภาระหนัก' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 140 },
    tags: [ 'utility' ],
    scalingFormula: 'base + (stat(strength) * 10)'
  },
  {
    id: 'speed',
    name: { en: 'Speed', th: 'ความเร็ว' },
    description: { en: 'Your character\'s movement speed. More than target 3 points mean Swift (gains Action Point and Speed modifier -3).', th: 'ความเร็วในการเคลื่อนที่ของตัวละคร มากกว่าเป้าหมาย 3 แต้มหมายถึงรวดเร็ว (ได้รับแต้มการกระทำและตัวปรับความเร็ว -3)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'movement' ],
    scalingFormula: 'base + stat(agility)'
  },
  {
    id: 'armor-class',
    name: { en: 'Armor Class', th: 'ค่าป้องกัน' },
    description: { en: 'Difficulty to hit your character. More than Attack Roll means Miss.', th: 'ค่าความยากในการโจมตีโดนตัวละครของคุณ มากกว่าการทอยโจมตีหมายถึงพลาด' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 10 },
    tags: [ 'defense' ],
    scalingFormula: 'base + stat(agility)'
  },
  {
    id: 'movement',
    name: { en: 'Movement', th: 'การเคลื่อนไหว' },
    description: { en: 'Available movement points per turn. Reaching 0 means Cannot Move.', th: 'แต้มการเคลื่อนไหวที่ใช้ได้ต่อเทิร์น ถึง 0 หมายถึงไม่สามารถเคลื่อนที่ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'fixed', value: 9 },
    tags: [ 'movement' ],
    scalingFormula: 'base + stat(agility)'
  },
  {
    id: 'attack-roll',
    name: { en: 'Attack Roll', th: 'การทอยโจมตี' },
    description: { en: 'The roll used to determine if an attack hits. More than Armor Class means Hit.', th: 'การทอยที่ใช้ตัดสินว่าการโจมตีโดนหรือไม่ มากกว่าค่าป้องกันหมายถึงโดน' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'combat',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'offense' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'action-slot',
    name: { en: 'Action Slot', th: 'ช่องแอคชั่น' },
    description: { en: 'Determines available action slots. Intelligence modifier adds more available Action Slots.', th: 'กำหนดจำนวนช่องแอคชั่นที่ใช้ได้ ตัวปรับปัญญาจะเพิ่มช่องแอคชั่นที่ใช้ได้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'action-resource',
    baseValue: { type: 'fixed', value: 4 },
    tags: [ 'resource' ],
    scalingFormula: 'base + stat(intelligence)'
  },
  {
    id: 'initiative',
    name: { en: 'Initiative', th: 'การริเริ่ม' },
    description: { en: 'Decides who goes first in combat.', th: 'ตัดสินว่าใครไปก่อนในการต่อสู้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'turn-order',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'combat' ],
    scalingFormula: 'base + stat(sense)'
  },
  {
    id: 'action-point',
    name: { en: 'Action Point', th: 'แต้มการกระทำ' },
    description: { en: 'How many actions can be used. If a Crucial Action is used, remove all Action Points immediately.', th: 'จำนวนการกระทำที่ใช้ได้ แต่ถ้าใช้การกระทำที่สำคัญ จะลบแต้มการกระทำทั้งหมดทันที' },
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
    scalingFormula: 'base + stat(sense)'
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
    scalingFormula: 'base + stat(strength)'
  },
  {
    id: 'agility-modifier',
    name: { en: 'Agility Modifier', th: 'ตัวปรับความคล่องตัว' },
    description: { en: 'Boosts No-Heavy Armor Armor Class (no more than 2).', th: 'เพิ่มค่าป้องกันเกราะที่ไม่ใช่ชุดเกราะหนัก (ไม่เกิน 2)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    scalingFormula: 'base + stat(agility)'
  },
  {
    id: 'dexterity-modifier',
    name: { en: 'Dexterity Modifier', th: 'ตัวปรับความชำนาญ' },
    description: { en: 'Boosts Dexterity-based Weapon Damage and Shield Armor Class.', th: 'เพิ่มความเสียหายอาวุธตามความชำนาญ และค่าป้องกันโล่' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'intelligence-modifier',
    name: { en: 'Intelligence Modifier', th: 'ตัวปรับสติปัญญา' },
    description: { en: 'Boosts Power Difficulty Class.', th: 'เพิ่มค่าความยากพลัง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    scalingFormula: 'base + stat(intelligence)'
  },
  {
    id: 'sense-modifier',
    name: { en: 'Sense Modifier', th: 'ตัวปรับสัมผัส' },
    description: { en: 'Boosts Regeneration Power Slot when using Gather Power.', th: 'เพิ่มการฟื้นฟูช่องพลังเมื่อใช้รวบรวมพลัง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    scalingFormula: 'base + stat(sense)'
  },
  {
    id: 'charisma-modifier',
    name: { en: 'Charisma Modifier', th: 'ตัวปรับเสน่ห์' },
    description: { en: 'Boosts Buff/Debuff modifier effect.', th: 'เพิ่มผลกระทบตัวปรับบัฟ/ดีบัฟ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'modifier',
    baseValue: { type: 'fixed', value: 0 },
    tags: [ 'stat-modifier' ],
    scalingFormula: 'base + stat(charisma)'
  },

  // --- Core Ability Scores ---
  {
    id: 'strength',
    name: { en: 'Strength', th: 'ความแข็งแกร่ง' },
    description: { en: 'Your raw physical power.', th: 'พลังกายดิบของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'core-ability' ]
  },
  {
    id: 'agility',
    name: { en: 'Agility', th: 'ความคล่องตัว' },
    description: { en: 'Your quickness and reflexes.', th: 'ความเร็วและการตอบสนองของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'core-ability' ]
  },
  {
    id: 'dexterity',
    name: { en: 'Dexterity', th: 'ความชำนาญ' },
    description: { en: 'Your hand-eye coordination and precision.', th: 'การประสานงานมือและตาและความแม่นยำของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'core-ability' ]
  },
  {
    id: 'intelligence',
    name: { en: 'Intelligence', th: 'สติปัญญา' },
    description: { en: 'Your reasoning and knowledge.', th: 'การใช้เหตุผลและความรู้ของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'core-ability' ]
  },
  {
    id: 'sense',
    name: { en: 'Sense', th: 'สัมผัส' },
    description: { en: 'Your awareness and intuition.', th: 'การรับรู้และสัญชาตญาณของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'core-ability' ]
  },
  {
    id: 'charisma',
    name: { en: 'Charisma', th: 'เสน่ห์' },
    description: { en: 'Your force of personality and leadership.', th: 'พลังบุคลิกภาพและความเป็นผู้นำของคุณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'core-ability' ]
  },

  // --- Derived Abilities (Skills) ---
  {
    id: 'athletics',
    name: { en: 'Athletics', th: 'พลศึกษา' },
    description: { en: 'Ability for physical feats like climbing, jumping, and swimming. Associated with The Relentless Survivor and The Iron General archetypes.', th: 'ความสามารถสำหรับความสามารถทางกายภาพ เช่น การปีน การกระโดด และการว่ายน้ำ เกี่ยวข้องกับแม่แบบผู้รอดชีวิตผู้ไม่ย่อท้อและนายพลเหล็ก' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(strength)'
  },
  {
    id: 'sprint',
    name: { en: 'Sprint', th: 'วิ่งเร็ว' },
    description: { en: 'Ability for burst movement. Associated with The Relentless Survivor archetype.', th: 'ความสามารถในการเคลื่อนที่แบบกะทันหัน เกี่ยวข้องกับแม่แบบผู้รอดชีวิตผู้ไม่ย่อท้อ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(agility)'
  },
  {
    id: 'acrobatics',
    name: { en: 'Acrobatics', th: 'กายกรรม' },
    description: { en: 'Ability for agility, balance, and tumbling. Associated with The Luminous Performer archetype.', th: 'ความสามารถด้านความคล่องตัว ความสมดุล และการม้วนตัว เกี่ยวข้องกับแม่แบบนักแสดงผู้เปล่งประกาย' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'sleight-of-hand',
    name: { en: 'Sleight of Hand', th: 'ความคล่องแคล่ว' },
    description: { en: 'Ability for dexterity-based tasks like picking pockets or disarming traps. Associated with The Wealth Accumulator and The Shadow Scavenger archetypes.', th: 'ความสามารถสำหรับงานที่ต้องใช้ความชำนาญ เช่น การล้วงกระเป๋า หรือการปลดกับดัก เกี่ยวข้องกับแม่แบบผู้สะสมความมั่งคั่งและผู้หาของเงา' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'mechanical',
    name: { en: 'Mechanical', th: 'กลไก' },
    description: { en: 'Ability for working with mechanisms and technology. Associated with The Master Mechanic archetype.', th: 'ความสามารถในการทำงานกับกลไกและเทคโนโลยี เกี่ยวข้องกับแม่แบบช่างกลผู้เชี่ยวชาญ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'stealth',
    name: { en: 'Stealth', th: 'ซ่อนตัว' },
    description: { en: 'Ability for moving unseen and unheard. Associated with The Shadow Scavenger archetype.', th: 'ความสามารถในการเคลื่อนที่โดยไม่ถูกมองเห็นและไม่ได้ยิน เกี่ยวข้องกับแม่แบบผู้หาของเงา' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'recall',
    name: { en: 'Recall', th: 'การเรียกคืน' },
    description: { en: 'Ability for remembering facts and lore. Associated with The Shard Keeper and The Arcane Loremaster archetypes.', th: 'ความสามารถในการจดจำข้อเท็จจริงและตำนาน เกี่ยวข้องกับแม่แบบผู้พิทักษ์เศษเสี้ยวและผู้รู้ตำนานเวทมนตร์' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(intelligence)'
  },
  {
    id: 'comprehend',
    name: { en: 'Comprehend', th: 'ความเข้าใจ' },
    description: { en: 'Ability for understanding languages and complex concepts. Associated with The Verdant Whisperer and The Diplomatic Regent archetypes.', th: 'ความสามารถในการทำความเข้าใจภาษาและแนวคิดที่ซับซ้อน เกี่ยวข้องกับแม่แบบผู้กระซิบแห่งพืชพรรณและผู้สำเร็จราชการทูต' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(intelligence)'
  },
  {
    id: 'analyze',
    name: { en: 'Analyze', th: 'การวิเคราะห์' },
    description: { en: 'Ability for critical thinking and problem-solving. Associated with The Cosmic Seer and The Master Mechanic archetypes.', th: 'ความสามารถในการคิดเชิงวิพากษ์และการแก้ปัญหา เกี่ยวข้องกับแม่แบบผู้หยั่งรู้จักรวาลและช่างกลผู้เชี่ยวชาญ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(intelligence)'
  },
  {
    id: 'perceive',
    name: { en: 'Perceive', th: 'การรับรู้' },
    description: { en: 'Ability for noticing details and detecting hidden things. Associated with The Cunning Warlord and The Cosmic Seer archetypes.', th: 'ความสามารถในการสังเกตรายละเอียดและตรวจจับสิ่งซ่อนเร้น เกี่ยวข้องกับแม่แบบขุนศึกเจ้าเล่ห์และผู้หยั่งรู้จักรวาล' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(sense)'
  },
  {
    id: 'insight',
    name: { en: 'Insight', th: 'วิปัสสนา' },
    description: { en: 'Ability for reading people and situations. Associated with The Captivating Muse and The Verdant Whisperer archetypes.', th: 'ความสามารถในการอ่านผู้คนและสถานการณ์ เกี่ยวข้องกับแม่แบบมิวส์ผู้สะกดใจและผู้กระซิบแห่งพืชพรรณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(sense)'
  },
  {
    id: 'energy-sense',
    name: { en: 'Energy Sense', th: 'สัมผัสพลังงาน' },
    description: { en: 'Ability for sensing magical or cosmic energies. Associated with The Rift Seeker and The Arcane Loremaster archetypes.', th: 'ความสามารถในการสัมผัสพลังงานเวทมนตร์หรือพลังงานจักรวาล เกี่ยวข้องกับแม่แบบผู้แสวงหารอยแยกและผู้รู้ตำนานเวทมนตร์' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(sense)'
  },
  {
    id: 'persuasion',
    name: { en: 'Persuasion', th: 'การโน้มน้าว' },
    description: { en: 'Ability for influencing others with words. Associated with The Diplomatic Regent archetype.', th: 'ความสามารถในการโน้มน้าวผู้อื่นด้วยคำพูด เกี่ยวข้องกับแม่แบบผู้สำเร็จราชการทูต' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(charisma)'
  },
  {
    id: 'deception',
    name: { en: 'Deception', th: 'การหลอกลวง' },
    description: { en: 'Ability for misleading others. Associated with The Wealth Accumulator and The Cunning Warlord archetypes.', th: 'ความสามารถในการหลอกลวงผู้อื่น เกี่ยวข้องกับแม่แบบผู้สะสมความมั่งคั่งและขุนศึกเจ้าเล่ห์' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(charisma)'
  },
  {
    id: 'intimidation',
    name: { en: 'Intimidation', th: 'การข่มขู่' },
    description: { en: 'Ability for coercing others through threats. Associated with The Iron General archetype.', th: 'ความสามารถในการบีบบังคับผู้อื่นด้วยการข่มขู่ เกี่ยวข้องกับแม่แบบนายพลเหล็ก' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(charisma)'
  },
  {
    id: 'performance',
    name: { en: 'Performance', th: 'การแสดง' },
    description: { en: 'Ability for entertaining and captivating audiences. Associated with The Captivating Muse and The Luminous Performer archetypes.', th: 'ความสามารถในการสร้างความบันเทิงและดึงดูดผู้ชม เกี่ยวข้องกับแม่แบบมิวส์ผู้สะกดใจและนักแสดงผู้เปล่งประกาย' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'ability',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'skill' ],
    scalingFormula: 'base + stat(charisma)'
  },

  // --- Saving Throw Attributes ---
  {
    id: 'strength-saving-throw',
    name: { en: 'Strength Saving Throw', th: 'การทอยช่วยความแข็งแกร่ง' },
    description: { en: 'Resist effects that test physical might.', th: 'ต้านทานผลกระทบที่ทดสอบพละกำลังทางกายภาพ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'saving-throw' ],
    scalingFormula: 'base + stat(strength)'
  },
  {
    id: 'agility-saving-throw',
    name: { en: 'Agility Saving Throw', th: 'การทอยช่วยความคล่องตัว' },
    description: { en: 'Resist effects that test quickness and reflexes.', th: 'ต้านทานผลกระทบที่ทดสอบความรวดเร็วและการตอบสนอง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'saving-throw' ],
    scalingFormula: 'base + stat(agility)'
  },
  {
    id: 'dexterity-saving-throw',
    name: { en: 'Dexterity Saving Throw', th: 'การทอยช่วยความชำนาญ' },
    description: { en: 'Resist effects that test precision and hand-eye coordination.', th: 'ต้านทานผลกระทบที่ทดสอบความแม่นยำและการประสานงานมือและตา' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'saving-throw' ],
    scalingFormula: 'base + stat(dexterity)'
  },
  {
    id: 'intelligence-saving-throw',
    name: { en: 'Intelligence Saving Throw', th: 'การทอยช่วยสติปัญญา' },
    description: { en: 'Resist effects that test reasoning and mental fortitude.', th: 'ต้านทานผลกระทบที่ทดสอบเหตุผลและความแข็งแกร่งทางจิตใจ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'saving-throw' ],
    scalingFormula: 'base + stat(intelligence)'
  },
  {
    id: 'sense-saving-throw',
    name: { en: 'Sense Saving Throw', th: 'การทอยช่วยสัมผัส' },
    description: { en: 'Resist effects that test awareness and intuition.', th: 'ต้านทานผลกระทบที่ทดสอบการรับรู้และสัญชาตญาณ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'saving-throw' ],
    scalingFormula: 'base + stat(sense)'
  },
  {
    id: 'charisma-saving-throw',
    name: { en: 'Charisma Saving Throw', th: 'การทอยช่วยเสน่ห์' },
    description: { en: 'Resist effects that test force of personality and social influence.', th: 'ต้านทานผลกระทบที่ทดสอบพลังบุคลิกภาพและอิทธิพลทางสังคม' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'saving-throw',
    baseValue: { type: 'dice', formula: '1d20' },
    tags: [ 'saving-throw' ],
    scalingFormula: 'base + stat(charisma)'
  }
];
