import type { DamageTypeConfig } from '@/types/config/damageType';

export const mockDamageTypes: DamageTypeConfig[] = [
  {
    id: 'damage-type-bludgeoning',
    name: {
      en: 'Bludgeoning',
      th: 'การทุบตี'
    },
    description: {
      en: 'Damage from blunt force trauma, such as hammers, clubs, or falling objects.',
      th: 'ความเสียหายจากการบาดเจ็บจากแรงกระแทก เช่น ค้อน ไม้ หรือวัตถุที่ตกลงมา'
    },
    icon: 'hammer',
    thumbnail: 'bludgeoning-damage.jpg',
    tags: [ 'physical', 'blunt', 'combat' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: true,
    isSystem: true
  },
  {
    id: 'damage-type-piercing',
    name: {
      en: 'Piercing',
      th: 'การเจาะ'
    },
    description: {
      en: 'Damage from sharp, pointed objects that penetrate, such as arrows, spears, or bullets.',
      th: 'ความเสียหายจากวัตถุแหลมคมที่เจาะทะลุ เช่น ลูกศร หอก หรือกระสุน'
    },
    icon: 'arrow',
    thumbnail: 'piercing-damage.jpg',
    tags: [ 'physical', 'sharp', 'combat' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: true,
    isSystem: true
  },
  {
    id: 'damage-type-slashing',
    name: {
      en: 'Slashing',
      th: 'การตัด'
    },
    description: {
      en: 'Damage from sharp-edged weapons that cut, such as swords, axes, or claws.',
      th: 'ความเสียหายจากอาวุธมีดคมที่ตัด เช่น ดาบ ขวาน หรือกรงเล็บ'
    },
    icon: 'sword',
    thumbnail: 'slashing-damage.jpg',
    tags: [ 'physical', 'sharp', 'combat' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: true,
    isSystem: true
  },
  {
    id: 'damage-type-fire',
    name: {
      en: 'Fire',
      th: 'ไฟ'
    },
    description: {
      en: 'Damage from heat and flames, such as fireballs, explosions, or burning.',
      th: 'ความเสียหายจากความร้อนและเปลวไฟ เช่น ลูกไฟ การระเบิด หรือการเผาไหม้'
    },
    icon: 'fire',
    thumbnail: 'fire-damage.jpg',
    tags: [ 'elemental', 'heat', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-cold',
    name: {
      en: 'Cold',
      th: 'ความเย็น'
    },
    description: {
      en: 'Damage from extreme cold and ice, such as frost spells, freezing temperatures, or ice shards.',
      th: 'ความเสียหายจากความเย็นจัดและน้ำแข็ง เช่น เวทมนตร์น้ำแข็ง อุณหภูมิเยือกแข็ง หรือเศษน้ำแข็ง'
    },
    icon: 'snowflake',
    thumbnail: 'cold-damage.jpg',
    tags: [ 'elemental', 'cold', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-lightning',
    name: {
      en: 'Lightning',
      th: 'สายฟ้า'
    },
    description: {
      en: 'Damage from electrical energy, such as lightning bolts, electric shocks, or thunder.',
      th: 'ความเสียหายจากพลังงานไฟฟ้า เช่น สายฟ้า ไฟฟ้าช็อต หรือฟ้าร้อง'
    },
    icon: 'lightning',
    thumbnail: 'lightning-damage.jpg',
    tags: [ 'elemental', 'electric', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-acid',
    name: {
      en: 'Acid',
      th: 'กรด'
    },
    description: {
      en: 'Damage from corrosive substances that burn and dissolve, such as acid sprays or chemical burns.',
      th: 'ความเสียหายจากสารกัดกร่อนที่เผาและละลาย เช่น การพ่นกรดหรือแผลไฟไหม้จากสารเคมี'
    },
    icon: 'acid',
    thumbnail: 'acid-damage.jpg',
    tags: [ 'chemical', 'corrosive', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-poison',
    name: {
      en: 'Poison',
      th: 'พิษ'
    },
    description: {
      en: 'Damage from toxic substances that harm the body, such as venom, toxins, or poisonous gases.',
      th: 'ความเสียหายจากสารพิษที่ทำร้ายร่างกาย เช่น พิษ สารพิษ หรือก๊าซพิษ'
    },
    icon: 'poison',
    thumbnail: 'poison-damage.jpg',
    tags: [ 'chemical', 'toxic', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-psychic',
    name: {
      en: 'Psychic',
      th: 'จิต'
    },
    description: {
      en: 'Damage that targets the mind and consciousness, such as mental attacks, psychic energy, or mind control.',
      th: 'ความเสียหายที่มุ่งเป้าไปที่จิตใจและสติสัมปชัญญะ เช่น การโจมตีทางจิต พลังจิต หรือการควบคุมจิตใจ'
    },
    icon: 'brain',
    thumbnail: 'psychic-damage.jpg',
    tags: [ 'mental', 'psychic', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-luminous',
    name: {
      en: 'Luminous',
      th: 'แสงสว่าง'
    },
    description: {
      en: 'Damage from pure light energy, such as holy light, radiant energy, or divine power.',
      th: 'ความเสียหายจากพลังงานแสงบริสุทธิ์ เช่น แสงศักดิ์สิทธิ์ พลังงานเรืองแสง หรือพลังศักดิ์สิทธิ์'
    },
    icon: 'sun',
    thumbnail: 'luminous-damage.jpg',
    tags: [ 'divine', 'light', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-void',
    name: {
      en: 'Void',
      th: 'ความว่างเปล่า'
    },
    description: {
      en: 'Damage from the absence of existence, such as void energy, anti-matter, or reality distortion.',
      th: 'ความเสียหายจากการไม่มีอยู่จริง เช่น พลังงานความว่างเปล่า สสารปฏิปักษ์ หรือการบิดเบือนความเป็นจริง'
    },
    icon: 'void',
    thumbnail: 'void-damage.jpg',
    tags: [ 'cosmic', 'void', 'magical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  },
  {
    id: 'damage-type-force',
    name: {
      en: 'Force',
      th: 'พลัง'
    },
    description: {
      en: 'Damage from pure magical force, such as force fields, telekinetic energy, or raw magical power.',
      th: 'ความเสียหายจากพลังเวทมนตร์บริสุทธิ์ เช่น แรงสนามพลัง พลังจิต หรือพลังเวทมนตร์ดิบๆ'
    },
    icon: 'force',
    thumbnail: 'force-damage.jpg',
    tags: [ 'magical', 'force', 'pure' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isPhysical: false,
    isSystem: true
  }
];

export default mockDamageTypes;
