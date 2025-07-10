import type { DamageScaleConfig } from '@/types/config/damageScale';

export const mock: DamageScaleConfig[] = [
  {
    id: 'normal',
    name: { en: 'Normal', th: 'ปกติ' },
    description: { en: 'No changes to damage.', th: 'ความเสียหายปกติ' },
    multiplier: 1,
    tags: [ 'default' ],
    icon: 'normal-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'resistant',
    name: { en: 'Resistant', th: 'ต้านทาน' },
    description: { en: 'Halved damage taken.', th: 'ได้รับความเสียหายครึ่งหนึ่ง' },
    multiplier: 0.5,
    tags: [ 'resist' ],
    icon: 'resistant-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'vulnerable',
    name: { en: 'Vulnerable', th: 'อ่อนแอ' },
    description: { en: 'Double damage taken.', th: 'ได้รับความเสียหายสองเท่า' },
    multiplier: 2,
    tags: [ 'vulnerable' ],
    icon: 'vulnerable-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'immune',
    name: { en: 'Immune', th: 'ไร้ผล' },
    description: { en: 'No damage taken.', th: 'ไม่ได้รับความเสียหาย' },
    multiplier: 0,
    tags: [ 'immune' ],
    icon: 'immune-icon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 