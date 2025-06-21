// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockSkill = [
  {
    id: 'rage',
    name: {
      en: 'Rage',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'rage' ],
    stack: {
      id: 'rage',
      type: 'overwrite', // one of ['stack', 'ignore', 'overwrite']. 'stack' mean two skill with same stack.id can co-exist. 'ignore' mean skill with same stack.id cannot learned. 'overwrite' mean remove exist skill with stack.id before learn this skill.
      priority: 0 // used when type: 'overwrite'
    },
    requirement: [
      {
        type: 'path', // one of ['path', 'skill', 'attribute', 'stat', 'level', 'acquire']. 'path' mean skill avaiable to choose when select path id matched.  'skill' mean skill avaiable to choose when select skill id already acquire. 'attribute' mean skill avaiable to choose when attribute value match condition. 'stat' mean skill avaiable to choose when stat value match condition. 'level' mean skill avaiable to choose when level equal or more than setting value. 'acquire' mean skill acquirable when DM give to character in-game only.
        path: 'path-of-berserker' // path id
      }
    ],
    effects: [
      {
        type: 'modifier', // one of ['modifier', 'action', 'condition', 'proficiency']. 'modifier' mean give a modifier to select attribute or stat. 'action' mean action with matched id avaiable to use. 'condition' mean receive a condition with matched id. 'proficiency' mean a level of proficiency get a modifier.
        modifier: {
          type: 'modifier',
          attribute: 'rage-point', // can be undefinded if stat are modified by set field stat with stat id.
          formula: '2'
        }
      },
      {
        type: 'action',
        action: 'rage' // action id
      }
    ]
  }
];