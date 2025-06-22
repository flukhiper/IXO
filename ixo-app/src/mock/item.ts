/* eslint-disable @typescript-eslint/no-unused-vars */
const mockWeaponItem = [ 
  {
    id: 'longsword',
    name: {
      en: 'Longsword',
      th: ''
    },
    description: {
      en: 'A finely crafted longsword enhanced with a magical enchantment.',
      th: ''
    },
    tags: [ 'weapon', 'melee', 'longsword', 'martial' ],
    space: { rows: 3, columns: 1 },
    weight: 1,
    value: 100, // in gold, optional
    type: 'weapon', // or 'equipment' if you want to be more generic
    weapon: {
      hit: {
        type: 'attribute',
        id: 'attack-roll',
        modifier: 'attr(melee-attack-modifier)+attr(strength-modifier)'
      },
      damage: {
        type: 'slashing',
        value: {
          type: 'dice',
          value: '1d8'
        },
        modifier: 'attr(melee-damage-modifier)+attr(strength-modifier)'
      },
      properties: [
        {
          type: 'versatile',
          value: {
            type: 'dice',
            value: '1d10'
          }
        },
        {
          type: 'fitness',
          hitModifier: 'attr(melee-attack-modifier)+attr(dexterity-modifier)',
          damageModifier: 'attr(melee-damage-modifier)+attr(dexterity-modifier)'
        },
        {
          type: 'upgrade',
          value: {
            type: 'fix',
            value: 1
          }
        },
        {
          type: 'enchance',
          name: 'Fire',
          damage: {
            type: 'fire',
            value: {
              type: 'dice',
              value: '1d4'
            }
          }
        }
      ]
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'martial-weapons', 'longsword' ]
      },
      {
        type: 'level',
        value: {
          type: 'fix',
          value: 1
        }
      },
      {
        type: 'stat',
        stat: 'strength',
        value: {
          type: 'fix',
          value: 2
        }
      }
    ]
  }, {
    id: 'pike',
    name: {
      en: 'Pike',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'weapon', 'melee', 'pike', 'martial' ],
    space: '4*1', // row*column. mean used space when in inventory.
    weight: 8,
    value: 100,
    type: 'weapon',
    weapon: {
      hit: {
        type: 'attribute',
        id: 'attack-roll',
        modifier: 'attr(melee-attack-modifier)+attr(strength-modifier)'
      },
      damage: {
        type: 'piercing',
        value: {
          type: 'dice',
          value: '1d10'
        },
        modifier: 'attr(melee-damage-modifier)+attr(strength-modifier)'
      },
      properties: [
        {
          type: 'two-hand'
        },
        {
          type: 'extra-reach',
          value: {
            type: 'fix',
            value: 2
          }
        },
        {
          type: 'upgrade',
          value: {
            type: 'fix',
            value: 1
          }
        }
      ],
      conditions: [ 'bleed' ] // apply condition to target when hit
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'martial-weapons', 'pike' ]
      }
    ],
    actions: [ 'blood-slash' ],
    conditions: [ 'blood-curse' ]
  }, {
    id: 'light-crossbow',
    name: {
      en: 'Light Crossbows',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'weapon', 'range', 'light-crossbow', 'simple' ],
    space: '2*1', // row*column. mean used space when in inventory.
    weight: 2,
    value: 100,
    type: 'weapon', // or 'equipment' if you want to be more generic
    weapon: {
      hit: {
        type: 'attribute',
        id: 'attack-roll',
        modifier: 'attr(range-attack-modifier)+attr(dexterity-modifier)'
      },
      damage: {
        type: 'piercing',
        value: {
          type: 'dice',
          value: '1d8'
        },
        modifier: 'attr(range-damage-modifier)+attr(dexterity-modifier)'
      },
      properties: [
        {
          type: 'range',
          value: {
            type: 'fix',
            value: 18
          }
        },
        {
          type: 'light'
        }
      ]
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'simple-weapons', 'light-crossbow' ]
      }
    ],
    modifiers: [ {
      type: 'modifier',
      attribute: 'attack-roll',
      formula: '1'
    } ]
  }
];

const mockShieldItem = [ 
  {
    id: 'viconias-walking-fortress',
    name: {
      en: 'Viconia\'s Walking Fortress',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'shield' ],
    space: { rows: 3, columns: 2 },
    weight: 5,
    value: 100, // in gold, optional
    type: 'shield',
    shield: {
      modifier: '+2'
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'shield' ]
      }
    ],
    actions: [ 'bulwark-rebuke' ],
    conditions: [ 'spellguard' ]
  }
];

