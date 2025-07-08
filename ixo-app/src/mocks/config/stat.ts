import type { StatConfig } from '@/types/config/stat';

export const mockStats: StatConfig[] = [
  {
    id: 'strength',
    name: { en: 'Strength', th: 'ความแข็งแกร่ง' },
    description: { en: '', th: '' },
    abbreviation: 'STR',
    tags: [ 'primary', 'offense', 'tank' ],
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'agility',
    name: { en: 'Agility', th: 'ความคล่องตัว' },
    description: { en: '', th: '' },
    abbreviation: 'AGI',
    tags: [ 'primary', 'opportunistic', 'evasive' ],
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'dexterity',
    name: { en: 'Dexterity', th: 'ความชำนาญ' },
    description: { en: '', th: '' },
    abbreviation: 'DEX',
    tags: [ 'primary', 'optimization', 'precise' ],
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'intelligence',
    name: { en: 'Intelligence', th: 'สติปัญญา' },
    description: { en: '', th: '' },
    abbreviation: 'INT',
    tags: [ 'primary', 'control', 'exploitation' ],
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'sense',
    name: { en: 'Sense', th: 'สัมผัส' },
    description: { en: '', th: '' },
    abbreviation: 'SEN',
    tags: [ 'primary', 'engagement', 'awareness' ],
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'charisma',
    name: { en: 'Charisma', th: 'เสน่ห์' },
    description: { en: '', th: '' },
    abbreviation: 'CHA',
    tags: [ 'primary', 'aura', 'buff', 'debuff', 'morale' ],
    gameSystemId: 'system1',
    ownerId: 'owner1',
    createdAt: '',
    updatedAt: ''
  }
];
