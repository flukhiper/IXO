import type { ItemConfig } from '@/types/config/item';

export const mock: ItemConfig[] = [
  {
    id: 'item-armor-padded-robes',
    name: { en: 'Padded Robes' },
    type: 'armor',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 10,
    weight: 4,
    augmentSlots: 0,
    space: { rows: 2, columns: 2 },
    slotTypes: [ 'armor' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'light-armor', level: 1 } ],
    requiredStats: [],
    armor: {
      armoreBonus: { type: 'fixed', value: 1 },
      durabilityPoints: 3,
      property: { light: true }
    },
    tags: [ 'armor', 'light-armor' ]
  },
  {
    id: 'item-armor-hardened-leather',
    name: { en: 'Hardened Leather' },
    type: 'armor',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 45,
    weight: 6,
    augmentSlots: 0,
    space: { rows: 2, columns: 3 },
    slotTypes: [ 'armor' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'light-armor', level: 1 } ],
    requiredStats: [],
    armor: {
      armoreBonus: { type: 'fixed', value: 2 },
      durabilityPoints: 4,
      property: { light: true }
    },
    tags: [ 'armor', 'light-armor' ]
  },
  {
    id: 'item-armor-scale-mail',
    name: { en: 'Scale Mail' },
    type: 'armor',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 75,
    weight: 20,
    augmentSlots: 1,
    space: { rows: 3, columns: 3 },
    slotTypes: [ 'armor' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'medium-armor', level: 1 } ],
    requiredStats: [ { statId: 'strength', conditionFormulas: { operator: '>=', formula: '12' } } ],
    armor: {
      armoreBonus: { type: 'fixed', value: 3 },
      durabilityPoints: 5,
      property: { medium: true }
    },
    tags: [ 'armor', 'medium-armor', 'stealth-disadvantage' ]
  },
  {
    id: 'item-armor-breastplate',
    name: { en: 'Breastplate' },
    type: 'armor',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 200,
    weight: 10,
    augmentSlots: 1,
    space: { rows: 3, columns: 3 },
    slotTypes: [ 'armor' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'medium-armor', level: 1 } ],
    requiredStats: [ { statId: 'strength', conditionFormulas: { operator: '>=', formula: '12' } } ],
    armor: {
      armoreBonus: { type: 'fixed', value: 4 },
      durabilityPoints: 6,
      property: { medium: true }
    },
    tags: [ 'armor', 'medium-armor', 'stealth-disadvantage' ]
  },
  {
    id: 'item-armor-plate-mail',
    name: { en: 'Plate Mail' },
    type: 'armor',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 600,
    weight: 25,
    augmentSlots: 1,
    space: { rows: 4, columns: 4 },
    slotTypes: [ 'armor' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'heavy-armor', level: 1 } ],
    requiredStats: [ { statId: 'strength', conditionFormulas: { operator: '>=', formula: '14' } } ],
    armor: {
      armoreBonus: { type: 'fixed', value: 5 },
      durabilityPoints: 7,
      property: { heavy: true }
    },
    tags: [ 'armor', 'heavy-armor', 'stealth-disadvantage', 'movement-penalty' ]
  },
  {
    id: 'item-armor-full-plate',
    name: { en: 'Full Plate' },
    type: 'armor',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 1500,
    weight: 30,
    augmentSlots: 2,
    space: { rows: 4, columns: 4 },
    slotTypes: [ 'armor' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'heavy-armor', level: 1 } ],
    requiredStats: [ { statId: 'strength', conditionFormulas: { operator: '>=', formula: '14' } } ],
    armor: {
      armoreBonus: { type: 'fixed', value: 6 },
      durabilityPoints: 8,
      property: { heavy: true }
    },
    tags: [ 'armor', 'heavy-armor', 'stealth-disadvantage', 'movement-penalty' ]
  },
  {
    id: 'item-shield-light-shield',
    name: { en: 'Light Shield' },
    type: 'shield',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 10,
    weight: 3,
    augmentSlots: 0,
    space: { rows: 2, columns: 2 },
    slotTypes: [ 'off-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'shields', level: 1 } ],
    requiredStats: [],
    shield: {
      armoreBonus: { type: 'fixed', value: 1 },
      durabilityPoints: 4,
      property: { light: true }
    },
    tags: [ 'shield', 'light-shield' ]
  },
  {
    id: 'item-shield-medium-shield',
    name: { en: 'Medium Shield' },
    type: 'shield',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 30,
    weight: 6,
    augmentSlots: 1,
    space: { rows: 2, columns: 3 },
    slotTypes: [ 'off-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'shields', level: 1 } ],
    requiredStats: [],
    shield: {
      armoreBonus: { type: 'fixed', value: 2 },
      durabilityPoints: 6,
      property: { medium: true }
    },
    tags: [ 'shield', 'medium-shield' ]
  },
  {
    id: 'item-shield-heavy-shield',
    name: { en: 'Heavy Shield' },
    type: 'shield',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 75,
    weight: 10,
    augmentSlots: 1,
    space: { rows: 3, columns: 3 },
    slotTypes: [ 'off-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'shields', level: 1 } ],
    requiredStats: [ { statId: 'strength', conditionFormulas: { operator: '>=', formula: '13' } } ],
    shield: {
      armoreBonus: { type: 'fixed', value: 3 },
      durabilityPoints: 8,
      property: { heavy: true }
    },
    tags: [ 'shield', 'heavy-shield' ]
  },
  {
    id: 'item-weapon-baton',
    name: { en: 'Baton' },
    type: 'weapon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 1,
    weight: 1,
    augmentSlots: 0,
    space: { rows: 1, columns: 2 },
    slotTypes: [ 'main-hand', 'off-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'simple-weapons', level: 1 } ],
    requiredStats: [],
    weapon: {
      damageTypeId: 'bludgeoning',
      damage: { type: 'dice', formula: '1d6' },
      range: { type: 'fixed', value: 1 },
      property: { finesse: true, light: true }
    },
    tags: [ 'weapon', 'simple-melee', 'finesse', 'light' ]
  },
  {
    id: 'item-weapon-dagger',
    name: { en: 'Dagger' },
    type: 'weapon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 2,
    weight: 0.5,
    augmentSlots: 0,
    space: { rows: 1, columns: 2 },
    slotTypes: [ 'main-hand', 'off-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'simple-weapons', level: 1 } ],
    requiredStats: [],
    weapon: {
      damageTypeId: 'piercing',
      damage: { type: 'dice', formula: '1d4' },
      range: { type: 'fixed', value: 1 },
      property: { finesse: true, light: true, thrown: { type: 'fixed', value: 5 } }
    },
    tags: [ 'weapon', 'simple-melee', 'finesse', 'light', 'thrown' ]
  },
  {
    id: 'item-weapon-greatclub',
    name: { en: 'Greatclub' },
    type: 'weapon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 5,
    weight: 5,
    augmentSlots: 0,
    space: { rows: 2, columns: 4 },
    slotTypes: [ 'main-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'simple-weapons', level: 1 } ],
    requiredStats: [],
    weapon: {
      damageTypeId: 'bludgeoning',
      damage: { type: 'dice', formula: '1d10' },
      range: { type: 'fixed', value: 1 },
      property: { twoHanded: true }
    },
    tags: [ 'weapon', 'simple-melee', 'two-handed' ]
  },
  {
    id: 'item-weapon-longsword',
    name: { en: 'Longsword' },
    type: 'weapon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 15,
    weight: 1.5,
    augmentSlots: 1,
    space: { rows: 1, columns: 4 },
    slotTypes: [ 'main-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'martial-weapons', level: 1 } ],
    requiredStats: [],
    weapon: {
      damageTypeId: 'slashing',
      damage: { type: 'dice', formula: '1d8' },
      range: { type: 'fixed', value: 1 },
      property: { versatile: { type: 'dice', formula: '1d10' } }
    },
    tags: [ 'weapon', 'martial-melee', 'versatile' ]
  },
  {
    id: 'item-weapon-rifle',
    name: { en: 'Rifle' },
    type: 'weapon',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 500,
    weight: 4,
    augmentSlots: 1,
    space: { rows: 2, columns: 5 },
    slotTypes: [ 'main-hand' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [ { proficiencyId: 'technical-ranged', level: 1 } ],
    requiredStats: [],
    weapon: {
      damageTypeId: 'piercing',
      damage: { type: 'dice', formula: '2d8' },
      range: { type: 'fixed', value: 100 },
      property: { twoHanded: true }
    },
    tags: [ 'weapon', 'technical-ranged', 'ammunition', 'two-handed' ]
  },
  {
    id: 'item-consumable-healing-potion-minor',
    name: { en: 'Healing Potion (Minor)' },
    type: 'consumable',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 50,
    weight: 0.5,
    augmentSlots: 0,
    space: { rows: 1, columns: 1 },
    slotTypes: [ 'utility' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [],
    requiredStats: [],
    consumable: {
      restores: { attributeId: 'hit-points', baseValue: { type: 'dice', formula: '2d4+2' } },
      isExpendable: true,
      numberOfUsages: 1
    },
    tags: [ 'consumable', 'healing' ]
  },
  {
    id: 'item-consumable-acid-flask',
    name: { en: 'Acid Flask' },
    type: 'consumable',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 30,
    weight: 0.5,
    augmentSlots: 0,
    space: { rows: 1, columns: 1 },
    slotTypes: [ 'utility' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [],
    requiredStats: [],
    consumable: {
      damages: { damageTypeId: 'acid', baseValue: { type: 'dice', formula: '2d6' } },
      isExpendable: true,
      numberOfUsages: 1
    },
    tags: [ 'consumable', 'damage' ]
  },
  {
    id: 'item-utility-backpack',
    name: { en: 'Backpack' },
    type: 'backpack',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system',
    cost: 5,
    weight: 2,
    augmentSlots: 0,
    space: { rows: 4, columns: 4 },
    slotTypes: [ 'backpack' ],
    requiredCharacterLevel: 0,
    requiredProficiencies: [],
    requiredStats: [],
    backpack: {
      space: { rows: 8, columns: 6 }
    },
    tags: [ 'gear', 'container' ]
  }
];
