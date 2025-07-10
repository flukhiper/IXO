import type { ClassConfig } from '@/types/config/class';
import { CLASS_TYPE, ARCHETYPE_ROLE_TYPE } from '@/constants/config/class';
import { KEYWORD_TYPE, PHASE_TYPE, VALUE_TYPE } from '@/constants/config/base';

export const mock: ClassConfig[] = [
  // STRENGTH-BASED — Enforcer
  {
    id: 'class-enforcer-bruiser',
    name: { en: 'Bruiser', th: 'นักสู้หนัก' },
    description: { en: 'Direct damage, overpowering force. Power, resilience, frontline control.', th: 'เน้นสร้างความเสียหายโดยตรงและใช้พลังมหาศาลในการควบคุมแนวหน้า' },
    class: CLASS_TYPE.ENFORCER,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'enforcer', 'martial' ],
    icon: 'bruiser-icon',
    effects: [
      {
        name: { en: 'Momentum Crash', th: 'พลังพุ่งชน' },
        description: { en: 'If you move at least 3m in a straight line towards a target this turn, you can make this special melee attack against them. On a successful hit, it deals an additional 1d10 damage.', th: 'หากคุณเคลื่อนที่อย่างน้อย 3 เมตรเป็นเส้นตรงเข้าหาเป้าหมายในเทิร์นนี้ คุณสามารถโจมตีพิเศษนี้กับเป้าหมายได้ หากโจมตีสำเร็จจะสร้างความเสียหายเพิ่มเติม 1d10' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 },
          { type: KEYWORD_TYPE.ARMOR_PIERCE },
          { 
            type: KEYWORD_TYPE.DAMAGE, 
            damageTypeId: 'selected',
            baseValue: { 
              type: VALUE_TYPE.SELECT 
            } 
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-enforcer-sentinel',
    name: { en: 'Sentinel', th: 'ผู้พิทักษ์' },
    description: { en: 'Durable, unshakable defender. Power, resilience, frontline control.', th: 'ป้องกันแนวหน้าอย่างมั่นคงและทนทาน' },
    class: CLASS_TYPE.ENFORCER,
    role: ARCHETYPE_ROLE_TYPE.DEFENDER,
    tags: [ 'enforcer', 'martial' ],
    icon: 'sentinel-icon',
    effects: [
      {
        name: { en: 'Iron Resolve', th: 'จิตใจเหล็ก' },
        description: { en: 'Once per combat, when you are reduced below 50% HP, you immediately gain Block 2 and Damage Reduction equal to your Character Level for 1 round.', th: 'หนึ่งครั้งต่อการต่อสู้ เมื่อคุณถูกลด HP ต่ำกว่า 50% คุณจะได้รับ Block 2 และ Damage Reduction เท่ากับเลเวลตัวละครของคุณเป็นเวลา 1 รอบ' },
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          { type: KEYWORD_TYPE.BLOCK, value: 2 },
          { type: KEYWORD_TYPE.TOUGH, value: 'any' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-enforcer-guardian',
    name: { en: 'Guardian', th: 'ผู้ปกป้อง' },
    description: { en: 'Protects others, pulls danger off allies. Power, resilience, frontline control.', th: 'ปกป้องผู้อื่นและดึงอันตรายออกจากเพื่อนร่วมทีม' },
    class: CLASS_TYPE.ENFORCER,
    role: ARCHETYPE_ROLE_TYPE.SUPPORT,
    tags: [ 'enforcer', 'martial' ],
    icon: 'guardian-icon',
    effects: [
      {
        name: { en: 'Guardian’s Leap', th: 'กระโดดปกป้อง' },
        description: { en: 'As a Reaction when an ally within 4m is about to be hit by an attack, you can activate this skill. You instantly switch places with them and take the attack instead, gaining DR equal to twice your Strength modifier against that single attack.', th: 'ใช้เป็นปฏิกิริยาเมื่อเพื่อนร่วมทีมในระยะ 4 เมตรกำลังจะถูกโจมตี คุณสามารถสลับที่กับเขาและรับการโจมตีแทน โดยได้รับ DR เท่ากับ 2 เท่าของค่าความแข็งแกร่งของคุณต่อการโจมตีนั้น' },
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          { type: KEYWORD_TYPE.COOLDOWN, value: 3 },
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.TOUGH, value: 'any' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // AGILITY-BASED — Scout
  {
    id: 'class-scout-skirmisher',
    name: { en: 'Skirmisher', th: 'นักโจมตีฉับไว' },
    description: { en: 'Mobile attacker, fast and sharp. Mobility, hit-and-run tactics, field control.', th: 'โจมตีอย่างรวดเร็วและว่องไว ใช้กลยุทธ์โจมตีแล้วถอย' },
    class: CLASS_TYPE.SCOUT,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'scout', 'martial' ],
    icon: 'skirmisher-icon',
    effects: [
      {
        name: { en: 'Blurred Assault', th: 'จู่โจมสายฟ้าแลบ' },
        description: { en: 'You make two weapon strikes against the same or different targets.', th: 'คุณโจมตีด้วยอาวุธสองครั้งต่อเป้าหมายเดียวกันหรือเป้าหมายต่างกัน' },
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.DOUBLE_ATTACK },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 },
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'selected', baseValue: { type: VALUE_TYPE.SELECT } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-scout-outrider',
    name: { en: 'Outrider', th: 'นักลุยสนาม' },
    description: { en: 'Evades, survives, and moves through chaos. Mobility, hit-and-run tactics, field control.', th: 'หลบหลีกและเอาตัวรอดในสนามรบที่วุ่นวาย' },
    class: CLASS_TYPE.SCOUT,
    role: ARCHETYPE_ROLE_TYPE.DEFENDER,
    tags: [ 'scout', 'martial' ],
    icon: 'outrider-icon',
    effects: [
      {
        name: { en: 'Slip Through', th: 'ลื่นหลบ' },
        description: { en: 'Until the start of your next turn, you do not provoke opportunity attacks. Additionally, while moving, you gain Block 2 and a +2 bonus to all Saving Checks.', th: 'จนถึงต้นเทิร์นถัดไป คุณจะไม่ถูกโจมตีโอกาส และขณะเคลื่อนที่จะได้รับ Block 2 และโบนัส +2 ต่อการเช็คเซฟทั้งหมด' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 },
          { type: KEYWORD_TYPE.BLOCK, value: 2 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-scout-pathfinder',
    name: { en: 'Pathfinder', th: 'ผู้นำทาง' },
    description: { en: 'Finds safe routes, leads the way, disrupts hazards. Mobility, hit-and-run tactics, field control.', th: 'ค้นหาเส้นทางปลอดภัยและนำทางทีม' },
    class: CLASS_TYPE.SCOUT,
    role: ARCHETYPE_ROLE_TYPE.SUPPORT,
    tags: [ 'scout', 'martial' ],
    icon: 'pathfinder-icon',
    effects: [
      {
        name: { en: 'Tactical Trail', th: 'เส้นทางยุทธศาสตร์' },
        description: { en: 'You mark a 5m long path on the ground. For the rest of the round, allies who move along this trail gain Swift 2 and Block 2 while on the trail.', th: 'คุณทำเครื่องหมายเส้นทางยาว 5 เมตรบนพื้น ตลอดรอบนี้ เพื่อนร่วมทีมที่เคลื่อนที่ตามเส้นทางนี้จะได้รับ Swift 2 และ Block 2' },
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          { type: KEYWORD_TYPE.SWIFT, value: 2 },
          { type: KEYWORD_TYPE.BLOCK, value: 2 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // SENSE-BASED — Seer
  {
    id: 'class-seer-watcher',
    name: { en: 'Watcher', th: 'ผู้เฝ้ามอง' },
    description: { en: 'Strikes with foresight and precision. Supernatural perception, energy sensitivity, insight.', th: 'โจมตีด้วยการคาดการณ์ล่วงหน้าและความแม่นยำ' },
    class: CLASS_TYPE.SEER,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'seer', 'mystic' ],
    icon: 'watcher-icon',
    effects: [
      {
        name: { en: 'Pinpoint Strike', th: 'โจมตีจุดสำคัญ' },
        description: { en: 'If you act before your target in the initiative order this round, your next attack against them is Precise and ignores any AC bonus from cover.', th: 'หากคุณได้ลงมือก่อนเป้าหมายในลำดับการลงมือในรอบนี้ การโจมตีครั้งถัดไปของคุณต่อเป้าหมายจะเป็น Precise และไม่สนใจโบนัส AC จากที่กำบัง' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 },
          { type: KEYWORD_TYPE.PRECISE }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-seer-veilstep',
    name: { en: 'Veilstep', th: 'ผู้ก้าวข้ามม่าน' },
    description: { en: 'Evades threats by predicting them. Supernatural perception, energy sensitivity, insight.', th: 'หลบหลีกอันตรายด้วยการคาดการณ์ล่วงหน้า' },
    class: CLASS_TYPE.SEER,
    role: ARCHETYPE_ROLE_TYPE.DEFENDER,
    tags: [ 'seer', 'mystic' ],
    icon: 'veilstep-icon',
    effects: [
      {
        name: { en: 'Precognitive Dodge', th: 'หลบล่วงหน้า' },
        description: { en: 'Once per round, if you have not moved on your turn, you may reroll a failed Agility Saving Check.', th: 'หนึ่งครั้งต่อรอบ หากคุณไม่ได้เคลื่อนที่ในเทิร์นของคุณ คุณสามารถทอยใหม่ได้หากเช็คเซฟ Agility ล้มเหลว' },
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-seer-revealer',
    name: { en: 'Revealer', th: 'ผู้เปิดเผย' },
    description: { en: 'Uncovers enemy secrets, paths, and illusions. Supernatural perception, energy sensitivity, insight.', th: 'เปิดเผยความลับของศัตรู เส้นทาง และภาพลวงตา' },
    class: CLASS_TYPE.SEER,
    role: ARCHETYPE_ROLE_TYPE.SUPPORT,
    tags: [ 'seer', 'mystic' ],
    icon: 'revealer-icon',
    effects: [
      {
        name: { en: 'Expose Patterns', th: 'เปิดเผยรูปแบบ' },
        description: { en: 'Choose a target within 10m. All allies gain Advantage on their next attack roll against it. You also learn its current HP, resistances, and active buffs.', th: 'เลือกเป้าหมายในระยะ 10 เมตร เพื่อนร่วมทีมทุกคนจะได้เปรียบในการโจมตีครั้งถัดไปต่อเป้าหมายนั้น คุณยังได้รู้ HP ปัจจุบัน การต้านทาน และบัฟที่ใช้งานอยู่ของเป้าหมาย' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // TECHNIQUE-BASED — Operator
  {
    id: 'class-operator-rigger',
    name: { en: 'Rigger', th: 'นักวางกล' },
    description: { en: 'Sets traps, turrets, or payload-based offense. Tool mastery, battlefield control through gear.', th: 'วางกับดัก ป้อมปืน หรือโจมตีด้วยอุปกรณ์' },
    class: CLASS_TYPE.OPERATOR,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'operator', 'tech' ],
    icon: 'rigger-icon',
    effects: [
      {
        name: { en: 'Custom Payload', th: 'อุปกรณ์พิเศษ' },
        description: { en: 'You modify your next weapon attack this turn to have one of the following effects: Splash (deals half damage to an adjacent creature), applies the Burning condition for 2 rounds, or the attack gains Armor Pierce.', th: 'คุณปรับแต่งการโจมตีด้วยอาวุธครั้งถัดไปในเทิร์นนี้ให้มีหนึ่งในเอฟเฟกต์ต่อไปนี้: Splash (สร้างความเสียหายครึ่งหนึ่งให้กับสิ่งมีชีวิตที่อยู่ติดกัน), ทำให้เกิดสถานะ Burning 2 รอบ, หรือการโจมตีได้รับ Armor Pierce' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.COOLDOWN, value: 2 },
          { type: KEYWORD_TYPE.ARMOR_PIERCE },
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'selected', baseValue: { type: VALUE_TYPE.DICE, formula: '1d8' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-operator-engineer',
    name: { en: 'Engineer', th: 'วิศวกร' },
    description: { en: 'Builds defenses, deploys gear-based protection. Tool mastery, battlefield control through gear.', th: 'สร้างสิ่งป้องกันและใช้อุปกรณ์ป้องกันในสนามรบ' },
    class: CLASS_TYPE.OPERATOR,
    role: ARCHETYPE_ROLE_TYPE.DEFENDER,
    tags: [ 'operator', 'tech' ],
    icon: 'engineer-icon',
    effects: [
      {
        name: { en: 'Deployable Cover', th: 'ที่กำบังเคลื่อนที่' },
        description: { en: 'Deploy a barricade that lasts for 3 rounds and grants Block 4 against ranged attacks to anyone fully behind it.', th: 'ติดตั้งที่กำบังที่อยู่ได้ 3 รอบและให้ Block 4 กับผู้ที่อยู่หลังที่กำบังเต็มที่ต่อการโจมตีระยะไกล' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 },
          { type: KEYWORD_TYPE.BLOCK, value: 4 },
          { type: KEYWORD_TYPE.TOUGH, value: 'any' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-operator-mechanic',
    name: { en: 'Mechanic', th: 'ช่างซ่อม' },
    description: { en: 'Repairs, enhances, and maintains gear and allies. Tool mastery, battlefield control through gear.', th: 'ซ่อมแซมและเสริมประสิทธิภาพอุปกรณ์และเพื่อนร่วมทีม' },
    class: CLASS_TYPE.OPERATOR,
    role: ARCHETYPE_ROLE_TYPE.SUPPORT,
    tags: [ 'operator', 'tech' ],
    icon: 'mechanic-icon',
    effects: [
      {
        name: { en: 'Field Assistant', th: 'ผู้ช่วยสนามรบ' },
        description: { en: 'Deploy a helper drone to a target ally for 3 rounds. The drone grants the ally a +1 bonus to all attack rolls and skill checks.', th: 'ปล่อยโดรนช่วยเหลือไปยังเพื่อนร่วมทีมเป้าหมายเป็นเวลา 3 รอบ โดรนจะให้โบนัส +1 ต่อการโจมตีและเช็คทักษะทั้งหมดของเพื่อนร่วมทีมนั้น' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 },
          { type: KEYWORD_TYPE.BOOST, damageType: 'all', baseValue: { type: VALUE_TYPE.FIXED, value: 1 } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // INTELLIGENCE-BASED — Invoker
  {
    id: 'class-invoker-breaker',
    name: { en: 'Breaker', th: 'ผู้ทำลาย' },
    description: { en: 'Tears open weaknesses with focused Commands. Command-based manipulation of battlefield flow.', th: 'ใช้คำสั่งเจาะจุดอ่อนและควบคุมสนามรบ' },
    class: CLASS_TYPE.INVOKER,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'invoker', 'arcane' ],
    icon: 'breaker-icon',
    effects: [
      {
        name: { en: 'Command Spike', th: 'คำสั่งทะลวง' },
        description: { en: 'Make a Command Attack against a target. On a hit, roll an extra damage die. If the target has a debuff condition, roll 2 extra dice instead.', th: 'โจมตีด้วยคำสั่งต่อเป้าหมาย หากโจมตีสำเร็จให้ทอยลูกเต๋าความเสียหายเพิ่ม 1 ลูก หากเป้าหมายมีสถานะดีบัฟให้ทอยเพิ่ม 2 ลูกแทน' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 },
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'selected', baseValue: { type: VALUE_TYPE.DICE, formula: '1d8' } },
          { type: KEYWORD_TYPE.BOOST, damageType: 'debuff', baseValue: { type: VALUE_TYPE.DICE, formula: '1d8' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-invoker-silencer',
    name: { en: 'Silencer', th: 'ผู้ปิดเสียง' },
    description: { en: 'Shuts down magic, tech, or energy use. Command-based manipulation of battlefield flow.', th: 'หยุดการใช้เวทมนตร์ เทคโนโลยี หรือพลังงาน' },
    class: CLASS_TYPE.INVOKER,
    role: ARCHETYPE_ROLE_TYPE.DEFENDER,
    tags: [ 'invoker', 'arcane' ],
    icon: 'silencer-icon',
    effects: [
      {
        name: { en: 'Predictive Counter', th: 'ตอบโต้ล่วงหน้า' },
        description: { en: 'Triggered when an enemy you can see uses a skill or Command you have seen before. Force them to make an Intelligence Save against your Command DC. On a failure, they must spend an additional 1 FP to complete the action; if they can’t, the action fails.', th: 'เมื่อศัตรูที่คุณมองเห็นใช้สกิลหรือคำสั่งที่คุณเคยเห็นมาก่อน ให้บังคับให้ศัตรูทอยเซฟ Intelligence เทียบกับ Command DC ของคุณ หากล้มเหลวต้องใช้ FP เพิ่ม 1 เพื่อดำเนินการ หากไม่สามารถทำได้ การกระทำนั้นล้มเหลว' },
        keywords: [
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.TOUGH, value: 'any' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-invoker-binder',
    name: { en: 'Binder', th: 'ผู้ผูกมัด' },
    description: { en: 'Locks zones, redirects enemies, controls space. Command-based manipulation of battlefield flow.', th: 'ควบคุมพื้นที่และเคลื่อนย้ายศัตรู' },
    class: CLASS_TYPE.INVOKER,
    role: ARCHETYPE_ROLE_TYPE.SUPPORT,
    tags: [ 'invoker', 'arcane' ],
    icon: 'binder-icon',
    effects: [
      {
        name: { en: 'Strategic Relocation', th: 'ย้ายตำแหน่งยุทธศาสตร์' },
        description: { en: 'Move any two characters within 6m up to 3m each. An unwilling enemy can resist with a contested Strength or Agility Save.', th: 'ย้ายตัวละครสองตัวในระยะ 6 เมตรได้สูงสุด 3 เมตรต่อคน ศัตรูที่ไม่เต็มใจสามารถต้านทานด้วยการเช็คเซฟ Strength หรือ Agility แบบแข่งขัน' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 },
          { type: KEYWORD_TYPE.SWIFT, value: 3 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // PRESENCE-BASED — Herald
  {
    id: 'class-herald-agitator',
    name: { en: 'Agitator', th: 'ผู้ปลุกปั่น' },
    description: { en: 'Provokes, pressures, and disorients enemies. Leadership, emotional control, morale shaping.', th: 'ก่อกวนและสร้างความสับสนให้ศัตรู' },
    class: CLASS_TYPE.HERALD,
    role: ARCHETYPE_ROLE_TYPE.ATTACKER,
    tags: [ 'herald', 'inspire' ],
    icon: 'agitator-icon',
    effects: [
      {
        name: { en: 'Mental Overload', th: 'กดดันจิตใจ' },
        description: { en: 'Target within 10m must pass a Presence Save or take 1d10 psychic damage and suffer Disadvantage on all rolls for 1 round.', th: 'เป้าหมายในระยะ 10 เมตรต้องผ่านการเช็คเซฟ Presence หรือได้รับความเสียหายจิต 1d10 และเสียเปรียบในการทอยทั้งหมด 1 รอบ' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 },
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'psychic', baseValue: { type: VALUE_TYPE.DICE, formula: '1d10' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-herald-duelist',
    name: { en: 'Duelist', th: 'นักประลอง' },
    description: { en: 'Draws focus, wins face-to-face tension. Leadership, emotional control, morale shaping.', th: 'ดึงความสนใจและชนะการประลองตัวต่อตัว' },
    class: CLASS_TYPE.HERALD,
    role: ARCHETYPE_ROLE_TYPE.DEFENDER,
    tags: [ 'herald', 'inspire' ],
    icon: 'duelist-icon',
    effects: [
      {
        name: { en: 'Stage Presence', th: 'การแสดงบนเวที' },
        description: { en: 'If you are the closest hostile target to an enemy, you gain Block 2. If you are not, ranged attacks made against your allies by that enemy have Disadvantage.', th: 'หากคุณเป็นเป้าหมายศัตรูที่อยู่ใกล้ที่สุด คุณจะได้รับ Block 2 หากไม่ใช่ การโจมตีระยะไกลต่อเพื่อนร่วมทีมของคุณโดยศัตรูนั้นจะเสียเปรียบ' },
        keywords: [
          { type: KEYWORD_TYPE.BLOCK, value: 2 },
          { type: KEYWORD_TYPE.TOUGH, value: 'any' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'class-herald-banner',
    name: { en: 'Banner', th: 'ผู้ชูธง' },
    description: { en: 'Bolsters allies, uplifts teams under pressure. Leadership, emotional control, morale shaping.', th: 'เสริมกำลังใจและสนับสนุนทีมในสถานการณ์กดดัน' },
    class: CLASS_TYPE.HERALD,
    role: ARCHETYPE_ROLE_TYPE.SUPPORT,
    tags: [ 'herald', 'inspire' ],
    icon: 'banner-icon',
    effects: [
      {
        name: { en: 'Resonant Rally', th: 'ปลุกใจทีม' },
        description: { en: 'All allies within 5m restore 1d6 HP and may immediately make a new Saving Check against one ongoing debuff effect with Advantage.', th: 'เพื่อนร่วมทีมทุกคนในระยะ 5 เมตรฟื้น HP 1d6 และสามารถเช็คเซฟใหม่ทันทีต่อดีบัฟที่มีอยู่โดยได้เปรียบ' },
        keywords: [
          { type: KEYWORD_TYPE.COMMAND, value: 1 },
          { type: KEYWORD_TYPE.RESTORE, attributeId: 'hp', baseValue: { type: VALUE_TYPE.DICE, formula: '1d6' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 