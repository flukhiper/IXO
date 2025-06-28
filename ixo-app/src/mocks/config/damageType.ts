import type { DamageTypeConfig } from '@/types/config/damageType';

// --- Sample Damage Type Configurations ---
export const mockDamageTypes: DamageTypeConfig[] = [
  {
    id: 'bludgeoning',
    name: { en: 'Bludgeoning', th: 'ทุบตี' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: 'https://placehold.co/32x32/8B4513/FFFFFF?text=🔨'
  },
  {
    id: 'piercing',
    name: { en: 'Piercing', th: 'เจาะ' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: 'https://placehold.co/32x32/6A5ACD/FFFFFF?text=🗡️'
  },
  {
    id: 'slashing',
    name: { en: 'Slashing', th: 'ฟัน' },
    isPhysical: true,
    tags: [ 'physical' ],
    icon: 'https://placehold.co/32x32/708090/FFFFFF?text=🔪'
  },
  {
    id: 'fire',
    name: { en: 'Fire', th: 'ไฟ' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: 'https://placehold.co/32x32/FF4500/FFFFFF?text=🔥'
  },
  {
    id: 'cold',
    name: { en: 'Cold', th: 'น้ำแข็ง' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: 'https://placehold.co/32x32/ADD8E6/000000?text=❄️'
  },
  {
    id: 'lightning',
    name: { en: 'Lightning', th: 'สายฟ้า' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: 'https://placehold.co/32x32/FFD700/000000?text=⚡'
  },
  {
    id: 'psychic',
    name: { en: 'Psychic', th: 'พลังจิต' },
    isPhysical: false,
    tags: [ 'mental', 'energy' ],
    icon: 'https://placehold.co/32x32/9370DB/FFFFFF?text=🧠'
  },
  {
    id: 'acid',
    name: { en: 'Acid', th: 'กรด' },
    isPhysical: false,
    tags: [ 'elemental', 'energy' ],
    icon: 'https://placehold.co/32x32/7CFC00/000000?text=🧪'
  },
  {
    id: 'poison',
    name: { en: 'Poison', th: 'พิษ' },
    isPhysical: false,
    tags: [ 'debuff', 'chemical' ],
    icon: 'https://placehold.co/32x32/8B008B/FFFFFF?text=☠️'
  },
  {
    id: 'divine',
    name: { en: 'Divine', th: 'ศักดิ์สิทธิ์' },
    isPhysical: false,
    tags: [ 'holy', 'energy' ],
    icon: 'https://placehold.co/32x32/DAA520/FFFFFF?text=✨'
  },
  {
    id: 'necrotic',
    name: { en: 'Necrotic', th: 'ความเสียหายเนโครติก' },
    isPhysical: false,
    tags: [ 'unholy', 'energy' ],
    icon: 'https://placehold.co/32x32/000000/FFFFFF?text=💀'
  },
  {
    id: 'force',
    name: { en: 'Force', th: 'พลังงาน' },
    isPhysical: false,
    tags: [ 'raw-energy' ],
    icon: 'https://placehold.co/32x32/4682B4/FFFFFF?text=💥'
  }
];
