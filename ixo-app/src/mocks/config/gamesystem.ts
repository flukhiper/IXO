import { CHARACTER_STAT_MODIFIER_OPTION, MAX_CHARACTER_GAIN_LEVEL } from '@/constants/config/gameSystem';
import { SKILL_TYPE } from '@/constants/config/skill';
import type { GameSystem } from '@/types/config/gameSystem';

export const mockGameSystem: GameSystem = {
  id: 'game-system-1',
  name: {
    en: 'Fantasy RPG System',
    th: 'ระบบแฟนตาซี RPG'
  },
  description: {
    en: 'A comprehensive fantasy role-playing game system with deep character customization and tactical combat.',
    th: 'ระบบเกมเล่นบทบาทแฟนตาซีที่ครอบคลุมพร้อมการปรับแต่งตัวละครที่ลึกซึ้งและการต่อสู้แบบกลยุทธ์'
  },
  icon: 'sword-shield',
  thumbnail: 'fantasy-rpg-thumbnail.jpg',
  tags: [ 'fantasy', 'rpg', 'tactical', 'character-customization' ],
  ownerId: 'admin-user-1',
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-15T12:30:00.000Z',
  isSystem: true,
  isPublic: true,
  characterBuildingRule: {
    startingTraitValue: 2,
    startingProficiencyPoints: 3,
    startingProficiencyHighestLevel: 1,
    startingStatPoints: 3,
    startingStatHighestValue: 3,
    startingStatLowestValue: -1,
    startingGolds: 100,
    startingActionIds: [ 'unarmed-attack', 'throw', 'sprint', 'jump', 'climb', 'hide', 'focus', 'deep-focus' ],
    startingDamageResistanceScaleId: 'damage-scale-normal',
    characterMaxLevel: MAX_CHARACTER_GAIN_LEVEL.length,
    characterGain: {
      1: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.TALENT ]
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
              types: [ SKILL_TYPE.ROLE ],
              tiers: [ 1 ]
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
              types: [ SKILL_TYPE.ROLE ],
              tiers: [ 1 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      4: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CHARACTER_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      },
      5: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.TALENT ]
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
              types: [ SKILL_TYPE.ROLE ],
              tiers: [ 2 ]
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
              types: [ SKILL_TYPE.ROLE ],
              tiers: [ 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      8: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CHARACTER_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      },
      9: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.TALENT ]
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
              types: [ SKILL_TYPE.ROLE ],
              tiers: [ 3 ]
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
              types: [ SKILL_TYPE.ROLE ],
              tiers: [ 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      12: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CHARACTER_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      }
    }
  },
  gamePlayRule: {
    followUpThreshold: 3,
    downtimeIds: [ 'downtime-prepare-loadout', 'downtime-tend-to-wounds', 'downtime-maintain-gear' ]
  }
};