import { EFFECT_ACTIVATE_ON, EFFECT_PROFICIENCY_LEVEL, EFFECT_TARGET_TYPE, EFFECT_TYPE } from '@/constants/config/effect';
import { SKILL_STACK_TYPE, SKILL_TYPE } from '@/constants/config/skill';
import type { FactionSkillConfig, SkillConfig, TraitSkillConfig } from '@/types/config/skill';

export const mockFactionSkills: FactionSkillConfig[] = [
  {
    id: 'skill-drifter-versatility',
    name: {
      en: 'Drifter Versatility',
      th: 'ความเชี่ยวชาญสารพัดของคนพเนจร'
    },
    description: {
      en: 'You are a master of adaptability. Every new journey, every new face, every new challenge adds a layer to your skill set, making you a jack-of-all-trades and a master of your own survival.',
      th: 'เจ้าคือยอดนักปรับตัว ทุกการเดินทางครั้งใหม่ ทุกใบหน้าใหม่ ทุกความท้าทายใหม่ ล้วนเพิ่มพูนความสามารถของเจ้า ทำให้เจ้าเป็นผู้เชี่ยวชาญในทุกสิ่งและเป็นนายเหนือชีวิตรอดของตัวเอง'
    },
    type: SKILL_TYPE.FACTION,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'drifter-versatility',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-power',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-endurance',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-stealth',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-acrobatics',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-sprint',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-perception',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-insight',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
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
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-finesse',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-recall',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-deduction',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-analyze',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-persuasion',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-deception',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-intimidation',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'skill-check-performance',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              }
            ],
            numberOfSelections: 2
          },
          {
            effects: [
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'saving-check-strength',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'saving-check-speed',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'saving-check-sense',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'saving-check-knowledge',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'saving-check-technique',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              },
              {
                type: EFFECT_TYPE.PROFICIENCY,
                attributeId: 'saving-check-presence',
                level: EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

export const mockTraitSkills: TraitSkillConfig[] = [
  // Dracari trait
  {
    id: 'skill-blood-of-wrath',
    name: {
      en: 'Blood of Wrath',
      th: 'เลือดแห่งโทสะ'
    },
    description: {
      en: 'When angry or injured, the body gains immense power like an awakened dragon.',
      th: 'เมื่อโกรธหรือบาดเจ็บ ร่างกายจะเสริมพลังมหาศาลเหมือนพลังมังกรตื่น'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'blood-of-wrath',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: EFFECT_TYPE.ACTIVATE,
                on: EFFECT_ACTIVATE_ON.ON_ATTRIBUTE_CHANGE,
                attributeId: 'attribute-hit-points',
                operator: '<',
                formula: 'max(attribute-hit-points) / 2',
                effects: [
                  {
                    type: EFFECT_TYPE.BONUS,
                    target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                    id: 'attribute-str-based-damage',
                    modifierFormula: 'ceil(character-level / 4) * 2'
                  }
                ]
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-scales-of-endurance',
    name: {
      th: 'เกล็ดแห่งความทนทาน',
      en: 'Scales of Endurance'
    },
    description: {
      th: 'เกล็ดป้องกันพลังเวทและการโจมตีทางกายภาพได้เหนือกว่ามนุษย์ทั่วไป',
      en: 'Scales provide superior protection against magical and physical attacks compared to ordinary humans.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'scales-of-endurance',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: EFFECT_TYPE.BONUS,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'attribute-damage-reduction',
                modifierFormula: 'ceil(character-level / 4)'
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-breath-of-dracari',
    name: {
      th: 'ลมหายใจแห่งดราคาริ',
      en: 'Breath of Dracari'
    },
    description: {
      th: 'ลมหายใจของดราคาริสามารถปลดปล่อยเปลวเพลิงหรือคลื่นพลังทำลายล้าง',
      en: 'Dracari breaths can unleash flames or destructive energy waves.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'breath-of-dracari',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 
              'action-fire-breath',
              'action-frost-breath',
              'action-lightning-breath',
              'action-acid-breath',
              'action-poison-breath'
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  
  // Syralis trait
  {
    id: 'skill-syralis-charm',
    name: {
      th: 'เสียงแห่งความปรารถนา',
      en: 'Echo of Desire'
    },
    description: {
      th: 'เสียงร้องหรือเสียงพูดมีผลสะกดใจ ทำให้ผู้ฟังคล้อยตามได้ง่าย',
      en: 'Voice or speech has a mesmerizing effect, making listeners easily swayed.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'echo-of-desire',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-luring-song' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-tideform',
    name: {
      th: 'รูปลักษณ์แห่งน้ำ',
      en: 'Tideform'
    },
    description: {
      th: 'สามารถควบคุมสภาพน้ำรอบตัวเพื่ออำพราง',
      en: 'Can control water conditions around them for concealment.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'tideform',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-water-cloak' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-alluring-presence',
    name: {
      th: 'เสน่ห์ดึงดูดใจ',
      en: 'Alluring Presence'
    },
    description: {
      th: 'ร่างกายและบุคลิกมีแรงดึงดูดเหนือธรรมชาติ สร้างความหลงใหลแม้ไม่ตั้งใจ',
      en: 'Body and personality have supernatural allure, creating fascination even unintentionally.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'alluring-presence',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: EFFECT_TYPE.SPECIAL,
                name: {
                  th: 'เสน่ห์ดึงดูดใจ',
                  en: 'Alluring Presence'
                },
                flavorText: {
                  th: 'ร่างกายและบุคลิกมีแรงดึงดูดเหนือธรรมชาติ สร้างความหลงใหลแม้ไม่ตั้งใจ',
                  en: 'Body and personality have supernatural allure, creating fascination even unintentionally.'
                }
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Elvarin trait
  {
    id: 'skill-endless-vitality',
    name: {
      th: 'พลังชีวิตไม่สิ้นสุด',
      en: 'Endless Vitality'
    },
    description: {
      th: 'ร่างกายไม่เสื่อมถอย ไม่แก่ชรา ไม่โรยรา รักษาสภาพเยาว์วัยและความแข็งแกร่งไว้ตลอดกาล',
      en: 'The body does not decay, age, or wither, maintaining youth and strength for eternity.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'endless-vitality',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.SPECIAL,
                name: {
                  th: 'พลังชีวิตไม่สิ้นสุด',
                  en: 'Endless Vitality'
                },
                flavorText: {
                  th: 'ร่างกายไม่เสื่อมถอย ไม่แก่ชรา ไม่โรยรา รักษาสภาพเยาว์วัยและความแข็งแกร่งไว้ตลอดกาล',
                  en: 'The body does not decay, age, or wither, maintaining youth and strength for eternity.'
                }
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-timeless-memory',
    name: {
      th: 'ความทรงจำนิรันดร์',
      en: 'Timeless Memory'
    },
    description: {
      th: 'ความทรงจำทั้งหมดคงอยู่ ไม่สูญหายแม้กาลเวลาผ่านไป สามารถจดจำทุกประสบการณ์และบทเรียนได้อย่างสมบูรณ์',
      en: 'All memories remain intact, never lost even as time passes. Can remember every experience and lesson perfectly.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'timeless-memory',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.SPECIAL,
                name: {
                  th: 'ความทรงจำนิรันดร์',
                  en: 'Timeless Memory'
                },
                flavorText: {
                  th: 'ความทรงจำทั้งหมดคงอยู่ ไม่สูญหายแม้กาลเวลาผ่านไป สามารถจดจำทุกประสบการณ์และบทเรียนได้อย่างสมบูรณ์',
                  en: 'All memories remain intact, never lost even as time passes. Can remember every experience and lesson perfectly.'
                }
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-unfading-will',
    name: {
      th: 'เจตจำนงไม่เสื่อม',
      en: 'Unfading Will'
    },
    description: {
      th: 'จิตใจไม่เคยอ่อนแอหรือสิ้นหวัง ไม่หวั่นไหวต่อการกัดกร่อนใด ๆ ความมุ่งมั่นและความทะเยอทะยานไม่เคยลดลง',
      en: 'The mind never weakens or despairs, unshaken by any form of erosion. Determination and ambition never diminish.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'unfading-will',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.PREVENT_CONDITION,
                conditionIds: [ 'condition-sleeping', 'condition-frightened' ]
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Teknith trait
  {
    id: 'skill-body-modification',
    name: {
      th: 'การดัดแปลงร่างกาย',
      en: 'Body Modification'
    },
    description: {
      th: 'สามารถติดตั้งหรือเปลี่ยนอวัยวะเทียม/อุปกรณ์เสริม เช่น แขนกล เลนส์ตาพิเศษ ระบบเร่งประสาท เพื่อปรับปรุงความสามารถของร่างกาย',
      en: 'Can install or replace artificial organs/equipment such as mechanical arms, special lenses, neural acceleration systems to enhance body capabilities.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'body-modification',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-power',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-endurance',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-stealth',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-acrobatics',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-sprint',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-perception',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-insight',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-instinct',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-tinker',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-operate',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-finesse',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-recall',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-deduction',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-analyze',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-persuasion',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-deception',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-intimidation',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-performance',
                isDisadvantage: false
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-reboot-protocol',
    name: {
      th: 'โปรโตคอลรีบูต',
      en: 'Reboot Protocol'
    },
    description: {
      th: 'เมื่อร่างกายเสียหายจนถึงขีดสุด สามารถรีบูตเพื่อฟื้นฟูสภาพให้กลับมาใช้งานได้ แม้ไม่สมบูรณ์แบบ แต่ยัง "ดำเนินต่อไป"',
      en: 'When the body is damaged to the limit, can reboot to restore functionality. Even if not perfect, they can still "continue on."'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'reboot-protocol',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-reboot' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-neuron-network',
    name: {
      th: 'เครือข่ายประสาท',
      en: 'Neuron Network'
    },
    description: {
      th: 'ทุก Teknith เชื่อมโยงกันผ่านระบบประสาทพลังงาน สามารถแบ่งปันข้อมูล ความทรงจำ หรือประสบการณ์แบบเรียลไทม์',
      en: 'All Teknith are connected through an energy neural system, able to share data, memories, or experiences in real-time.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'neuron-network',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.SPECIAL,
                name: {
                  th: 'เครือข่ายประสาท',
                  en: 'Neuron Network'
                },
                flavorText: {
                  th: 'ทุก Teknith เชื่อมโยงกันผ่านระบบประสาทพลังงาน สามารถแบ่งปันข้อมูล ความทรงจำ หรือประสบการณ์แบบเรียลไทม์',
                  en: 'All Teknith are connected through an energy neural system, able to share data, memories, or experiences in real-time.'
                }
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Veylin trait
  {
    id: 'skill-adaptive-form',
    name: {
      th: 'การปรับตัวเลียนแบบ',
      en: 'Adaptive Form'
    },
    description: {
      th: 'สามารถกลายร่างเลียนแบบรูปลักษณ์ของเผ่าพันธุ์อื่นได้เกือบสมบูรณ์ แต่ไม่สามารถเลียนแบบพลังพิเศษเชิงลึกได้ทั้งหมด',
      en: 'Can transform to mimic the appearance of other races almost perfectly, but cannot fully replicate their deep special powers.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'adaptive-form',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-transform' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-mimic-insight',
    name: {
      th: 'ความเข้าใจแห่งการเลียนแบบ',
      en: 'Mimic Insight'
    },
    description: {
      th: 'ใช้เขาพิเศษเพื่ออ่านท่าทาง จังหวะการเคลื่อนไหว หรือโครงสร้างร่างกายของเป้าหมาย เพื่อใช้ในการปลอมตัว',
      en: 'Uses special horns to read posture, movement patterns, or body structure of targets for use in disguise.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'mimic-insight',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.SPECIAL,
                name: {
                  th: 'ความเข้าใจแห่งการเลียนแบบ',
                  en: 'Mimic\'s Insight'
                },
                flavorText: {
                  th: 'ใช้เขาพิเศษเพื่ออ่านท่าทาง จังหวะการเคลื่อนไหว หรือโครงสร้างร่างกายของเป้าหมาย เพื่อใช้ในการปลอมตัว',
                  en: 'Uses special horns to read posture, movement patterns, or body structure of targets for use in disguise.'
                }
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-echo-aptitude',
    name: {
      th: 'ความสามารถสะท้อน',
      en: 'Echo Aptitude'
    },
    description: {
      th: 'สามารถเรียนรู้และจำลองความสามารถที่ผู้อื่นใช้ได้ชั่วคราว ระยะเวลาและความสมบูรณ์ขึ้นอยู่กับความซับซ้อนของความสามารถ',
      en: 'Can learn and temporarily replicate abilities used by others. Duration and completeness depend on the complexity of the ability.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'echo-aptitude',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-mimic' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },

  // Furalis trait
  {
    id: 'skill-natural-affinity',
    name: {
      th: 'ความผูกพันกับธรรมชาติ',
      en: 'Natural Affinity'
    },
    description: {
      th: 'รับรู้สภาพแวดล้อมรอบตัวได้อย่างแม่นยำ ทั้งการเปลี่ยนแปลงอากาศ กลิ่น เสียง หรือพลังชีวิตของสิ่งมีชีวิต',
      en: 'Can accurately perceive the surrounding environment, including weather changes, scents, sounds, or life force of living beings.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'natural-affinity',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-perception',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-insight',
                isDisadvantage: false
              },
              {
                type: EFFECT_TYPE.ADVANTAGE,
                target: EFFECT_TARGET_TYPE.ATTRIBUTE,
                id: 'skill-check-instinct',
                isDisadvantage: false
              }
            ],
            numberOfSelections: 3
          }
        ]
      }
    }
  },
  {
    id: 'skill-beastfolk-reflex',
    name: {
      th: 'ปฏิกิริยาสัตว์ป่า',
      en: 'Beastfolk Reflex'
    },
    description: {
      th: 'ปฏิกิริยาตอบสนองเร็วและยืดหยุ่นกว่ามนุษย์ทั่วไป ทำให้รอดพ้นจากภัยโดยไม่ต้องคิดล่วงหน้า',
      en: 'Faster and more flexible reflexes than ordinary humans, allowing escape from danger without prior thought.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'beastfolk-reflex',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        actionSelectionRule: [
          {
            actionIds: [ 'action-reflex' ],
            numberOfSelections: 1
          }
        ]
      }
    }
  },
  {
    id: 'skill-harmonized-life',
    name: {
      th: 'ชีวิตที่สอดคล้อง',
      en: 'Harmonized Life'
    },
    description: {
      th: 'ปรับร่างกายและจิตใจให้สอดคล้องกับธรรมชาติรอบตัว เช่น ความร้อน, ความเร็ว, หรือแรงกายตามสภาพแวดล้อม',
      en: 'Adapts body and mind to harmonize with surrounding nature, such as heat, speed, or physical strength according to environmental conditions.'
    },
    type: SKILL_TYPE.TRAIT,
    stack: {
      type: SKILL_STACK_TYPE.OVERWRITE,
      id: 'harmonized-life',
      priority: 1
    },
    gameSystemId: 'fractured-faction',
    ownerId: 'admin',
    isSystem: true,
    gain: {
      1: {
        effectSelectionRule: [
          {
            effects: [ 
              {
                type: EFFECT_TYPE.SPECIAL,
                name: {
                  th: 'ชีวิตที่สอดคล้อง',
                  en: 'Harmonized Life'
                },
                flavorText: {
                  th: 'ปรับร่างกายและจิตใจให้สอดคล้องกับธรรมชาติรอบตัว เช่น ความร้อน, ความเร็ว, หรือแรงกายตามสภาพแวดล้อม',
                  en: 'Adapts body and mind to harmonize with surrounding nature, such as heat, speed, or physical strength according to environmental conditions.'
                }
              }
            ],
            numberOfSelections: 1
          }
        ]
      }
    }
  }
];

// Combined export for all attributes
export const mockAllSkills: SkillConfig[] = [
  ...mockFactionSkills,
  ...mockTraitSkills
];

export default mockAllSkills;
