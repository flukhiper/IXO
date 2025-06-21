const mockCondition = [ 
  {
    id: 'burning',
    name: 'Burning',
    description: '',
    tags: [ 'burning' ],
    stack: {
      id: 'BURNING', // using for check how to manage this condition with another condition with the same stackId
      type: 'overwrite', // can be one of ['stack', 'ignore', 'overwrite', 'additive']. stack mean those condition can co-exist. ignore mean cancel what come later. overwrite mean cancel exist condition with lower priority. extend duration of exist condition.
      priority: 0 // used when stackType overwrite
    },
    ticks: [ // if this field is empty array mean this condition cannot remove
      {
        type: 'start-turn', // using for decide when count or trick to end the condition. some effect using this to decide when to apply the effect. can be one of ['start-turn', 'end-turn', 'start-round', 'end-round', 'immediate', 'damage', 'tag', 'condition']. ***-turn mean apply or count each turn. ***-round mean apply or count each round of combat. immediate mean apply immediately. tag mean apply or count when something like action or recevie another condition that match a tag. condition mean condition end when condition met
        duration: 3
      }, {
        type: 'tag',
        source: 'condition',
        tags: [ 'wet', 'cold', 'potion' ]
      }, {
        type: 'tag',
        source: 'action',
        tags: [ 'help' ]
      }
    ],
    effects: [
      {
        type: 'damage', // using for define an effect. can be one of ['advantage', 'disadvantage', 'modifier', 'boost', 'weak', 'damage', 'resistence', 'action', 'disable', 'force', 'fusion']. advantage/disadvantage mean apply to advantage/disadvantage attribute that is DiceValue. modifier mean add modifier like "+ (2+attribute+stat/2)" to attribute. boost mean when do action that infict a damage, add a modifier to that action. weak mean when receive a damage, add a modifier to that damage. damage mean do a damage base on tick.type . resistence mean edit damage resistence to setting scale. action mean add a specific action that able to use. disable mean disable an action. force mean force to use an action. fusion mean if exist condition match, remove this codition and that matched condition then apply a new condition.
        damage: {
          type: 'fire',
          value: {
            type: 'dice',
            formular: '1d4'
          }
        }
      }
    ]
  }, {
    id: 'wet',
    name: 'Wet',
    description: '',
    tags: [ 'wet' ],
    stack: {
      id: 'wet', 
      type: 'overwrite',
      priority: 0
    },
    ticks: [
      {
        type: 'start-turn',
        duration: 3
      }, {
        type: 'tag',
        source: 'condition',
        tags: [ 'fire' ]
      }, {
        type: 'tag',
        source: 'action',
        tags: [ 'fire' ]
      }
    ],
    effects: [
      {
        type: 'resistence',
        damage: {
          types: [ 'cold', 'lighting' ], // DamageType id
          scale: 'vulnerable' // DamageScale id
        }
      },
      {
        type: 'resistence',
        damage: {
          types: [ 'fire' ],
          scale: 'resist'
        }
      }
    ]
  }, {
    id: 'frozen',
    name: 'Frozen',
    description: '',
    tags: [ 'cold' ],
    stack: {
      id: 'chilled', 
      type: 'overwrite',
      priority: 1
    },
    ticks: [
      {
        type: 'start-turn',
        duration: 1
      }, {
        type: 'damage',
        damageTypes: [ 'bludgeoning', 'thunder', 'force' ] // DamageType id
      }
    ],
    effects: [
      {
        type: 'resistence',
        damage: {
          types: [ 'bludgeoning', 'thunder', 'force' ],
          scale: 'vulnerable'
        }
      },
      {
        type: 'resistence',
        damage: {
          types: [ 'fire' ],
          scale: 'resist'
        }
      },
      {
        type: 'modifier',
        modifier: {
          attribute: 'action-point', // Attribute id
          formular: '-attr(action-point)' // mean attribute action-point + -attr(action-point) that result to 0
        }
      },
      {
        type: 'modifier',
        modifier: {
          attribute: 'movment',
          formular: '-attr(movment)'
        }
      }
    ]
  }, {
    id: 'chilled',
    name: 'Chilled',
    description: '',
    tags: [ 'cold' ],
    stack: {
      id: 'chilled', 
      type: 'overwrite',
      priority: 0
    },
    ticks: [
      {
        type: 'start-turn',
        saving: { // if ticks have this mean when count it possible to remove condition before duration if pass saving DC
          attribute: 'consititution-saving', // attribute id type saving
          difficultyClass: 13
        },
        duration: 1
      }, {
        type: 'damage',
        damageTypes: [ 'fire' ]
      }
    ],
    effects: [
      {
        type: 'resistence',
        damage: {
          types: [ 'cold', 'lighting' ],
          scale: 'vulnerable'
        }
      },
      {
        type: 'resistence',
        damage: {
          types: [ 'fire' ],
          scale: 'resist'
        }
      },
      {
        type: 'fusion',
        baseCondition: 'wet', // tag of exist condition
        resultCondition: 'frozen' // condition id
      }
    ]
  }, {
    id: 'heavily-encumbered',
    name: 'Heavily Encumbered',
    description: '',
    tags: [ 'encumbered' ],
    stack: {
      id: 'encumbered', 
      type: 'overwrite',
      priority: 1
    },
    ticks: [
      {
        type: 'condition',
        condition: { // it is ConditionValue
          type: 'condition',
          comparator: '<', // can be like <, >, =
          formular: '(attr(carrying-capacity) * 7)/100' // carrying-capacity is attribute id
        } 
      }
    ],
    effects: [
      {
        type: 'modifier',
        modifier: {
          attribute: 'movemet', // Attribute id
          formular: '-(attr(movemet)/ 2)' // mean attribute action-point + -attr(action-point) that result to 0
        }
      }, {
        type: 'disable',
        tags: [ 'jump', 'climb' ] // action tag
      }, {
        type: 'disadvantage',
        attributes: [ 'all-ability', 'strength-saving', 'dexterity-saving', 'consititution-saving' ] // Attribute id that have DiceValue. 'all-ability' is special value that mean affect all attribute with type 'ability'.
      }
    ]
  }, {
    id: 'guidance',
    name: 'Guidance',
    description: '',
    tags: [ 'guidance' ],
    stack: {
      id: 'blessing', 
      type: 'overwrite',
      priority: 0
    },
    ticks: [],
    effects: [
      {
        type: 'modifier',
        modifier: {
          type: 'modifier',
          attribute: 'all-ability', 
          formular: '1d4'
        }
      }
    ]
  }, {
    id: 'guidance-concentrate',
    name: 'Guidance (Concentrate)',
    description: '',
    tags: [ 'guidance', 'concentrate' ],
    stack: {
      id: 'concentrate', 
      type: 'overwrite',
      priority: 0
    },
    ticks: [
      {
        type: 'end-turn',
        duration: 10
      },
      {
        type: 'damage',
        damageTypes: [ 'all' ], // all mean ant type of damage is tick
        saving: {
          type: 'saving',
          attribute: 'consititution-saving',
          difficultyClass: 13
        }// possible undefined mean remove without saving check.
      }
    ]
  }
];