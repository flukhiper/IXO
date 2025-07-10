import type { DamageTypeConfig } from '@/types/config/damageType';

export const mock: DamageTypeConfig[] = [
  {
    id: 'bludgeoning',
    name: { en: 'Bludgeoning', th: 'ทุบตี' },
    description: { en: 'Blunt force damage from impacts, hammers, or falls.', th: 'ความเสียหายจากแรงกระแทก เช่น ค้อน หรือตกจากที่สูง' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: 'bludgeoning-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'piercing',
    name: { en: 'Piercing', th: 'แทงทะลุ' },
    description: { en: 'Damage from stabbing or puncturing, such as spears or arrows.', th: 'ความเสียหายจากการแทงหรือเจาะ เช่น หอกหรือธนู' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: 'piercing-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'slashing',
    name: { en: 'Slashing', th: 'ฟันเฉือน' },
    description: { en: 'Damage from cutting or slicing, such as swords or axes.', th: 'ความเสียหายจากการฟันหรือเฉือน เช่น ดาบหรือขวาน' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: 'slashing-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'fire',
    name: { en: 'Fire', th: 'ไฟ' },
    description: { en: 'Burning damage from flames or heat.', th: 'ความเสียหายจากไฟหรือความร้อน' },
    isPhysical: false,
    tags: [ 'elemental' ],
    icon: 'fire-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'cold',
    name: { en: 'Cold', th: 'เย็น' },
    description: { en: 'Damage from freezing or extreme cold.', th: 'ความเสียหายจากความเย็นจัดหรือการแช่แข็ง' },
    isPhysical: false,
    tags: [ 'elemental' ],
    icon: 'cold-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'lightning',
    name: { en: 'Lightning', th: 'สายฟ้า' },
    description: { en: 'Damage from electrical shocks or lightning.', th: 'ความเสียหายจากไฟฟ้าหรือสายฟ้า' },
    isPhysical: false,
    tags: [ 'elemental' ],
    icon: 'lightning-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'acid',
    name: { en: 'Acid', th: 'กรด' },
    description: { en: 'Corrosive damage from acids or caustic substances.', th: 'ความเสียหายจากกรดหรือสารกัดกร่อน' },
    isPhysical: false,
    tags: [ 'elemental' ],
    icon: 'acid-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'poison',
    name: { en: 'Poison', th: 'พิษ' },
    description: { en: 'Toxic damage from poisons or venoms.', th: 'ความเสียหายจากพิษหรือสารพิษ' },
    isPhysical: false,
    tags: [ 'toxic' ],
    icon: 'poison-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'psychic',
    name: { en: 'Psychic', th: 'จิตวิญญาณ' },
    description: { en: 'Mental or spiritual damage, such as telepathy or fear.', th: 'ความเสียหายทางจิตใจหรือวิญญาณ เช่น พลังจิตหรือความกลัว' },
    isPhysical: false,
    tags: [ 'mental' ],
    icon: 'psychic-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'luminous',
    name: { en: 'Luminous', th: 'แสงสว่าง' },
    description: { en: 'Damage from radiant or holy light.', th: 'ความเสียหายจากแสงศักดิ์สิทธิ์หรือแสงสว่าง' },
    isPhysical: false,
    tags: [ 'radiant' ],
    icon: 'luminous-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'void',
    name: { en: 'Void', th: 'ความว่างเปล่า' },
    description: { en: 'Damage from void, entropy, or nothingness.', th: 'ความเสียหายจากความว่างเปล่าหรือความเสื่อมสลาย' },
    isPhysical: false,
    tags: [ 'cosmic' ],
    icon: 'void-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'force',
    name: { en: 'Force', th: 'แรงกระแทก' },
    description: { en: 'Pure magical or kinetic force.', th: 'ความเสียหายจากพลังเวทมนตร์หรือแรงกระแทก' },
    isPhysical: false,
    tags: [ 'force' ],
    icon: 'force-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 