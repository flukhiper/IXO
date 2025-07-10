import type { AnyAttributeConfig } from '@/types/config/attribute';
import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import { PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';

export const mock: AnyAttributeConfig[] = [
  // Resource Attributes
  {
    id: 'attribute-hit-points',
    name: {
      en: 'Hit Points',
      th: 'พลังชีวิต'
    },
    description: {
      en: 'Health pool, reduced by damage. Represents your character\'s physical well-being and ability to withstand harm.',
      th: 'พูลสุขภาพ ลดลงด้วยความเสียหาย แสดงถึงความเป็นอยู่ทางกายภาพของตัวละครและความสามารถในการทนต่ออันตราย'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'HP',
    tags: [ 'health', 'survival', 'combat' ],
    icon: 'hp-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 10
    },
    formula: 'STR',
    restores: [
      {
        phase: PHASE_TYPE.SHORT_DOWNTIME,
        baseValue: {
          type: VALUE_TYPE.DICE,
          formula: '1d6'
        }
      },
      {
        phase: PHASE_TYPE.FULL_DOWNTIME,
        baseValue: {
          type: VALUE_TYPE.FULL
        }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-temporary-hp',
    name: {
      en: 'Temporary HP',
      th: 'พลังชีวิตชั่วคราว'
    },
    description: {
      en: 'Bonus HP lost before base HP. Provides temporary protection that is lost first when taking damage.',
      th: 'พลังชีวิตโบนัสที่สูญเสียก่อนพลังชีวิตพื้นฐาน ให้การป้องกันชั่วคราวที่สูญเสียก่อนเมื่อได้รับความเสียหาย'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'Temp HP',
    tags: [ 'temporary', 'protection' ],
    icon: 'temp-hp-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 0
    },
    restores: [],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-fractal-points',
    name: {
      en: 'Fractal Points',
      th: 'จุดแฟร็กทัล'
    },
    description: {
      en: 'Powers Commands. The mystical energy used to cast magical abilities and supernatural powers.',
      th: 'พลังคำสั่ง พลังงานลึกลับที่ใช้ในการร่ายมนตร์และพลังเหนือธรรมชาติ'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'FP',
    tags: [ 'magical', 'casting', 'energy' ],
    icon: 'fp-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 3
    },
    formula: 'SEN',
    restores: [
      {
        phase: PHASE_TYPE.SHORT_DOWNTIME,
        baseValue: {
          type: VALUE_TYPE.DICE,
          formula: '1d4'
        }
      },
      {
        phase: PHASE_TYPE.FULL_DOWNTIME,
        baseValue: {
          type: VALUE_TYPE.HALF
        }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-action-points',
    name: {
      en: 'Action Points',
      th: 'จุดการกระทำ'
    },
    description: {
      en: '2 AP per turn; spent on actions. The currency for performing actions during combat.',
      th: '2 AP ต่อเทิร์น ใช้สำหรับการกระทำ สกุลเงินสำหรับการดำเนินการในระหว่างการต่อสู้'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'AP',
    tags: [ 'action', 'combat', 'economy' ],
    icon: 'ap-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 2
    },
    restores: [
      {
        phase: PHASE_TYPE.ROUND,
        baseValue: {
          type: VALUE_TYPE.FULL
        }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-action-slots',
    name: {
      en: 'Action Slots',
      th: 'ช่องการกระทำ'
    },
    description: {
      en: 'Determines available Combat/Command Actions. The number of different actions you can perform.',
      th: 'กำหนดการกระทำการต่อสู้/คำสั่งที่มีอยู่ จำนวนการกระทำที่แตกต่างกันที่คุณสามารถทำได้'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'AS',
    tags: [ 'action', 'combat', 'slots' ],
    icon: 'as-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 3
    },
    formula: 'INT',
    restores: [],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-reaction-points',
    name: {
      en: 'Reaction Points',
      th: 'จุดปฏิกิริยา'
    },
    description: {
      en: '1 per round. Used for immediate responses and reactions during combat.',
      th: '1 ต่อรอบ ใช้สำหรับการตอบสนองทันทีและปฏิกิริยาระหว่างการต่อสู้'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'RP',
    tags: [ 'reaction', 'combat' ],
    icon: 'rp-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 1
    },
    restores: [
      {
        phase: PHASE_TYPE.ROUND,
        baseValue: {
          type: VALUE_TYPE.FULL
        }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Combat Attributes
  {
    id: 'attribute-armor-class',
    name: {
      en: 'Armor Class',
      th: 'เกราะป้องกัน'
    },
    description: {
      en: 'Avoid being hit. Applies to all damage types unless stated. Your ability to dodge and deflect attacks.',
      th: 'หลีกเลี่ยงการถูกโจมตี ใช้กับความเสียหายทุกประเภทเว้นแต่จะระบุ ความสามารถในการหลบและเบี่ยงเบนการโจมตี'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'AC',
    tags: [ 'defense', 'dodge', 'armor' ],
    icon: 'ac-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 10
    },
    formula: 'AGI',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-damage-reduction',
    name: {
      en: 'Damage Reduction',
      th: 'การลดความเสียหาย'
    },
    description: {
      en: 'Flat damage reduction after armor. Reduces incoming damage by a fixed amount.',
      th: 'การลดความเสียหายแบบคงที่หลังเกราะ ลดความเสียหายที่เข้ามาด้วยจำนวนคงที่'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'DR',
    tags: [ 'defense', 'reduction' ],
    icon: 'dr-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 0
    },
    formula: 'STR / 2',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-movement-speed',
    name: {
      en: 'Movement Speed',
      th: 'ความเร็วการเคลื่อนไหว'
    },
    description: {
      en: 'Meters moved per turn. How far you can move during your turn.',
      th: 'เมตรที่เคลื่อนไหวต่อเทิร์น คุณสามารถเคลื่อนไหวได้ไกลแค่ไหนในระหว่างเทิร์นของคุณ'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    abbreviation: 'MS',
    tags: [ 'movement', 'speed' ],
    icon: 'ms-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 6
    },
    formula: 'AGI * 2',
    restores: [
      {
        phase: PHASE_TYPE.ROUND,
        baseValue: {
          type: VALUE_TYPE.FULL
        }
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-initiative',
    name: {
      en: 'Initiative',
      th: 'การเริ่มต้น'
    },
    description: {
      en: 'Determines turn order. How quickly you can act in combat.',
      th: 'กำหนดลำดับเทิร์น คุณสามารถกระทำได้เร็วแค่ไหนในการต่อสู้'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'INIT',
    tags: [ 'initiative', 'order' ],
    icon: 'init-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'SEN',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // attack roll attribute
  {
    id: 'attribute-attack-roll',
    name: {
      en: 'Attack Roll',
      th: 'การโจมตี'
    },
    description: {
      en: 'Accuracy for weapon attacks and command attacks. Your skill at hitting targets with weapons or successfully casting magical commands.',
      th: 'ความแม่นยำสำหรับการโจมตีด้วยอาวุธและการโจมตีด้วยคำสั่ง ทักษะของคุณในการโจมตีเป้าหมายด้วยอาวุธหรือการร่ายมนตร์คำสั่งอย่างสำเร็จ'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'AR',
    tags: [ 'attack', 'weapon', 'command', 'accuracy' ],
    icon: 'attack-roll-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'TEC',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-command-dc',
    name: {
      en: 'Command DC',
      th: 'ความยากของคำสั่ง'
    },
    description: {
      en: 'Save DC vs. Commands. The difficulty for enemies to resist your magical commands.',
      th: 'Save DC ต่อคำสั่ง ความยากสำหรับศัตรูในการต้านทานคำสั่งเวทมนตร์ของคุณ'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'CDC',
    tags: [ 'command', 'dc', 'magic' ],
    icon: 'cdc-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 10
    },
    formula: 'INT',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-buff-debuff-duration',
    name: {
      en: 'Buff/Debuff Duration',
      th: 'ระยะเวลาของบัฟ/ดีบัฟ'
    },
    description: {
      en: 'Affects only skill-, action-, and command-based effects. How long your beneficial and harmful effects last.',
      th: 'ส่งผลต่อเอฟเฟกต์ที่มาจากทักษะ การกระทำ และคำสั่งเท่านั้น เอฟเฟกต์ที่เป็นประโยชน์และเป็นอันตรายของคุณคงอยู่นานแค่ไหน'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'BDD',
    tags: [ 'duration', 'buff', 'debuff' ],
    icon: 'bdd-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 0
    },
    formula: 'PRE',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-gear-bonus',
    name: {
      en: 'Gear Bonus (Dmg/AC)',
      th: 'โบนัสอุปกรณ์ (ความเสียหาย/เกราะ)'
    },
    description: {
      en: 'Weapon and armor effectiveness. Bonus damage from weapons and bonus armor class from equipment.',
      th: 'ประสิทธิภาพของอาวุธและเกราะ ความเสียหายโบนัสจากอาวุธและเกราะป้องกันโบนัสจากอุปกรณ์'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'GB',
    tags: [ 'gear', 'bonus', 'equipment' ],
    icon: 'gb-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 0
    },
    formula: 'TEC',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-carrying-capacity',
    name: {
      en: 'Carrying Capacity',
      th: 'ความสามารถในการแบก'
    },
    description: {
      en: 'Maximum weight carried before encumbrance. How much weight you can carry without penalties.',
      th: 'น้ำหนักสูงสุดที่สามารถแบกได้ก่อนการถ่วง การถ่วงน้ำหนักที่คุณสามารถแบกได้โดยไม่มีบทลงโทษ'
    },
    type: ATTRIBUTE_TYPE.COMBAT,
    abbreviation: 'CC',
    tags: [ 'carrying', 'weight', 'utility' ],
    icon: 'cc-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.FIXED,
      value: 140
    },
    formula: 'STR * 10',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Saving Throw Attributes
  {
    id: 'attribute-strength-save',
    name: {
      en: 'Strength Save',
      th: 'การต้านทานความแข็งแกร่ง'
    },
    description: {
      en: 'Resists knockback, fatigue, and physical effects. Your ability to withstand physical force and maintain your position.',
      th: 'ต้านทานการผลัก การเหนื่อยล้า และเอฟเฟกต์ทางกาย ความสามารถในการทนต่อแรงทางกายและรักษาตำแหน่งของคุณ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    abbreviation: 'STR Save',
    tags: [ 'save', 'strength', 'physical' ],
    icon: 'str-save-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'STR',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-agility-save',
    name: {
      en: 'Agility Save',
      th: 'การต้านทานความคล่องแคล่ว'
    },
    description: {
      en: 'Resists AoEs, traps, and area effects. Your ability to dodge and avoid widespread dangers.',
      th: 'ต้านทานการโจมตีแบบพื้นที่ กับดัก และเอฟเฟกต์พื้นที่ ความสามารถในการหลบและหลีกเลี่ยงอันตรายที่แพร่กระจาย'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    abbreviation: 'AGI Save',
    tags: [ 'save', 'agility', 'dodge' ],
    icon: 'agi-save-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'AGI',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-sense-save',
    name: {
      en: 'Sense Save',
      th: 'การต้านทานการรับรู้'
    },
    description: {
      en: 'Resists illusions, psychic effects, and sensory manipulation. Your ability to see through deception and maintain mental clarity.',
      th: 'ต้านทานภาพลวงตา เอฟเฟกต์ทางจิต และการบิดเบือนการรับรู้ ความสามารถในการมองผ่านการหลอกลวงและรักษาความชัดเจนทางจิต'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    abbreviation: 'SEN Save',
    tags: [ 'save', 'sense', 'mental' ],
    icon: 'sen-save-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'SEN',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-technique-save',
    name: {
      en: 'Technique Save',
      th: 'การต้านทานเทคนิค'
    },
    description: {
      en: 'Resists tech hazards, mechanical failures, and technological effects. Your ability to handle complex systems and avoid technical mishaps.',
      th: 'ต้านทานอันตรายทางเทคนิค ความล้มเหลวทางกลไก และเอฟเฟกต์ทางเทคโนโลยี ความสามารถในการจัดการระบบที่ซับซ้อนและหลีกเลี่ยงอุบัติเหตุทางเทคนิค'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    abbreviation: 'TEC Save',
    tags: [ 'save', 'technique', 'technical' ],
    icon: 'tec-save-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'TEC',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-intelligence-save',
    name: {
      en: 'Intelligence Save',
      th: 'การต้านทานสติปัญญา'
    },
    description: {
      en: 'Resists mind control, confusion, and mental manipulation. Your ability to maintain logical thinking and resist mental influence.',
      th: 'ต้านทานการควบคุมจิตใจ ความสับสน และการบิดเบือนทางจิต ความสามารถในการรักษาการคิดอย่างมีตรรกะและต้านทานอิทธิพลทางจิต'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    abbreviation: 'INT Save',
    tags: [ 'save', 'intelligence', 'mental' ],
    icon: 'int-save-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'INT',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'attribute-presence-save',
    name: {
      en: 'Presence Save',
      th: 'การต้านทานการปรากฏตัว'
    },
    description: {
      en: 'Resists persuasion, fear effects, and social manipulation. Your ability to maintain your will and resist social pressure.',
      th: 'ต้านทานการโน้มน้าว เอฟเฟกต์ความกลัว และการบิดเบือนทางสังคม ความสามารถในการรักษาความตั้งใจและต้านทานแรงกดดันทางสังคม'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    abbreviation: 'PRE Save',
    tags: [ 'save', 'presence', 'social' ],
    icon: 'pre-save-icon',
    isSystem: true,
    isHidden: false,
    baseValue: {
      type: VALUE_TYPE.DICE,
      formula: '1d20'
    },
    formula: 'PRE',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 