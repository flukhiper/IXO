import type { ActionConfig } from '@/types/config/action';
import { ACTION_TYPE, ACTION_STACK_TYPE, ACTION_REQUIRED_ITEM_TYPE, ACTION_HIT_TYPE, ACTION_HIT_TARGET_TYPE, ACTION_ITEM_OPTION, ACTION_COST_TYPE, ACTION_USAGE_TYPE, ACTION_COST_OPTION } from '@/constants/config/action';
import { VALUE_TYPE } from '@/constants/config/base';
import { SPECIALTY_EFFECT_TYPE } from '@/constants/config/effect';

export const mockActions: ActionConfig[] = [

  // basic actions
  {
    id: 'action-attack',
    name: { en: 'Attack', th: 'โจมตี' },
    description: { en: 'You make a standard attack with your equipped main-hand weapon.', th: 'คุณทำการโจมตีมาตรฐานด้วยอาวุธที่ถือในมือหลัก' },
    icon: 'sword',
    thumbnail: 'attack-action.jpg',
    tags: [ 'combat', 'basic', 'weapon' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'basic-attack',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    isBasic: true,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.MAIN_HANDED,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    level: {
      1: {
        durabilityPointsCost: 1,
        range: ACTION_ITEM_OPTION.RANGE,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: ACTION_ITEM_OPTION.DAMAGE
      }
    }
  },
  {
    id: 'action-off-hand-attack',
    name: { en: 'Off-Hand Attack', th: 'โจมตีมือรอง' },
    description: { en: 'You make an attack with a light weapon held in your off-hand. This attack does not add your damage modifier (STR Dmg or TEC Dmg) to the damage roll.', th: 'คุณทำการโจมตีด้วยอาวุธเบาที่ถือในมือรอง การโจมตีนี้ไม่เพิ่มตัวปรับความเสียหาย (STR Dmg หรือ TEC Dmg) ในการทอยความเสียหาย' },
    icon: 'dagger',
    thumbnail: 'off-hand-attack-action.jpg',
    tags: [ 'combat', 'basic', 'dual-wield' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'off-hand-attack',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    isBasic: true,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.OFF_HANDED,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        durabilityPointsCost: 1,
        range: ACTION_ITEM_OPTION.RANGE,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: ACTION_ITEM_OPTION.DAMAGE_VALUE_ONLY
      }
    }
  },
  {
    id: 'action-unarmed-attack',
    name: { en: 'Unarmed Attack', th: 'โจมตีด้วยหมัดเปล่า' },
    description: { en: 'You make a melee attack with your fists. This attack deals 1d4 Bludgeoning damage + your STR Dmg.', th: 'คุณทำการโจมตีระยะประชิดด้วยหมัดเปล่า การโจมตีนี้ทำให้เกิดความเสียหาย 1d4 การทุบตี + STR Dmg ของคุณ' },
    icon: 'fist',
    thumbnail: 'unarmed-attack-action.jpg',
    tags: [ 'combat', 'basic', 'unarmed' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'unarmed-attack',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    isBasic: true,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'bludgeoning',
          value: { type: VALUE_TYPE.DICE, formula: '1d4' },
          modifierFormula: 'attr-str-based-damage'
        } ]
      }
    }
  },
  {
    id: 'action-unarmed-attack-enhanced',
    name: { en: 'Unarmed Attack (Enhanced)', th: 'โจมตีด้วยหมัดเปล่า (เพิ่มความรุนแรง)' },
    description: { en: 'You make a melee attack with your fists. This attack deals 1d4 Bludgeoning damage + your STR Dmg.', th: 'คุณทำการโจมตีระยะประชิดด้วยหมัดเปล่า การโจมตีนี้ทำให้เกิดความเสียหาย 1d4 การทุบตี + STR Dmg ของคุณ' },
    icon: 'unarmed-attack-enhanced',
    thumbnail: 'unarmed-attack-enhanced-action.jpg',
    tags: [ 'combat', 'basic', 'unarmed', 'enhanced' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'unarmed-attack',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 2,
    isSystem: false,
    isBasic: true,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'bludgeoning',
          value: { type: VALUE_TYPE.DICE, formula: '1d6' },
          modifierFormula: 'attr-str-based-damage'
        } ]
      }
    }
  },
  {
    id: 'action-armor-block',
    name: { en: 'Armor Block', th: 'ป้องกันด้วยเกราะ' },
    description: { en: 'You block an attack with your armor. This attack does not add your damage modifier (STR Dmg or TEC Dmg) to the damage roll.', th: 'คุณป้องกันการโจมตีด้วยเกราะ การโจมตีนี้ไม่เพิ่มตัวปรับความเสียหาย (STR Dmg หรือ TEC Dmg) ในการทอยความเสียหาย' },
    icon: 'armor-block',
    thumbnail: 'armor-block-action.jpg',
    tags: [ 'combat', 'basic', 'armor' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'armor-block',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    isBasic: true,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.ARMOR,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        durabilityPointsCost: 1,
        hit: {
          type: ACTION_HIT_TYPE.SELF
        },
        armorClass: ACTION_ITEM_OPTION.ARMOR_CLASS
      }
    }
  },
  {
    id: 'action-shield-block',
    name: { en: 'Shield Block', th: 'ป้องกันด้วยหน้ากระบอก' },
    description: { en: 'You block an attack with your shield. This attack does not add your damage modifier (STR Dmg or TEC Dmg) to the damage roll.', th: 'คุณป้องกันการโจมตีด้วยหน้ากระบอก การโจมตีนี้ไม่เพิ่มตัวปรับความเสียหาย (STR Dmg หรือ TEC Dmg) ในการทอยความเสียหาย' },
    icon: 'shield-block',
    thumbnail: 'shield-block-action.jpg',
    tags: [ 'combat', 'basic', 'shield' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'shield-block',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    isBasic: true,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.SHIELD,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        durabilityPointsCost: 1,
        hit: {
          type: ACTION_HIT_TYPE.SELF
        },
        armorClass: ACTION_ITEM_OPTION.ARMOR_CLASS
      }
    }
  },

  // proficiency actions
  {
    id: 'action-lacerate',
    name: { en: 'Lacerate', th: 'ลบกระดาษ' },
    description: { en: 'You make a melee attack with your fists. This attack deals 1d4 Bludgeoning damage + your STR Dmg.', th: 'คุณทำการโจมตีระยะประชิดด้วยหมัดเปล่า การโจมตีนี้ทำให้เกิดความเสียหาย 1d4 การทุบตี + STR Dmg ของคุณ' },
    icon: 'lacerate',
    thumbnail: 'lacerate-action.jpg',
    tags: [ 'combat', 'basic', 'unarmed' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'lacerate',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.MAIN_HANDED,
    actionCost: ACTION_COST_TYPE.SLOW,
    level: {
      1: {
        durabilityPointsCost: 2,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: ACTION_ITEM_OPTION.DAMAGE,
        applyCondition: [
          {
            conditionId: 'condition-bleed',
            overrideDuration: 3
          }
        ]
      }
    }
  },
  {
    id: 'action-rush-attack',
    name: { en: 'Rush Attack', th: 'โจมตีพุ่งชน' },
    description: { en: 'Charge forward and attack the first enemy in your way, possibly pushing them Off Balance. Does not provoke Opportunity Attacks.', th: 'พุ่งไปข้างหน้าและโจมตีศัตรูคนแรกที่ขวางทาง อาจทำให้พวกเขาสูญเสียสมดุล ไม่ก่อให้เกิดการโจมตีโอกาส' },
    icon: 'rush-attack',
    thumbnail: 'rush-attack-action.jpg',
    tags: [ 'combat', 'proficiency', 'weapon', 'movement' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'rush-attack',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.MAIN_HANDED,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        durabilityPointsCost: 1,
        range: 9,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-piercing',
          value: { type: VALUE_TYPE.DICE, formula: '1d4' },
          modifierFormula: 'attr-str-or-dex-based-damage'
        } ],
        applyCondition: [
          {
            conditionId: 'condition-off-balance',
            overrideDuration: 2
          }
        ],
        usage: {
          type: ACTION_USAGE_TYPE.REST,
          maxNumberOfUse: 1
        }
      }
    }
  },
  {
    id: 'action-pommel-strike',
    name: { en: 'Pommel Strike', th: 'โจมตีด้ามอาวุธ' },
    description: { en: 'Make a non-lethal attack against an enemy and possibly Daze them.', th: 'ทำการโจมตีที่ไม่ร้ายแรงต่อศัตรูและอาจทำให้พวกเขามึนงง' },
    icon: 'pommel-strike',
    thumbnail: 'pommel-strike-action.jpg',
    tags: [ 'combat', 'proficiency', 'weapon', 'non-lethal' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'pommel-strike',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    proficiencyId: ACTION_ITEM_OPTION.PROFICIENCY,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.MAIN_HANDED,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        durabilityPointsCost: 1,
        range: 1.5,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-bludgeoning',
          value: { type: VALUE_TYPE.DICE, formula: '1d4' }
        } ],
        applyCondition: [
          {
            conditionId: 'condition-dazed',
            overrideDuration: 2
          }
        ],
        usage: {
          type: ACTION_USAGE_TYPE.REST,
          maxNumberOfUse: 1
        }
      }
    }
  },

  // command actions
  {
    id: 'action-fire-bolt',
    name: { en: 'Fire Bolt', th: 'ลูกไฟ' },
    description: { en: 'You throw a fire bolt at a target. This attack deals 1d4 Fire damage + your TEC Dmg.', th: 'คุณขว้างลูกไฟไปที่เป้าหมาย การโจมตีนี้ทำให้เกิดความเสียหาย 1d4 การลุกไหม้ + TEC Dmg ของคุณ' },
    icon: 'fire-bolt',
    thumbnail: 'fire-bolt-action.jpg',
    tags: [ 'combat', 'ranged', 'command' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.COMMAND,
    stackId: 'fire-bolt',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    commandLevel: 1,
    actionCost: ACTION_COST_TYPE.SLOW,
    level: {
      1: {
        focusPointsCost: 1,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '2d6' }
        } ]
      },
      2: {
        focusPointsCost: 2,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '3d6' }
        } ]
      },
      3: {
        focusPointsCost: 3,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '4d6' }
        } ]
      },
      4: {
        focusPointsCost: 4,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '5d6' }
        } ]
      },
      5: {
        focusPointsCost: 5,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '6d6' }
        } ]
      }
    }
  },
  {
    id: 'action-burning-hands',
    name: { en: 'Burning Hands', th: 'มือไฟ' },
    description: { en: 'You shoot a flaming cone from your fingertips, dealing fire damage to enemies in a cone area.', th: 'คุณยิงกรวยไฟจากปลายนิ้ว ทำให้เกิดความเสียหายจากไฟต่อศัตรูในพื้นที่รูปกรวย' },
    icon: 'burning-hands',
    thumbnail: 'burning-hands-action.jpg',
    tags: [ 'combat', 'area', 'command', 'fire', 'evocation' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.COMMAND,
    stackId: 'burning-hands',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    commandLevel: 1,
    actionCost: ACTION_COST_TYPE.SLOW,
    level: {
      1: {
        focusPointsCost: 1,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.SPHERE,
            numberOfTargets: 1,
            radius: 5
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '3d6' }
        } ]
      },
      2: {
        focusPointsCost: 2,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.SPHERE,
            numberOfTargets: 1,
            radius: 5
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '4d6' }
        } ]
      },
      3: {
        focusPointsCost: 3,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.SPHERE,
            numberOfTargets: 1,
            radius: 5
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '5d6' }
        } ]
      },
      4: {
        focusPointsCost: 4,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.SPHERE,
            numberOfTargets: 1,
            radius: 5
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '6d6' }
        } ]
      },
      5: {
        focusPointsCost: 5,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.SPHERE,
            numberOfTargets: 1,
            radius: 5
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '7d6' }
        } ]
      }
    }
  },
  {
    id: 'action-hellish-rebuke',
    name: { en: 'Hellish Rebuke', th: 'การตอบโต้จากนรก' },
    description: { en: 'React to your next attacker with flames that deal fire damage. On a successful save, the target still takes half damage.', th: 'ตอบโต้ผู้โจมตีคนต่อไปของคุณด้วยเปลวไฟที่ทำให้เกิดความเสียหายจากไฟ หากการป้องกันสำเร็จ เป้าหมายยังคงได้รับความเสียหายครึ่งหนึ่ง' },
    icon: 'hellish-rebuke',
    thumbnail: 'hellish-rebuke-action.jpg',
    tags: [ 'combat', 'reaction', 'command', 'fire', 'evocation' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.COMMAND,
    stackId: 'hellish-rebuke',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    commandLevel: 1,
    actionCost: ACTION_COST_TYPE.REACTION,
    level: {
      1: {
        focusPointsCost: 1,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '2d10' }
        } ]
      },
      2: {
        focusPointsCost: 2,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '3d10' }
        } ]
      },
      3: {
        focusPointsCost: 3,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '4d10' }
        } ]
      },
      4: {
        focusPointsCost: 4,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '5d10' }
        } ]
      },
      5: {
        focusPointsCost: 5,
        hit: {
          type: ACTION_HIT_TYPE.DIFFICULTY_CLASS,
          savingTargetId: 'attr-dexterity',
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: [ {
          type: 'damage-type-fire',
          value: { type: VALUE_TYPE.DICE, formula: '6d10' }
        } ]
      }
    }
  },

  // utility actions
  {
    id: 'action-throw',
    name: { en: 'Throw', th: 'ขว้าง' },
    description: { en: 'You throw an item at a target. If the item has the Thrown property, it uses its normal damage. If it does not, the damage is calculated based on the item\'s weight.', th: 'คุณขว้างไอเทมไปที่เป้าหมาย หากไอเทมมีคุณสมบัติ Thrown จะใช้ความเสียหายปกติ หากไม่มี ความเสียหายจะคำนวณตามน้ำหนักของไอเทม' },
    icon: 'throwing-knife',
    thumbnail: 'throw-action.jpg',
    tags: [ 'combat', 'basic', 'ranged' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'throw',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.ANY,
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        durabilityPointsCost: 1,
        range: 18,
        hit: {
          type: ACTION_HIT_TYPE.ATTACK_ROLL,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        damage: ACTION_ITEM_OPTION.DAMAGE
      }
    }
  },
  {
    id: 'action-jump',
    name: { en: 'Jump', th: 'กระโดด' },
    description: { en: 'You can jump vertically or horizontally up to a distance equal to your Jump Distance (JD).', th: 'คุณสามารถกระโดดในแนวตั้งหรือแนวนอนได้ไกลเท่ากับระยะการกระโดด (JD) ของคุณ' },
    icon: 'jump',
    thumbnail: 'jump-action.jpg',
    tags: [ 'movement', 'basic', 'physical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'jump',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        movementSpeedCost: 3,
        hit: {
          type: ACTION_HIT_TYPE.SELF
        }
      }
    }
  },
  {
    id: 'action-climb',
    name: { en: 'Climb', th: 'ปีน' },
    description: { en: 'You can climb up or down a surface up to a distance equal to your Climb Distance (CD).', th: 'คุณสามารถปีนขึ้นหรือลงพื้นผิวได้ไกลเท่ากับระยะการปีน (CD) ของคุณ' },
    icon: 'climb',
    thumbnail: 'climb-action.jpg',
    tags: [ 'movement', 'basic', 'physical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'climb',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        movementSpeedCost: 3,
        hit: {
          type: ACTION_HIT_TYPE.SELF
        }
      }
    }
  },
  {
    id: 'action-stealth',
    name: { en: 'Stealth', th: 'แอบซุ่ม' },
    description: { en: 'You make a Stealth skill check to try and become hidden or move without being noticed.', th: 'คุณทำการตรวจสอบทักษะ Stealth เพื่อพยายามซ่อนตัวหรือเคลื่อนไหวโดยไม่ถูกสังเกต' },
    icon: 'stealth',
    thumbnail: 'stealth-action.jpg',
    tags: [ 'skill', 'basic', 'stealth' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'stealth',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.SELF
        }
      }
    }
  },
  {
    id: 'action-focus',
    name: { en: 'Focus', th: 'สมาธิ' },
    description: { en: 'You take a moment to gather your focus, restoring 1 Focus Points (FP).', th: 'คุณใช้เวลาสักครู่เพื่อรวบรวมสมาธิ ฟื้นฟู Focus Points (FP) 1 แต้ม' },
    icon: 'focus',
    thumbnail: 'focus-action.jpg',
    tags: [ 'recovery', 'basic', 'mental' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'focus',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.SELF
        },
        restore: [ {
          attributeId: 'attr-focus-points',
          value: { type: VALUE_TYPE.CONSTANT, value: 1 }
        } ]
      }
    }
  },
  {
    id: 'action-deep-focus',
    name: { en: 'Deep Focus', th: 'สมาธิลึก' },
    description: { en: 'You take a break to gather your focus, restoring 1 + floor(SEN/2) Focus Points (FP).', th: 'คุณใช้เวลาพักเพื่อรวบรวมสมาธิ ฟื้นฟู Focus Points (FP) 1 + floor(SEN/2) แต้ม' },
    icon: 'deep-focus',
    thumbnail: 'deep-focus-action.jpg',
    tags: [ 'recovery', 'basic', 'mental' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'deep-focus',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    actionCost: ACTION_COST_TYPE.SLOW,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.SELF
        },
        restore: [ {
          attributeId: 'attr-focus-points',
          value: { type: VALUE_TYPE.CONSTANT, value: 2 },
          modifierFormula: 'attr-restore-focus-points'
        } ]
      }
    }
  },
  {
    id: 'action-sprint',
    name: { en: 'Sprint', th: 'วิ่งเร็ว' },
    description: { en: 'You can move up to your maximum Movement Speed (MS) value this turn.', th: 'คุณสามารถเคลื่อนไหวได้สูงสุดเท่ากับค่า Movement Speed (MS) ของคุณในเทิร์นนี้' },
    icon: 'sprint',
    thumbnail: 'sprint-action.jpg',
    tags: [ 'movement', 'basic', 'physical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.UTILITY,
    stackId: 'sprint',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: true,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.SELF
        }
      }
    }
  },

  // special actions
  {
    id: 'action-first-aid',
    name: { en: 'First Aid', th: 'การรักษาเบื้องต้น' },
    description: { en: 'You use a medical\'s kit to treat wounds.', th: 'คุณใช้กล่องพยาบาลเพื่อทำการรักษาเบื้องต้น' },
    icon: 'first-aid',
    thumbnail: 'first-aid-action.jpg',
    tags: [ 'combat', 'basic', 'medical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'first-aid',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: false,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.ANY,
    requiredItemId: 'item-medicals-kit',
    proficiencyId: 'proficiency-medicals-kit',
    actionCost: ACTION_COST_TYPE.NORMAL,
    level: {
      1: {
        durabilityPointsCost: 1,
        hit: {
          type: ACTION_HIT_TYPE.ALWAYS_HIT,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        restore: [ {
          attributeId: 'attr-hit-points',
          value: { type: VALUE_TYPE.DICE, formula: '1d4' }
        } ]
      }
    }
  },
  {
    id: 'action-fire-bolt-innate',
    name: { en: 'Fire Bolt (Innate)', th: 'ลูกไฟ (อำนาจแต่เกิด)' },
    tags: [ 'combat', 'ranged', 'command', 'innate' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.COMMAND,
    stackId: 'fire-bolt-innate',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: false,
    overrideActionId: 'action-fire-bolt',
    limitLevel: 1
  },
  {
    id: 'action-inspiration-melody',
    name: { en: 'Inspiration Melody', th: 'เพลงสร้างความรู้สึก' },
    description: { en: 'You play a melody that inspires your allies to reroll any die immediately after rolling it, and you must use the new roll.', th: 'คุณเล่นเพลงที่สร้างความรู้สึกให้ผู้คนร่วมกัน ผู้คนสามารถทอยลูกเต๋าใหม่ทันที และต้องใช้ค่าจากการทอยลูกเต๋าใหม่ทันที' },
    icon: 'inspiration-melody',
    thumbnail: 'inspiration-melody-action.jpg',
    tags: [ 'instrument' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.ITEM,
    stackId: 'inspiration-melody',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: false,
    requiredItem: ACTION_REQUIRED_ITEM_TYPE.ANY,
    requiredItemProficiency: true,
    proficiencyId: 'proficiency-instrument',
    actionCost: ACTION_COST_TYPE.REACTION,
    level: {
      1: {
        usage: {
          type: ACTION_USAGE_TYPE.REST,
          maxNumberOfUse: 2
        },
        durabilityPointsCost: 1,
        range: 18,
        hit: {
          type: ACTION_HIT_TYPE.ALWAYS_HIT,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        }
      }
    }
  },
  {
    id: 'action-rage',
    name: { en: 'Rage', th: 'คลั่ง' },
    icon: 'rage',
    thumbnail: 'rage-action.jpg',
    tags: [ 'rage', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.SPECIAL,
    stackId: 'rage',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: false,
    actionCost: ACTION_COST_TYPE.FAST,
    level: {
      1: {
        focusPointsCost: ACTION_COST_OPTION.ALL,
        hit: {
          type: ACTION_HIT_TYPE.SELF
        },
        applyCondition: [
          {
            conditionId: 'condition-rage',
            overrideDuration: 1
          }
        ]
      }
    }
  },
  {
    id: 'action-inspire',
    name: { en: 'Inspire', th: 'ปลุกใจ' },
    icon: 'inspire',
    thumbnail: 'inspire-action.jpg',
    tags: [ 'inspire', 'tier1' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.SPECIAL,
    stackId: 'inspiration',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: false,
    actionCost: ACTION_COST_TYPE.REACTION,
    level: {
      1: {
        range: 18,
        hit: {
          type: ACTION_HIT_TYPE.ALWAYS_HIT,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        applyCondition: [
          {
            conditionId: 'condition-inspired'
          }
        ],
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: {
              th: 'คุณสามารถปลุกใจเพื่อให้เป้าหมาย "ได้รับแรงบรรดาลใจ" โดยคุณสามารถใช้แอคชั่นนี้ได้ 1 ครั้งต่อ 1 คนต่อการพัก',
              en: 'You can inspire your allies to gain the "Inspired" condition, allowing you to use this action once per ally per rest.'
            }
          }
        ]
      }
    }
  },
  {
    id: 'action-motivate',
    name: { en: 'Motivate', th: 'ปลุกใจ' },
    icon: 'motivate',
    thumbnail: 'motivate-action.jpg',
    tags: [ 'inspire', 'tier2' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.SPECIAL,
    stackId: 'inspiration',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 2,
    isSystem: false,
    actionCost: ACTION_COST_TYPE.REACTION,
    level: {
      1: {
        range: 18,
        hit: {
          type: ACTION_HIT_TYPE.ALWAYS_HIT,
          target: {
            type: ACTION_HIT_TARGET_TYPE.AIM,
            numberOfTargets: 1
          }
        },
        applyCondition: [
          {
            conditionId: 'condition-inspired'
          }
        ],
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: {
              th: 'คุณสามารถปลุกใจเพื่อให้เป้าหมาย "ได้รับแรงบรรดาลใจ"',
              en: 'You can inspire your allies to gain the "Inspired" condition'
            }
          }
        ]
      }
    }
  },
  {
    id: 'action-conduct',
    name: { en: 'Conduct', th: 'นำแรงบรรดาลใจ' },
    icon: 'conduct',
    thumbnail: 'conduct-action.jpg',
    tags: [ 'inspiration', 'tier3' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    type: ACTION_TYPE.SPECIAL,
    stackId: 'conduct',
    stackType: ACTION_STACK_TYPE.STACK,
    stackPriority: 1,
    isSystem: false,
    actionCost: ACTION_COST_TYPE.SLOW,
    level: {
      1: {
        hit: {
          type: ACTION_HIT_TYPE.ALWAYS_HIT,
          target: {
            type: ACTION_HIT_TARGET_TYPE.SPHERE,
            numberOfTargets: 1,
            radius: 18
          }
        },
        applyCondition: [
          {
            conditionId: 'condition-inspired'
          }
        ],
        effects: [
          {
            type: SPECIALTY_EFFECT_TYPE.SPECIALTY,
            flavorText: {
              th: 'คุณสามารถปลุกใจผู้คนรอบตัวคุณเพื่อให้เป้าหมาย "ได้รับแรงบรรดาลใจ"',
              en: 'You can inspire your allies around you to gain the "Inspired" condition'
            }
          }
        ]
      }
    }
  }
];

export default mockActions;
