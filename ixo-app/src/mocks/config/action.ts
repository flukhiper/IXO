import { ACTION_ARCHETYPE, ACTION_COST_TYPE, ACTION_HIT_TYPE, ACTION_RANGE_TYPE, ACTION_STACK_TYPE, ACTION_TYPE } from '@/constants/config/action';
import { EFFECT_TYPE } from '@/constants/config/effect';
import type { ActionConfig } from '@/types/config/action';

export const mockActions: ActionConfig[] = [
];

export const mockClassMeisterActions: ActionConfig[] = [
  {
    id: 'action-gundam-meister',
    name: { 
      en: 'Gundam meister', 
      th: 'กันดั้ม ไมสเตอร์' 
    },
    description: { 
      en: 'Gundam, let\'s fight!', 
      th: 'กันดั้ม ออกต่อสู้' 
    },
    icon: 'gundam-meister',
    thumbnail: 'gundam-meister',
    tags: [ 'special', 'meister' ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: false,
    type: ACTION_TYPE.SPECIAL,
    archetype: ACTION_ARCHETYPE.UTILITY,
    stack: {
      type: ACTION_STACK_TYPE.STACK,
      id: 'gundam-meister',
      priority: 1
    },
    actionCost: ACTION_COST_TYPE.SLOW,
    requiredConcentration: false,
    level: {
      1: {
        range: {
          type: ACTION_RANGE_TYPE.MELEE
        },
        hit: {
          type: ACTION_HIT_TYPE.SELF
        },
        effects: [
          {
            type: EFFECT_TYPE.SPECIAL,
            flavorText: {
              en: 'You can control any mecha by ignoring the proficiency level.',
              th: 'คุณสามารถขึ้นบังคับหุ่นยนต์อะไรก็ได้โดยไม่ต้องคำนึงถึงระดับความชำนาญ'
            }
          }
        ]
      }
    }
  }
];

const mockAllActions = [
  ...mockActions,
  ...mockClassMeisterActions
];

export default mockAllActions;
