import type { RealmConfig } from '@/types/config/realm';

export const mockRealms: RealmConfig[] = [
  {
    id: 'primordia',
    name: { en: 'Primordia' },
    description: {
      en: 'The shattered origin world and nexus of all dimensions. Primordia is a realm of raw, chaotic energy, holding echoes of the world\'s original harmony. Travel between worlds can only occur through unstable rifts here.'
    },
    tags: [ 'core', 'origin' ],
    archetypeIds: [ 'rift-seeker', 'shard-keeper' ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'symphonia-varis',
    name: { en: 'Symphonia Varis' },
    description: {
      en: 'A realm of joy, inspiration, and performance, resembling a living theme park or fantasy garden. It\'s driven by emotion, beauty, and expressive freedom.'
    },
    tags: [ 'entertainment', 'emotion' ],
    archetypeIds: [ 'captivating-muse', 'luminous-performer' ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'gaea-libris',
    name: { en: 'Gaea Libris' },
    description: {
      en: 'A wilderness of knowledge and growth, where forests are libraries and rivers hum with ancient truth. It\'s home to scholars, druids, and cosmic seers.'
    },
    tags: [ 'nature', 'knowledge' ],
    archetypeIds: [ 'cosmic-seer', 'verdant-whisperer' ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'artificium',
    name: { en: 'Artificium' },
    description: {
      en: 'Oceanic cities driven by invention, commerce, and capitalism. Everything is engineered and monetized. Innovation thrives, but so does greed.'
    },
    tags: [ 'technology', 'commerce' ],
    archetypeIds: [ 'master-mechanic', 'wealth-accumulator' ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'doloria',
    name: { en: 'Doloria' },
    description: {
      en: 'A brutal realm of hardship and competition. Constant struggle shapes its people, from hunters to scavengers. Here, survival is the highest art.'
    },
    tags: [ 'survival', 'sport' ],
    archetypeIds: [ 'relentless-survivor', 'shadow-scavenger' ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'aethelgard',
    name: { en: 'Aethelgard' },
    description: {
      en: 'A high fantasy realm of courts, magical orders, and ancient tradition. Power here comes through lineage, diplomacy, and arcane mastery.'
    },
    tags: [ 'magic', 'royalty' ],
    archetypeIds: [ 'arcane-loremaster', 'diplomatic-regent' ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'bellarax',
    name: { en: 'Bellarax' },
    description: {
      en: 'A war-torn frontier world where might defines law. Factions rise and fall daily in an endless battle for dominance and survival.'
    },
    tags: [ 'war', 'strength' ],
    archetypeIds: [ 'iron-general', 'cunning-warlord' ],
    createdAt: new Date().toISOString()
  }
];
