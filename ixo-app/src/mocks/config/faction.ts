import type { FactionConfig } from '@/types/config/faction';

export const mockFactions: FactionConfig[] = [
  {
    id: 'faction-the-drifter',
    name: {
      en: 'The Drifter',
      th: 'คนพเนจร'
    },
    description: {
      en: 'In the world\'s shadows lie footprints with no beginning and no end. They are the Drifters—homeless, aimless, and unknowable.',
      th: 'ในเงามืดของโลก จะมีรอยเท้าที่ไม่มีจุดเริ่มต้นและไม่มีจุดจบ… พวกเขาคือ Drifter—ผู้ที่ไม่มีที่ใดเป็นบ้าน และไม่มีใครรู้ว่าแท้จริงแล้วกำลังมุ่งไปที่ไหน'
    },
    icon: 'the-drifter',
    thumbnail: 'the-drifter',
    tags: [ 'drifter' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    skillSelectionRule: [
      {
        skillIds: [ 'skill-drifter-versatility' ],
        numberOfSelections: 1
      }
    ]
  }
];

export const mockSpecialFactions: FactionConfig[] = [
];

export const mockAllFactions = [
  ...mockFactions,
  ...mockSpecialFactions
];

export default mockAllFactions;
