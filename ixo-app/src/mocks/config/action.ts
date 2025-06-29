import type { ActionConfig } from '@/types/config/action';

export const mockActions: ActionConfig[] = // --- Sample Action Configurations ---
[ 
  {
    id: 'attack',
    name: { en: 'Attack', th: 'โจมตี' },
    description: { en: 'Perform a basic attack using the currently equipped weapon in your main hand. Damage type and range are determined by the weapon itself.', th: 'ทำการโจมตีพื้นฐานโดยใช้อาวุธที่สวมใส่ในมือหลัก ประเภทความเสียหายและระยะจะถูกกำหนดโดยตัวอาวุธเอง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/C0C0C0/000000?text=⚔️',
    tags: [ 'weapon', 'melee', 'ranged', 'basic' ],
    isCrucial: false,
    isConcentration: false,
    pathId: 'any',
    requiredCharacterLevel: 1,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 1 } }
        ],
        hit: {
          type: 'attack-roll',
          baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand' },
          formula: 'attr(strength-modifier)'
        },
        damages: [
          {
            damageTypeId: 'piercing', // Placeholder, ideally this would also come from weapon
            baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand' },
            formula: 'attr(strength-modifier)'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'ref', ref: 'equip-slot', id: 'main-hand' },
          targetCount: 1
        }
      }
    }
  },
  {
    id: 'fire-blast',
    name: { en: 'Fire Blast', th: 'ระเบิดไฟ' },
    description: { en: 'Unleash a searing cone of fire, damaging and potentially burning enemies.', th: 'ปลดปล่อยเปลวไฟรูปกรวย เผาผลาญสร้างความเสียหายและอาจทำให้ศัตรูติดไฟ' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/FF4500/FFFFFF?text=🔥',
    tags: [ 'spell', 'cone-aoe', 'fire', 'offensive' ],
    isCrucial: false,
    isConcentration: false,
    pathId: 'path-of-annihilation',
    requiredCharacterLevel: 3,
    requiredStatThresholds: [ { statId: 'intelligence', min: 14 } ],
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'energy-point', usageValue: { type: 'fixed', value: 6 } }
        ],
        hit: {
          type: 'difficulty-class',
          baseValue: { type: 'fixed', value: 12 },
          versusSaving: 'dexterity-saving-throw',
          formula: 'stat(intelligence)'
        },
        damages: [
          {
            damageTypeId: 'fire',
            baseValue: { type: 'dice', formula: '3d6' },
            formula: 'characterLevel / 2'
          }
        ],
        conditionIds: [ 'burned' ],
        target: {
          type: 'cone',
          range: { type: 'fixed', value: 15 },
          radius: 10,
          targetCount: 0
        },
        usageLimit: { maxUses: 2, resetOn: 'short-downtime', cooldownTurns: 1 },
        restrictions: { requiredWeaponTags: [ 'magic-focus' ] }
      }
    }
  },
  {
    id: 'blessed-mend',
    name: { en: 'Blessed Mend', th: 'การเยียวยาพร' },
    description: { en: 'Channel divine energy to restore an ally\'s health.', th: 'ส่งพลังศักดิ์สิทธิ์เพื่อฟื้นฟูพลังชีวิตของพันธมิตร' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'support',
    icon: 'https://placehold.co/32x32/3CB371/FFFFFF?text=✚',
    tags: [ 'healing', 'single-target', 'divine' ],
    isCrucial: false,
    pathId: 'path-of-renewal',
    requiredCharacterLevel: 1,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'energy-point', usageValue: { type: 'fixed', value: 4 } }
        ],
        restores: [
          {
            attributeId: 'hit-point',
            formula: '2d4'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 60 },
          targetCount: 1
        },
        usageLimit: { maxUses: 3, resetOn: 'full-downtime' }
      }
    }
  },
  {
    id: 'shadow-bind',
    name: { en: 'Shadow Bind', th: 'พันธนาการเงา' },
    description: { en: 'Weave dark magic to bind a foe, rendering them stunned.', th: 'ร่ายเวทมนตร์แห่งความมืดเพื่อผูกมัดศัตรู ทำให้พวกเขาติดสถานะมึนงง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'debuff',
    icon: 'https://placehold.co/32x32/1C1C1C/FFFFFF?text=⛓️',
    tags: [ 'spell', 'control', 'single-target', 'dark' ],
    isCrucial: false,
    isConcentration: true,
    pathId: 'path-of-dominion',
    requiredCharacterLevel: 2,
    requiredStatThresholds: [ { statId: 'charisma', min: 12 } ],
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'energy-point', usageValue: { type: 'fixed', value: 5 } }
        ],
        hit: {
          type: 'difficulty-class',
          baseValue: { type: 'fixed', value: 11 },
          versusSaving: 'sense-saving-throw',
          formula: 'stat(charisma)'
        },
        conditionIds: [ 'stunned' ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 30 },
          targetCount: 1
        },
        usageLimit: { cooldownTurns: 3 }
      }
    }
  },
  {
    id: 'reckless-strike',
    name: { en: 'Reckless Strike', th: 'การโจมตีไม่ยั้ง' },
    description: { en: 'A powerful, all-in attack that leaves you vulnerable but deals massive damage.', th: 'การโจมตีที่ทรงพลังและทุ่มสุดตัวที่ทำให้คุณอ่อนแอแต่สร้างความเสียหายมหาศาล' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/B22222/FFFFFF?text=⚔️',
    tags: [ 'melee', 'single-target', 'risky' ],
    isCrucial: true,
    pathId: 'path-of-annihilation',
    requiredCharacterLevel: 1,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 2 } }
        ],
        hit: {
          type: 'attack-roll',
          baseValue: { type: 'dice', formula: '1d20' },
          formula: 'stat(strength)'
        },
        damages: [
          {
            damageTypeId: 'bludgeoning',
            baseValue: { type: 'dice', formula: '2d8' },
            formula: 'stat(strength-modifier) * 2'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 5 },
          targetCount: 1
        },
        selfConditionIds: [ 'vulnerable' ] // Assumed condition making the user vulnerable
      }
    }
  },
  {
    id: 'inspect-mechanism',
    name: { en: 'Inspect Mechanism', th: 'ตรวจสอบกลไก' },
    description: { en: 'Examine a device or construct to uncover its functions or weaknesses.', th: 'ตรวจสอบอุปกรณ์หรือโครงสร้างเพื่อค้นหาฟังก์ชันหรือจุดอ่อน' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'common',
    icon: 'https://placehold.co/32x32/FFD700/000000?text=⚙️',
    tags: [ 'utility', 'exploration', 'interaction' ],
    isCrucial: false,
    pathId: 'path-of-ingenuity',
    requiredStatThresholds: [ { statId: 'intelligence', min: 10 } ],
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 1 } }
        ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 10 },
          targetCount: 1
        },
        selfConditionIds: [],
        restrictions: { requiredWeaponTags: [ 'tool' ] }
      }
    }
  },
  {
    id: 'galvanizing-presence',
    name: { en: 'Galvanizing Presence', th: 'การปรากฏตัวที่สร้างแรงบันดาลใจ' },
    description: { en: 'Inspire allies within an area, granting them temporary buffs.', th: 'สร้างแรงบันดาลใจให้พันธมิตรในพื้นที่ มอบบัฟชั่วคราวให้พวกเขา' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'support',
    icon: 'https://placehold.co/32x32/DAA520/FFFFFF?text=🌟',
    tags: [ 'buff', 'area-of-effect', 'morale' ],
    isCrucial: false,
    pathId: 'path-of-influence',
    requiredCharacterLevel: 2,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 3 } }
        ],
        target: {
          type: 'area',
          range: { type: 'fixed', value: 0 },
          radius: 15,
          targetCount: 0
        },
        conditionIds: [ 'inspired' ], // Assumed condition to be defined elsewhere
        usageLimit: { cooldownTurns: 2 }
      }
    }
  },
  {
    id: 'mimic-ability',
    name: { en: 'Mimic Ability', th: 'เลียนแบบความสามารถ' },
    description: { en: 'Temporarily gain a basic ability from a recently defeated foe.', th: 'ได้รับความสามารถพื้นฐานจากศัตรูที่เพิ่งพ่ายแพ้ไปชั่วคราว' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'special',
    icon: 'https://placehold.co/32x32/800080/FFFFFF?text=🎭',
    tags: [ 'mimicry', 'utility', 'demonia' ],
    isCrucial: false,
    pathId: 'path-of-ingenuity',
    requiredCharacterLevel: 1,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 1 } }
        ],
        target: {
          type: 'self'
        },
        usageLimit: { maxUses: 1, resetOn: 'full-downtime' }
      }
    }
  },
  {
    id: 'siren-lullaby',
    name: { en: 'Siren\'s Lullaby', th: 'เพลงกล่อมประสาทไซเรน' },
    description: { en: 'Sing an enchanting melody that can charm and put nearby enemies to sleep.', th: 'ร้องเพลงอันไพเราะที่สามารถสะกดจิตและทำให้ศัตรูใกล้เคียงหลับไป' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'debuff',
    icon: 'https://placehold.co/32x32/FFC0CB/000000?text=�',
    tags: [ 'charm', 'sleep', 'area-of-effect', 'siren' ],
    isCrucial: false,
    isConcentration: true,
    pathId: 'path-of-influence',
    requiredCharacterLevel: 1,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'energy-point', usageValue: { type: 'fixed', value: 4 } }
        ],
        hit: {
          type: 'difficulty-class',
          baseValue: { type: 'fixed', value: 11 },
          versusSaving: 'sense-saving-throw',
          formula: 'stat(charisma)'
        },
        conditionIds: [ 'charmed', 'sleep' ], // Assumed conditions
        target: {
          type: 'area',
          range: { type: 'fixed', value: 0 },
          radius: 20,
          targetCount: 0
        },
        usageLimit: { cooldownTurns: 5 }
      }
    }
  }
];