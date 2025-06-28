import type { ArchetypeConfig } from '@/types/config/archetype';

export const mockArchetypes: ArchetypeConfig[] = [
  // 🌌 PRIMORDIA
  {
    id: 'rift-seeker',
    name: { en: 'The Rift Seeker' },
    description: {
      en: 'A master of sensing cosmic energy and interdimensional tears. They guide others through unstable rifts.'
    },
    abilityIds: [ 'energy-sense', 'any' ],
    specialty: {
      name: { en: 'Rift Sense' },
      description: { en: 'Detect when and where dimensional cracks are likely to appear.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'shard-keeper',
    name: { en: 'The Shard Keeper' },
    description: {
      en: 'Archivists of broken truths. They tap into universal memories stored in Primordia\'s fragments.'
    },
    abilityIds: [ 'recall', 'any' ],
    specialty: {
      name: { en: 'Origin Resonance' },
      description: { en: 'Sense the realm of origin for people and items.' }
    },
    createdAt: new Date().toISOString()
  },

  // 🎭 SYMPHONIA VARIS
  {
    id: 'captivating-muse',
    name: { en: 'The Captivating Muse' },
    description: {
      en: 'Emotion is their instrument. They move hearts through performance and insight.'
    },
    abilityIds: [ 'performance', 'insight' ],
    specialty: {
      name: { en: 'Trusting Presence' },
      description: { en: 'Others feel at ease around you. You uplift and earn trust quickly.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'luminous-performer',
    name: { en: 'The Luminous Performer' },
    description: {
      en: 'An embodiment of spectacle, grace, and physical artistry.'
    },
    abilityIds: [ 'performance', 'acrobatics' ],
    specialty: {
      name: { en: 'Irresistible Focus' },
      description: { en: 'You naturally draw all eyes. It’s difficult for others to look away from you.' }
    },
    createdAt: new Date().toISOString()
  },

  // 📚 GAEA LIBRIS
  {
    id: 'cosmic-seer',
    name: { en: 'The Cosmic Seer' },
    description: {
      en: 'Interprets subtle cosmic patterns and ancient mysteries.'
    },
    abilityIds: [ 'perceive', 'analyze' ],
    specialty: {
      name: { en: 'Pattern Insight' },
      description: { en: 'Read signs in nature and the cosmos to anticipate events.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'verdant-whisperer',
    name: { en: 'The Verdant Whisperer' },
    description: {
      en: 'A friend to all natural life, understanding its rhythms and voices.'
    },
    abilityIds: [ 'comprehend', 'insight' ],
    specialty: {
      name: { en: 'Nature\'s Ear' },
      description: { en: 'Sense well-being and secrets of nearby plant and animal life.' }
    },
    createdAt: new Date().toISOString()
  },

  // ⚙️ ARTIFICIUM
  {
    id: 'master-mechanic',
    name: { en: 'The Master Mechanic' },
    description: {
      en: 'Builder of wonders, fixer of flaws. They speak fluent machine.'
    },
    abilityIds: [ 'mechanical', 'analyze' ],
    specialty: {
      name: { en: 'Tech Whisperer' },
      description: { en: 'Sense malfunctions and optimize devices just by touch or sight.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'wealth-accumulator',
    name: { en: 'The Wealth Accumulator' },
    description: {
      en: 'Knows the flow of wealth like the tide. Always a step ahead.'
    },
    abilityIds: [ 'sleight-of-hand', 'deception' ],
    specialty: {
      name: { en: 'Market Pulse' },
      description: { en: 'Sense market shifts and detect hidden value instinctively.' }
    },
    createdAt: new Date().toISOString()
  },

  // 🔥 DOLORIA
  {
    id: 'relentless-survivor',
    name: { en: 'The Relentless Survivor' },
    description: {
      en: 'Hard as stone and fast as a predator. Built to endure anything.'
    },
    abilityIds: [ 'sprint', 'athletics' ],
    specialty: {
      name: { en: 'Adaptive Physiology' },
      description: { en: 'Temporarily adapt your body to extreme environments or conditions.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'shadow-scavenger',
    name: { en: 'The Shadow Scavenger' },
    description: {
      en: 'A master of taking what’s needed, unseen and efficient.'
    },
    abilityIds: [ 'stealth', 'sleight-of-hand' ],
    specialty: {
      name: { en: 'Hidden Cache Sense' },
      description: { en: 'You always manage to find hidden stashes or exploitable weak spots.' }
    },
    createdAt: new Date().toISOString()
  },

  // 👑 AETHELGARD
  {
    id: 'arcane-loremaster',
    name: { en: 'The Arcane Loremaster' },
    description: {
      en: 'Wields magic through knowledge, preserving and interpreting ancient power.'
    },
    abilityIds: [ 'energy-sense', 'recall' ],
    specialty: {
      name: { en: 'Echoing Lore' },
      description: { en: 'Read magical echoes left in ruins or artifacts to glimpse their past use.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'diplomatic-regent',
    name: { en: 'The Diplomatic Regent' },
    description: {
      en: 'Royal blood, silver tongue. They bring peace through persuasion.'
    },
    abilityIds: [ 'persuasion', 'comprehend' ],
    specialty: {
      name: { en: 'Harmonious Presence' },
      description: { en: 'Defuse tension and promote cooperation effortlessly in any room.' }
    },
    createdAt: new Date().toISOString()
  },

  // ⚔️ BELLARAX
  {
    id: 'iron-general',
    name: { en: 'The Iron General' },
    description: {
      en: 'Born to lead. Strength and command flow from their every motion.'
    },
    abilityIds: [ 'intimidation', 'athletics' ],
    specialty: {
      name: { en: 'Battlefield Resolve' },
      description: { en: 'Your presence boosts morale and blocks fear among nearby allies.' }
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'cunning-warlord',
    name: { en: 'The Cunning Warlord' },
    description: {
      en: 'Sees the battlefield like a puzzle. Always two moves ahead.'
    },
    abilityIds: [ 'deception', 'perceive' ],
    specialty: {
      name: { en: 'Strategic Gaze' },
      description: { en: 'Identify tactical weaknesses and enemy intent at a glance.' }
    },
    createdAt: new Date().toISOString()
  },

  // New Archetype: The Blank Soul
  {
    id: 'blank-soul',
    name: { en: 'The Blank Soul' },
    description: {
      en: 'An empty vessel ready to be shaped. This archetype is for experienced players who want full control over their build.'
    },
    abilityIds: [ 'any', 'any' ], // Placeholder tags for dynamic selection
    // No specialty
    createdAt: new Date().toISOString()
  }
];
