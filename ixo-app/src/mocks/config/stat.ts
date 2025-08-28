import type { StatConfig } from '@/types/config/stat';

export const mockStats: StatConfig[] = [
  {
    id: 'stat-strength',
    name: {
      en: 'Strength',
      th: 'ความแข็งแกร่ง'
    },
    description: {
      en: 'Power, Durability - Represents your raw physical power and ability to endure damage.',
      th: 'พลัง ความทนทาน - แสดงถึงพลังทางกายภาพดิบๆ และความสามารถในการทนต่อความเสียหาย'
    },
    icon: 'muscle',
    thumbnail: 'strength-stat.jpg',
    tags: [ 'physical', 'combat', 'core-stat' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    abbreviation: 'STR',
    isSystem: true
  },
  {
    id: 'stat-speed',
    name: {
      en: 'Speed',
      th: 'ความเร็ว'
    },
    description: {
      en: 'Reflexes, Mobility - Represents your agility, reflexes, and ability to move quickly.',
      th: 'ปฏิกิริยา การเคลื่อนไหว - แสดงถึงความคล่องแคล่ว ปฏิกิริยาตอบสนอง และความสามารถในการเคลื่อนไหวอย่างรวดเร็ว'
    },
    icon: 'lightning',
    thumbnail: 'speed-stat.jpg',
    tags: [ 'physical', 'mobility', 'core-stat' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    abbreviation: 'SPD',
    isSystem: true
  },
  {
    id: 'stat-sense',
    name: {
      en: 'Sense',
      th: 'ประสาทสัมผัส'
    },
    description: {
      en: 'Perception, reaction, initiative - Represents your awareness, perception, and ability to react to threats.',
      th: 'การรับรู้ ปฏิกิริยา การริเริ่ม - แสดงถึงความตระหนัก การรับรู้ และความสามารถในการตอบสนองต่อภัยคุกคาม'
    },
    icon: 'eye',
    thumbnail: 'sense-stat.jpg',
    tags: [ 'physical', 'perception', 'core-stat' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    abbreviation: 'SEN',
    isSystem: true
  },
  {
    id: 'stat-knowledge',
    name: {
      en: 'Knowledge',
      th: 'ความรู้'
    },
    description: {
      en: 'Learning, stored intellect - Represents your accumulated knowledge, memory, and intellectual capacity.',
      th: 'การเรียนรู้ ความรู้ที่สะสม - แสดงถึงความรู้ที่สะสม ความจำ และความสามารถทางสติปัญญา'
    },
    icon: 'book',
    thumbnail: 'knowledge-stat.jpg',
    tags: [ 'mental', 'intelligence', 'core-stat' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    abbreviation: 'KNW',
    isSystem: true
  },
  {
    id: 'stat-technique',
    name: {
      en: 'Technique',
      th: 'เทคนิค'
    },
    description: {
      en: 'Applied skill, precision - Represents your ability to apply knowledge and perform precise actions.',
      th: 'ทักษะที่ประยุกต์ ความแม่นยำ - แสดงถึงความสามารถในการประยุกต์ความรู้และปฏิบัติการที่แม่นยำ'
    },
    icon: 'target',
    thumbnail: 'technique-stat.jpg',
    tags: [ 'mental', 'skill', 'core-stat' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    abbreviation: 'TEC',
    isSystem: true
  },
  {
    id: 'stat-presence',
    name: {
      en: 'Presence',
      th: 'การปรากฏตัว'
    },
    description: {
      en: 'Influence, charisma, emotional force - Represents your ability to influence others and project your will.',
      th: 'อิทธิพล คาริสมา แรงทางอารมณ์ - แสดงถึงความสามารถในการมีอิทธิพลต่อผู้อื่นและแสดงเจตจำนง'
    },
    icon: 'crown',
    thumbnail: 'presence-stat.jpg',
    tags: [ 'mental', 'social', 'core-stat' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    abbreviation: 'PRE',
    isSystem: true
  }
];

export default mockStats;
