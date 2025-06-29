import type { CreatureConfig } from '@/types/config/creature';

export const mockCreatures: CreatureConfig[] = // --- Sample Creature Configurations ---
[
  {
    id: 'goblin-grunt',
    name: { en: 'Goblin Grunt', th: 'ก็อบลินทหาร' },
    description: { en: 'A small, green-skinned humanoid, often found in tribal groups. Cowardly but cunning.', th: 'สิ่งมีชีวิตรูปร่างคล้ายมนุษย์ขนาดเล็ก ผิวเขียว มักพบในกลุ่มชนเผ่า ขี้ขลาดแต่เจ้าเล่ห์' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/5CB85C/FFFFFF?text=G',
    thumbnail: 'https://placehold.co/128x128/5CB85C/FFFFFF?text=Goblin',
    tags: [ 'humanoid', 'goblin', 'minion' ],
    level: 1,
    attributeOverrides: [
      { attributeId: 'hit-point', value: { type: 'fixed', value: 7 } },
      { attributeId: 'armor-class', value: { type: 'fixed', value: 13 } },
      { attributeId: 'movement', value: { type: 'fixed', value: 9 } },
      { attributeId: 'strength-ability', value: { type: 'fixed', value: 10 } },
      { attributeId: 'agility-ability', value: { type: 'fixed', value: 14 } },
      { attributeId: 'dexterity-ability', value: { type: 'fixed', value: 12 } },
      { attributeId: 'intelligence-ability', value: { type: 'fixed', value: 8 } },
      { attributeId: 'sense-ability', value: { type: 'fixed', value: 10 } },
      { attributeId: 'charisma-ability', value: { type: 'fixed', value: 8 } }
    ],
    traitIds: [],
    actionIds: [ 'main-hand-attack', 'throw-item' ],
    skillIds: [],
    conditionIds: [],
    equipment: {
      'main-hand': [ 'shortsword' ],
      body: [ 'leather-armor' ]
    },
    defaultDamageScales: {}
  },
  {
    id: 'fire-elemental',
    name: { en: 'Fire Elemental', th: 'ธาตุไฟ' },
    description: { en: 'A living pillar of searing flame, born of pure elemental energy. Its touch ignites all it encounters.', th: 'เสาเพลิงลุกโชนมีชีวิต เกิดจากพลังงานธาตุบริสุทธิ์ การสัมผัสของมันจะจุดไฟทุกสิ่งที่พบเจอ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/FF4500/FFFFFF?text=🔥',
    thumbnail: 'https://placehold.co/128x128/FF4500/FFFFFF?text=Elemental',
    tags: [ 'elemental', 'fire', 'summon' ],
    level: 3,
    attributeOverrides: [
      { attributeId: 'hit-point', value: { type: 'fixed', value: 30 } },
      { attributeId: 'armor-class', value: { type: 'fixed', value: 12 } },
      { attributeId: 'movement', value: { type: 'fixed', value: 12 } },
      { attributeId: 'strength-ability', value: { type: 'fixed', value: 14 } },
      { attributeId: 'agility-ability', value: { type: 'fixed', value: 10 } },
      { attributeId: 'dexterity-ability', value: { type: 'fixed', value: 10 } },
      { attributeId: 'intelligence-ability', value: { type: 'fixed', value: 6 } },
      { attributeId: 'sense-ability', value: { type: 'fixed', value: 10 } },
      { attributeId: 'charisma-ability', value: { type: 'fixed', value: 8 } }
    ],
    traitIds: [],
    actionIds: [ 'fire-elemental-touch' ],
    skillIds: [],
    conditionIds: [],
    equipment: {},
    defaultDamageScales: {
      fire: 'immunity',
      piercing: 'resistant',
      bludgeoning: 'resistant',
      slashing: 'resistant'
    }
  },
  {
    id: 'owlbear',
    name: { en: 'Owlbear', th: 'หมีนกฮูก' },
    description: { en: 'A monstrous hybrid of bear and owl, known for its ferocity and powerful attacks.', th: 'ลูกผสมสัตว์ประหลาดระหว่างหมีกับนกฮูก ขึ้นชื่อเรื่องความดุร้ายและการโจมตีที่ทรงพลัง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/A0522D/FFFFFF?text=🐻🦉',
    thumbnail: 'https://placehold.co/128x128/A0522D/FFFFFF?text=Owlbear',
    tags: [ 'beast', 'monstrosity' ],
    level: 5,
    attributeOverrides: [
      { attributeId: 'hit-point', value: { type: 'fixed', value: 59 } },
      { attributeId: 'armor-class', value: { type: 'fixed', value: 13 } },
      { attributeId: 'movement', value: { type: 'fixed', value: 12 } },
      { attributeId: 'strength-ability', value: { type: 'fixed', value: 20 } },
      { attributeId: 'agility-ability', value: { type: 'fixed', value: 12 } },
      { attributeId: 'dexterity-ability', value: { type: 'fixed', value: 12 } },
      { attributeId: 'intelligence-ability', value: { type: 'fixed', value: 3 } },
      { attributeId: 'sense-ability', value: { type: 'fixed', value: 12 } },
      { attributeId: 'charisma-ability', value: { type: 'fixed', value: 7 } }
    ],
    traitIds: [],
    actionIds: [ 'owlbear-claws', 'owlbear-beak' ],
    skillIds: [],
    conditionIds: [],
    equipment: {},
    defaultDamageScales: {}
  }
];
