import type { ClassConfig } from '@/types/config/class';
import { EFFECT_PROFICIENCY_LEVEL, EFFECT_TYPE } from '@/constants/config/effect';
import { SKILL_TYPE } from '@/constants/config/skill';
import { CLASS_STAT_MODIFIER_OPTION } from '@/constants/config/class';

export const mockEncforcerClass: ClassConfig[] = [
  {
    id: 'class-encforcer',
    name: { 
      th: 'มือปราบ',
      en: 'Encforcer' 
    },
    description: { 
      th: 'ในโลกที่ไร้ศูนย์และเต็มไปด้วยความวุ่นวาย มือปราบคือกำลังรับจ้างผู้ใช้กำลังดิบเพื่อสยบภัย—ไม่ว่ามันจะเป็นอาชญากร คนหลง หรือสิ่งประหลาดจากรอยแตกมิติ',
      en: 'In a world without center and filled with chaos, Enforcers are mercenaries of brute force—crushing threats whether they are criminals, the Lost, or aberrations from fractured dimensions.'
    },
    icon: 'class-encforcer',
    thumbnail: 'class-encforcer',
    tags: [ 'standard', 'encforcer' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-unbreakable' ],
            numberOfSelections: 1
          }
        ]
      },
      2: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.COMBAT ],
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
              types: [ SKILL_TYPE.GENERAL ],
              tiers: [ 1 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      4: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CLASS_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      },
      5: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.CLASS ],
              classIds: [ 'class-encforcer' ],
              tiers: [ 1 ]
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
              types: [ SKILL_TYPE.COMBAT ],
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
              types: [ SKILL_TYPE.GENERAL ],
              tiers: [ 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      8: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CLASS_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      },
      9: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.CLASS ],
              classIds: [ 'class-encforcer' ],
              tiers: [ 2 ]
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
              types: [ SKILL_TYPE.COMBAT ],
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
              types: [ SKILL_TYPE.GENERAL ],
              tiers: [ 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      12: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CLASS_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      }
    }
  }
];

export const mockMessengerClass: ClassConfig[] = [
  {
    id: 'class-messenger',
    name: { 
      th: 'นักส่งข้อความ',
      en: 'Messenger' 
    },
    description: { 
      th: 'นักส่งข้อความที่มีความสามารถในการส่งข้อความ',
      en: 'A messenger with the ability to send messages'
    },
    icon: 'class-messenger',
    thumbnail: 'class-messenger',
    tags: [ 'special', 'messenger' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-messenger-send-message' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

export const mockHunterClass: ClassConfig[] = [
  {
    id: 'class-hunter',
    name: { 
      th: 'นักล่า',
      en: 'Hunter' 
    },
    description: { 
      th: 'นักล่าที่มีความสามารถในการล่าเหล่าสัตว์ประหลาด',
      en: 'A hunter with the ability to hunt down monsters'
    },
    icon: 'class-hunter',
    thumbnail: 'class-hunter',
    tags: [ 'special', 'hunter' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-hunter-trap' ],
            numberOfSelections: 1
          }
        ],
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-instinct',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-tinker',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-operate',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              }
            ],
            numberOfSelections: 2
          }
        ],
        skillSelectionRule: [ 
          {
            skillIds: [ 'skill-hunter-trap' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

export const mockTinkererClass: ClassConfig[] = [
  {
    id: 'class-tinkerer',
    name: { 
      th: 'นักประมวล',
      en: 'Tinkerer' 
    },
    description: { 
      th: 'นักประมวลที่มีความสามารถในการประมวลผลข้อมูล',
      en: 'An encforcer with the ability to process data'
    },
    icon: 'class-tinkerer',
    thumbnail: 'class-tinkerer',
    tags: [ 'special', 'tinkerer' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-tinkerer-data-processing' ],
            numberOfSelections: 1
          }
        ]
      },
      2: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            skillIds: [ 'skill-tinkerer-data-processing' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

export const mockResearcherClass: ClassConfig[] = [
  {
    id: 'class-researcher',
    name: { 
      th: 'นักวิจัย',
      en: 'Researcher' 
    },
    description: { 
      th: 'นักวิจัยที่มีความสามารถในการวิจัย',
      en: 'A researcher with the ability to research'
    },
    icon: 'class-researcher',
    thumbnail: 'class-researcher',
    tags: [ 'special', 'researcher' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-researcher-research' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

export const mockPerformerClass: ClassConfig[] = [
  {
    id: 'class-performer',
    name: { 
      th: 'นักแสดง',
      en: 'Performer' 
    },
    description: { 
      th: 'นักแสดงที่มีความสามารถในการแสดง',
      en: 'A performer with the ability to perform'
    },
    icon: 'class-performer',
    thumbnail: 'class-performer',
    tags: [ 'special', 'performer' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-performer-perform' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

export const mockMeisterClass: ClassConfig[] = [
  {
    id: 'class-meister',
    name: { 
      th: 'ไมสเตอร์',
      en: 'Meister' 
    },
    description: { 
      th: 'นักขับหุ่นรบชั้นยอดที่เดินตามความฝันที่จะขึ้นขับสุดยอดหุ่นรบ "กันดั้ม"',
      en: 'The best pilot of the Gundam, following the dream of becoming the ultimate pilot of the "Gundam"'
    },
    icon: 'class-meister',
    thumbnail: 'class-meister',
    tags: [ 'special', 'meister' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    gain: {
      1: {
        proficiencyPoints: 1,
        actionSelectionRule: [
          {
            actionIds: [ 'action-gundam-meister' ],
            numberOfSelections: 1
          }
        ],
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-instinct',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-tinker',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-operate',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              }
            ],
            numberOfSelections: 2
          }
        ],
        skillSelectionRule: [
          {
            skillIds: [ 'skill-gundam-blue-print' ],
            numberOfSelections: 1
          }
        ]
      },
      2: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.COMBAT ],
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
              types: [ SKILL_TYPE.GENERAL ],
              tiers: [ 1 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      4: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CLASS_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      },
      5: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            skillIds: [ 'skill-meister-survival' ],
            numberOfSelections: 1
          }
        ]
      },
      6: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.COMBAT ],
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
              types: [ SKILL_TYPE.GENERAL ],
              tiers: [ 2 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      8: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CLASS_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      },
      9: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            skillIds: [ 'skill-new-type' ],
            numberOfSelections: 1
          }
        ]
      },
      10: {
        proficiencyPoints: 1,
        skillSelectionRule: [
          {
            filterOptions: {
              types: [ SKILL_TYPE.COMBAT ],
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
              types: [ SKILL_TYPE.GENERAL ],
              tiers: [ 3 ]
            },
            numberOfSelections: 1
          }
        ]
      },
      12: {
        proficiencyPoints: 1,
        statModifierChoice: {
          statIds: [ CLASS_STAT_MODIFIER_OPTION.ALL ],
          numberOfSelections: 1
        }
      }
    }
  }
];

export const mockAllClasses = [
  ...mockMeisterClass,

  // standard classes
  ...mockHunterClass
];

export default mockAllClasses;