const mockArmorItem = [ 
  {
    id: 'broken-padded-armour',
    name: {
      en: 'Broken Padded Armour',
      th: ''
    },
    description: {
      en: 'A finely crafted longsword enhanced with a magical enchantment.',
      th: ''
    },
    tags: [ 'armor', 'clothwear', 'light-armor' ],
    space: { rows: 3, columns: 2 },
    weight: 3,
    value: 100,
    type: 'armor',
    armor: {
      type: 'clothwear',
      armorClass: {
        value: {
          type: 'fix',
          value: 11
        },
        modifier: 'attr(dexterity-modifier)'
      },
      properties: [
        {
          type: 'upgrade',
          value: {
            type: 'fix',
            value: 1
          }
        }
      ]
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'light-armor' ]
      }
    ]
  }, {
    id: 'plate-armour',
    name: {
      en: 'Plate Armour',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'armor', 'clothwear', 'heavy-armor' ],
    space: { rows: 3, columns: 2 },
    weight: 3,
    value: 100,
    type: 'armor',
    armor: {
      type: 'clothwear',
      armorClass: {
        value: {
          type: 'fix',
          value: 18
        }
      },
      properties: [
        {
          type: 'reduce', // mean reduce a incoming damage.
          value: {
            type: 'fix',
            value: 2
          }
        },
        {
          type: 'heavy'
        }
      ],
      conditions: [ 'fear' ] // apply condition to target when get hit by targe.
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'heavy-armor' ]
      }
    ],
    actions: [ 'defence-stance' ],
    conditions: [ 'unmoveable' ]
  }, {
    id: 'breastplate',
    name: {
      en: 'Breastplate',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'armor', 'clothwear', 'medium-armor' ],
    space: { rows: 3, columns: 2 },
    weight: 3,
    value: 100,
    type: 'armor',
    armor: {
      type: 'clothwear',
      armorClass: {
        value: {
          type: 'fix',
          value: 14
        },
        modifier: 'attr(dexterity-modifier)',
        max: {
          type: 'fix',
          value: 2
        }
      },
      properties: []
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'medium-armor' ]
      }
    ]
  }, {
    id: 'dreamsome-boot',
    name: {
      en: 'Dreamsome Boot',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'armor', 'footwear', 'medium-armor' ],
    space: { rows: 2, columns: 2 },
    weight: 3,
    value: 100,
    type: 'armor',
    armor: {
      type: 'footwear',
      armorClass: {
        modifier: '1'
      },
      properties: []
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'medium-armor' ]
      }
    ]
  }, {
    id: 'the-reviving-hand',
    name: {
      en: 'The Reviving Hand',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'armor', 'handwear', 'medium-armor' ],
    space: { rows: 2, columns: 2 },
    weight: 3,
    value: 100,
    type: 'armor',
    armor: {
      type: 'handwear',
      properties: []
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'medium-armor' ]
      }
    ],
    actions: [ 'revivity' ]
  }, {
    id: 'sarevoks-horned-helmet',
    name: {
      en: 'Sarevok\'s Horned Helmet',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'armor', 'headwear', 'medium-armor' ],
    space: { rows: 2, columns: 2 },
    weight: 3,
    value: 100,
    type: 'armor',
    armor: {
      type: 'headwear',
      properties: [
        {
          type: 'reduce',
          value: {
            type: 'fix',
            value: 2
          }
        }
      ],
      conditions: [ 'frightened' ]
    },
    requirements: [
      {
        type: 'proficiency',
        proficiency: [ 'medium-armor' ]
      }
    ],
    modifiers: [ {
      type: 'modifier',
      stat: 'dexterity',
      formula: '1'
    } ]
  }
];

const mockAccessoryItem = [ 
  {
    id: 'belt',
    name: {
      en: 'Belt',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'accessory', 'belt' ],
    space: { rows: 1, columns: 2 },
    weight: 3,
    value: 100,
    type: 'accessory',
    accessory: {
      wearSlot: { // number of utility or cumsumable item that ready to use in battle
        type: 'fix',
        value: 5
      }
    },
    requirements: []
  },
  {
    id: 'backpack',
    name: {
      en: 'Backpack',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'accessory', 'backpack' ],
    space: { rows: 1, columns: 2 },
    weight: 3,
    value: 100,
    type: 'accessory',
    accessory: {
      inventorySlot: { rows: 6, columns: 12 } // space for hold item in inventory
    },
    requirements: []
  },
  {
    id: 'smugglers-ring',
    name: {
      en: 'Smuggler\'s Ring',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'accessory', 'ring' ],
    space: { rows: 1, columns: 1 },
    weight: 3,
    value: 100,
    type: 'accessory',
    requirements: [],
    actions: [ 'paralyzing-ray' ],
    conditions: [ 'likely-dizzy' ],
    modifiers: [ {
      type: 'modifier',
      stat: 'dexterity',
      formula: '1'
    } ]
  }
];

const mockConsumableItem = [ 
  {
    id: 'elixir-of-bloodlust',
    name: {
      en: 'Elixir of Bloodlust',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'consumable', 'elixir' ],
    space: { rows: 1, columns: 1 },
    weight: 3,
    value: 100,
    type: 'consumable',
    consumable: {
      numberOfUse: {
        type: 'fix',
        value: 2
      },
      conditions: [ 'elixir-of-bloodlust' ],
      restore: {
        attribute: 'action-point', // attribute id. must be expendable type
        value: {
          type: 'fix',
          value: 1 
        }
      }
    },
    requirements: []
  }
];

const mockUtilityItem = [ 
  {
    id: 'smokepowder-bomb',
    name: {
      en: 'Smokepowder Bomb',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'utility', 'bomb' ],
    space: { rows: 1, columns: 1 },
    weight: 3,
    value: 100,
    type: 'utility',
    utility: {
      damage: {
        type: 'force',
        value: {
          type: 'dice',
          value: '3d4+9'
        }
      }
    },
    requirements: []
  }
];