import type { ArchetypeConfig } from '@/types/config/origin';

export const mockArchetypes: ArchetypeConfig[] = [
  // I. Primordia
  {
    id: 'rift-seeker',
    name: { en: 'The Rift Seeker', th: 'ผู้แสวงหารอยแยก' },
    description: { en: 'A master of sensing cosmic energy and interdimensional tears. They guide others through unstable rifts.', th: 'ผู้เชี่ยวชาญในการสัมผัสพลังงานจักรวาลและรอยแยกมิติ พวกเขาชี้นำผู้อื่นผ่านรอยแยกที่ไม่เสถียร' },
    specialty: {
      name: { en: 'Rift Sense', th: 'สัมผัสรอยแยก' },
      description: { en: 'Detect when and where dimensional cracks are likely to appear.', th: 'ตรวจจับได้ว่ารอยแยกมิติมีแนวโน้มที่จะปรากฏขึ้นเมื่อใดและที่ไหน' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'energy-sense' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'shard-keeper',
    name: { en: 'The Shard Keeper', th: 'ผู้พิทักษ์เศษเสี้ยว' },
    description: { en: 'Archivists of broken truths. They tap into universal memories stored in Primordia\'s fragments.', th: 'ผู้เก็บรักษาความจริงที่แตกสลาย พวกเขาเข้าถึงความทรงจำสากลที่เก็บอยู่ในเศษเสี้ยวของไพรเมอร์เดีย' },
    specialty: {
      name: { en: 'Origin Resonance', th: 'เสียงสะท้อนต้นกำเนิด' },
      description: { en: 'Sense the realm of origin for people and items.', th: 'สัมผัสอาณาจักรต้นกำเนิดของบุคคลและสิ่งของ' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'recall' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // II. Symphonia Varis
  {
    id: 'captivating-muse',
    name: { en: 'The Captivating Muse', th: 'มิวส์ผู้สะกดใจ' },
    description: { en: 'Emotion is their instrument. They move hearts through performance and insight.', th: 'อารมณ์คือเครื่องมือของพวกเขา พวกเขาสะกดใจผู้คนผ่านการแสดงและวิปัสสนา' },
    specialty: {
      name: { en: 'Trusting Presence', th: 'การปรากฏตัวที่น่าเชื่อถือ' },
      description: { en: 'Others feel at ease around you. You uplift and earn trust quickly.', th: 'คนอื่นรู้สึกสบายใจเมื่ออยู่ใกล้คุณ คุณยกระดับและได้รับความไว้วางใจอย่างรวดเร็ว' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'performance', 'insight' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'luminous-performer',
    name: { en: 'The Luminous Performer', th: 'นักแสดงผู้เปล่งประกาย' },
    description: { en: 'An embodiment of spectacle, grace, and physical artistry.', th: 'เป็นตัวอย่างของการแสดง ความสง่างาม และศิลปะทางกายภาพ' },
    specialty: {
      name: { en: 'Irresistible Focus', th: 'จุดสนใจที่ไม่อาจต้านทาน' },
      description: { en: 'You naturally draw all eyes. It\'s difficult for others to look away from you.', th: 'คุณดึงดูดสายตาของทุกคนได้โดยธรรมชาติ เป็นเรื่องยากสำหรับผู้อื่นที่จะละสายตาจากคุณ' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'performance', 'acrobatics' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // III. Gaea Libris
  {
    id: 'cosmic-seer',
    name: { en: 'The Cosmic Seer', th: 'ผู้หยั่งรู้จักรวาล' },
    description: { en: 'Interprets subtle cosmic patterns and ancient mysteries.', th: 'ตีความรูปแบบจักรวาลที่ละเอียดอ่อนและความลึกลับโบราณ' },
    specialty: {
      name: { en: 'Pattern Insight', th: 'วิปัสสนาแบบแผน' },
      description: { en: 'Read signs in nature and the cosmos to anticipate events.', th: 'อ่านสัญญาณในธรรมชาติและจักรวาลเพื่อคาดการณ์เหตุการณ์' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'perceive', 'analyze' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'verdant-whisperer',
    name: { en: 'The Verdant Whisperer', th: 'ผู้กระซิบแห่งพืชพรรณ' },
    description: { en: 'A friend to all natural life, understanding its rhythms and voices.', th: 'เพื่อนของสิ่งมีชีวิตตามธรรมชาติทั้งหมด เข้าใจจังหวะและเสียงของมัน' },
    specialty: {
      name: { en: 'Nature\'s Ear', th: 'หูของธรรมชาติ' },
      description: { en: 'Sense well-being and secrets of nearby plant and animal life.', th: 'สัมผัสความสุขและเคล็ดลับของพืชและสัตว์ใกล้เคียง' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'comprehend', 'insight' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // IV. Artificium
  {
    id: 'master-mechanic',
    name: { en: 'The Master Mechanic', th: 'ช่างกลผู้เชี่ยวชาญ' },
    description: { en: 'Builder of wonders, fixer of flaws. They speak fluent machine.', th: 'ผู้สร้างสิ่งมหัศจรรย์ ผู้แก้ไขข้อบกพร่อง พวกเขาพูดภาษาเครื่องจักรได้คล่องแคล่ว' },
    specialty: {
      name: { en: 'Tech Whisperer', th: 'ผู้กระซิบเทคโนโลยี' },
      description: { en: 'Sense malfunctions and optimize devices just by touch or sight.', th: 'สัมผัสความผิดปกติและเพิ่มประสิทธิภาพอุปกรณ์ได้เพียงแค่สัมผัสหรือมองเห็น' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'mechanical', 'analyze' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'wealth-accumulator',
    name: { en: 'The Wealth Accumulator', th: 'ผู้สะสมความมั่งคั่ง' },
    description: { en: 'Knows the flow of wealth like the tide. Always a step ahead.', th: 'รู้กระแสความมั่งคั่งเหมือนกระแสน้ำ นำหน้าเสมอ' },
    specialty: {
      name: { en: 'Market Pulse', th: 'ชีพจรตลาด' },
      description: { en: 'Sense market shifts and detect hidden value instinctively.', th: 'สัมผัสการเปลี่ยนแปลงของตลาดและตรวจจับมูลค่าที่ซ่อนอยู่ได้โดยสัญชาตญาณ' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'sleight-of-hand', 'deception' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // V. Doloria
  {
    id: 'relentless-survivor',
    name: { en: 'The Relentless Survivor', th: 'ผู้รอดชีวิตผู้ไม่ย่อท้อ' },
    description: { en: 'Hard as stone and fast as a predator. Built to endure anything.', th: 'แข็งแกร่งดุจหินและรวดเร็วดุจนักล่า สร้างขึ้นเพื่อทนทานต่อทุกสิ่ง' },
    specialty: {
      name: { en: 'Adaptive Physiology', th: 'สรีรวิทยาปรับตัว' },
      description: { en: 'Temporarily adapt your body to extreme environments or conditions.', th: 'ปรับร่างกายของคุณให้เข้ากับสภาพแวดล้อมหรือสภาวะที่รุนแรงได้ชั่วคราว' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'sprint', 'athletics' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'shadow-scavenger',
    name: { en: 'The Shadow Scavenger', th: 'ผู้หาของเงา' },
    description: { en: 'A master of taking what\'s needed, unseen and efficient.', th: 'ผู้เชี่ยวชาญในการหยิบฉวยสิ่งที่ต้องการ โดยไม่ถูกมองเห็นและมีประสิทธิภาพ' },
    specialty: {
      name: { en: 'Hidden Cache Sense', th: 'สัมผัสแหล่งซ่อน' },
      description: { en: 'You always manage to find hidden stashes or exploitable weak spots.', th: 'คุณสามารถหาแหล่งซ่อนหรือจุดอ่อนที่สามารถใช้ประโยชน์ได้เสมอ' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'stealth', 'sleight-of-hand' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // VI. Aethelgard
  {
    id: 'arcane-loremaster',
    name: { en: 'The Arcane Loremaster', th: 'ผู้รู้ตำนานเวทมนตร์' },
    description: { en: 'Wields magic through knowledge, preserving and interpreting ancient power.', th: 'ใช้เวทมนตร์ผ่านความรู้ การเก็บรักษาและตีความพลังโบราณ' },
    specialty: {
      name: { en: 'Echoing Lore', th: 'เสียงสะท้อนตำนาน' },
      description: { en: 'Read magical echoes left in ruins or artifacts to glimpse their past use.', th: 'อ่านเสียงสะท้อนเวทมนตร์ที่เหลืออยู่ในซากปรักหักพังหรือวัตถุโบราณเพื่อมองเห็นการใช้งานในอดีต' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'energy-sense', 'recall' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'diplomatic-regent',
    name: { en: 'The Diplomatic Regent', th: 'ผู้สำเร็จราชการทูต' },
    description: { en: 'Royal blood, silver tongue. They bring peace through persuasion.', th: 'สายเลือดราชวงศ์ ลิ้นเงิน พวกเขานำความสงบสุขมาด้วยการโน้มน้าว' },
    specialty: {
      name: { en: 'Harmonious Presence', th: 'การปรากฏตัวที่กลมกลืน' },
      description: { en: 'Defuse tension and promote cooperation effortlessly in any room.', th: 'คลี่คลายความตึงเครียดและส่งเสริมความร่วมมือได้อย่างง่ายดดายในทุกห้อง' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'persuasion', 'comprehend' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // VII. Bellarax
  {
    id: 'iron-general',
    name: { en: 'The Iron General', th: 'นายพลเหล็ก' },
    description: { en: 'Born to lead. Strength and command flow from their every motion.', th: 'เกิดมาเพื่อเป็นผู้นำ ความแข็งแกร่งและอำนาจบัญชาการไหลออกมาจากทุกการเคลื่อนไหวของพวกเขา' },
    specialty: {
      name: { en: 'Battlefield Resolve', th: 'ความมุ่งมั่นในสนามรบ' },
      description: { en: 'Your presence boosts morale and blocks fear among nearby allies.', th: 'การปรากฏตัวของคุณช่วยเพิ่มขวัญกำลังใจและยับยั้งความกลัวในหมู่พันธมิตรที่อยู่ใกล้เคียง' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'intimidation', 'athletics' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'cunning-warlord',
    name: { en: 'The Cunning Warlord', th: 'ขุนศึกเจ้าเล่ห์' },
    description: { en: 'Sees the battlefield like a puzzle. Always two moves ahead.', th: 'มองสนามรบเหมือนปริศนา นำหน้าเสมอสองก้าว' },
    specialty: {
      name: { en: 'Strategic Gaze', th: 'สายตาเชิงกลยุทธ์' },
      description: { en: 'Identify tactical weaknesses and enemy intent at a glance.', th: 'ระบุจุดอ่อนทางยุทธวิธีและความตั้งใจของศัตรูได้ในพริบตา' }
    },
    effects: [
      {
        type: 'modify-attribute',
        attributeIds: [ 'deception', 'perceive' ],
        baseValue: { type: 'fixed', value: 2 }
      }
    ],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  // VIII. Special Archetype
  {
    id: 'blank-soul',
    name: { en: 'The Blank Soul', th: 'จิตวิญญาณว่างเปล่า' },
    description: { en: 'An empty vessel ready to be shaped. This archetype is for experienced players who want full control over their build.', th: 'ภาชนะเปล่าที่พร้อมสำหรับการก่อร่างสร้างตัว แม่แบบนี้เหมาะสำหรับผู้เล่นที่มีประสบการณ์ที่ต้องการควบคุมการสร้างตัวละครได้อย่างสมบูรณ์' },
    effects: [],
    gameSystemId: 'system1',
    ownerId: 'owner1'
  }
];
