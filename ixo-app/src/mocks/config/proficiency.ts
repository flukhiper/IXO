import type { ProficiencyConfig } from '@/types/config/proficiency';
import { KEYWORD_TYPE } from '@/constants/config/base';

export const mock: ProficiencyConfig[] = [
  // 1. General Weapon Paths
  {
    id: 'proficiency-weapon-simple',
    name: { en: 'Simple Weapons', th: 'อาวุธพื้นฐาน' },
    description: { en: 'Removes Disadvantage when using any simple weapon.', th: 'ยกเลิกดีซัดแวนเทจเมื่อใช้อาวุธพื้นฐาน' },
    tags: [ 'weapon', 'general', 'simple' ],
    icon: 'simple-weapon-icon',
    progression: {
      1: {
        effects: [],
        skillGain: [],
        actionGain: []
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'proficiency-weapon-martial',
    name: { en: 'Martial Weapons', th: 'อาวุธสงคราม' },
    description: { en: 'Removes Disadvantage when using any martial weapon.', th: 'ยกเลิกดีซัดแวนเทจเมื่อใช้อาวุธสงคราม' },
    tags: [ 'weapon', 'general', 'martial' ],
    icon: 'martial-weapon-icon',
    progression: {
      1: {
        effects: [],
        skillGain: [],
        actionGain: []
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'proficiency-weapon-technical',
    name: { en: 'Technical Weapons', th: 'อาวุธเทคนิค' },
    description: { en: 'Removes Disadvantage when using any technical weapon.', th: 'ยกเลิกดีซัดแวนเทจเมื่อใช้อาวุธเทคนิค' },
    tags: [ 'weapon', 'general', 'technical' ],
    icon: 'technical-weapon-icon',
    progression: {
      1: {
        effects: [],
        skillGain: [],
        actionGain: []
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // 1. Specific Weapon Path Example (Longsword)
  {
    id: 'proficiency-weapon-longsword',
    name: { en: 'Longsword Path', th: 'เส้นทางดาบยาว' },
    description: { en: 'Specialist path for the longsword, granting unique actions and bonuses.', th: 'เชี่ยวชาญดาบยาว ได้รับท่าพิเศษและโบนัส' },
    tags: [ 'weapon', 'specific', 'longsword' ],
    icon: 'longsword-icon',
    progression: {
      1: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'longsword-action' ], numberOfAction: 1 }
        ]
      },
      2: {
        effects: [
          {
            keywords: [
              {
                type: KEYWORD_TYPE.ATTRIBUTE_LEARNED,
                attributeId: 'attribute-attack-roll-longsword'
              }
            ]
          }
        ],
        skillGain: [],
        actionGain: []
      },
      3: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'longsword-action' ], numberOfAction: 1 }
        ]
      },
      4: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'longsword-action' ], numberOfAction: 1 }
        ]
      },
      5: {
        effects: [
          {
            keywords: [
              {
                type: KEYWORD_TYPE.ATTRIBUTE_GIFTED,
                attributeId: 'attribute-attack-roll-longsword'
              }
            ]
          }
        ],
        skillGain: [],
        actionGain: []
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // 2. Armor Paths Example (Light Armor)
  {
    id: 'proficiency-armor-light',
    name: { en: 'Light Armor', th: 'เกราะเบา' },
    description: { en: 'Improves blocking with light armor and unlocks unique defensive actions.', th: 'เพิ่มประสิทธิภาพการบล็อกและปลดล็อกท่าป้องกันพิเศษ' },
    tags: [ 'armor', 'light' ],
    icon: 'light-armor-icon',
    progression: {
      1: {
        effects: [
          // Example: { type: 'modify-attribute', attributeId: 'attribute-block-light-armor', baseValue: { type: 'fixed', value: 1 } }
        ],
        skillGain: [],
        actionGain: []
      },
      2: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'light-armor-action' ], numberOfAction: 1 }
        ]
      },
      3: {
        effects: [
          // Example: { type: 'modify-attribute', attributeId: 'attribute-block-light-armor', baseValue: { type: 'fixed', value: 3 } }
        ],
        skillGain: [],
        actionGain: []
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // 2. Shield Paths Example (Light Shield)
  {
    id: 'proficiency-shield-light',
    name: { en: 'Light Shield', th: 'โล่เบา' },
    description: { en: 'Improves blocking with light shields and unlocks unique defensive actions.', th: 'เพิ่มประสิทธิภาพการบล็อกและปลดล็อกท่าป้องกันพิเศษ' },
    tags: [ 'shield', 'light' ],
    icon: 'light-shield-icon',
    progression: {
      1: {
        effects: [
          // Example: { type: 'modify-attribute', attributeId: 'attribute-block-light-shield', baseValue: { type: 'fixed', value: 1 } }
        ],
        skillGain: [],
        actionGain: []
      },
      2: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'light-shield-action' ], numberOfAction: 1 }
        ]
      },
      3: {
        effects: [
          // Example: { type: 'modify-attribute', attributeId: 'attribute-block-light-shield', baseValue: { type: 'fixed', value: 3 } }
        ],
        skillGain: [],
        actionGain: []
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // 3. Command Proficiency Path Example (Elemental)
  {
    id: 'proficiency-command-elemental',
    name: { en: 'Elemental Command', th: 'บัญชาแห่งธาตุ' },
    description: { en: 'Grants access to elemental commands and the ability to channel more FP.', th: 'ปลดล็อกบัญชาแห่งธาตุและเพิ่มขีดจำกัด FP' },
    tags: [ 'command', 'elemental' ],
    icon: 'elemental-command-icon',
    progression: {
      1: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'command-elemental-1' ], numberOfAction: 2 }
        ]
      },
      2: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'command-elemental-1' ], numberOfAction: 1 }
        ]
      },
      3: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'command-elemental-2' ], numberOfAction: 1 }
        ]
      },
      4: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'command-elemental-1', 'command-elemental-2' ], numberOfAction: 1 }
        ]
      },
      5: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'command-elemental-3' ], numberOfAction: 1 }
        ]
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // 4. Utility Tool Path Example (Smith's Tools)
  {
    id: 'proficiency-tool-smith',
    name: { en: 'Smith\'s Tools', th: 'เครื่องมือช่างตีเหล็ก' },
    description: { en: 'Unlocks specialized downtime actions and enhances crafting.', th: 'ปลดล็อกกิจกรรมดาวน์ไทม์พิเศษและเพิ่มประสิทธิภาพการคราฟต์' },
    tags: [ 'tool', 'smith' ],
    icon: 'smith-tool-icon',
    progression: {
      1: {
        effects: [],
        skillGain: [],
        actionGain: [
          { includedActionTags: [ 'smith-downtime-action' ], numberOfAction: 1 }
        ]
      }
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 