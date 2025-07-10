import type { ActionConfig } from '@/types/config/action';

// === Mock Action Configs ===
export const mock: ActionConfig[] = [
  {
    id: 'action-common-full-attack',
    name: { en: 'Full Attack' },
    description: { en: 'You make a single melee or ranged attack with a weapon you are wielding or with an unarmed strike.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'attack' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-off-hand-attack',
    name: { en: 'Off-Hand Attack' },
    description: { en: 'If you are wielding a separate light weapon in your off-hand, you may use this action to make a single attack with it. You do not add your ability score modifier to this attack\'s damage roll.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'attack' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'weapon-roll', equipSlotId: 'off-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-shove',
    name: { en: 'Shove' },
    description: { en: 'You attempt to push a creature within your reach. Make a contested Athletics (Strength) check against the target\'s choice of their Athletics (Strength) or Agility Save. On a success, you can either push the target 2m away or knock them Prone.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'utility', 'control' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-guard',
    name: { en: 'Guard' },
    description: { en: 'You focus entirely on defense. Until the start of your next turn, any attack roll made against you has Disadvantage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'defense' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-sprint',
    name: { en: 'Sprint' },
    description: { en: 'You gain additional movement for the current turn equal to your Movement Speed.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'movement' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-hide',
    name: { en: 'Hide' },
    description: { en: 'You attempt to conceal yourself. You must have sufficient cover or be heavily obscured. Make a Stealth (Agility) check, which is contested by the Perception (Sense) check of any creature actively searching for you.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'utility', 'stealth' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-help',
    name: { en: 'Help' },
    description: { en: 'You aid a nearby ally. Choose an ally within 2m. The next skill check they make before your next turn is made with Advantage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'utility', 'support' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-stabilize',
    name: { en: 'Stabilize' },
    description: { en: 'You provide emergency first aid to an unconscious ally within your reach who is at 0 HP. Make an Endurance (Strength) check with a DC of 10. On a success, the ally becomes Stable.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'utility', 'healing' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-common-channel',
    name: { en: 'Channel' },
    description: { en: 'You focus your will to restore your inner energy. You regain Fractal Points (FP) equal to your highest Command Proficiency Level (minimum 1).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'common',
    tags: [ 'resource' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'cooldown', value: 3 },
            { 
              type: 'restore', 
              attributeId: 'fractal-points',
              baseValue: {
                type: 'ref',
                ref: 'proficiency-level',
                id: 'command-highest'
              },
              formula: 'max(1, refValue)'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-armor-breaker',
    name: { en: 'Armor Breaker' },
    description: { en: 'Make a single Light Hammer attack. This attack has the Sunder 2 feature.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'light-hammer' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'sunder', value: 2 },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-flurry',
    name: { en: 'Flurry' },
    description: { en: 'You make two Shortsword strikes against the same target. Both attacks are made with a -2 penalty to the roll.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'shortsword' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'double-attack' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-armor-piercing-bolt',
    name: { en: 'Armor-Piercing Bolt' },
    description: { en: 'Make a single Heavy Crossbow attack. This attack has the Sunder 4 feature.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'heavy-crossbow' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'sunder', value: 4 },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-set-against-charge',
    name: { en: 'Set Against Charge' },
    description: { en: 'When an enemy moves at least 4m towards you to make a melee attack, you can use your Reaction to attack it before its attack resolves. If your attack hits, it deals one extra die of weapon damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'spear', 'glaive' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'reaction' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-phalanx-stance',
    name: { en: 'Phalanx Stance' },
    description: { en: 'You adopt this stance. As long as you are adjacent to an ally wielding a shield, you gain Block 2.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'stance', 'spear' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'stance' },
            { type: 'block', value: 2 }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-take-aim',
    name: { en: 'Take Aim' },
    description: { en: 'Make a single Pistol attack. This carefully aimed shot ignores range penalties and deals one extra die of its weapon damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'pistol' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-point-blank-shot',
    name: { en: 'Point-Blank Shot' },
    description: { en: 'Make a Pistol attack against an adjacent target. This attack is made with Advantage, and if it hits, it is automatically considered a Critical Pass.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'pistol' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-warning-shot',
    name: { en: 'Warning Shot' },
    description: { en: 'Choose one creature within 10m who can see and hear you. They must make a Presence Save. On a failure, they have Disadvantage on the next attack roll they make before the end of their next turn.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'utility', 'control', 'pistol' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'target', range: 10, numberOfTargets: 1 }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-quick-shot-pistol',
    name: { en: 'Quick Shot' },
    description: { en: 'Make a single Pistol attack with Disadvantage. This allows you to attack without it being a Full action.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'pistol' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-burst-fire',
    name: { en: 'Burst Fire' },
    description: { en: 'Make a single attack roll with a -2 penalty. If the attack hits, you roll the weapon\'s damage dice twice and add the results together.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-suppressing-fire',
    name: { en: 'Suppressing Fire' },
    description: { en: 'Choose a 3m-wide area within your rifle\'s range. Until your next turn, any enemy that starts its turn in that area or enters it must make a Presence Save. On a failure, they are pinned down and can only take one Standard action on their turn.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'control', 'area', 'rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-covering-fire',
    name: { en: 'Covering Fire' },
    description: { en: 'When an ally moves within your line of sight, you can use your Reaction to fire near an enemy that could make an Opportunity Attack against your ally, preventing them from doing so.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'utility', 'support', 'rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'reaction' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-tactical-reload',
    name: { en: 'Tactical Reload' },
    description: { en: 'You reload your rifle. The first attack you make after this reload gains Aim 2.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'utility', 'rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'aim', value: 2 }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-headshot',
    name: { en: 'Headshot' },
    description: { en: 'You make a single Sniper Rifle attack with Disadvantage. If the attack hits, it gains the Precise feature.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'sniper-rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'precise' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-take-position',
    name: { en: 'Take Position' },
    description: { en: 'You do not attack this turn. Instead, if you do not move from your current position, your first attack on your next turn gains the True Strike feature.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'utility', 'sniper-rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'true-strike' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-overwatch',
    name: { en: 'Overwatch' },
    description: { en: 'Choose a specific area you can see (like a doorway or hallway). The first enemy to enter or move within that area triggers your Reaction, allowing you to immediately make a single Sniper Rifle attack against them.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'control', 'sniper-rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'reaction' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-combat-penetrating-shot',
    name: { en: 'Penetrating Shot' },
    description: { en: 'Make a single attack roll in a straight line. The shot ignores partial cover and hits the first target in its path. You may then apply the same attack roll to a second target directly behind the first, which takes half damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'attack', 'area', 'sniper-rifle' ],
    levelConfigs: {
      1: [
        {
          keywords: [
            { type: 'full' },
            { type: 'weapon-roll', equipSlotId: 'main-hand' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-armor-disrupting-recovery',
    name: { en: 'Disrupting Recovery' },
    description: { en: 'When you are hit by a melee attack from an adjacent enemy, you can use your Reaction after the damage is dealt. The attacking creature has Disadvantage on any other attacks it makes this turn.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'light-armor' ],
    levelConfigs: {
      2: [
        {
          keywords: [
            { type: 'reaction' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-armor-absorb-momentum',
    name: { en: 'Absorb Momentum' },
    description: { en: 'When you are hit by a melee attack that would force you to move or knock you Prone, you can use your Reaction to negate that push or prone effect. You still take the attack\'s damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'medium-armor' ],
    levelConfigs: {
      2: [
        {
          keywords: [
            { type: 'reaction' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-armor-set-core',
    name: { en: 'Set Core' },
    description: { en: 'You adopt an unbreakable defensive stance. Until the start of your next turn, you cannot be forcibly moved from your position by any means.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'heavy-armor' ],
    levelConfigs: {
      2: [
        {
          keywords: [
            { type: 'standard' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-shield-parry-and-shove',
    name: { en: 'Parry and Shove' },
    description: { en: 'When an adjacent enemy misses you with a melee attack, you can use your Reaction to immediately perform the Shove common action against that enemy.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'utility', 'light-shield' ],
    levelConfigs: {
      2: [
        {
          keywords: [
            { type: 'reaction' }
          ]
        }
      ]
    }
  },
  {
    id: 'action-shield-shield-wall',
    name: { en: 'Shield Wall' },
    description: { en: 'You raise your shield to protect yourself and a comrade. Choose one adjacent ally. Until the start of your next turn, both you and that ally gain Block 1.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'support', 'medium-shield' ],
    levelConfigs: {
      2: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'block', value: 1 }
          ]
        }
      ]
    }
  },
  {
    id: 'action-shield-set-shield',
    name: { en: 'Set Shield' },
    description: { en: 'You plant your massive shield firmly on the ground. Until you use a Free action at the start of your turn to lift it, your Movement Speed becomes 0, but you gain Block 2 and are treated as being in half-cover.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'combat',
    tags: [ 'defense', 'heavy-shield' ],
    levelConfigs: {
      2: [
        {
          keywords: [
            { type: 'standard' },
            { type: 'block', value: 2 }
          ]
        }
      ]
    }
  },
  {
    id: 'action-command-fractal-javelin',
    name: { en: 'Fractal Javelin' },
    description: { en: 'Make a Command Attack Roll against a target within 15m. On a hit, they take 1d10 force damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'attack' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '1d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-conjure-shield',
    name: { en: 'Conjure Shield' },
    description: { en: 'When targeted by an attack, use your Reaction to gain Block 3 against that single attack.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'defense' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'reaction' },
          { type: 'block', value: 3 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-dancing-lights',
    name: { en: 'Dancing Lights' },
    description: { en: 'You create up to four torch-sized motes of magical light within 10m. You can move them freely. They last for 10 minutes.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-minor-ward',
    name: { en: 'Minor Ward' },
    description: { en: 'You touch a willing creature. The first time they take damage within the next minute, that damage is reduced by 1d8.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'defense' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-conjure-snare',
    name: { en: 'Conjure Snare' },
    description: { en: 'You create an invisible magical tripwire in a 1m space on the ground for 1 minute. The first creature to step there must make an Agility Save or become Prone. The snare then dissipates.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'control', 'trap' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'condition', conditionId: 'condition-prone' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mending',
    name: { en: 'Mending' },
    description: { en: 'You touch a single simple break or tear in an object, magically repairing it. This cannot restore magic to an item.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'standard' },
          { type: 'repair', numberOfItems: 1, baseValue: { type: 'full' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-summoned-blade',
    name: { en: 'Summoned Blade' },
    description: { en: 'You create a floating, spectral weapon within 10m that lasts for 1 minute (Concentration). When you cast this, and as a Standard action on subsequent turns, you can make a melee Command Attack against a creature within 2m of it, dealing 2d8 force damage on a hit.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'summoning', 'attack' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '2d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-resonant-barrier',
    name: { en: 'Resonant Barrier' },
    description: { en: 'You create a flat, transparent wall of shimmering force up to 10m long and 3m high for 1 minute (Concentration). The wall provides half-cover. Any creature that willingly passes through the wall takes 1d10 force damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'control', 'area' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-crystalline-prison',
    name: { en: 'Crystalline Prison' },
    description: { en: 'A creature within 15m must make an Agility Save or become Restrained by a cage of magical crystal. The crystal has 30 HP and can be destroyed. Lasts 1 minute (Concentration).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'control' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'condition', conditionId: 'condition-restrained' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-force-ram',
    name: { en: 'Force Ram' },
    description: { en: 'Make a Command Attack Roll against a target within 10m. On a hit, they take 3d8 force damage and must succeed on a Strength Save or be knocked Prone.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'attack', 'control' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '3d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-spectral-armor',
    name: { en: 'Spectral Armor' },
    description: { en: 'You touch a willing creature not wearing armor. A suit of translucent armor forms around them, making their base AC 14 for 1 hour.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'defense', 'buff' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-create-object',
    name: { en: 'Create Object' },
    description: { en: 'After 1 minute of concentration, you conjure a permanent, non-magical object of simple material (wood, stone, etc.) that fits within a 1m cube.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'utility' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'concentration', duration: 60 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-cloud-of-daggers',
    name: { en: 'Cloud of Daggers' },
    description: { en: 'You create a swirling 2m-radius sphere of magical daggers at a point within 15m for 1 minute (Concentration). Any creature that enters or starts its turn in the sphere takes 4d6 slashing damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'area', 'damage' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'radius', radius: 2, range: 15, numberOfTargets: 99 },
          { type: 'damage', damageTypeId: 'slashing', baseValue: { type: 'dice', formula: '4d6' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-animate-object',
    name: { en: 'Animate Object' },
    description: { en: 'You touch a Medium or smaller non-magical object and bring it to life for 1 minute (Concentration). It obeys your commands and has simple stats.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'summoning' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-wall-of-iron',
    name: { en: 'Wall of Iron' },
    description: { en: 'You create a permanent, non-magical wall of iron up to 15m long and 5m high. Each 3m section has a high AC and HP total.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'creation', 'control', 'area' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-fire-bolt',
    name: { en: 'Fire Bolt' },
    description: { en: 'Make a Command Attack Roll against a target within 15m. On a hit, they take 1d12 fire damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'fire', 'attack' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'fire', baseValue: { type: 'dice', formula: '1d12' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-ray-of-frost',
    name: { en: 'Ray of Frost' },
    description: { en: 'Make a Command Attack Roll against a target within 10m. On a hit, they take 1d8 cold damage and become Slowed for one round.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'cold', 'attack', 'control' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'cold', baseValue: { type: 'dice', formula: '1d8' } },
          { type: 'condition', conditionId: 'condition-slowed', durationFormula: '1 round' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-stone-fist',
    name: { en: 'Stone Fist' },
    description: { en: 'Make a melee Command Attack Roll. On a hit, the target takes 1d12 bludgeoning damage and is pushed 1m.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'earth', 'attack', 'control' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'bludgeoning', baseValue: { type: 'dice', formula: '1d12' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-armor-of-earth',
    name: { en: 'Armor of Earth' },
    description: { en: 'You gain Block 2 for 10 minutes. This does not stack with worn Medium or Heavy Armor.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'earth', 'defense' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'block', value: 2 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-gust',
    name: { en: 'Gust' },
    description: { en: 'A target within 10m must make a Strength Save or be pushed 2m.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'air', 'control' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'strength' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-scorching-ray',
    name: { en: 'Scorching Ray' },
    description: { en: 'Create two rays of fire. Make a separate Command Attack Roll for each. Each ray that hits deals 1d10 fire damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'fire', 'attack' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 15, numberOfTargets: 2 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'fire', baseValue: { type: 'dice', formula: '1d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-earth-tremor',
    name: { en: 'Earth Tremor' },
    description: { en: 'Creatures in a 3m radius must make an Agility Save. On a failure, they take 2d8 bludgeoning damage and become Prone.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'earth', 'area', 'damage', 'control' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'radius', radius: 3, range: 0, numberOfTargets: 99 },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'damage', damageTypeId: 'bludgeoning', baseValue: { type: 'dice', formula: '2d8' } },
          { type: 'condition', conditionId: 'condition-prone' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-flaming-sphere',
    name: { en: 'Flaming Sphere' },
    description: { en: 'Summon a sphere of fire for 1 minute (Concentration). Creatures ending their turn adjacent to it take 2d6 fire damage. You can move it as a Standard action.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'fire', 'summoning', 'area', 'damage' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'damage', damageTypeId: 'fire', baseValue: { type: 'dice', formula: '2d6' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-wall-of-water',
    name: { en: 'Wall of Water' },
    description: { en: 'Create a 10m-long wall of water for 1 minute. It provides half-cover, and ranged attacks through it have Disadvantage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'water', 'control', 'area' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-ride-the-wind',
    name: { en: 'Ride the Wind' },
    description: { en: 'You gain a flying speed equal to your Movement Speed for 10 minutes.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'air', 'utility', 'movement' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-fireball',
    name: { en: 'Fireball' },
    description: { en: 'Creatures in a 5m-radius explosion must make an Agility Save, taking 4d6 fire damage on a failed save, or half on a success.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'fire', 'area', 'damage' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'radius', radius: 5, range: 30, numberOfTargets: 99 },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'damage', damageTypeId: 'fire', baseValue: { type: 'dice', formula: '4d6' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-lightning-bolt',
    name: { en: 'Lightning Bolt' },
    description: { en: 'Creatures in a 20m long line must make an Agility Save, taking 4d8 lightning damage on a failed save, or half on a success.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'lightning', 'area', 'damage' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'damage', damageTypeId: 'lightning', baseValue: { type: 'dice', formula: '4d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-stoneskin',
    name: { en: 'Stoneskin' },
    description: { en: 'You touch a willing creature. For 10 minutes, they gain Tough 5.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'earth', 'defense', 'buff' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'tough', value: 5 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-elemental-form',
    name: { en: 'Elemental Form' },
    description: { en: 'You transform into a Fire, Earth, or Air elemental for 1 minute (Concentration), gaining resistances and special movement.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'elemental', 'utility', 'polymorph' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mental-jolt',
    name: { en: 'Mental Jolt' },
    description: { en: 'A target within 10m must make a Presence Save. On a failure, they take 1d10 psychic damage and cannot take a Reaction until your next turn.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'psychic', 'damage', 'control' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'damage', damageTypeId: 'psychic', baseValue: { type: 'dice', formula: '1d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-suggestive-word',
    name: { en: 'Suggestive Word' },
    description: { en: '(Non-combat only) You speak a single word. A target must make a Presence Save or follow the non-harmful imperative.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'control', 'social' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'saving-throw', savingThrowType: 'presence' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-sensory-glitch',
    name: { en: 'Sensory Glitch' },
    description: { en: 'A target within 10m must make a Presence Save or have Disadvantage on their next attack roll or Perception check.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'control', 'debuff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-truth-snare',
    name: { en: 'Truth Snare' },
    description: { en: 'For 1 minute, you have Advantage on Insight (Sense) checks to detect lies. Usage: Once per Short Downtime.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'utility', 'social' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'usage', numberOfUsages: 1, phase: 'short-downtime' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mind-spike',
    name: { en: 'Mind Spike' },
    description: { en: 'A target within 15m must make a Presence Save. On a failure, they take 2d10 psychic damage and have Disadvantage on their next attack roll.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'psychic', 'damage', 'debuff' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'damage', damageTypeId: 'psychic', baseValue: { type: 'dice', formula: '2d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-cognitive-drain',
    name: { en: 'Cognitive Drain' },
    description: { en: 'A target within 15m must make an Intelligence Save. On a failure, they lose 1d4 FP and have a -2 penalty to their Command DC for 1 minute.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'control', 'debuff' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'intelligence' },
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'dice', formula: '1d4' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-suggestion',
    name: { en: 'Suggestion' },
    description: { en: 'You issue a reasonable course of action to a creature within 10m. If they fail a Presence Save, they must use their next turn to pursue that course of action.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'control', 'social' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mental-barrier',
    name: { en: 'Mental Barrier' },
    description: { en: 'When you or an ally within 5m must make a Sense or Presence save, you grant them a +3 bonus to that roll.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'defense', 'buff' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'reaction' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-dominate-mind',
    name: { en: 'Dominate Mind' },
    description: { en: 'A target within 15m must make a Presence Save. On a failure, you control their next turn completely.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'control' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-psychic-blast',
    name: { en: 'Psychic Blast' },
    description: { en: 'Creatures in a 6m cone must make a Presence Save or take 4d6 psychic damage (half on success).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'psychic', 'area', 'damage' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'cone', radius: 6, range: 6, numberOfTargets: 99 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'damage', damageTypeId: 'psychic', baseValue: { type: 'dice', formula: '4d6' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mind-cage',
    name: { en: 'Mind Cage' },
    description: { en: 'A target within 15m must make a Presence Save or become Incapacitated for 1 minute (Concentration). The effect ends if they take damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'control' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'condition', conditionId: 'condition-incapacitated' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-shared-sight',
    name: { en: 'Shared Sight' },
    description: { en: 'For 10 minutes, you can use your action to see and hear through a willing ally\'s senses via a telepathic link.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'intervention', 'utility', 'social' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-healing-word',
    name: { en: 'Healing Word' },
    description: { en: 'A creature within 10m regains 1d8 Hit Points.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'healing' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'standard' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'restore', attributeId: 'hit-points', baseValue: { type: 'dice', formula: '1d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-radiant-lance',
    name: { en: 'Radiant Lance' },
    description: { en: 'Make a Command Attack Roll. On a hit, target takes 1d8 radiant damage and cannot become Invisible for 1 round.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'radiant', 'attack', 'debuff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'radiant', baseValue: { type: 'dice', formula: '1d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-light',
    name: { en: 'Light' },
    description: { en: 'You touch an object and cause it to glow like a torch for 1 hour.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'standard' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-shield-of-faith',
    name: { en: 'Shield of Faith' },
    description: { en: 'You touch a willing creature. They gain Block 2 for 10 minutes (Concentration).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'defense', 'buff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'concentration', duration: 600 },
          { type: 'block', value: 2 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-bless',
    name: { en: 'Bless' },
    description: { en: 'Touch up to two allies. For 1 minute (Concentration), they gain a +1 bonus to their attack rolls and saving throws.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'buff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-purify',
    name: { en: 'Purify' },
    description: { en: 'You touch a creature and end one minor disease or Poisoned condition. Usage: Once per Short Downtime.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'healing', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'usage', numberOfUsages: 1, phase: 'short-downtime' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-cure-wounds',
    name: { en: 'Cure Wounds' },
    description: { en: 'You touch a creature. They regain 3d8 Hit Points.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'healing' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 2, numberOfTargets: 1 },
          { type: 'restore', attributeId: 'hit-points', baseValue: { type: 'dice', formula: '3d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-spiritual-weapon',
    name: { en: 'Spiritual Weapon' },
    description: { en: 'Create a floating, spectral weapon for 1 minute (Concentration). When cast, and as a Standard action on later turns, make a melee Command Attack dealing 2d8 radiant damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'summoning', 'attack' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'radiant', baseValue: { type: 'dice', formula: '2d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-aura-of-protection',
    name: { en: 'Aura of Protection' },
    description: { en: 'For 10 minutes, you and all allies within 3m of you gain a +1 bonus to all Saving Checks.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'defense', 'buff', 'area' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-lesser-restoration',
    name: { en: 'Lesser Restoration' },
    description: { en: 'Touch a creature and end one of the following conditions: Blinded, Deafened, or Paralyzed. Usage: Once per Full Downtime.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'healing', 'utility' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'usage', numberOfUsages: 1, phase: 'full-downtime' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-daylight',
    name: { en: 'Daylight' },
    description: { en: 'Create a 15m-radius sphere of bright light that dispels magical darkness for 1 hour.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'utility', 'area' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'radius', radius: 15, range: 15, numberOfTargets: 99 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-radiant-shield',
    name: { en: 'Radiant Shield' },
    description: { en: 'When you or an ally within 10m is hit by an attack, reduce the damage by 2d10.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'defense' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'reaction' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mass-healing-word',
    name: { en: 'Mass Healing Word' },
    description: { en: 'Choose up to four creatures within 15m. Each target regains 1d8 + your Sense modifier Hit Points.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'healing', 'area' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'standard' },
          { type: 'target', range: 15, numberOfTargets: 4 },
          { type: 'restore', attributeId: 'hit-points', baseValue: { type: 'dice', formula: '1d8' }, formula: 'baseValue + senseMod' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-revitalize',
    name: { en: 'Revitalize' },
    description: { en: 'Touch a creature. They regain 4d10 Hit Points, and you end one major curse affecting them.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'healing', 'utility' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'target', range: 2, numberOfTargets: 1 },
          { type: 'restore', attributeId: 'hit-points', baseValue: { type: 'dice', formula: '4d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-blinding-flash',
    name: { en: 'Blinding Flash' },
    description: { en: 'All other creatures within a 6m radius must make a Sense Save or become Blinded for 1 minute (save ends).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'control', 'area', 'debuff' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'radius', radius: 6, range: 0, numberOfTargets: 99 },
          { type: 'saving-throw', savingThrowType: 'sense' },
          { type: 'condition', conditionId: 'condition-blinded', durationFormula: '1 minute (save ends)' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-spirit-guardians',
    name: { en: 'Spirit Guardians' },
    description: { en: 'For 10 minutes (Concentration), hostile creatures that enter or start their turn within 4m of you take 3d8 radiant damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'radiant', 'damage', 'area' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 600 },
          { type: 'radius', radius: 4, range: 0, numberOfTargets: 99 },
          { type: 'damage', damageTypeId: 'radiant', baseValue: { type: 'dice', formula: '3d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-beacon-of-resilience',
    name: { en: 'Beacon of Resilience' },
    description: { en: 'For 1 minute (Concentration), you and all allies within 5m gain 10 Temporary HP.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'defense', 'buff', 'area' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-sunbeam',
    name: { en: 'Sunbeam' },
    description: { en: 'Creatures in a 15m line must make an Agility Save, taking 4d8 radiant damage on a failed save (half on success), and become Blinded for 1 round.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'luminous', 'radiant', 'damage', 'area', 'debuff' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'damage', damageTypeId: 'radiant', baseValue: { type: 'dice', formula: '4d8' } },
          { type: 'condition', conditionId: 'condition-blinded', durationFormula: '1 round' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-force-push-pull',
    name: { en: 'Force Push/Pull' },
    description: { en: 'A creature within 10m must make a Strength Save or be moved 3m.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'control' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'strength' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-kinetic-lance',
    name: { en: 'Kinetic Lance' },
    description: { en: 'Make a Command Attack Roll. On a hit, target takes 1d10 force damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'attack', 'force' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '1d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mage-hand',
    name: { en: 'Mage Hand' },
    description: { en: 'Create a spectral hand within 10m for 1 minute to manipulate small objects.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'standard' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-kinetic-anchor',
    name: { en: 'Kinetic Anchor' },
    description: { en: 'When an ally within 10m is pushed or knocked Prone, you cancel that effect.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'defense', 'buff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'reaction' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-phase-step',
    name: { en: 'Phase Step' },
    description: { en: 'You teleport up to 5m to an unoccupied space you can see.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'movement', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-energy-lash',
    name: { en: 'Energy Lash' },
    description: { en: 'Make a melee Command Attack Roll with 5m reach. On a hit, target takes 2d10 force damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'attack', 'force' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '2d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-hurl-object',
    name: { en: 'Hurl Object' },
    description: { en: 'Hurl a nearby unsecured object at a target. Make a Command Attack Roll. On a hit, 3d8 bludgeoning damage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'attack', 'bludgeoning' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'bludgeoning', baseValue: { type: 'dice', formula: '3d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-hold-person',
    name: { en: 'Hold Person' },
    description: { en: 'A target within 15m must make a Strength Save or become Paralyzed for 1 minute (Concentration, save ends).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'control' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'strength' },
          { type: 'condition', conditionId: 'condition-paralyzed', durationFormula: '1 minute (save ends)' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-spider-climb',
    name: { en: 'Spider Climb' },
    description: { en: 'You touch a willing creature. For 1 hour, they can climb on any surface, leaving their hands free.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'utility', 'movement' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-kinetic-shield',
    name: { en: 'Kinetic Shield' },
    description: { en: 'When you or an ally within 10m is hit by a ranged attack, reduce the damage by 2d10.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'defense' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'reaction' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-telekinetic-wave',
    name: { en: 'Telekinetic Wave' },
    description: { en: 'Creatures in a 10m cone must make a Strength Save or take 3d8 force damage, be pushed 5m, and knocked Prone.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'area', 'damage', 'control', 'force' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'cone', radius: 10, range: 10, numberOfTargets: 99 },
          { type: 'saving-throw', savingThrowType: 'strength' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '3d8' } },
          { type: 'condition', conditionId: 'condition-prone' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-mass-hold',
    name: { en: 'Mass Hold' },
    description: { en: 'Choose up to three creatures. Each must make a Strength Save or become Paralyzed for 1 minute (Concentration, save ends).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'control', 'area' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'target', range: 15, numberOfTargets: 3 },
          { type: 'saving-throw', savingThrowType: 'strength' },
          { type: 'condition', conditionId: 'condition-paralyzed', durationFormula: '1 minute (save ends)' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-reverse-gravity',
    name: { en: 'Reverse Gravity' },
    description: { en: 'You reverse gravity in a 10m-radius cylinder for 1 round. Unsecured creatures and objects fall upwards.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'control', 'area' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'radius', radius: 10, range: 20, numberOfTargets: 99 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-fly',
    name: { en: 'Fly' },
    description: { en: 'You touch a willing creature. For 10 minutes (Concentration), they gain a flying speed equal to their Movement Speed.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'utility', 'movement', 'buff' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 600 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-phase-shift',
    name: { en: 'Phase Shift' },
    description: { en: 'You and one willing ally you can see within 10m instantly swap places.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'manipulation', 'movement', 'utility' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-void-bolt',
    name: { en: 'Void Bolt' },
    description: { en: 'Make a Command Attack Roll. On a hit, target takes 1d10 void damage. This damage ignores Temporary HP.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'attack', 'damage' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'void', baseValue: { type: 'dice', formula: '1d10' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-null-pulse',
    name: { en: 'Null Pulse' },
    description: { en: 'A target within 10m must make a Presence Save. On a failure, they lose 1d4 FP. If they have no FP, they have Disadvantage on their next Command action.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'control', 'debuff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'dice', formula: '1d4' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-fracture',
    name: { en: 'Fracture' },
    description: { en: 'Target a non-magical object or construct. It takes 1d12 force damage that has the True Strike feature.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'damage' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'true-strike' },
          { type: 'damage', damageTypeId: 'force', baseValue: { type: 'dice', formula: '1d12' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-shadows-grasp',
    name: { en: 'Shadow\'s Grasp' },
    description: { en: 'A target within 10m must make an Agility Save or become Slowed and unable to take Reactions for 1 round.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'control', 'debuff' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'agility' },
          { type: 'condition', conditionId: 'condition-slowed', durationFormula: '1 round' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-sense-vitality',
    name: { en: 'Sense Vitality' },
    description: { en: 'For 1 minute, you can sense if creatures are uninjured, wounded, or near death. Usage: Once per Short Downtime.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'utility' ],
    levelConfigs: {
      1: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } },
          { type: 'full' },
          { type: 'usage', numberOfUsages: 1, phase: 'short-downtime' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-enervating-blast',
    name: { en: 'Enervating Blast' },
    description: { en: 'Make a Command Attack Roll. On a hit, target takes 2d8 void damage and cannot regain Hit Points for 1 round.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'attack', 'damage', 'debuff' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'void', baseValue: { type: 'dice', formula: '2d8' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-energy-drain',
    name: { en: 'Energy Drain' },
    description: { en: 'A target within 10m must make a Presence Save. On a failure, they lose 2 FP, and you regain 1 FP.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'control', 'resource' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'target', range: 10, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'restore', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 1 } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-void-shackles',
    name: { en: 'Void Shackles' },
    description: { en: 'A target within 15m must make a Strength Save or become Restrained by bands of shadow for 1 minute (Concentration, save ends).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'control' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'strength' },
          { type: 'condition', conditionId: 'condition-restrained', durationFormula: '1 minute (save ends)' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-silence',
    name: { en: 'Silence' },
    description: { en: 'Create a 5m-radius sphere of magical silence for 10 minutes (Concentration). No sound can pass through it and verbal Commands cannot be cast inside it.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'control', 'area' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 600 },
          { type: 'radius', radius: 5, range: 15, numberOfTargets: 99 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-corrupt-armor',
    name: { en: 'Corrupt Armor' },
    description: { en: 'Target a creature\'s armor or shield. They must make a Technique Save. On a failure, the item provides a -2 penalty to AC for 1 minute (Concentration).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'debuff' ],
    levelConfigs: {
      2: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 2 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'saving-throw', savingThrowType: 'technique' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-life-drain',
    name: { en: 'Life Drain' },
    description: { en: 'Make a Command Attack Roll. On a hit, target takes 3d10 void damage, and you regain HP equal to half the damage dealt.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'attack', 'damage', 'healing' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'command-roll', commandId: 'command-attack' },
          { type: 'damage', damageTypeId: 'void', baseValue: { type: 'dice', formula: '3d10' } },
          { type: 'restore', attributeId: 'hit-points', baseValue: { type: 'half' }, formula: 'damageDealt' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-annihilation-pulse',
    name: { en: 'Annihilation Pulse' },
    description: { en: 'Creatures in a 6m radius must make a Strength Save, taking 4d6 void damage on a failed save (half on success).' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'area', 'damage' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'radius', radius: 6, range: 0, numberOfTargets: 99 },
          { type: 'saving-throw', savingThrowType: 'strength' },
          { type: 'damage', damageTypeId: 'void', baseValue: { type: 'dice', formula: '4d6' } }
        ]
      } ]
    }
  },
  {
    id: 'action-command-null-field',
    name: { en: 'Null Field' },
    description: { en: 'For 1 minute (Concentration), create a 5m-radius field where all Commands cost +1 FP to cast and concentration checks are made with Disadvantage.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'area', 'control' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'radius', radius: 5, range: 15, numberOfTargets: 99 }
        ]
      } ]
    }
  },
  {
    id: 'action-command-void-step',
    name: { en: 'Void Step' },
    description: { en: 'You teleport up to 15m, passing through any solid objects or barriers.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'movement', 'utility' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' }
        ]
      } ]
    }
  },
  {
    id: 'action-command-temporal-stasis',
    name: { en: 'Temporal Stasis' },
    description: { en: 'A target within 15m must make a Presence Save. On a failure, they are trapped in a bubble of frozen time for 1 minute (Concentration). While trapped, they are Incapacitated and immune to all damage and effects.' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    type: 'command',
    tags: [ 'void', 'control' ],
    levelConfigs: {
      3: [ {
        keywords: [
          { type: 'reduce', attributeId: 'fractal-points', baseValue: { type: 'fixed', value: 3 } },
          { type: 'full' },
          { type: 'concentration', duration: 60 },
          { type: 'target', range: 15, numberOfTargets: 1 },
          { type: 'saving-throw', savingThrowType: 'presence' },
          { type: 'condition', conditionId: 'condition-incapacitated' }
        ]
      } ]
    }
  }
];