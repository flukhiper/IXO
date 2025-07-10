import type { DowntimeConfig } from '@/types/config/downtime';
import { KEYWORD_TYPE, VALUE_TYPE } from '@/constants/config/base';

// === Mock Downtime Configs ===
export const mock: DowntimeConfig[] = [
  // 1. Prepare Combat Loadout
  {
    id: 'downtime-prepare-combat-loadout',
    name: { en: 'Prepare Combat Loadout', th: 'เตรียมชุดต่อสู้' },
    description: {
      en: 'Change your prepared Combat and Command Actions. Can be performed once per downtime (about 1 hour).',
      th: 'เปลี่ยนการเตรียมการกระทำต่อสู้และคำสั่งของคุณ ทำได้หนึ่งครั้งต่อช่วงพัก (ประมาณ 1 ชั่วโมง)'
    },
    icon: 'loadout-icon',
    tags: [ 'core', 'utility' ],
    requiredProficiencies: [],
    shortDowntime: {
      cost: 0,
      duration: 1,
      effects: [] // No mechanical effect, just narrative
    },
    longDowntime: {
      cost: 0,
      duration: 1,
      effects: []
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // 2. Tend to Wounds
  {
    id: 'downtime-tend-to-wounds',
    name: { en: 'Tend to Wounds', th: 'รักษาบาดแผล' },
    description: {
      en: 'Restore 1d4 + Character Level HP. During Full Downtime, 2 slots can restore a character to max HP.',
      th: 'ฟื้นฟู 1d4 + เลเวล HP ใน Full Downtime ใช้ 2 ช่องเพื่อฟื้นฟู HP เต็ม'
    },
    icon: 'heal-icon',
    tags: [ 'core', 'healing' ],
    requiredProficiencies: [],
    shortDowntime: {
      cost: 1,
      duration: 1,
      effects: [
        {
          keywords: [
            {
              type: KEYWORD_TYPE.RESTORE,
              attributeId: 'attribute-hit-points',
              baseValue: { type: VALUE_TYPE.DICE, formula: '1d4' },
              formula: '1d4 + level' // Narrative: add character level
            }
          ]
        }
      ]
    },
    longDowntime: {
      cost: 2,
      duration: 2,
      effects: [
        {
          keywords: [
            {
              type: KEYWORD_TYPE.RESTORE,
              attributeId: 'attribute-hit-points',
              baseValue: { type: VALUE_TYPE.FULL }
            }
          ]
        }
      ]
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // 3. Maintain Gear
  {
    id: 'downtime-maintain-gear',
    name: { en: 'Maintain Gear', th: 'ซ่อมบำรุงอุปกรณ์' },
    description: {
      en: 'Restore 1d4 DP to one piece of armor or shield (DC 10 Tinker). If proficient with Smith\'s Tools, restore 1d4+2 DP automatically.',
      th: 'ฟื้นฟู 1d4 DP ให้กับเกราะหรือโล่หนึ่งชิ้น (DC 10 ช่าง) ถ้ามีความชำนาญ Smith\'s Tools ฟื้นฟู 1d4+2 DP อัตโนมัติ'
    },
    icon: 'repair-icon',
    tags: [ 'core', 'repair' ],
    requiredProficiencies: [],
    shortDowntime: {
      cost: 1,
      duration: 1,
      effects: [
        {
          keywords: [
            {
              type: KEYWORD_TYPE.REPAIR,
              numberOfItems: 1,
              baseValue: { type: VALUE_TYPE.DICE, formula: '1d4' },
              formula: '1d4 (or 1d4+2 if proficient with Smith\'s Tools)'
            }
          ]
        }
      ]
    },
    longDowntime: {
      cost: 1,
      duration: 1,
      effects: [
        {
          keywords: [
            {
              type: KEYWORD_TYPE.REPAIR,
              numberOfItems: 1,
              baseValue: { type: VALUE_TYPE.DICE, formula: '1d4' },
              formula: '1d4 (or 1d4+2 if proficient with Smith\'s Tools)'
            }
          ]
        }
      ]
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // 4. Prepare Fortifying Meal (Proficient: Cook's Tools)
  {
    id: 'downtime-prepare-fortifying-meal',
    name: { en: 'Prepare Fortifying Meal', th: 'เตรียมอาหารบำรุง' },
    description: {
      en: 'Create a meal that grants a minor, scaling combat buff for next combat. Requires Cook\'s Tools proficiency.',
      th: 'สร้างอาหารที่ให้บัฟการต่อสู้เล็กน้อยตามเลเวลในคอมแบทถัดไป ต้องมีความชำนาญ Cook\'s Tools'
    },
    icon: 'meal-icon',
    tags: [ 'proficient', 'buff', 'cooking' ],
    requiredProficiencies: [ { proficiencyId: 'proficiency-cooks-tools', level: 1 } ],
    shortDowntime: {
      cost: 2,
      duration: 2,
      effects: [
        {
          keywords: [
            // Focusing Meal: Aim X
            { type: KEYWORD_TYPE.AIM, value: 'any' },
            // Iron-Stomach Ration: Tough X
            { type: KEYWORD_TYPE.TOUGH, value: 'any' },
            // Moment of Clarity: Regain X Fractal Points (up to 3)
            {
              type: KEYWORD_TYPE.RESTORE,
              attributeId: 'attribute-fractal-points',
              baseValue: { type: VALUE_TYPE.FIXED, value: 1 },
              formula: 'X = ceil(level/2), max 3'
            }
          ]
        }
      ]
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // 5. Alchemical Preparation (Proficient: Chemical's Tools)
  {
    id: 'downtime-alchemical-preparation',
    name: { en: 'Alchemical Preparation', th: 'เตรียมสารเคมี' },
    description: {
      en: 'Craft a potion, poison, or chemical item from a known formula. Requires Chemical\'s Tools proficiency.',
      th: 'สร้างโพชั่น พิษ หรือไอเท็มเคมีจากสูตรที่รู้ ต้องมีความชำนาญ Chemical\'s Tools'
    },
    icon: 'alchemy-icon',
    tags: [ 'proficient', 'crafting', 'alchemy' ],
    requiredProficiencies: [ { proficiencyId: 'proficiency-chemicals-tools', level: 1 } ],
    shortDowntime: {
      cost: 2,
      duration: 2,
      effects: [] // Narrative: crafting, not a direct effect
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // 6. Craft Trap (Proficient: Trapmaker's Tools)
  {
    id: 'downtime-craft-trap',
    name: { en: 'Craft Trap', th: 'สร้างกับดัก' },
    description: {
      en: 'Create a non-magical trap (snare, alarm, caltrops, etc). Requires Trapmaker\'s Tools proficiency.',
      th: 'สร้างกับดักที่ไม่ใช่เวทมนตร์ เช่น บ่วงเตือนภัย ตะปูเรือใบ ต้องมีความชำนาญ Trapmaker\'s Tools'
    },
    icon: 'trap-icon',
    tags: [ 'proficient', 'crafting', 'trap' ],
    requiredProficiencies: [ { proficiencyId: 'proficiency-trapmakers-tools', level: 1 } ],
    shortDowntime: {
      cost: 2,
      duration: 2,
      effects: [] // Narrative: crafting, not a direct effect
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // 7. Personal Project
  {
    id: 'downtime-personal-project',
    name: { en: 'Personal Project', th: 'โปรเจกต์ส่วนตัว' },
    description: {
      en: 'Pursue a long-term, story-focused goal (e.g., forging a weapon, researching lore, etc).',
      th: 'ทำกิจกรรมระยะยาวที่เน้นเนื้อเรื่อง เช่น สร้างอาวุธ วิจัยความรู้ ฯลฯ'
    },
    icon: 'project-icon',
    tags: [ 'personal', 'project', 'story' ],
    requiredProficiencies: [],
    shortDowntime: {
      cost: 3,
      duration: 3,
      effects: [] // Narrative only
    },
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 