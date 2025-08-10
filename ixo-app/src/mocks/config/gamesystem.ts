import type { GameSystem } from '@/types/config/gameSystem';

export const mockGameSystem: GameSystem = {
  id: 'game-system-1',
  name: {
    en: 'Fantasy RPG System',
    th: 'ระบบแฟนตาซี RPG'
  },
  description: {
    en: 'A comprehensive fantasy role-playing game system with deep character customization and tactical combat.',
    th: 'ระบบเกมเล่นบทบาทแฟนตาซีที่ครอบคลุมพร้อมการปรับแต่งตัวละครที่ลึกซึ้งและการต่อสู้แบบกลยุทธ์'
  },
  icon: 'sword-shield',
  thumbnail: 'fantasy-rpg-thumbnail.jpg',
  tags: [ 'fantasy', 'rpg', 'tactical', 'character-customization' ],
  ownerId: 'admin-user-1',
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-15T12:30:00.000Z',

  isPublic: true,
  characterBuildingRule: {
    startingTraitValue: 2,
    startingProficiencyPoints: 3,
    startingMaxProficiency: 1,
    startingStatPoints: 3,
    startingStatMaxValue: 3,
    startingGolds: 100,
    startingActionIds: [ 'unarmed-attack', 'throw', 'sprint', 'jump', 'climb', 'hide', 'focus', 'deep-focus' ],
    startingDamageResistanceScaleId: 'damage-scale-normal',
    characterMaxLevel: 20
  },
  gamePlayRule: {
    followUpThreshold: 3,
    downtimeIds: [ 'downtime-prepare-loadout', 'downtime-tend-to-wounds', 'downtime-maintain-gear' ]
  }
};