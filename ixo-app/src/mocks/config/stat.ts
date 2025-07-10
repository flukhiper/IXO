import type { StatConfig } from '@/types/config/stat';
import { STAT_TYPE } from '@/constants/config/stat';

export const mock: StatConfig[] = [
  // Primary Stats
  {
    id: 'stat-strength',
    name: {
      en: 'Strength',
      th: 'ความแข็งแกร่ง'
    },
    description: {
      en: 'Primary stat that defines combat identity and core physical expression. Governs HP, Damage Reduction, STR-based Damage, and Carrying Capacity.',
      th: 'สถิติหลักที่กำหนดเอกลักษณ์การต่อสู้และการแสดงออกทางกายภาพหลัก ควบคุม HP การลดความเสียหาย ความเสียหายแบบ STR และความสามารถในการแบก'
    },
    abbreviation: 'STR',
    tags: [ 'primary', 'physical', 'combat' ],
    icon: 'strength-icon',
    type: STAT_TYPE.CORE,
    isSystem: true,
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'stat-agility',
    name: {
      en: 'Agility',
      th: 'ความคล่องแคล่ว'
    },
    description: {
      en: 'Primary stat that defines movement and evasion capabilities. Governs Movement, Armor Class, and physical coordination.',
      th: 'สถิติหลักที่กำหนดความสามารถในการเคลื่อนไหวและการหลบหลีก ควบคุมการเคลื่อนไหว Armor Class และการประสานงานทางกายภาพ'
    },
    abbreviation: 'AGI',
    tags: [ 'primary', 'physical', 'movement' ],
    icon: 'agility-icon',
    type: STAT_TYPE.CORE,
    isSystem: true,
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'stat-sense',
    name: {
      en: 'Sense',
      th: 'ประสาทสัมผัส'
    },
    description: {
      en: 'Primary stat that defines mystical awareness and perception. Governs Fractal Points (FP), Initiative, and sensory acuity.',
      th: 'สถิติหลักที่กำหนดการรับรู้ทางจิตวิญญาณและการรับรู้ ควบคุม Fractal Points (FP) Initiative และความเฉียบคมของประสาทสัมผัส'
    },
    abbreviation: 'SEN',
    tags: [ 'primary', 'mental', 'mystical' ],
    icon: 'sense-icon',
    type: STAT_TYPE.CORE,
    isSystem: true,
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  // Secondary Stats
  {
    id: 'stat-technique',
    name: {
      en: 'Technique',
      th: 'เทคนิค'
    },
    description: {
      en: 'Secondary stat that enhances mechanical finesse and precision. Governs Weapon Accuracy, Gear Bonus (Dmg/AC), and technical skills.',
      th: 'สถิติรองที่เพิ่มความแม่นยำและความชำนาญทางกลไก ควบคุมความแม่นยำของอาวุธ Gear Bonus (Dmg/AC) และทักษะทางเทคนิค'
    },
    abbreviation: 'TEC',
    tags: [ 'secondary', 'technical', 'precision' ],
    icon: 'technique-icon',
    type: STAT_TYPE.CORE,
    isSystem: true,
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'stat-intelligence',
    name: {
      en: 'Intelligence',
      th: 'สติปัญญา'
    },
    description: {
      en: 'Secondary stat that enhances tactical sharpness and cognitive abilities. Governs Skill Efficiency and analytical thinking.',
      th: 'สถิติรองที่เพิ่มความเฉียบคมทางยุทธวิธีและความสามารถทางปัญญา ควบคุมประสิทธิภาพของทักษะและการคิดวิเคราะห์'
    },
    abbreviation: 'INT',
    tags: [ 'secondary', 'mental', 'tactical' ],
    icon: 'intelligence-icon',
    type: STAT_TYPE.CORE,
    isSystem: true,
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'stat-presence',
    name: {
      en: 'Presence',
      th: 'การปรากฏตัว'
    },
    description: {
      en: 'Secondary stat that enhances social influence and charisma. Governs Buff/Debuff Duration for skills, actions, and commands.',
      th: 'สถิติรองที่เพิ่มอิทธิพลทางสังคมและเสน่ห์ ควบคุมระยะเวลาของ Buff/Debuff สำหรับทักษะ การกระทำ และคำสั่ง'
    },
    abbreviation: 'PRE',
    tags: [ 'secondary', 'social', 'influence' ],
    icon: 'presence-icon',
    type: STAT_TYPE.CORE,
    isSystem: true,
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 