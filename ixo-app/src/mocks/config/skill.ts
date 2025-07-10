import type { SkillConfig } from '@/types/config/skill';
import { SKILL_STACK_TYPE } from '@/constants/config/skill';
import { KEYWORD_TYPE, PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';

export const mock: SkillConfig[] = [
  // === Tier 0 Role Skills ===
  // --- Attacker ---
  {
    id: 'skill-aggressive-follow-up',
    name: { en: 'Aggressive Follow-up', th: 'จู่โจมต่อเนื่อง' },
    description: { en: 'Once per turn, after you hit with an attack, win a contested Agility check vs. the target\'s Agility Save to make a Free single weapon strike against them.', th: 'หนึ่งครั้งต่อเทิร์น หลังโจมตีสำเร็จ ชนะเช็ค Agility แข่งกับ Agility Save ของเป้าหมายเพื่อโจมตีฟรีอีกครั้ง' },
    icon: 'aggressive-follow-up-icon',
    tags: [ 'attack', 'tier-0', 'role' ],
    stack: { id: 'aggressive-follow-up', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND },
          { type: KEYWORD_TYPE.FREE }
          // TODO: Implement contested Agility check logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-power-channeling',
    name: { en: 'Power Channeling', th: 'ระเบิดพลัง' },
    description: { en: 'As a Free action before an attack, activate this skill to have the attack deal an additional 1d6 damage of your chosen Boost type (once per combat).', th: 'ใช้ฟรีก่อนโจมตี เพิ่มดาเมจ 1d6 ตาม Boost ที่เลือก (1/การต่อสู้)' },
    icon: 'power-channeling-icon',
    tags: [ 'attack', 'tier-0', 'role' ],
    stack: { id: 'power-channeling', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          {
            type: KEYWORD_TYPE.BOOST,
            damageType: 'selected',
            baseValue: { type: VALUE_TYPE.DICE, formula: '1d6' }
          },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          { type: KEYWORD_TYPE.FREE }
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-widestrike-echo',
    name: { en: 'Widestrike Echo', th: 'สะท้อนฟันกว้าง' },
    description: { en: 'Once per turn, after hitting a target with the Full Attack common action, a second adjacent creature takes half damage, rounded down.', th: 'หนึ่งครั้งต่อเทิร์น หลังโจมตีด้วย Full Attack เป้าหมายที่อยู่ติดกันรับดาเมจครึ่งหนึ่ง ปัดลง' },
    icon: 'widestrike-echo-icon',
    tags: [ 'attack', 'tier-0', 'role' ],
    stack: { id: 'widestrike-echo', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND },
          { type: KEYWORD_TYPE.FULL }
          // TODO: Implement adjacent/half-damage logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-critical-pressure',
    name: { en: 'Critical Pressure', th: 'กดดันคริติคอล' },
    description: { en: 'When you score a Critical Pass on an attack, the target gains Disadvantage on its next attack roll or saving throw.', th: 'เมื่อโจมตีคริติคอล เป้าหมายเสียเปรียบในการโจมตีหรือเซฟครั้งถัดไป' },
    icon: 'critical-pressure-icon',
    tags: [ 'attack', 'tier-0', 'role' ],
    stack: { id: 'critical-pressure', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          // TODO: Implement critical/disadvantage logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // --- Defender ---
  {
    id: 'skill-bodyguard-reflex',
    name: { en: 'Bodyguard Reflex', th: 'ปฏิกิริยาผู้พิทักษ์' },
    description: { en: 'When an adjacent ally is hit, take the damage for them. You gain Tough 2 against that damage.', th: 'เมื่อเพื่อนที่อยู่ติดกันถูกโจมตี รับความเสียหายแทนและได้ Tough 2 ต่อดาเมจนั้น' },
    icon: 'bodyguard-reflex-icon',
    tags: [ 'defend', 'tier-0', 'role' ],
    stack: { id: 'bodyguard-reflex', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.TOUGH, value: 2 }
          // TODO: Implement damage redirection logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-flexible-guard',
    name: { en: 'Flexible Guard', th: 'ป้องกันยืดหยุ่น' },
    description: { en: 'While not wearing heavy armor or a shield, you gain a Block 1 and a +1 bonus to Agility Saves.', th: 'หากไม่ใส่เกราะหนักหรือโล่ ได้ Block 1 และ Agility Save +1' },
    icon: 'flexible-guard-icon',
    tags: [ 'defend', 'tier-0', 'role' ],
    stack: { id: 'flexible-guard', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.BLOCK, value: 1 }
          // TODO: Implement conditional bonus logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-fortified-stance',
    name: { en: 'Fortified Stance', th: 'ท่ายืนมั่นคง' },
    description: { en: 'You gain Block 2 and Tough 2 until the start of your next turn.', th: 'ได้ Block 2 และ Tough 2 จนถึงต้นเทิร์นถัดไป' },
    icon: 'fortified-stance-icon',
    tags: [ 'defend', 'tier-0', 'role' ],
    stack: { id: 'fortified-stance', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.STANCE },
          { type: KEYWORD_TYPE.BLOCK, value: 2 },
          { type: KEYWORD_TYPE.TOUGH, value: 2 }
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-quick-deploy',
    name: { en: 'Quick-Deploy', th: 'ใช้งานฉุกเฉิน' },
    description: { en: 'Use one defense-related consumable item as a Free action (once per combat).', th: 'ใช้ฟรี 1 ครั้งต่อการต่อสู้เพื่อใช้ไอเท็มป้องกัน' },
    icon: 'quick-deploy-icon',
    tags: [ 'defend', 'tier-0', 'role' ],
    stack: { id: 'quick-deploy', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.FREE },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT }
          // TODO: Implement consumable use logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // --- Support ---
  {
    id: 'skill-field-boost',
    name: { en: 'Field Boost', th: 'เสริมแรงสนาม' },
    description: { en: 'When an ally within 5m makes an attack roll or skill check, grant them a +2 bonus to that roll.', th: 'เมื่อเพื่อนในระยะ 5 ม. ทอยโจมตีหรือเช็คทักษะ ให้โบนัส +2' },
    icon: 'field-boost-icon',
    tags: [ 'support', 'tier-0', 'role' ],
    stack: { id: 'field-boost', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.REACTION }
          // TODO: Implement +2 bonus to ally's roll logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-tactical-jab',
    name: { en: 'Tactical Jab', th: 'แทงยุทธศาสตร์' },
    description: { en: 'Once per turn, when you hit with an attack, you may impose a -2 penalty to the target\'s next attack roll.', th: 'หนึ่งครั้งต่อเทิร์น เมื่อโจมตีสำเร็จ ลดการโจมตีครั้งถัดไปของเป้าหมาย -2' },
    icon: 'tactical-jab-icon',
    tags: [ 'support', 'tier-0', 'role' ],
    stack: { id: 'tactical-jab', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND }
          // TODO: Implement -2 penalty logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-combat-medic-reflex',
    name: { en: 'Combat Medic Reflex', th: 'ปฏิกิริยาแพทย์สนาม' },
    description: { en: 'When an ally within 3m drops to 0 HP, move adjacent and use the Stabilize common action on them with Advantage.', th: 'เมื่อเพื่อนในระยะ 3 ม. HP เหลือ 0 ขยับไปข้างๆ และใช้ Stabilize ด้วย Advantage' },
    icon: 'combat-medic-reflex-icon',
    tags: [ 'support', 'tier-0', 'role' ],
    stack: { id: 'combat-medic-reflex', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.REACTION }
          // TODO: Implement move and Stabilize with Advantage logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-zonal-instinct',
    name: { en: 'Zonal Instinct', th: 'สัญชาตญาณพื้นที่' },
    description: { en: 'Shift 1m as a Free action. If you end your turn adjacent to both an ally and an enemy, you gain a Block 1 and all Saving Throws until your next turn.', th: 'ขยับ 1 ม. ฟรี ถ้าจบเทิร์นติดทั้งเพื่อนและศัตรู ได้ Block 1 และ Save ทั้งหมดจนถึงเทิร์นถัดไป' },
    icon: 'zonal-instinct-icon',
    tags: [ 'support', 'tier-0', 'role' ],
    stack: { id: 'zonal-instinct', type: SKILL_STACK_TYPE.IGNORE },
    tier: 0,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.FREE },
          { type: KEYWORD_TYPE.BLOCK, value: 1 }
          // TODO: Implement all Saving Throws bonus logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // === Tier 1 Role Skills ===
  // --- Attacker ---
  {
    id: 'skill-relentless-assault',
    name: { en: 'Relentless Assault', th: 'จู่โจมไม่หยุดยั้ง' },
    description: { en: 'After you hit with an attack, you may move 1m. If this brings you adjacent to a new enemy, you may make a Free single weapon strike against them (1/turn).', th: 'หลังโจมตีสำเร็จ ขยับ 1 ม. ถ้าไปติดศัตรูใหม่ โจมตีฟรี 1 ครั้ง (1/เทิร์น)' },
    icon: 'relentless-assault-icon',
    tags: [ 'attack', 'tier-1', 'role' ],
    stack: { id: 'relentless-assault', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND },
          { type: KEYWORD_TYPE.FREE }
          // TODO: Implement move and free strike logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-command-overload',
    name: { en: 'Command Overload', th: 'โอเวอร์โหลดบัญชา' },
    description: { en: 'When you use a damaging Command, spend 1 extra FP to add one effect: target becomes Burning, Slowed, or has a -2 penalty to its next roll.', th: 'ใช้ Command ที่สร้างดาเมจ จ่าย FP เพิ่ม 1 เพื่อเพิ่มผล (Burning, Slowed, หรือ -2)' },
    icon: 'command-overload-icon',
    tags: [ 'attack', 'tier-1', 'role' ],
    stack: { id: 'command-overload', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 }
          // TODO: Implement effect selection logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-surgical-strike',
    name: { en: 'Surgical Strike', th: 'โจมตีแม่นยำ' },
    description: { en: 'Make an attack with the True Strike feature. Cooldown 2.', th: 'โจมตีด้วย True Strike (CD 2)' },
    icon: 'surgical-strike-icon',
    tags: [ 'attack', 'tier-1', 'role' ],
    stack: { id: 'surgical-strike', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 },
          { type: KEYWORD_TYPE.TRUE_STRIKE }
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-volley-arc',
    name: { en: 'Volley Arc', th: 'ยิงโค้งหลายเป้า' },
    description: { en: 'Make a separate attack roll against up to 3 targets in a 60° arc. Cooldown 3.', th: 'โจมตี 3 เป้าในมุม 60° (CD 3)' },
    icon: 'volley-arc-icon',
    tags: [ 'attack', 'tier-1', 'role' ],
    stack: { id: 'volley-arc', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'attacker' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 3 }
          // TODO: Implement multi-target arc logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // --- Defender ---
  {
    id: 'skill-emergency-block',
    name: { en: 'Emergency Block', th: 'บล็อกฉุกเฉิน' },
    description: { en: 'When you are hit, reduce the damage by 2d10. If this saves you from being Downed, you gain Block 1 until your next turn. (Once per combat)', th: 'เมื่อโดนโจมตี ลดดาเมจ 2d10 ถ้าไม่ล้ม ได้ Block 1 ถึงเทิร์นถัดไป (1/การต่อสู้)' },
    icon: 'emergency-block-icon',
    tags: [ 'defend', 'tier-1', 'role' ],
    stack: { id: 'emergency-block', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT }
          // TODO: Implement damage reduction and Block logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-evasion-frame',
    name: { en: 'Evasion Frame', th: 'โครงหลบหลีก' },
    description: { en: 'Once per round, you can choose to reroll a failed Agility Saving Check.', th: 'หนึ่งครั้งต่อรอบ เลือกทอย Agility Save ใหม่ได้' },
    icon: 'evasion-frame-icon',
    tags: [ 'defend', 'tier-1', 'role' ],
    stack: { id: 'evasion-frame', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND }
          // TODO: Implement reroll failed Agility Save logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-item-mastery-barrier-cache',
    name: { en: 'Item Mastery: Barrier Cache', th: 'เชี่ยวชาญไอเท็ม: บาเรียร์' },
    description: { en: 'You can deploy barrier items as a Free action once per turn. Your barriers have +50% HP or duration.', th: 'ใช้ไอเท็มบาเรียร์ฟรี 1 ครั้ง/เทิร์น บาเรียร์ HP/ระยะเวลา +50%' },
    icon: 'item-mastery-barrier-cache-icon',
    tags: [ 'defend', 'tier-1', 'role' ],
    stack: { id: 'item-mastery-barrier-cache', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.FREE }
          // TODO: Implement barrier HP/duration bonus logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-interpose-shield',
    name: { en: 'Interpose Shield', th: 'โล่รับแทน' },
    description: { en: 'Choose an adjacent ally. Until your next turn, any attack targeting them can be redirected to you as a Reaction. They also gain Block 1. (Full, Cooldown 3)', th: 'เลือกเพื่อนติดกัน โจมตีที่มาหาเขาเปลี่ยนเป้ามาหาคุณได้ (Full, CD 3)' },
    icon: 'interpose-shield-icon',
    tags: [ 'defend', 'tier-1', 'role' ],
    stack: { id: 'interpose-shield', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'defender' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.COOLDOWN, value: 3 },
          { type: KEYWORD_TYPE.BLOCK, value: 1 }
          // TODO: Implement redirection logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-encouraging-roar',
    name: { en: 'Encouraging Roar', th: 'คำรามให้กำลังใจ' },
    description: { en: 'Choose up to two allies within 5m. They gain a +1d4 bonus to their next roll, and you end one minor condition affecting them. (Full, Once per Combat)', th: 'เลือกเพื่อน 2 คนในระยะ 5 ม. ได้ +1d4 ในการทอยถัดไป และลบสถานะเล็ก 1 อย่าง (Full, 1/การต่อสู้)' },
    icon: 'encouraging-roar-icon',
    tags: [ 'support', 'tier-1', 'role' ],
    stack: { id: 'encouraging-roar', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT }
          // TODO: Implement +1d4 bonus and condition removal logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-weaken-resolve',
    name: { en: 'Weaken Resolve', th: 'ลดทอนจิตใจ' },
    description: { en: 'Force a target within 10m to make a Presence Save. On failure, they suffer a -2 penalty to all saves until the end of your next turn and take 1d6 psychic damage. (Standard, Cooldown 2)', th: 'บังคับเป้าหมายในระยะ 10 ม. เช็ค Presence ถ้าพลาด เซฟ -2 และรับดาเมจจิต 1d6 (Standard, CD 2)' },
    icon: 'weaken-resolve-icon',
    tags: [ 'support', 'tier-1', 'role' ],
    stack: { id: 'weaken-resolve', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 }
          // TODO: Implement save penalty and psychic damage logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-last-second-aid',
    name: { en: 'Last Second Aid', th: 'ช่วยเหลือวินาทีสุดท้าย' },
    description: { en: 'When an ally within 3m would be reduced to 0 HP, you can spend 1 FP to grant them Temporary HP equal to 1d8 + your Presence modifier before the damage is applied. (Reaction)', th: 'เมื่อเพื่อนในระยะ 3 ม. จะโดนลด HP เหลือ 0 ใช้ 1 FP ให้ Temp HP = 1d8 + Presence Mod ก่อนรับดาเมจ (Reaction)' },
    icon: 'last-second-aid-icon',
    tags: [ 'support', 'tier-1', 'role' ],
    stack: { id: 'last-second-aid', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.REACTION }
          // TODO: Implement Temp HP logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'skill-zonal-pulse',
    name: { en: 'Zonal Pulse', th: 'คลื่นพื้นที่' },
    description: { en: 'Create a 3m aura around yourself. For 1 round, allies inside gain a +2 bonus to all Saving Throws. (Full, Cooldown 3)', th: 'สร้างออร่า 3 ม. รอบตัว 1 รอบ เพื่อนในออร่า Save +2 (Full, CD 3)' },
    icon: 'zonal-pulse-icon',
    tags: [ 'support', 'tier-1', 'role' ],
    stack: { id: 'zonal-pulse', type: SKILL_STACK_TYPE.IGNORE },
    tier: 1,
    requiredCharacterLevel: 1,
    requiredStats: [],
    requiredClassRole: [ 'support' ],
    requiredClassType: [],
    requiredClassIds: [],
    requiredSkillIds: [],
    requiredTraitIds: [],
    effects: [
      {
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.COOLDOWN, value: 3 }
          // TODO: Implement aura and save bonus logic in system
        ]
      }
    ],
    type: 'role',
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
  // === Tier 1 General Skills ===
  // ... (continue for all General skills as described, using the same structure and valid enums)
]; 