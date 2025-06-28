import { TraitConfig } from '@/types/config/trait';

export const mockTraits: TraitConfig[] = [
  {
    id: 'dragonoid',
    name: { en: 'Dragonoid' },
    description: { en: 'Arrogant and resilient beings blessed with dragon scales and unwavering will.' },
    icon: '🐉',
    isSpecial: true,
    tags: [ 'special', 'draconic' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'dragonoid-fearless-will', 'dragonoid-hardened-scales' ]
      }
    ]
  },
  {
    id: 'kijin',
    name: { en: 'Kijin' },
    description: { en: 'Battle-driven beings that grow fiercer as they bleed.' },
    icon: '💀',
    isSpecial: true,
    tags: [ 'special', 'berserker' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'kijin-pain-fury', 'kijin-unkillable-instinct' ]
      }
    ]
  },
  {
    id: 'mechina',
    name: { en: 'Mechina' },
    description: { en: 'Construct-like beings with unmatched adaptability and relentless efficiency.' },
    icon: '⚙️',
    isSpecial: true,
    tags: [ 'special', 'construct' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'mechina-extra-load', 'mechina-restless-processor' ]
      }
    ]
  },
  {
    id: 'werebeast',
    name: { en: 'Werebeast' },
    description: { en: 'Driven by obsession and empowered by primal senses.' },
    icon: '🐾',
    isSpecial: true,
    tags: [ 'special', 'animalistic' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'werebeast-obsessive-focus', 'werebeast-predator-senses' ]
      }
    ]
  },
  {
    id: 'elf',
    name: { en: 'Elf' },
    description: { en: 'Graceful and ancient, the elves thrive on timeless intuition.' },
    icon: '🌿',
    isSpecial: true,
    tags: [ 'special', 'ancient' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'elf-timeless-composure', 'elf-ancient-gift' ]
      }
    ]
  },
  {
    id: 'demonia',
    name: { en: 'Demonia' },
    description: { en: 'Mimics of others, born to outlast the harshest places.' },
    icon: '😈',
    isSpecial: true,
    tags: [ 'special', 'superior' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'demonia-adaptive-copycat', 'demonia-harshborn' ]
      }
    ]
  },
  {
    id: 'siren',
    name: { en: 'Siren' },
    description: { en: 'Charming voices and enchanting power, hard to resist.' },
    icon: '🎶',
    isSpecial: true,
    tags: [ 'special', 'alluring' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'siren-enchanting-aura', 'siren-song-of-entrapment' ]
      }
    ]
  },
  {
    id: 'aethel-unchanged',
    name: { en: 'Aethel (Unchanged)' },
    description: { en: 'Bound by purpose, yet holding great hidden potential.' },
    icon: '💎',
    isSpecial: true,
    tags: [ 'special', 'aethel', 'unchanged' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'aethel-obedient-role', 'aethel-hidden-spark' ]
      }
    ]
  }
];
