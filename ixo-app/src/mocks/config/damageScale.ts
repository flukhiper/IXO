import type { DamageScaleConfig } from '@/types/config/damageScale';

export const mockDamageScales: DamageScaleConfig[] = [
  {
    id: 'damage-scale-normal',
    name: {
      en: 'Normal',
      th: 'ปกติ'
    },
    description: {
      en: 'No changes to the damage taken. Standard damage calculation applies.',
      th: 'ไม่มีการเปลี่ยนแปลงความเสียหายที่ได้รับ การคำนวณความเสียหายมาตรฐานใช้บังคับ'
    },
    icon: 'shield-normal',
    thumbnail: 'normal-damage-scale.jpg',
    tags: [ 'standard', 'normal', 'base' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    multiplier: 1,
    isSystem: true
  },
  {
    id: 'damage-scale-resistant',
    name: {
      en: 'Resistant',
      th: 'ต้านทาน'
    },
    description: {
      en: 'The damage taken is halved. Creatures with resistance take reduced damage from specific sources.',
      th: 'ความเสียหายที่ได้รับจะลดลงครึ่งหนึ่ง สิ่งมีชีวิตที่มีความต้านทานจะได้รับความเสียหายลดลงจากแหล่งที่เฉพาะเจาะจง'
    },
    icon: 'shield-resistant',
    thumbnail: 'resistant-damage-scale.jpg',
    tags: [ 'resistance', 'reduced', 'defense' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    multiplier: 0.5,
    isSystem: true
  },
  {
    id: 'damage-scale-vulnerable',
    name: {
      en: 'Vulnerable',
      th: 'อ่อนแอ'
    },
    description: {
      en: 'The damage taken is doubled. Creatures with vulnerability take increased damage from specific sources.',
      th: 'ความเสียหายที่ได้รับจะเพิ่มเป็นสองเท่า สิ่งมีชีวิตที่มีความอ่อนแอจะได้รับความเสียหายเพิ่มขึ้นจากแหล่งที่เฉพาะเจาะจง'
    },
    icon: 'shield-vulnerable',
    thumbnail: 'vulnerable-damage-scale.jpg',
    tags: [ 'vulnerability', 'increased', 'weakness' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    multiplier: 2,
    isSystem: true
  },
  {
    id: 'damage-scale-immune',
    name: {
      en: 'Immune',
      th: 'ภูมิคุ้มกัน'
    },
    description: {
      en: 'No damage is taken. Creatures with immunity are completely unaffected by specific damage types.',
      th: 'ไม่ได้รับความเสียหาย สิ่งมีชีวิตที่มีภูมิคุ้มกันจะไม่ได้รับผลกระทบจากประเภทความเสียหายที่เฉพาะเจาะจง'
    },
    icon: 'shield-immune',
    thumbnail: 'immune-damage-scale.jpg',
    tags: [ 'immunity', 'complete', 'protection' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    multiplier: 0,
    isSystem: true
  }
];

export default mockDamageScales;
