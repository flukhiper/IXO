import type { TraitConfig } from '@/types/config/trait';
import { KEYWORD_TYPE, PHASE_TYPE, KEYWORD_VALUE_TYPE, VALUE_TYPE } from '@/constants/config/base';

export const mockTraitConfigs: TraitConfig[] = [
  // === FULL TRAITS ===
  {
    id: 'trait-dragonoid',
    name: { en: 'Dragonoid', th: 'ดราโกนอยด์' },
    description: { en: 'A powerful, draconic form with elemental breath and intimidating presence.', th: 'ร่างแปลงมังกรทรงพลังพร้อมลมหายใจธาตุและความน่าเกรงขาม' },
    icon: 'dragonoid-icon',
    tags: [ 'full', 'draconic' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Draconic Resilience', th: 'ความทนทานของมังกร' },
        description: { en: 'You are exceptionally tough.', th: 'คุณมีความทนทานเป็นพิเศษ' },
        keywords: [
          { type: KEYWORD_TYPE.TOUGH, value: 2 }
        ]
      },
      {
        name: { en: 'Draconic Presence', th: 'บารมีมังกร' },
        description: { en: 'You are gifted at Intimidation.', th: 'คุณมีพรสวรรค์ด้านการข่มขู่' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'intimidation' }
        ]
      },
      {
        name: { en: 'Draconic Breath', th: 'ลมหายใจมังกร' },
        description: { en: 'Once per Short Downtime, unleash a 5m cone of fire or lightning. Enemies must make an Agility Save vs your Command DC or take 2d6 damage.', th: 'หนึ่งครั้งต่อช่วงพักสั้น ปล่อยลมหายใจธาตุไฟหรือสายฟ้า ศัตรูในกรวย 5 ม. ต้องเช็คเซฟ Agility เทียบ Command DC ของคุณ มิฉะนั้นจะได้รับ 2d6 ดาเมจ' },
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.SHORT_DOWNTIME },
          { type: KEYWORD_TYPE.CONE, radius: 5, range: 5, numberOfTargets: 1 },
          { type: KEYWORD_TYPE.BOUND_DAMAGE, damageTypeIds: [ 'fire', 'lightning' ], baseValue: { type: VALUE_TYPE.DICE, formula: '2d6' } },
          { type: KEYWORD_TYPE.SAVING_THROW, savingThrowType: 'attribute-agility-save' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-kijin',
    name: { en: 'Kijin', th: 'คิจิน' },
    description: { en: 'A mighty, ogre-like form with overwhelming strength and crushing blows.', th: 'ร่างแปลงยักษ์ทรงพลังพร้อมพลังโจมตีมหาศาล' },
    icon: 'kijin-icon',
    tags: [ 'full', 'ogre' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Mighty Build', th: 'ร่างกายทรงพลัง' },
        description: { en: 'Gifted at Athletics. You can wield two-handed melee weapons in one hand, but such attacks are Full.', th: 'พรสวรรค์ด้านกีฬา ใช้อาวุธสองมือด้วยมือเดียวได้ แต่โจมตีแบบ Full' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'athletics' },
          { type: KEYWORD_TYPE.FULL }
        ]
      },
      {
        name: { en: 'Crushing Blow', th: 'หมัดบดขยี้' },
        description: { en: 'Once per round, when you hit with a melee weapon, use your Reaction to deal one extra die of weapon damage.', th: 'หนึ่งครั้งต่อรอบ เมื่อโจมตีด้วยอาวุธประชิดสำเร็จ ใช้ปฏิกิริยาเพื่อเพิ่มดาเมจอาวุธอีก 1 ลูกเต๋า' },
        keywords: [
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND },
          // TODO: Specify correct id for weapon-damage if available in your system
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: KEYWORD_VALUE_TYPE.SELECTED, baseValue: { type: 'ref', ref: 'weapon-damage', id: 'main-weapon' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-mechina',
    name: { en: 'Mechina', th: 'เมคินา' },
    description: { en: 'A mechanical form with integrated systems and analytical prowess.', th: 'ร่างกลไกพร้อมระบบในตัวและความสามารถวิเคราะห์' },
    icon: 'mechina-icon',
    tags: [ 'full', 'mechanical' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Integrated Systems', th: 'ระบบในตัว' },
        description: { en: 'Gifted at Tinker and Operate.', th: 'พรสวรรค์ด้านซ่อมแซมและควบคุม' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'tinker' },
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'operate' }
        ]
      },
      {
        name: { en: 'Damage Recalculation', th: 'คำนวณความเสียหายใหม่' },
        description: { en: 'Once per combat, when you take damage, use your Reaction to gain Temp HP equal to your Technique Mod + Level.', th: 'หนึ่งครั้งต่อการต่อสู้ เมื่อได้รับดาเมจ ใช้ปฏิกิริยาเพื่อรับ Temp HP เท่ากับ Technique Mod + เลเวล' },
        keywords: [
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          // TODO: Use formula-based value (TEC Mod + Level) when supported by system
          { type: KEYWORD_TYPE.EXPAND, attributeId: 'attribute-temporary-hp', baseValue: { type: 'fixed', value: 0 } }
        ]
      },
      {
        name: { en: 'Targeting Analysis', th: 'วิเคราะห์เป้าหมาย' },
        description: { en: 'Standard action: Analyze a creature. Your next Attack Roll against it this turn gains +3.', th: 'ใช้แอคชั่นวิเคราะห์เป้าหมาย การโจมตีครั้งถัดไปในเทิร์นนี้ได้ +3' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.AIM, value: 3 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-werebeast',
    name: { en: 'Werebeast', th: 'แวร์บีสต์' },
    description: { en: 'A bestial form with heightened senses and furious strength.', th: 'ร่างสัตว์ป่าพร้อมประสาทสัมผัสเฉียบคมและพลังโกรธเกรี้ยว' },
    icon: 'werebeast-icon',
    tags: [ 'full', 'beast' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Heightened Senses', th: 'ประสาทสัมผัสเฉียบคม' },
        description: { en: 'Gifted at Perception, Detection, and Initiative.', th: 'พรสวรรค์ด้านการรับรู้ การตรวจจับ และเริ่มต้น' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'perception' },
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'detection' },
          { type: KEYWORD_TYPE.ATTRIBUTE_GIFTED, attributeId: 'attribute-initiative' }
        ]
      },
      {
        name: { en: 'Bestial Fury', th: 'ความเดือดดาลของสัตว์' },
        description: { en: 'Full action, Double Attack, once per combat: Enter a furious state for rounds equal to Strength Mod. Unarmed strikes deal 1d8 damage.', th: 'ใช้แอคชั่นเต็ม โจมตีสองครั้ง หนึ่งครั้งต่อการต่อสู้: เข้าสู่สภาวะเดือดดาลตามจำนวนรอบเท่ากับ Strength Mod การโจมตีมือเปล่าได้ 1d8 ดาเมจ' },
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.DOUBLE_ATTACK },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'bludgeoning', baseValue: { type: 'dice', formula: '1d8' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-fairy',
    name: { en: 'Fairy', th: 'แฟรี่' },
    description: { en: 'A fey form with wings, charm, and soothing spores.', th: 'ร่างภูติพร้อมปีก เสน่ห์ และสปอร์ปลอบประโลม' },
    icon: 'fairy-icon',
    tags: [ 'full', 'fey' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Fairy Wings', th: 'ปีกภูติ' },
        description: { en: 'You can fly at your Movement Speed, but not in Heavy Armor.', th: 'บินได้เท่ากับ Movement Speed แต่บินไม่ได้เมื่อใส่เกราะหนัก' },
        keywords: [
          { type: KEYWORD_TYPE.ATTRIBUTE_GIFTED, attributeId: 'attribute-movement-speed' }
        ]
      },
      {
        name: { en: 'Otherworldly Charm', th: 'เสน่ห์เหนือโลก' },
        description: { en: 'Gifted at Persuasion and Performance.', th: 'พรสวรรค์ด้านโน้มน้าวและการแสดง' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'persuasion' },
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'performance' }
        ]
      },
      {
        name: { en: 'Soothing Spores', th: 'สปอร์ปลอบประโลม' },
        description: { en: 'Standard, once per combat: An ally within 3m may reroll a Saving Check with +2 vs a debuff.', th: 'ใช้แอคชั่นปกติ หนึ่งครั้งต่อการต่อสู้: เพื่อนในระยะ 3 ม. เช็คเซฟใหม่ได้ +2 ต่อดีบัฟ' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          { type: KEYWORD_TYPE.TARGET, range: 3, numberOfTargets: 1 },
          { type: KEYWORD_TYPE.SAVING_THROW, savingThrowType: KEYWORD_VALUE_TYPE.ANY }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-demonia',
    name: { en: 'Demonia', th: 'ดีโมเนีย' },
    description: { en: 'An infernal form with fire resistance, shadowy guile, and life siphoning.', th: 'ร่างปีศาจพร้อมต้านไฟ เจ้าเล่ห์ และดูดซับชีวิต' },
    icon: 'demonia-icon',
    tags: [ 'full', 'infernal' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Infernal Resistance', th: 'ต้านทานไฟ' },
        description: { en: 'Gifted at Strength Save. Damage Reduction 3 vs fire.', th: 'พรสวรรค์ด้านเช็คเซฟ STR ลดดาเมจไฟ 3' },
        keywords: [
          { type: KEYWORD_TYPE.SAVING_THROW_GIFTED, savingThrowId: 'attribute-strength-save' },
          { type: KEYWORD_TYPE.TOUGH, value: 3 }
        ]
      },
      {
        name: { en: 'Shadow\'s Guile', th: 'เล่ห์เหลี่ยมเงา' },
        description: { en: 'Gifted at Deception and Stealth.', th: 'พรสวรรค์ด้านหลอกลวงและลอบเร้น' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'deception' },
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'stealth' }
        ]
      },
      {
        name: { en: 'Siphon Life', th: 'ดูดซับชีวิต' },
        description: { en: 'Once per round, when you deal damage, gain Temp HP equal to half the damage.', th: 'หนึ่งครั้งต่อรอบ เมื่อสร้างดาเมจ รับ Temp HP เท่ากับครึ่งหนึ่งของดาเมจ' },
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.ROUND },
          // TODO: Use formula-based value (half damage) when supported by system
          { type: KEYWORD_TYPE.EXPAND, attributeId: 'attribute-temporary-hp', baseValue: { type: 'fixed', value: 0 } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-siren',
    name: { en: 'Siren', th: 'ไซเรน' },
    description: { en: 'An aquatic form with a mesmerizing voice and magical song.', th: 'ร่างน้ำพร้อมเสียงสะกดและบทเพลงเวทมนตร์' },
    icon: 'siren-icon',
    tags: [ 'full', 'aquatic' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Aquatic Adaptation', th: 'ปรับตัวใต้น้ำ' },
        description: { en: 'You can breathe underwater and swim at Movement Speed.', th: 'หายใจใต้น้ำและว่ายน้ำได้เท่ากับ Movement Speed' },
        keywords: [
          { type: KEYWORD_TYPE.ATTRIBUTE_GIFTED, attributeId: 'attribute-movement-speed' }
        ]
      },
      {
        name: { en: 'Mesmerizing Voice', th: 'เสียงสะกด' },
        description: { en: 'Learned at Command DC.', th: 'เรียนรู้ด้าน Command DC' },
        keywords: [
          { type: KEYWORD_TYPE.ATTRIBUTE_LEARNED, attributeId: 'attribute-command-dc' }
        ]
      },
      {
        name: { en: 'Siren\'s Song', th: 'บทเพลงไซเรน' },
        description: { en: 'Full, once per Short Downtime: Enemies within 10m who can hear you must make a Sense Save vs your Command DC. On a failure, they cannot take Reactions and are Slowed for rounds equal to your Presence Mod.', th: 'ใช้แอคชั่นเต็ม หนึ่งครั้งต่อช่วงพักสั้น: ศัตรูในระยะ 10 ม. ที่ได้ยินคุณต้องเช็คเซฟ Sense เทียบ Command DC ของคุณ หากล้มเหลวจะไม่สามารถใช้ปฏิกิริยาและติดสถานะช้าเท่ากับ Presence Mod' },
        keywords: [
          { type: KEYWORD_TYPE.FULL },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.SHORT_DOWNTIME },
          { type: KEYWORD_TYPE.TARGET, range: 10, numberOfTargets: 99 },
          { type: KEYWORD_TYPE.SAVING_THROW, savingThrowType: 'attribute-sense-save' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-aethel',
    name: { en: 'Aethel', th: 'เอเธล' },
    description: { en: 'A form of perfect harmony and order, with universal saving throw gifts.', th: 'ร่างแห่งความกลมกลืนและระเบียบสมบูรณ์ พร้อมพรสวรรค์เช็คเซฟทุกประเภท' },
    icon: 'aethel-icon',
    tags: [ 'full', 'harmony' ],
    isFullTrait: true,
    effects: [
      {
        name: { en: 'Mark of Harmony', th: 'เครื่องหมายแห่งสมดุล' },
        description: { en: 'Gifted at all Saving Checks.', th: 'พรสวรรค์เช็คเซฟทุกประเภท' },
        keywords: [
          { type: KEYWORD_TYPE.SAVING_THROW_GIFTED, savingThrowId: KEYWORD_VALUE_TYPE.ALL }
        ]
      },
      {
        name: { en: 'The Absolute\'s Law', th: 'กฎแห่งสัมบูรณ์' },
        description: { en: 'Gifted at Insight. Cannot learn Void Commands.', th: 'พรสวรรค์ด้าน Insight ไม่สามารถเรียนรู้คำสั่ง Void' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'insight' }
        ]
      },
      {
        name: { en: 'Beacon of Order', th: 'แสงแห่งระเบียบ' },
        description: { en: 'Standard, once per combat: Touch an ally to grant Temp HP equal to Presence Mod + Level (not self).', th: 'ใช้แอคชั่นปกติ หนึ่งครั้งต่อการต่อสู้: แตะเพื่อนเพื่อให้ Temp HP เท่ากับ Presence Mod + เลเวล (ใช้กับตัวเองไม่ได้)' },
        keywords: [
          { type: KEYWORD_TYPE.STANDARD },
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.COMBAT },
          // TODO: Use formula-based value (PRE Mod + Level) when supported by system
          { type: KEYWORD_TYPE.EXPAND, attributeId: 'attribute-temporary-hp', baseValue: { type: 'fixed', value: 0 } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },

  // === PART TRAITS ===
  // Head
  {
    id: 'trait-oni-horn',
    name: { en: 'Oni Horn', th: 'เขาโอนิ' },
    description: { en: 'A single horn that grants learned Intimidation.', th: 'เขาเดียวที่ให้ความรู้ด้านการข่มขู่' },
    icon: 'oni-horn-icon',
    tags: [ 'part', 'head' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Oni Horn', th: 'เขาโอนิ' },
        description: { en: 'Learned at Intimidation.', th: 'ความรู้ด้านการข่มขู่' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_LEARNED, skillCheckAttributeId: 'intimidation' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-lupine-ears',
    name: { en: 'Lupine Ears', th: 'หูหมาป่า' },
    description: { en: 'Wolf-like ears that grant learned Perception (hearing).', th: 'หูคล้ายหมาป่าที่ให้ความรู้ด้านการรับรู้ (การได้ยิน)' },
    icon: 'lupine-ears-icon',
    tags: [ 'part', 'head' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Lupine Ears', th: 'หูหมาป่า' },
        description: { en: 'Learned at Perception (hearing).', th: 'ความรู้ด้านการรับรู้ (การได้ยิน)' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_LEARNED, skillCheckAttributeId: 'perception' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-antennae',
    name: { en: 'Antennae', th: 'หนวดรับสัมผัส' },
    description: { en: 'Insect-like antennae that grant learned Detection (vibrations).', th: 'หนวดคล้ายแมลงที่ให้ความรู้ด้านการตรวจจับ (แรงสั่นสะเทือน)' },
    icon: 'antennae-icon',
    tags: [ 'part', 'head' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Antennae', th: 'หนวดรับสัมผัส' },
        description: { en: 'Learned at Detection (vibrations).', th: 'ความรู้ด้านการตรวจจับ (แรงสั่นสะเทือน)' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_LEARNED, skillCheckAttributeId: 'detection' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Eyes
  {
    id: 'trait-analytical-lenses',
    name: { en: 'Analytical Lenses', th: 'เลนส์วิเคราะห์' },
    description: { en: 'Lenses that grant gifted Analyze.', th: 'เลนส์ที่ให้พรสวรรค์ด้านวิเคราะห์' },
    icon: 'analytical-lenses-icon',
    tags: [ 'part', 'eyes' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Analytical Lenses', th: 'เลนส์วิเคราะห์' },
        description: { en: 'Gifted at Analyze.', th: 'พรสวรรค์ด้านวิเคราะห์' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'analyze' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-ember-glow',
    name: { en: 'Ember-Glow', th: 'ตาเรืองแสง' },
    description: { en: 'Eyes that grant Darkvision up to 20m.', th: 'ดวงตาที่ให้วิสัยทัศน์ในความมืด 20 ม.' },
    icon: 'ember-glow-icon',
    tags: [ 'part', 'eyes' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Ember-Glow', th: 'ตาเรืองแสง' },
        description: { en: 'You have Darkvision up to 20m.', th: 'มีวิสัยทัศน์ในความมืด 20 ม.' },
        keywords: [
          // TODO: Implement darkvision as a system keyword or condition
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-predatory-gaze',
    name: { en: 'Predatory Gaze', th: 'จ้องตาเหยื่อ' },
    description: { en: 'Once per Short Downtime, make an Intimidation check with Advantage.', th: 'หนึ่งครั้งต่อช่วงพักสั้น เช็ค Intimidation ได้เปรียบ' },
    icon: 'predatory-gaze-icon',
    tags: [ 'part', 'eyes' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Predatory Gaze', th: 'จ้องตาเหยื่อ' },
        description: { en: 'Once per Short Downtime, make an Intimidation check with Advantage.', th: 'หนึ่งครั้งต่อช่วงพักสั้น เช็ค Intimidation ได้เปรียบ' },
        keywords: [
          { type: KEYWORD_TYPE.USAGE, numberOfUsages: 1, phase: PHASE_TYPE.SHORT_DOWNTIME },
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'intimidation' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Arms
  {
    id: 'trait-feral-claws',
    name: { en: 'Feral Claws', th: 'กรงเล็บสัตว์ป่า' },
    description: { en: 'Unarmed strikes deal 1d6 slashing damage.', th: 'โจมตีมือเปล่าได้ 1d6 ดาเมจ slashing' },
    icon: 'feral-claws-icon',
    tags: [ 'part', 'arms' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Feral Claws', th: 'กรงเล็บสัตว์ป่า' },
        description: { en: 'Unarmed strikes deal 1d6 slashing damage.', th: 'โจมตีมือเปล่าได้ 1d6 ดาเมจ slashing' },
        keywords: [
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'slashing', baseValue: { type: 'dice', formula: '1d6' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-shielding-plates',
    name: { en: 'Shielding Plates', th: 'เกราะแผ่น' },
    description: { en: 'While not wielding a shield, gain +1 AC.', th: 'ไม่ได้ถือโล่ ได้รับ AC +1' },
    icon: 'shielding-plates-icon',
    tags: [ 'part', 'arms' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Shielding Plates', th: 'เกราะแผ่น' },
        description: { en: 'While not wielding a shield, gain +1 AC.', th: 'ไม่ได้ถือโล่ ได้รับ AC +1' },
        keywords: [
          { type: KEYWORD_TYPE.ATTRIBUTE_GIFTED, attributeId: 'attribute-armor-class' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Legs
  {
    id: 'trait-digitigrade-stance',
    name: { en: 'Digitigrade Stance', th: 'ท่ายืนปลายเท้า' },
    description: { en: 'Gifted at Movement Speed.', th: 'พรสวรรค์ด้าน Movement Speed' },
    icon: 'digitigrade-stance-icon',
    tags: [ 'part', 'legs' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Digitigrade Stance', th: 'ท่ายืนปลายเท้า' },
        description: { en: 'Gifted at Movement Speed.', th: 'พรสวรรค์ด้าน Movement Speed' },
        keywords: [
          { type: KEYWORD_TYPE.ATTRIBUTE_GIFTED, attributeId: 'attribute-movement-speed' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-rooted-stance',
    name: { en: 'Rooted Stance', th: 'ท่ายืนมั่นคง' },
    description: { en: 'Gifted at Strength Save (vs. movement).', th: 'พรสวรรค์ด้าน STR Save (ต้านการเคลื่อนที่)' },
    icon: 'rooted-stance-icon',
    tags: [ 'part', 'legs' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Rooted Stance', th: 'ท่ายืนมั่นคง' },
        description: { en: 'Gifted at Strength Save (vs. movement).', th: 'พรสวรรค์ด้าน STR Save (ต้านการเคลื่อนที่)' },
        keywords: [
          { type: KEYWORD_TYPE.SAVING_THROW_GIFTED, savingThrowId: 'attribute-strength-save' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-gecko-grip',
    name: { en: 'Gecko Grip', th: 'เกาะผนัง' },
    description: { en: 'Climb difficult surfaces without an Athletics check.', th: 'ปีนผนังยากได้โดยไม่ต้องเช็ค Athletics' },
    icon: 'gecko-grip-icon',
    tags: [ 'part', 'legs' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Gecko Grip', th: 'เกาะผนัง' },
        description: { en: 'Climb difficult surfaces without an Athletics check.', th: 'ปีนผนังยากได้โดยไม่ต้องเช็ค Athletics' },
        keywords: [
          // TODO: Implement climb-no-check as a system keyword or condition
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Skin
  {
    id: 'trait-draconic-scales',
    name: { en: 'Draconic Scales', th: 'เกล็ดมังกร' },
    description: { en: 'Tough skin grants extra resilience.', th: 'ผิวหนังแข็งแกร่งให้ความทนทานเพิ่ม' },
    icon: 'draconic-scales-icon',
    tags: [ 'part', 'skin' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Draconic Scales', th: 'เกล็ดมังกร' },
        description: { en: 'Tough skin grants extra resilience.', th: 'ผิวหนังแข็งแกร่งให้ความทนทานเพิ่ม' },
        keywords: [
          { type: KEYWORD_TYPE.TOUGH, value: 1 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-photosensitive-sheen',
    name: { en: 'Photosensitive Sheen', th: 'ผิวสะท้อนแสง' },
    description: { en: 'Gifted at Stealth in dim light or darkness.', th: 'พรสวรรค์ด้าน Stealth ในที่มืดหรือแสงน้อย' },
    icon: 'photosensitive-sheen-icon',
    tags: [ 'part', 'skin' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Photosensitive Sheen', th: 'ผิวสะท้อนแสง' },
        description: { en: 'Gifted at Stealth in dim light or darkness.', th: 'พรสวรรค์ด้าน Stealth ในที่มืดหรือแสงน้อย' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'stealth' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-ashen-epidermis',
    name: { en: 'Ashen Epidermis', th: 'ผิวเถ้าถ่าน' },
    description: { en: 'Tough 2 vs fire.', th: 'ทนทาน 2 ต่อไฟ' },
    icon: 'ashen-epidermis-icon',
    tags: [ 'part', 'skin' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Ashen Epidermis', th: 'ผิวเถ้าถ่าน' },
        description: { en: 'Tough 2 vs fire.', th: 'ทนทาน 2 ต่อไฟ' },
        keywords: [
          { type: KEYWORD_TYPE.TOUGH, value: 2 }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Back
  {
    id: 'trait-vestigial-wings',
    name: { en: 'Vestigial Wings', th: 'ปีกฝ่อ' },
    description: { en: 'No damage from first 6m of any fall.', th: 'ไม่รับดาเมจจากการตก 6 ม. แรก' },
    icon: 'vestigial-wings-icon',
    tags: [ 'part', 'back' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Vestigial Wings', th: 'ปีกฝ่อ' },
        description: { en: 'No damage from first 6m of any fall.', th: 'ไม่รับดาเมจจากการตก 6 ม. แรก' },
        keywords: [
          // TODO: Implement no-fall-damage-6m as a system keyword or condition
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-barbed-spines',
    name: { en: 'Barbed Spines', th: 'หนามแหลม' },
    description: { en: 'When hit from behind, attacker takes 1d4 piercing damage.', th: 'ถูกตีจากด้านหลัง ศัตรูรับ 1d4 ดาเมจ piercing' },
    icon: 'barbed-spines-icon',
    tags: [ 'part', 'back' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Barbed Spines', th: 'หนามแหลม' },
        description: { en: 'When hit from behind, attacker takes 1d4 piercing damage.', th: 'ถูกตีจากด้านหลัง ศัตรูรับ 1d4 ดาเมจ piercing' },
        keywords: [
          { type: KEYWORD_TYPE.REACTION },
          { type: KEYWORD_TYPE.DAMAGE, damageTypeId: 'piercing', baseValue: { type: 'dice', formula: '1d4' } }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Voice
  {
    id: 'trait-hypnotic-resonance',
    name: { en: 'Hypnotic Resonance', th: 'เสียงสะกดจิต' },
    description: { en: 'Learned at Performance and Persuasion.', th: 'ความรู้ด้านการแสดงและโน้มน้าว' },
    icon: 'hypnotic-resonance-icon',
    tags: [ 'part', 'voice' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Hypnotic Resonance', th: 'เสียงสะกดจิต' },
        description: { en: 'Learned at Performance and Persuasion.', th: 'ความรู้ด้านการแสดงและโน้มน้าว' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_LEARNED, skillCheckAttributeId: 'performance' },
          { type: KEYWORD_TYPE.SKILL_CHECK_LEARNED, skillCheckAttributeId: 'persuasion' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'trait-vocal-mimicry',
    name: { en: 'Vocal Mimicry', th: 'เลียนเสียง' },
    description: { en: 'Gifted at Deception (mimicking sounds).', th: 'พรสวรรค์ด้านหลอกลวง (เลียนเสียง)' },
    icon: 'vocal-mimicry-icon',
    tags: [ 'part', 'voice' ],
    isFullTrait: false,
    effects: [
      {
        name: { en: 'Vocal Mimicry', th: 'เลียนเสียง' },
        description: { en: 'Gifted at Deception (mimicking sounds).', th: 'พรสวรรค์ด้านหลอกลวง (เลียนเสียง)' },
        keywords: [
          { type: KEYWORD_TYPE.SKILL_CHECK_GIFTED, skillCheckAttributeId: 'deception' }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 