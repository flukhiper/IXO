// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockRace = [
  {
    id: 'human',
    name: {
      en: 'Human',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'human' ],
    gains: [
      {
        type: 'modifier', // one of ['skill', 'action', 'modifier']. 'skill' mean acquire skill when select this race. 'action' mean acquire action when select this race. 'modifier' mean add modifier when select this race.
        value: {
          type: 'modifier',
          attribute: 'size',
          formula: '1'
        }
      }
    ]
  }
];