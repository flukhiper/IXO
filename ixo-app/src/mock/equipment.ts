// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockEquipment = { 
  weaponSet: { // number of set fo weapon that allow to set.
    type: 'fix',
    value: 2
  },
  armorSlots: [
    {
      id: 'body',
      name: {
        en: 'Body',
        th: ''
      },
      description: {
        en: '',
        th: ''
      },
      tags: [ 'clothwear' ], // tag of item type armor that allow to equip in this slot.
      layer: { // number of layer that allow to equip in this slot
        type: 'fix',
        value: 1
      } 
    }, {
      id: 'hand',
      name: {
        en: 'Hand',
        th: ''
      },
      description: {
        en: '',
        th: ''
      },
      tags: [ 'handwear' ],
      layer: { 
        type: 'fix',
        value: 1
      } 
    }, {
      id: 'foot',
      name: {
        en: 'Footwear',
        th: ''
      },
      description: {
        en: '',
        th: ''
      },
      tags: [ 'footwear' ],
      layer: { 
        type: 'fix',
        value: 1
      } 
    }, {
      id: 'head',
      name: {
        en: 'Head',
        th: ''
      },
      description: {
        en: '',
        th: ''
      },
      tags: [ 'headwear' ],
      layer: { 
        type: 'fix',
        value: 1
      } 
    }
  ],
  accessorySlots: [
    {
      id: 'all-body',
      name: {
        en: 'All Body',
        th: ''
      },
      description: {
        en: '',
        th: ''
      },
      tags: [ 'belt', 'ring', 'necklace' ], // tags of item type accessory that allow to equip in this slot.
      layer: { // number of layer that allow to equip in this slot
        type: 'infinite' // infinite mean can equip as many
      } 
    }
  ]
};