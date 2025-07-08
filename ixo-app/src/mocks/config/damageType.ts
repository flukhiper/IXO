import type { DamageTypeConfig } from '@/types/config/damageType';

// --- Sample Damage Type Configurations ---
export const mockDamageTypes: DamageTypeConfig[] = [
  {
    id: 'bludgeoning',
    name: { en: 'Bludgeoning', th: 'ทุบตี' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: '🔨',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'piercing',
    name: { en: 'Piercing', th: 'เจาะ' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: '🗡️',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'slashing',
    name: { en: 'Slashing', th: 'ฟัน' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: '🔪',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'fire',
    name: { en: 'Fire', th: 'ไฟ' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: '🔥',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'cold',
    name: { en: 'Cold', th: 'น้ำแข็ง' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: '❄️',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'lightning',
    name: { en: 'Lightning', th: 'สายฟ้า' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: '⚡',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'psychic',
    name: { en: 'Psychic', th: 'พลังจิต' },
    isPhysical: false,
    tags: [ 'mental', 'energy' ],
    icon: '🧠',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'acid',
    name: { en: 'Acid', th: 'กรด' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: '🧪',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'poison',
    name: { en: 'Poison', th: 'พิษ' },
    isPhysical: false,
    tags: [ 'debuff', 'chemical' ],
    icon: '☠️',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'divine',
    name: { en: 'Divine', th: 'ศักดิ์สิทธิ์' },
    isPhysical: false,
    tags: [ 'holy', 'energy' ],
    icon: '✨',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'necrotic',
    name: { en: 'Necrotic', th: 'ความเสียหายเนโครติก' },
    isPhysical: false,
    tags: [ 'unholy', 'energy' ],
    icon: '💀',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  },
  {
    id: 'force',
    name: { en: 'Force', th: 'พลังงาน' },
    isPhysical: false,
    tags: [ 'raw-energy' ],
    icon: '💥',
    gameSystemId: 'system1',
    ownerId: 'owner1'
  }
];
