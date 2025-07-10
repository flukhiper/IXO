import type { CreatureConfig } from '@/types/config/creature';

export const mock: CreatureConfig[] = [
  {
    id: 'creature-grasping-vine',
    name: { en: 'Grasping Vine' },
    description: { en: 'A carnivorous plant from the overgrown jungles of Gaea Libris. It lies perfectly still, disguised as a normal vine, until prey wanders too close. It then springs to life, attempting to constrict and crush its victim.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    tags: [ 'plant', 'ambusher' ],
    threatLevel: 1,
    originId: 'gaea-libris',
    statOverrides: {
      strength: 3,
      agility: 0,
      sense: 1,
      technique: 0,
      intelligence: -4,
      presence: -3
    },
    attributeOverrides: [
      { attributeId: 'hit-points', baseValue: { type: 'fixed', value: 20 } },
      { attributeId: 'armor-class', baseValue: { type: 'fixed', value: 10 } },
      { attributeId: 'damage-reduction', baseValue: { type: 'fixed', value: 1 } },
      { attributeId: 'speed', baseValue: { type: 'fixed', value: 3 } }
    ],
    resistances: {
      bludgeoning: 'resistant',
      fire: 'vulnerable'
    },
    actionIds: [ 'action-constrict', 'action-crush' ],
    skillIds: [ 'skill-stealth' ],
    conditionIds: [],
    equipments: {},
    holdItems: []
  },
  {
    id: 'creature-clockwork-sentinel',
    name: { en: 'Clockwork Sentinel' },
    description: { en: 'A vigilant automaton from the city-states of Artificium. Built for guard duty, it moves with a rhythmic, clanking gait, its single glowing eye scanning for threats. It is durable, relentless, and follows its last given orders without question.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    tags: [ 'construct', 'sentry' ],
    threatLevel: 3,
    originId: 'artificium',
    statOverrides: {
      strength: 3,
      agility: 0,
      sense: 2,
      technique: 3,
      intelligence: -2,
      presence: -1
    },
    attributeOverrides: [
      { attributeId: 'hit-points', baseValue: { type: 'fixed', value: 45 } },
      { attributeId: 'armor-class', baseValue: { type: 'fixed', value: 14 } },
      { attributeId: 'damage-reduction', baseValue: { type: 'fixed', value: 4 } },
      { attributeId: 'speed', baseValue: { type: 'fixed', value: 6 } }
    ],
    resistances: {
      poison: 'immune',
      psychic: 'immune'
    },
    actionIds: [ 'action-power-mace', 'action-steam-vent', 'action-target-lock' ],
    skillIds: [ 'skill-perception' ],
    conditionIds: [ 'condition-charmed-immune', 'condition-frightened-immune' ],
    equipments: {
      'main-hand': 'item-weapon-power-mace'
    },
    holdItems: []
  },
  {
    id: 'creature-dolorian-scavenger',
    name: { en: 'Dolorian Scavenger' },
    description: { en: 'A gaunt, hunched humanoid that stalks the desolate wastes of Doloria. Wrapped in rags and wielding a crude, sharpened pipe, these creatures are masters of survival, using pack tactics and dirty tricks to bring down prey much stronger than themselves.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    tags: [ 'humanoid', 'scavenger' ],
    threatLevel: 2,
    originId: 'doloria',
    statOverrides: {
      strength: 2,
      agility: 2,
      sense: 3,
      technique: 1,
      intelligence: 0,
      presence: 0
    },
    attributeOverrides: [
      { attributeId: 'hit-points', baseValue: { type: 'fixed', value: 33 } },
      { attributeId: 'armor-class', baseValue: { type: 'fixed', value: 13 } },
      { attributeId: 'damage-reduction', baseValue: { type: 'fixed', value: 2 } },
      { attributeId: 'speed', baseValue: { type: 'fixed', value: 8 } }
    ],
    resistances: {},
    actionIds: [ 'action-shiv', 'action-pocket-sand', 'action-harried-retreat' ],
    skillIds: [ 'skill-stealth', 'skill-perception', 'skill-endurance' ],
    conditionIds: [],
    equipments: {
      'main-hand': 'item-weapon-shiv'
    },
    holdItems: []
  },
  {
    id: 'creature-ash-waste-marauder',
    name: { en: 'Ash Waste Marauder' },
    description: { en: 'These desperate and pragmatic survivors hail from the desolate wastes of Doloria. Twisted by a raw desire for survival, they stalk the fractured realms in small packs, using cunning tactics and dirty tricks to overwhelm their prey.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    tags: [ 'humanoid', 'marauder' ],
    threatLevel: 2,
    originId: 'doloria',
    statOverrides: {
      strength: 2,
      agility: 2,
      sense: 1,
      technique: 0,
      intelligence: -1,
      presence: 0
    },
    attributeOverrides: [
      { attributeId: 'hit-points', baseValue: { type: 'fixed', value: 18 } },
      { attributeId: 'armor-class', baseValue: { type: 'fixed', value: 11 } },
      { attributeId: 'damage-reduction', baseValue: { type: 'fixed', value: 1 } },
      { attributeId: 'speed', baseValue: { type: 'fixed', value: 8 } }
    ],
    resistances: {
      poison: 'resistant'
    },
    actionIds: [ 'action-scavenged-blade', 'action-harass' ],
    skillIds: [ 'skill-endurance', 'skill-stealth' ],
    conditionIds: [],
    equipments: {
      'main-hand': 'item-weapon-scavenged-blade'
    },
    holdItems: []
  }
];
  