import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import { NONE_VALUE } from '@/constants/config/common';
import type { AttributeConfig, ConstantAttributeConfig, DiceAttributeConfig, ResourceAttributeConfig, SavingThrowAttributeConfig, SkillCheckAttributeConfig } from '@/types/config/attribute';

export const mockBaseResourceAttributes: ResourceAttributeConfig[] = [
  {
    id: 'hit-points',
    name: {
      en: 'Hit Points',
      th: 'พลังชีวิต'
    },
    description: {
      en: 'Hit Points is the number of hit points a character has.',
      th: 'พลังชีวิตคือค่าพลังชีวิตของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 8,
    abbreviation: 'HP',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'temporary-hit-points',
    name: {
      en: 'Temporary Hit Points',
      th: 'พลังชีวิตชั่วคลาว'
    },
    description: {
      en: 'Temporary Hit Points is the number of temporary hit points a character has.',
      th: 'พลังชีวิตชั่วคลาวคือค่าพลังชีวิตชั่วคลาวของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 0,
    abbreviation: 'Temporary HP',
    modifier: NONE_VALUE.STRING,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'focus-points',
    name: {
      en: 'Focus Points',
      th: 'พลังสมาธิ'
    },
    description: {
      en: 'Focus Points is the number of focus points a character has.',
      th: 'พลังสมาธิคือค่าพลังสมาธิของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 0,
    abbreviation: 'FP',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'action-points',
    name: {
      en: 'Action Points',
      th: 'พลังการกระทำ'
    },
    description: {
      en: 'Action Points is the number of action points a character has.',
      th: 'พลังการกระทำคือค่าพลังการกระทำของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 2,
    abbreviation: 'AP',
    modifier: NONE_VALUE.STRING,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'reaction-points',
    name: {
      en: 'Reaction Points',
      th: 'พลังการตอบสนอง'
    },
    description: {
      en: 'Reaction Points is the number of reaction points a character has.',
      th: 'พลังการตอบสนองคือค่าพลังการตอบสนองของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 1,
    abbreviation: 'RP',
    modifier: NONE_VALUE.STRING,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'movement',
    name: {
      en: 'Movement',
      th: 'การเคลื่อนที่'
    },
    description: {
      en: 'Movement is the number of movement points a character has.',
      th: 'การเคลื่อนที่คือค่าการเคลื่อนที่ของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 6,
    abbreviation: 'Movement',
    modifier: 'floor(stat(AGI)/2) + floor(stat(STR)/2)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'short-rest-points',
    name: {
      en: 'Short Rest Points',
      th: 'ความสามารถการพักผ่อนระยะสั้น'
    },
    description: {
      en: 'Short Rest Points is the ability to rest for a short period of time.',
      th: 'ความสามารถการพักผ่อนระยะสั้นคือค่าความสามารถการพักผ่อนระยะสั้นของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 2,
    abbreviation: 'Short RP',
    modifier: NONE_VALUE.STRING,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'long-rest-points',
    name: {
      en: 'Long Rest Points',
      th: 'ความสามารถการพักผ่อนระยะยาว'
    },
    description: {
      en: 'Long Rest Points is the ability to rest for a long period of time.',
      th: 'ความสามารถการพักผ่อนระยะยาวคือค่าความสามารถการพักผ่อนระยะยาวของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 6,
    abbreviation: 'Long RP',
    modifier: NONE_VALUE.STRING,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'carrying-capacity',
    name: {
      en: 'Carrying Capacity',
      th: 'ความสามารถการรับน้ำหนัก'
    },
    description: {
      en: 'Carrying Capacity is the ability to carry a weight.',
      th: 'ความสามารถการรับน้ำหนักคือค่าความสามารถการรับน้ำหนักของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 140,
    abbreviation: 'CC',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'art-slots',
    name: {
      en: 'Art Slots',
      th: 'ความสามารถการจดจำกระบวนท่า'
    },
    description: {
      en: 'Art Slots is the ability to memorize actions.',
      th: 'ความสามารถในการจดจำกระบวนท่าคือค่าความสามารถในการจดจำกระบวนท่าของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 3,
    abbreviation: 'AS',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'skill-slots',
    name: {
      en: 'Skill Slots',
      th: 'ความสามารถการจดจำทักษะ'
    },
    description: {
      en: 'Skill Slots is the ability to memorize skills.',
      th: 'ความสามารถในการจดจำทักษะคือค่าความสามารถในการจดจำทักษะของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.RESOURCE,
    value: 3,
    abbreviation: 'SS',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  }
];

export const mockBaseConstantAttributes: ConstantAttributeConfig[] = [
  {
    id: 'restore-focus-points',
    name: {
      en: 'Restore Focus Points',
      th: 'การฟื้นฟูพลังสมาธิ'
    },
    description: {
      en: 'Restore Focus Points is the ability to restore focus points.',
      th: 'การฟื้นฟูพลังสมาธิคือค่าการฟื้นฟูพลังสมาธิของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 1,
    abbreviation: 'Restore FP',
    modifier: 'floor(stat(SEN)/2)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'evasion-class',
    name: {
      en: 'Evasion Class',
      th: 'ความสามารถการหลบหลีก'
    },
    description: {
      en: 'Evasion Class is the ability to evade attacks.',
      th: 'ความสามารถการหลบหลีกคือค่าความสามารถการหลบหลีกของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 10,
    abbreviation: 'EC',
    modifier: 'stat(AGI)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'block-bonus',
    name: {
      en: 'Block Bonus',
      th: 'ความสามารถการป้องกัน'
    },
    description: {
      en: 'Block Bonus is the ability to block attacks.',
      th: 'ความสามารถการป้องกันคือค่าความสามารถการป้องกันของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 0,
    abbreviation: 'BB',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'difficulty-class',
    name: {
      en: 'Difficulty Class',
      th: 'ความยากในการยับยั้ง'
    },
    description: {
      en: 'Difficulty Class is the ability to resist physical activities.',
      th: 'ความยากในการยับยั้งคือค่าความยากในการยับยั้งของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 10,
    abbreviation: 'DC',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'influence-bonus',
    name: {
      en: 'Influence Bonus',
      th: 'ความสามารถการส่งอิทธิพล'
    },
    description: {
      en: 'Influence Bonus is the ability to influence others.',
      th: 'ความสามารถการส่งอิทธิพลคือค่าความสามารถการส่งอิทธิพลของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 0,
    abbreviation: 'IC',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'damage-reduction',
    name: {
      en: 'Damage Reduction',
      th: 'ความสามารถการลดความเสียหาย'
    },
    description: {
      en: 'Damage Reduction is the ability to reduce damage.',
      th: 'ความสามารถการลดความเสียหายคือค่าความสามารถการลดความเสียหายของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 0,
    abbreviation: 'DR',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'jump-distance',
    name: {
      en: 'Jump Distance',
      th: 'ความสามารถการกระโดด'
    },
    description: {
      en: 'Jump Distance is the ability to jump a distance.',
      th: 'ความสามารถการกระโดดคือค่าความสามารถการกระโดดของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 3,
    abbreviation: 'JD',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'climb-distance',
    name: {
      en: 'Climb Distance',
      th: 'ความสามารถการปีน'
    },
    description: {
      en: 'Climb Distance is the ability to climb a distance.',
      th: 'ความสามารถการปีนคือค่าความสามารถการปีนของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 1,
    abbreviation: 'CD',
    modifier: 'floor(stat(STR)/2)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'swim-distance',
    name: {
      en: 'Swim Distance',
      th: 'ความสามารถการว่ายน้ำ'
    },
    description: {
      en: 'Swim Distance is the ability to swim a distance.',
      th: 'ความสามารถการว่ายน้ำคือค่าความสามารถการว่ายน้ำของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.CONSTANT,
    value: 1,
    abbreviation: 'SD',
    modifier: 'floor(stat(STR)/2)',
    gameSystemId: 'fracture-fiction'
  }
];

export const mockBaseDiceAttributes: DiceAttributeConfig[] = [
  {
    id: 'initiative-roll',
    name: {
      en: 'Initiative Roll',
      th: 'ความสามารถการชิงลำดับ'
    },
    description: {
      en: 'Initiative Roll is the ability to roll a die.',
      th: 'ความสามารถการชิงลำดับคือค่าความสามารถการชิงลำดับของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.DICE,
    value: '2d10',
    abbreviation: 'Initiative',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'attack-roll',
    name: {
      en: 'Attack Roll',
      th: 'ความสามารถการโจมตี'
    },
    description: {
      en: 'Attack Roll is the ability to roll a die.',
      th: 'ความสามารถการโจมตีคือค่าความสามารถการโจมตีของตัวละคร'
    },
    type: ATTRIBUTE_TYPE.DICE,
    value: '2d10',
    abbreviation: 'AR',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  }
];

export const mockBaseSkillCheckAttributes: SkillCheckAttributeConfig[] = [
  {
    id: 'strength-skill-check',
    name: {
      en: 'Strength Skill Check',
      th: 'ความแข็งแกร่ง'
    },
    description: {
      en: 'Strength Skill Check is the ability to exert physical force.',
      th: 'ความแข็งแกร่งคือความสามารถในการขยายพลังกาย'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'STR-check',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'agility-skill-check',
    name: {
      en: 'Agility Skill Check',
      th: 'ความคล่องตัว'
    },
    description: {
      en: 'Agility Skill Check is the ability to move quickly and easily.',
      th: 'ความคล่องตัวคือความสามารถในการเคลื่อนไหวอย่างรวดเร็วและง่าย'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'AGI-check',
    modifier: 'stat(AGI)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'sense-skill-check',
    name: {
      en: 'Sense Skill Check',
      th: 'ประสาทสัมผัส'
    },
    description: {
      en: 'Sense Skill Check is the ability to perceive the world around you.',
      th: 'ประสาทสัมผัสคือความสามารถในการรับรู้โลกรอบตัว'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'SEN-check',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'intelligence-skill-check',
    name: {
      en: 'Intelligence Skill Check',
      th: 'สติปัญญา'
    },
    description: {
      en: 'Intelligence Skill Check is the ability to understand and reason.',
      th: 'สติปัญญาคือความสามารถในการเข้าใจและคิด'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'INT-check',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'technique-skill-check',
    name: {
      en: 'Technique Skill Check',
      th: 'ทักษะ'
    },
    description: {
      en: 'Technique Skill Check is the ability to use tools and objects or actions in a skillful manner.',
      th: 'ทักษะคือความสามารถในการใช้เครื่องมือ,วัตถุ หรือการกระทำต่าง ๆ อย่างมีประสิทธิภาพ'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'TEC-check',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'charisma-skill-check',
    name: {
      en: 'Charisma Skill Check',
      th: 'เสน่ห์'
    },
    description: {
      en: 'Charisma Skill Check is the ability to influence and persuade others.',
      th: 'เสน่ห์คือความสามารถในการสัมผัสและทำให้ผู้อื่นรู้สึกอบอุ่น'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'CHA-check',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  }
];

export const mockAbilitySkillCheckAttributes: SkillCheckAttributeConfig[] = [
  {
    id: 'power-skill-check',
    name: {
      en: 'Power Skill Check',
      th: 'การออกแรง'
    },
    description: {
      en: 'Power Skill Check is the ability to perform physical activities.',
      th: 'การออกแรงทางกายภาพคือความสามารถในการออกแรงทางกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'power-check',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'endurance-skill-check',
    name: {
      en: 'Endurance Skill Check',
      th: 'ความทนทาน'
    },
    description: {
      en: 'Endurance Skill Check is the ability to withstand physical activities.',
      th: 'ความทนทานทางกายภาพคือความสามารถในการทนทานทางกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'endurance-check',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'stealth-skill-check',
    name: {
      en: 'Stealth Skill Check',
      th: 'การซ่อนตัว'
    },
    description: {
      en: 'Stealth Skill Check is the ability to hide from others.',
      th: 'การซ่อนตัวทางกายภาพคือความสามารถในการซ่อนตัวทางกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'stealth-check',
    modifier: 'stat(AGI)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'acrobatics-skill-check',
    name: {
      en: 'Acrobatics Skill Check',
      th: 'การกระทำทางกายภาพ'
    },
    description: {
      en: 'Acrobatics Skill Check is the ability to perform physical activities.',
      th: 'การกระทำทางกายภาพคือความสามารถในการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'acrobatics-check',
    modifier: 'stat(AGI)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'perception-skill-check',
    name: {
      en: 'Perception Skill Check',
      th: 'ประสาทสัมผัสด้านกายภาพ'
    },
    description: {
      en: 'Perception Skill Check is the ability to perceive the world around you.',
      th: 'ประสาทสัมผัสด้านกายภาพคือความสามารถในการรับรู้โลกรอบตัว'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'perception-check',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'aura-sense-skill-check',
    name: {
      en: 'Aura Sense Skill Check',
      th: 'ประสาทสัมผัสด้านพลังงาน'
    },
    description: {
      en: 'Aura Sense Skill Check is the ability to perceive the aura of others.',
      th: 'ประสาทสัมผัสด้านพลังงานคือความสามารถในการรับรู้พลังงานของผู้อื่น'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'aura-sense-check',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'insight-skill-check',
    name: {
      en: 'Insight Skill Check',
      th: 'ความคิดรู้สึก'
    },
    description: {
      en: 'Insight Skill Check is the ability to understand and reason.',
      th: 'ความคิดรู้สึกคือความสามารถในการเข้าใจและคิด'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'insight-check',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'knowledge-skill-check',
    name: {
      en: 'Knowledge Skill Check',
      th: 'ความรู้'
    },
    description: {
      en: 'Knowledge Skill Check is the ability to know and understand.',
      th: 'ความรู้คือความสามารถในการรู้และเข้าใจ'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'knowledge-check',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'analysis-skill-check',
    name: {
      en: 'Analysis Skill Check',
      th: 'การวิเคราะห์'
    },
    description: {
      en: 'Analysis Skill Check is the ability to analyze and reason.',
      th: 'การวิเคราะห์คือความสามารถในการวิเคราะห์'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'analysis-check',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'problem-solving-skill-check',
    name: {
      en: 'Problem Solving Skill Check',
      th: 'การแก้ไขปัญหา'
    },
    description: {
      en: 'Problem Solving Skill Check is the ability to solve problems.',
      th: 'การแก้ไขปัญหาคือความสามารถในการแก้ไขปัญหา'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'problem-solving-check',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'tinker-skill-check',
    name: {
      en: 'Tinker Skill Check',
      th: 'การปรับแต่ง'
    },
    description: {
      en: 'Tinker Skill Check is the ability to tinker with objects and machines.',
      th: 'การปรับแต่งคือความสามารถในการปรับแต่งวัตถุและเครื่องจักร'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'tinker-check',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'operation-skill-check',
    name: {
      en: 'Operation Skill Check',
      th: 'การดำเนินการ'
    },
    description: {
      en: 'Operation Skill Check is the ability to operate machines and objects.',
      th: 'การดำเนินการคือความสามารถในการดำเนินการวัตถุและเครื่องจักร'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'operation-check',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'finesse-skill-check',
    name: {
      en: 'Finesse Skill Check',
      th: 'ความละเอียด'
    },
    description: {
      en: 'Finesse Skill Check is the ability to perform physical activities with precision.',
      th: 'ความละเอียดคือความสามารถในการกระทำกายภาพอย่างละเอียด'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'finesse-check',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'persuasion-skill-check',
    name: {
      en: 'Persuasion Skill Check',
      th: 'การโน้มน้าว'
    },
    description: {
      en: 'Persuasion Skill Check is the ability to persuade others.',
      th: 'การโน้มน้าวคือความสามารถในการโน้มน้าวผู้อื่น'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'persuasion-check',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'deception-skill-check',
    name: {
      en: 'Deception Skill Check',
      th: 'การหลอกลวง'
    },
    description: {
      en: 'Deception Skill Check is the ability to deceive others.',
      th: 'การหลอกลวงคือความสามารถในการหลอกลวงผู้อื่น'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'deception-check',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'intimidation-skill-check',
    name: {
      en: 'Intimidation Skill Check',
      th: 'การข่มขวัญ'
    },
    description: {
      en: 'Intimidation Skill Check is the ability to intimidate others.',
      th: 'การข่มขวัญคือความสามารถในการข่มขวัญผู้อื่น'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'intimidation-check',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'performance-skill-check',
    name: {
      en: 'Performance Skill Check',
      th: 'การแสดง'
    },
    description: {
      en: 'Performance Skill Check is the ability to perform.',
      th: 'การแสดงคือความสามารถในการแสดง'
    },
    type: ATTRIBUTE_TYPE.SKILL_CHECK,
    value: '2d10',
    abbreviation: 'performance-check',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  }
];

export const mockSavingThrowAttributes: SavingThrowAttributeConfig[] = [
  {
    id: 'strength-saving-throw',
    name: {
      en: 'Strength Saving Throw',
      th: 'ยับยั้งด้วยความแข็งแกร่ง'
    },
    description: {
      en: 'Strength Saving Throw is the ability to resist physical activities.',
      th: 'ยับยั้งด้วยความแข็งแกร่งคือความสามารถในการยับยั้งการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    value: '2d10',
    abbreviation: 'strength-save',
    modifier: 'stat(STR)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'agility-saving-throw',
    name: {
      en: 'Agility Saving Throw',
      th: 'ยับยั้งด้วยความคล่องตัว'
    },
    description: {
      en: 'Agility Saving Throw is the ability to resist physical activities.',
      th: 'ยับยั้งด้วยความคล่องตัวคือความสามารถในการยับยั้งการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    value: '2d10',
    abbreviation: 'agility-save',
    modifier: 'stat(AGI)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'sense-saving-throw',
    name: {
      en: 'Sense Saving Throw',
      th: 'ยับยั้งด้วยความประสาทสัมผัส'
    },
    description: {
      en: 'Sense Saving Throw is the ability to resist physical activities.',
      th: 'ยับยั้งด้วยความประสาทสัมผัสคือความสามารถในการยับยั้งการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    value: '2d10',
    abbreviation: 'sense-save',
    modifier: 'stat(SEN)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'intelligence-saving-throw',
    name: {
      en: 'Intelligence Saving Throw',
      th: 'ยับยั้งด้วยความสติปัญญา'
    },
    description: {
      en: 'Intelligence Saving Throw is the ability to resist physical activities.',
      th: 'ยับยั้งด้วยความสติปัญญาคือความสามารถในการยับยั้งการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    value: '2d10',
    abbreviation: 'intelligence-save',
    modifier: 'stat(INT)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'technique-saving-throw',
    name: {
      en: 'Technique Saving Throw',
      th: 'ยับยั้งด้วยความทักษะ'
    },
    description: {
      en: 'Technique Saving Throw is the ability to resist physical activities.',
      th: 'ยับยั้งด้วยความทักษะคือความสามารถในการยับยั้งการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    value: '2d10',
    abbreviation: 'technique-save',
    modifier: 'stat(TEC)',
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'charisma-saving-throw',
    name: {
      en: 'Charisma Saving Throw',
      th: 'ยับยั้งด้วยความเสน่ห์'
    },
    description: {
      en: 'Charisma Saving Throw is the ability to resist physical activities.',
      th: 'ยับยั้งด้วยความเสน่ห์คือความสามารถในการยับยั้งการกระทำกายภาพ'
    },
    type: ATTRIBUTE_TYPE.SAVING_THROW,
    value: '2d10',
    abbreviation: 'charisma-save',
    modifier: 'stat(CHA)',
    gameSystemId: 'fracture-fiction'
  }
];

export const mockAttribute: AttributeConfig[] = [
  ...mockBaseResourceAttributes,
  ...mockBaseConstantAttributes,
  ...mockBaseDiceAttributes,

  ...mockBaseSkillCheckAttributes,
  ...mockAbilitySkillCheckAttributes,

  ...mockSavingThrowAttributes
];