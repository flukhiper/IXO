import type { ActionConfig } from '@/types/config/action';

export const mockActions: ActionConfig[] = // --- Updated Sample Action Configurations ---
[
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
            formula: 'level / 2'
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
            formula: '2d4 + stat(wisdom-ability)'
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
          versusSaving: 'wisdom-saving-throw',
          formula: 'stat(charisma-ability)'
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
          formula: 'stat(strength-ability)'
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
        selfConditionIds: [ 'vulnerable' ]
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
        conditionIds: [ 'inspired' ],
        usageLimit: { cooldownTurns: 2 }
      }
    }
  },
  {
    id: 'mimic-ability',
    name: { en: 'Mimic Ability', th: 'เลียนแบบความสามารถ' },
    description: { en: 'Temporarily gain a basic ability from a recently defeated foe. (Used by Demonia Adaptive Copycat)', th: 'ได้รับความสามารถพื้นฐานจากศัตรูที่เพิ่งพ่ายแพ้ไปชั่วคราว (ใช้โดย Demonia Adaptive Copycat)' },
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
    description: { en: 'Sing an enchanting melody that can charm and put nearby enemies to sleep. (Used by Siren Song of Entrapment)', th: 'ร้องเพลงอันไพเราะที่สามารถสะกดจิตและทำให้ศัตรูใกล้เคียงหลับไป (ใช้โดย Siren Song of Entrapment)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'debuff',
    icon: 'https://placehold.co/32x32/FFC0CB/000000?text=🎶',
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
          formula: 'stat(charisma-ability)'
        },
        conditionIds: [ 'charmed', 'sleep' ],
        target: {
          type: 'area',
          range: { type: 'fixed', value: 0 },
          radius: 20,
          targetCount: 0
        },
        usageLimit: { cooldownTurns: 5 }
      }
    }
  },
  {
    id: 'equipped-strike',
    name: { en: 'Equipped Strike', th: 'โจมตีด้วยอาวุธ' },
    description: { en: 'Perform a basic attack using the currently equipped weapon in your main hand. Damage type, range, and hit accuracy are determined by the weapon itself, modified by your proficiency.', th: 'ทำการโจมตีพื้นฐานโดยใช้อาวุธที่สวมใส่ในมือหลัก ประเภทความเสียหาย ระยะ และความแม่นยำจะถูกกำหนดโดยตัวอาวุธเอง และปรับเปลี่ยนตามความชำนาญของคุณ' },
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
          baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.hit.baseValue' },
          formula: 'stat(strength-modifier) || stat(dexterity-modifier) + level'
        },
        damages: [
          {
            damageTypeId: 'piercing',
            baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.damages.0.baseValue' },
            formula: 'stat(strength-modifier)'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.property.range.normal' },
          targetCount: 1
        }
      }
    }
  },
  {
    id: 'echo-step',
    name: { en: 'Echo Step', th: 'ก้าวสะท้อน' },
    description: { en: 'Teleport up to 3 meters to a space you can see. (Used by Elf Ancient Gift)', th: 'เทเลพอร์ตได้ไกลสูงสุด 3 เมตร ไปยังพื้นที่ที่คุณมองเห็น (ใช้โดย Elf Ancient Gift)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'special',
    icon: 'https://placehold.co/32x32/87CEEB/000000?text=👣',
    tags: [ 'teleport', 'movement', 'elf' ],
    isCrucial: false,
    pathId: 'path-of-ingenuity',
    levelConfigs: {
      1: {
        costs: [],
        target: { type: 'self' },
        usageLimit: { maxUses: 1, resetOn: 'short-downtime' }
      }
    }
  },
  {
    id: 'spark-of-force',
    name: { en: 'Spark of Force', th: 'ประกายพลัง' },
    description: { en: 'Perform a basic ranged force attack (1d10 force damage, 10-meter range, uses Attack Roll). (Used by Elf Ancient Gift)', th: 'ทำการโจมตีด้วยพลังระยะไกลขั้นพื้นฐาน (สร้างความเสียหายพลัง 1d10, ระยะ 10 เมตร, ใช้การทอยโจมตี) (ใช้โดย Elf Ancient Gift)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/4682B4/FFFFFF?text=💥',
    tags: [ 'ranged', 'force', 'elf' ],
    isCrucial: false,
    pathId: 'path-of-annihilation',
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 1 } }
        ],
        hit: {
          type: 'attack-roll',
          baseValue: { type: 'dice', formula: '1d20' },
          formula: 'stat(intelligence-ability)'
        },
        damages: [
          {
            damageTypeId: 'force',
            baseValue: { type: 'dice', formula: '1d10' }
          }
        ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 10 },
          targetCount: 1
        }
      }
    }
  },
  {
    id: 'ancestral-guard',
    name: { en: 'Ancestral Guard', th: 'การป้องกันบรรพบุรุษ' },
    description: { en: 'Reduce incoming damage by 5. Triggered as a reaction. (Used by Elf Ancient Gift)', th: 'ลดความเสียหายที่ได้รับลง 5 หน่วย ถูกกระตุ้นเป็นการตอบโต้ (ใช้โดย Elf Ancient Gift)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'support',
    icon: 'https://placehold.co/32x32/B0C4DE/000000?text=🛡️',
    tags: [ 'defense', 'reaction', 'elf' ],
    isCrucial: false,
    pathId: 'path-of-fortitude',
    levelConfigs: {
      1: {
        costs: [],
        target: { type: 'self' },
        usageLimit: { maxUses: 1, resetOn: 'turn' }
      }
    }
  },
  {
    id: 'ancient-instinct',
    name: { en: 'Ancient Instinct', th: 'สัญชาตญาณโบราณ' },
    description: { en: 'Gain +3 to any one ability check. (Used by Elf Ancient Gift)', th: 'ได้รับ +3 ในการตรวจสอบความสามารถใดๆ (ใช้โดย Elf Ancient Gift)' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'support',
    icon: 'https://placehold.co/32x32/D3D3D3/000000?text=💡',
    tags: [ 'utility', 'buff', 'elf' ],
    isCrucial: false,
    pathId: 'path-of-ingenuity',
    levelConfigs: {
      1: {
        costs: [],
        target: { type: 'self' },
        usageLimit: { maxUses: 1, resetOn: 'short-downtime' }
      }
    }
  },
  {
    id: 'main-hand-attack',
    name: { en: 'Main Hand Attack', th: 'โจมตีมือหลัก' },
    description: { en: 'Make a basic melee or ranged attack with the weapon equipped in your main hand. Damage and hit accuracy depend on the weapon and your stats.', th: 'โจมตีพื้นฐานระยะประชิดหรือระยะไกลด้วยอาวุธที่สวมใส่ในมือหลัก ความเสียหายและความแม่นยำขึ้นอยู่กับอาวุธและค่าสถานะของคุณ' },
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
          baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.hit.baseValue' },
          formula: 'stat(dexterity-modifier) || stat(strength-modifier) + level'
        },
        damages: [
          {
            damageTypeId: 'slashing',
            baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.damages.0.baseValue' },
            formula: 'stat(strength-modifier) || stat(dexterity-modifier)'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.property.range.normal' },
          targetCount: 1
        },
        restrictions: { requiredWeaponTags: [ 'main-hand' ] }
      }
    }
  },
  {
    id: 'ranged-attack',
    name: { en: 'Ranged Attack', th: 'โจมตีระยะไกล' },
    description: { en: 'Make a basic ranged attack with your equipped ranged weapon. Uses Dexterity for accuracy and damage.', th: 'โจมตีระยะไกลขั้นพื้นฐานด้วยอาวุธระยะไกลที่สวมใส่ ใช้ความชำนาญสำหรับความแม่นยำและความเสียหาย' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/8B4513/FFFFFF?text=🏹',
    tags: [ 'weapon', 'ranged', 'basic' ],
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
          baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.hit.baseValue' },
          formula: 'stat(dexterity-modifier) + level'
        },
        damages: [
          {
            damageTypeId: 'piercing',
            baseValue: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.damages.0.baseValue' },
            formula: 'stat(dexterity-modifier)'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'ref', ref: 'equip-slot', id: 'main-hand.weapon.property.range.normal' },
          targetCount: 1
        },
        restrictions: { requiredWeaponTags: [ 'ranged' ] }
      }
    }
  },
  {
    id: 'off-hand-attack-melee',
    name: { en: 'Off-Hand Attack (Melee)', th: 'โจมตีมือรอง (ระยะประชิด)' },
    description: { en: 'Make an additional melee attack with a Light weapon in your off-hand. Requires a bonus action.', th: 'โจมตีระยะประชิดเพิ่มเติมด้วยอาวุธเบาในมือรอง ต้องใช้โบนัสแอคชั่น' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/A9A9A9/000000?text=🗡️',
    tags: [ 'weapon', 'melee', 'off-hand', 'bonus-action' ],
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
          baseValue: { type: 'ref', ref: 'equip-slot', id: 'off-hand.weapon.hit.baseValue' },
          formula: 'stat(dexterity-modifier) || stat(strength-modifier) + level'
        },
        damages: [
          {
            damageTypeId: 'slashing',
            baseValue: { type: 'ref', ref: 'equip-slot', id: 'off-hand.weapon.damages.0.baseValue' },
            formula: '0'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 1.5 },
          targetCount: 1
        },
        restrictions: { requiredWeaponTags: [ 'light', 'off-hand' ] }
      }
    }
  },
  {
    id: 'off-hand-attack-ranged',
    name: { en: 'Off-Hand Attack (Ranged)', th: 'โจมตีมือรอง (ระยะไกล)' },
    description: { en: 'Make an additional ranged attack with a Light ranged weapon in your off-hand. Requires a bonus action.', th: 'โจมตีระยะไกลเพิ่มเติมด้วยอาวุธระยะไกลเบาในมือรอง ต้องใช้โบนัสแอคชั่น' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/696969/FFFFFF?text=🎯',
    tags: [ 'weapon', 'ranged', 'off-hand', 'bonus-action' ],
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
          baseValue: { type: 'ref', ref: 'equip-slot', id: 'off-hand.weapon.hit.baseValue' },
          formula: 'stat(dexterity-modifier) + level'
        },
        damages: [
          {
            damageTypeId: 'piercing',
            baseValue: { type: 'ref', ref: 'equip-slot', id: 'off-hand.weapon.damages.0.baseValue' },
            formula: '0'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'ref', ref: 'equip-slot', id: 'off-hand.weapon.property.range.normal' },
          targetCount: 1
        },
        restrictions: { requiredWeaponTags: [ 'light', 'ranged', 'off-hand' ] }
      }
    }
  },
  {
    id: 'throw-item',
    name: { en: 'Throw', th: 'ขว้าง' },
    description: { en: 'Throw an equipped weapon or item at a target. Damage and effects depend on the thrown item.', th: 'ขว้างอาวุธหรือสิ่งของที่สวมใส่อยู่ใส่เป้าหมาย ความเสียหายและผลกระทบขึ้นอยู่กับสิ่งของที่ขว้าง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'attack',
    icon: 'https://placehold.co/32x32/8B4513/FFFFFF?text=✋',
    tags: [ 'utility', 'thrown', 'offensive' ],
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
          baseValue: { type: 'ref', ref: 'selected-item', id: 'item.weapon.hit.baseValue' },
          formula: 'stat(strength-modifier) || stat(dexterity-modifier) + level'
        },
        damages: [
          {
            damageTypeId: 'bludgeoning',
            baseValue: { type: 'ref', ref: 'selected-item', id: 'item.damages.0.baseValue' },
            formula: 'stat(strength-modifier)'
          }
        ],
        target: {
          type: 'select',
          range: { type: 'ref', ref: 'selected-item', id: 'item.property.thrown.range.normal' },
          targetCount: 1
        }
      }
    }
  },
  {
    id: 'help-action',
    name: { en: 'Help', th: 'ช่วยเหลือ' },
    description: { en: 'Expend your action to help an ally, granting them advantage on their next ability check or attack roll, or reviving them from a downed state.', th: 'ใช้แอคชั่นของคุณเพื่อช่วยเหลือพันธมิตร ทำให้พวกเขามีข้อได้เปรียบในการตรวจสอบความสามารถหรือการทอยโจมตีครั้งต่อไป หรือฟื้นคืนชีพจากสถานะล้ม' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'support',
    icon: 'https://placehold.co/32x32/32CD32/FFFFFF?text=🤝',
    tags: [ 'utility', 'support', 'ally' ],
    isCrucial: false,
    isConcentration: false,
    pathId: 'any',
    requiredCharacterLevel: 1,
    levelConfigs: {
      1: {
        costs: [
          { attributeId: 'action-point', usageValue: { type: 'fixed', value: 1 } }
        ],
        target: {
          type: 'select',
          range: { type: 'fixed', value: 1.5 },
          targetCount: 1
        }
      }
    }
  }
];
