import type { GameSystem } from '@/types/config/gameSystem';

export const mock: GameSystem[] = [
  {
    id: 'game-system-ixo',
    name: {
      en: 'Fractured Realms Core'
    },
    description: {
      en: 'The core rule set for the Fractured Realms, a tabletop role-playing game blending high fantasy and post-apocalyptic technology.'
    },
    ownerId: 'system',
    createdAt: '2024-07-10T10:35:00Z',
    updatedAt: '2024-07-10T10:35:00Z',
    tags: [
      'fantasy',
      'post-apocalyptic',
      'ttrpg',
      'core-rules'
    ],
    isPublic: true
  }
];
  