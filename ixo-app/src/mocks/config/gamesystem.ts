import { NONE_VALUE } from '@/constants/config/common';
import { STAT_MODIFIER_OPTION } from '@/constants/config/gameSystem';
import { GameSystemConfig } from '@/types/config/gameSystem';

export const mockGameSystem: GameSystemConfig = {
  id: 'fracture-fiction',
  name: {
    en: 'Fracture Fiction',
    th: 'แฟรคเจอร? ฟิคชั่น'
  },
  description: {
    en: 'Fracture Fiction is a game system for creating and playing characters in a post-apocalyptic world.',
    th: 'แฟรคเจอฟิคชั่นเป็นระบบเกมสำหรับสร้างและเล่นตัวละครในโลกหลังภัยพิบัติ'
  },
  gameSystemId: 'fracture-fiction',
  characterConfig: {
    gain: {
      1: {
        talentPoints: 1,
        proficiencyPoints: 3,
        skillPoints: NONE_VALUE.NUMBER,
        statModifiers: NONE_VALUE.ARRAY,
        attributeModifiers: NONE_VALUE.ARRAY
      },
      2: {
        talentPoints: NONE_VALUE.NUMBER,
        proficiencyPoints: 1,
        skillPoints: 1,
        statModifiers: NONE_VALUE.ARRAY,
        attributeModifiers: [
          {
            attributeId: 'hit-points',
            value: 8,
            modifier: 'stat(STR)'
          }
        ]
      },
      3: {
        talentPoints: NONE_VALUE.NUMBER,
        proficiencyPoints: 1,
        skillPoints: 1,
        statModifiers: NONE_VALUE.ARRAY,
        attributeModifiers: [
          {
            attributeId: 'hit-points',
            value: 8,
            modifier: 'stat(STR)'
          }
        ]
      },
      4: {
        talentPoints: NONE_VALUE.NUMBER,
        proficiencyPoints: NONE_VALUE.NUMBER,
        skillPoints: NONE_VALUE.NUMBER,
        statModifiers: [ {
          statId: STAT_MODIFIER_OPTION.ANY_CHOICE,
          value: 1
        } ],
        attributeModifiers: [
          {
            attributeId: 'hit-points',
            value: 8,
            modifier: 'stat(STR)'
          }
        ]
      }
    },
    inventorySpace: [ 10, 10 ]
  }
};