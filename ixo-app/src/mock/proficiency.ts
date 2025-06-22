// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockProficiency = [
  {
    id: 'longsword',
    name: {
      en: 'Longsword',
      th: ''
    },
    description: {
      en: '',
      th: ''
    },
    tags: [ 'weapon', 'longsword' ],
    level: {
      1: {
        gains: [
          {
            type: 'skill', // one of ['skill', 'action']. 'skill' mean acquire skill when proficiency level reach. 'action' mean acquire action when proficiency level reach.
            id: 'longsword-proficiency-1' // if type is action, id must be action id. if type is condition, id must be condition id. 
          }
        ]
      }
    }
  }
];