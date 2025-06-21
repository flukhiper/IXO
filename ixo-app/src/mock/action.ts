// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockAttack = [
  {
    id: 'help',
    name: {
      en: 'Help',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'help' ], 
    type: 'common', // one of ['common', 'attack', 'support', 'debuff', 'summon']. common mean non-combat action like jump, stealth, help. attack mean combat action that infict damage to enermy like attack, sneak attack, swing attack, throw. support mean combat action that give a possitive effect like blessing, heal. debuff mean combat action that give a negative effect like sleep, fog. 'summon' mean combat action that add entity to in-game with condtion how long that entity exist in-game.
    level: { // action have level that allow the in-game that player can decide which level to use if there are more than 1 level
      1: {
        costs: [
          {
            attribute: 'action-point', // attribute id of attribute type expendable
            value: {
              type: 'fix',
              value: 1
            } // can be either FixValue or DiceValue
          }
        ],
        target: {
          type: 'single', // one of ['single', 'multiple', 'area', 'self']. single mean in-game must select one target (can include self). multiple mean in-game must select many target (can include self). area mean in-game must select point of area. self mean do action to self.
          range: {
            type: 'fix',
            value: 1
          }
        },
        hit: {
          type: 'always' // one of ['always', 'attack-roll', 'difficulty-class']. always mean always hit. attack-roll mean must roll attack-roll and surpass targe armor class. difficulty-class mean target must roll select saving and apply affect base on result.
        }
      }
    },
    attributes: [],  // attribute id that ref when using this action
    requirements: []
  }, {
    id: 'jump',
    name: {
      en: 'Jump',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'jump' ], 
    type: 'common',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          },
          {
            attribute: 'movement',
            value: {
              type: 'fix',
              value: 3
            }
          }
        ],
        target: {
          type: 'self'
        },
        hit: {
          type: 'always'
        }
      }
    },
    attributes: [ 'jump-distance' ],
    requirements: []
  }, {
    id: 'attack',
    name: {
      en: 'Attack',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'attack' ], 
    type: 'attack',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          }
        ],
        target: {
          type: 'single',
          range: {
            type: 'equipment',
            value: 'main-weapon' // one of ['main-weapon', 'secondary-weapon']. 'main-weapon' mean in-game use range value on weapon that equip at main-weapon position. 'secondary-weapon' same with 'main' but secondary-weapon position.
          } // either of FixValue, DiceValue, EquirmentValue.
        },
        hit: {
          type: 'attack-roll',
          value: {
            type: 'equipment',
            value: 'main-weapon'
          } // either of FixValue, DiceValue, EquirmentValue, AttributeValue.
        },
        damage: {
          type: 'main-weapon',  // one of ['main-weapon', 'secondary-weapon', 'damage-type-id']. 'main-weapon' mean in-game use range value on weapon that equip at main-weapon position. 'secondary-weapon' same with 'main' but secondary-weapon position. other than that must be damage type id.
          value: {
            type: 'equipment',
            value: 'main-weapon'
          } // either of FixValue, DiceValue, EquirmentValue.
        }
      }
    },
    attributes: [],
    requirements: []
  }, {
    id: 'unarmed-strike',
    name: {
      en: 'Unarmed Strike',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'unarmed', 'attack' ], 
    type: 'attack',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          }
        ],
        target: {
          type: 'single',
          range: {
            type: 'fix',
            value: 1.5
          }
        },
        hit: {
          type: 'attack-roll',
          value: {
            type: 'attribute',
            value: 'attack-roll' // attribute id of type attack-roll
          },
          modifierFormula: 'attr(melee-attack-modifier)' // modifier fomula string patter. in this case mean: + value of attribute id melee-attack-modifier.
        },
        damage: {
          type: 'bludgeoning',
          value: {
            type: 'fix',
            value: 1
          },
          modifierFormula: 'attr(melee-damage-modifier)'
        }
      }
    },
    attributes: [],
    requirements: []
  }, {
    id: 'sneak-attack-melee',
    name: {
      en: 'Sneak Attack (Melee)',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'sneak', 'attack' ], 
    type: 'attack',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          }
        ],
        target: {
          type: 'single',
          range: {
            type: 'equipment',
            value: 'main-weapon'
          }
        },
        hit: {
          type: 'attack-roll',
          value: {
            type: 'equipment',
            value: 'main-weapon'
          }
        },
        damage: {
          type: 'main-weapon', 
          value: {
            type: 'equipment',
            value: 'main-weapon'
          },
          modifierFormula: '1d6+attr(melee-damage-modifier)'
        }
      }
    },
    attributes: [],
    requirements: [ 'advantage' ] // advantage mean this action must have advantage on hit. there are two way to have an advantage in-game, first if hit is attribute base that attribute must advantage, second when use action force it to advantage.
  }, {
    id: 'fire-bolt',
    name: {
      en: 'Fire Bolt',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'fire', 'magic', 'attack' ], 
    type: 'attack',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          },
          {
            attribute: 'mana-point',
            value: {
              type: 'fix',
              value: 1
            }
          }
        ],
        target: {
          type: 'single',
          range: {
            type: 'fix',
            value: '18'
          }
        },
        hit: {
          type: 'attack-roll',
          value: {
            type: 'attribute',
            value: 'attack-roll'
          },
          modifierFormula: 'magic-attack-modifier'
        },
        damage: {
          type: 'fire', 
          value: {
            type: 'dice',
            value: '1d10'
          }
        }
      },
      2: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          },
          {
            attribute: 'mana-point',
            value: {
              type: 'fix',
              value: 2
            }
          }
        ],
        target: {
          type: 'single',
          range: {
            type: 'fix',
            value: '18'
          }
        },
        hit: {
          type: 'attack-roll',
          value: {
            type: 'attribute',
            value: 'attack-roll'
          },
          modifierFormula: 'magic-attack-modifier'
        },
        damage: {
          type: 'fire', 
          value: {
            type: 'dice',
            value: '2d10'
          }
        }
      }
    },
    attributes: [],
    requirements: []
  }, {
    id: 'guidance',
    name: {
      en: 'Guidance',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'magic', 'support' ], 
    type: 'support',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          },
          {
            attribute: 'mana-point',
            value: {
              type: 'fix',
              value: 1
            }
          }
        ],
        target: {
          type: 'single',
          range: {
            type: 'fix',
            value: '1.5'
          }
        },
        hit: {
          type: 'always'
        },
        condition: [
          {
            applyTo: 'target', // one of ['target','self]. target mean apply to all target base on target config and hit. self mean apply to self.
            conditionId: 'guidance', // condition id
            concentrateId: 'guidance-concentrate'  // condition id that will give it to self and if this condition disappear, the condition in conditionId field that applied also disappear. possible to this field is undefiled
          }
        ]// actually this field possible to be in action type attack if want that action to also give a condition.
      }
    },
    attributes: [],
    requirements: []
  }, {
    id: 'mage-hand',
    name: {
      en: 'Mage Hand',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'magic', 'summon' ], 
    type: 'summon',
    level: {
      1: {
        costs: [
          {
            attribute: 'action-point',
            value: {
              type: 'fix',
              value: 1
            }
          },
          {
            attribute: 'mana-point',
            value: {
              type: 'fix',
              value: 1
            }
          }
        ],
        target: {
          type: 'area',
          areaType: 'point', // one of ['radius', 'cube', 'cone', 'poin']. if 'radius', 'cube', 'cone' need to input a radius. 
          range: {
            type: 'fix',
            value: '18'
          }
        },
        hit: {
          type: 'always'
        },
        entity: 'mage-hand' // entity id (we don't discuss about entity config yet so leave it at that).
      }
    },
    attributes: [],
    requirements: []
  }
];
