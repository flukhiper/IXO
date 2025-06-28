import type { DamageScaleConfig } from '@/types/config/damageScale';

// --- Sample Damage Type Configurations ---
export const mockDamageScales: DamageScaleConfig[] = // --- Sample Damage Scale Configurations ---
[
  {
    id: 'normal',
    name: { en: 'Normal', th: 'ปกติ' },
    multiplier: 1,
    tags: [ 'standard' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'resistant',
    name: { en: 'Resistant', th: 'ต้านทาน' },
    multiplier: 0.5,
    tags: [ 'resistance' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'vulnerable',
    name: { en: 'Vulnerable', th: 'อ่อนแอ' },
    multiplier: 2,
    tags: [ 'vulnerability' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'immune',
    name: { en: 'Immune', th: 'ภูมิคุ้มกัน' },
    multiplier: 0,
    tags: [ 'immunity' ],
    createdAt: '2023-01-01T00:00:00Z'
  }
];
