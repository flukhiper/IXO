import type { TraitConfig } from '@/types/config/trait';
import { BONUS_EFFECT_TYPE, EFFECT_TARGET_TYPE } from '@/constants/config/effect';

export const mockTraits: TraitConfig[] = [
  // 🧬 Wraith Dimension - Draconar
  {
    id: 'trait-dragonar',
    name: { en: 'Draconar', th: 'ดราโกนาร์' },
    description: { 
      en: 'A race that resembles dragons, some have green scales, gauntlets, or horns. Some can transform fully.',
      th: 'เผ่าพันธุ์ที่มีลักษณะคล้ายมังกร บางตนมีเกล็ดเขี้ยว กรงเล็บ หรือหาง บางกลุ่มสามารถแปลงร่างได้เต็มตัว'
    },
    icon: 'dragon-scales',
    thumbnail: 'draconar-trait.jpg',
    tags: [ 'draconar', 'defensive', 'dragon', 'wraith' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    value: 2,
    actionSelectionRule: [
      {
        actionIds: [ 'action-lacerate', 'action-rush-attack', 'action-pommel-strike' ],
        numberOfSelections: 1
      }
    ],
    effectSelectionRule: [
      {
        effects: [
          {
            type: BONUS_EFFECT_TYPE.BONUS,
            target: EFFECT_TARGET_TYPE.ATTRIBUTE,
            id: 'attr-damage-reduction',
            modifierFormula: '1'
          }
        ],
        numberOfSelections: 1
      }
    ]
  }
];

export default mockTraits;
