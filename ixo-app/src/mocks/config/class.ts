import type { ClassConfig } from '@/types/config/class';
import { CLASS_ROLE_TYPE, CLASS_STAT_MODIFIER_OPTION } from '@/constants/config/class';

export const mockSupporterClasses: ClassConfig[] = [
  {
    id: 'class-conductor',
    name: { en: 'Conductor', th: 'นักปลุกใจ' },
    roles: [ CLASS_ROLE_TYPE.SUPPORT ],
    icon: 'conductor-icon.svg',
    thumbnail: 'conductor-thumbnail.jpg',
    tags: [ 'support', 'conductor' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    gain: {
      1: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              tiers: [ 1 ],
              classIds: [ 'class-conductor' ]
            },
            numberOfSelections: 1
          }
        ]
      },
      2: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              tiers: [ 1 ],
              roles: [ CLASS_ROLE_TYPE.SUPPORT ]
            },
            numberOfSelections: 1
          }
        ]
      },
      3: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              tiers: [ 1 ],
              isGeneral: true
            },
            numberOfSelections: 1
          }
        ]
      },
      4: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: CLASS_STAT_MODIFIER_OPTION.ALL,
          numberOfSelections: 1
        }
      },
      5: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              classIds: [ 'class-conductor' ],
              tiers: [ 1, 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      6: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              roles: [ CLASS_ROLE_TYPE.SUPPORT ],
              tiers: [ 1, 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      7: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              isGeneral: true,
              tiers: [ 1, 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      8: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: CLASS_STAT_MODIFIER_OPTION.ALL,
          numberOfSelections: 1
        }
      },
      9: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              classIds: [ 'class-conductor' ],
              tiers: [ 1, 2, 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      10: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              roles: [ CLASS_ROLE_TYPE.SUPPORT ],
              tiers: [ 1, 2, 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      11: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              isGeneral: true,
              tiers: [ 1, 2, 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      12: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: CLASS_STAT_MODIFIER_OPTION.ALL,
          numberOfSelections: 1
        }
      }
    }
  }
];

export const mockDefenderClasses: ClassConfig[] = [
  {
    id: 'class-berserker',
    name: { en: 'Berserker', th: 'นักรบคลั่ง' },
    roles: [ CLASS_ROLE_TYPE.DEFENDER ],
    icon: 'berserker-icon.svg',
    thumbnail: 'berserker-thumbnail.jpg',
    tags: [ 'defender', 'melee', 'berserker' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    gain: {
      1: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              tiers: [ 1 ],
              classIds: [ 'class-berserker' ]
            },
            numberOfSelections: 1
          }
        ]
      },
      2: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              tiers: [ 1 ],
              roles: [ CLASS_ROLE_TYPE.DEFENDER ]
            },
            numberOfSelections: 1
          }
        ]
      },
      3: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              tiers: [ 1 ],
              isGeneral: true
            },
            numberOfSelections: 1
          }
        ]
      },
      4: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: CLASS_STAT_MODIFIER_OPTION.ALL,
          numberOfSelections: 1
        }
      },
      5: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              classIds: [ 'class-berserker' ],
              tiers: [ 1, 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      6: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              roles: [ CLASS_ROLE_TYPE.DEFENDER ],
              tiers: [ 1, 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      7: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              isGeneral: true,
              tiers: [ 1, 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      8: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: CLASS_STAT_MODIFIER_OPTION.ALL,
          numberOfSelections: 1
        }
      },
      9: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              classIds: [ 'class-berserker' ],
              tiers: [ 1, 2, 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      10: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              roles: [ CLASS_ROLE_TYPE.DEFENDER ],
              tiers: [ 1, 2, 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      11: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              isGeneral: true,
              tiers: [ 1, 2, 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      12: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: CLASS_STAT_MODIFIER_OPTION.ALL,
          numberOfSelections: 1
        }
      }
    }
  }
];

export const mockAllClasses = [
  ...mockSupporterClasses,
  ...mockDefenderClasses
];

export default mockAllClasses;
