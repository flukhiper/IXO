import type { ProficiencyConfig } from '@/types/config/proficiency';
import { BONUS_EFFECT_TYPE, EFFECT_TARGET_TYPE } from '@/constants/config/effect';

export const mockProficiencies: ProficiencyConfig[] = [
  // General Weapon Proficiency (Simple)
  {
    id: 'proficiency-simple-weapons',
    name: { en: 'Simple Weapons Proficiency', th: 'ความชำนาญอาวุธง่าย' },
    description: { en: 'General proficiency with basic, easy-to-use weapons like clubs, daggers, and slings.', th: 'ความชำนาญทั่วไปกับอาวุธพื้นฐาน ใช้งานง่าย เช่น กระบอง มีดสั้น และหนังสติ๊ก' },
    icon: '⚔️',
    thumbnail: '/images/proficiencies/simple-weapons.png',
    tags: [ 'weapon', 'simple', 'general', 'proficiency' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    gain: {
      2: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      3: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      4: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      5: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      6: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      7: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      8: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      9: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      10: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      11: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Specific Weapon Proficiency (Longsword)
  {
    id: 'proficiency-longsword',
    name: { en: 'Longsword Proficiency', th: 'ความชำนาญดาบยาว' },
    description: { en: 'Specific proficiency with the longsword, a versatile martial weapon.', th: 'ความชำนาญเฉพาะกับดาบยาว อาวุธต่อสู้ที่หลากหลาย' },
    icon: '⚔️',
    thumbnail: '/images/proficiencies/longsword.png',
    tags: [ 'weapon', 'longsword', 'specific', 'proficiency' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    gain: {
      2: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      3: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-lacerate', 'action-rush-attack', 'action-pommel-strike' ],
            numberOfSelections: 1
          }
        ]
      },
      4: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      5: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-lacerate', 'action-rush-attack', 'action-pommel-strike' ],
            numberOfSelections: 1
          }
        ]
      },
      6: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      7: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-lacerate', 'action-rush-attack', 'action-pommel-strike' ],
            numberOfSelections: 1
          }
        ]
      },
      8: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      9: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-lacerate', 'action-rush-attack', 'action-pommel-strike' ],
            numberOfSelections: 1
          }
        ]
      },
      10: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Armor & Shields Proficiency (Light Armor)
  {
    id: 'proficiency-light-armor',
    name: { en: 'Light Armor Proficiency', th: 'ความชำนาญเกราะเบา' },
    description: { en: 'Proficiency with light, flexible armor that allows for mobility and stealth.', th: 'ความชำนาญกับเกราะเบา ยืดหยุ่นที่ช่วยให้เคลื่อนไหวและซ่อนตัวได้' },
    icon: '🛡️',
    thumbnail: '/images/proficiencies/light-armor.png',
    tags: [ 'armor', 'light', 'proficiency' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    gain: {
      2: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-armor-block',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      4: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-light-armor-brace' ],
            numberOfSelections: 1
          }
        ]
      },
      6: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-armor-block',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      8: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-light-armor-evasion' ],
            numberOfSelections: 1
          }
        ]
      },
      10: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-armor-block',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      },
      11: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-armor-block',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Specific Command Proficiency (Fire Magic)
  {
    id: 'proficiency-fire-magic',
    name: { en: 'Fire Magic Proficiency', th: 'ความชำนาญเวทมนตร์ไฟ' },
    description: { en: 'Proficiency with fire-based magical commands and spells.', th: 'ความชำนาญกับคำสั่งและคาถาเวทมนตร์ที่เกี่ยวข้องกับไฟ' },
    icon: '🔥',
    thumbnail: '/images/proficiencies/fire-magic.png',
    tags: [ 'command', 'fire', 'magic', 'proficiency' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 2
          }
        ]
      },
      2: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      3: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      4: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      5: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      6: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      7: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      8: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      9: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      },
      10: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: BONUS_EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attr-attack-roll',
                modifierFormula: '1'
              }
            ],
            numberOfSelections: 1
          }
        ],
        actionSelectionRule: [
          {
            actionIds: [ 'action-fire-bolt', 'action-burning-hands', 'action-hellish-rebuke' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];
