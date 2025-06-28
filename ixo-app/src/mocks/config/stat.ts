import type { StatConfig } from '@/types/config/stat';

export const mockStats: StatConfig[] = [
  {
    id: 'strength',
    name: { en: 'Strength', th: 'ความแข็งแกร่ง' },
    description: { en: 'Represents physical power and might. Often associated with a \'reckless\' personality and a combat role as an offense or tank, influencing hit points and carry capacity.', th: 'แสดงถึงพละกำลังและพลังทางกายภาพ มักเกี่ยวข้องกับบุคลิกที่ \'ไม่ระมัดระวัง\' และบทบาทในการต่อสู้ในฐานะผู้โจมตีหรือแทงค์ ซึ่งส่งผลต่อพลังชีวิตและความสามารถในการบรรทุก' },
    abbreviation: 'STR',
    tags: [ 'primary', 'offense', 'tank' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'agility',
    name: { en: 'Agility', th: 'ความคล่องตัว' },
    description: { en: 'Measures swiftness and reflexes. Often associated with an \'avoid\' personality and an opportunistic or evasive combat role, influencing speed, armor class, and movement.', th: 'วัดความรวดเร็วและการตอบสนอง มักเกี่ยวข้องกับบุคลิกที่ \'หลีกเลี่ยง\' และบทบาทในการต่อสู้ที่เน้นโอกาสหรือการหลบหลีก ซึ่งส่งผลต่อความเร็ว ค่าป้องกัน และการเคลื่อนที่' },
    abbreviation: 'AGI',
    tags: [ 'primary', 'opportunistic', 'evasive' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'dexterity',
    name: { en: 'Dexterity', th: 'ความชำนาญ' },
    description: { en: 'Indicates fine motor skills, balance, and precision. Often associated with an \'effectively\' personality and a role in optimization and precise actions, influencing physical damage, armor class, and attack rolls.', th: 'บ่งบอกถึงทักษะการเคลื่อนไหวที่ละเอียดอ่อน ความสมดุล และความแม่นยำ มักเกี่ยวข้องกับบุคลิกที่ \'มีประสิทธิภาพ\' และบทบาทในการเพิ่มประสิทธิภาพและการกระทำที่แม่นยำ ซึ่งส่งผลต่อความเสียหายทางกายภาพ ค่าป้องกัน และการทอยโจมตี' },
    abbreviation: 'DEX',
    tags: [ 'primary', 'optimization', 'precise' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'intelligence',
    name: { en: 'Intelligence', th: 'สติปัญญา' },
    description: { en: 'Reflects reasoning, knowledge, and memory. Often associated with a \'logical\' personality and a combat role in control and exploitation, influencing action slots and difficulty class.', th: 'สะท้อนถึงเหตุผล ความรู้ และความทรงจำ มักเกี่ยวข้องกับบุคลิกที่ \'มีเหตุผล\' และบทบาทในการต่อสู้ด้านการควบคุมและการใช้ประโยชน์ ซึ่งส่งผลต่อช่องแอคชั่นและค่าความยาก' },
    abbreviation: 'INT',
    tags: [ 'primary', 'control', 'exploitation' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'sense',
    name: { en: 'Sense', th: 'สัมผัส' },
    description: { en: 'Governs awareness, intuition, and perception. Often associated with \'instincts\' and a combat role in engagement and awareness, influencing initiative and regeneration.', th: 'ควบคุมการรับรู้ สัญชาตญาณ และการมองเห็น มักเกี่ยวข้องกับ \'สัญชาตญาณ\' และบทบาทในการต่อสู้ด้านการเข้าปะทะและการรับรู้ ซึ่งส่งผลต่อการริเริ่มและการฟื้นฟู' },
    abbreviation: 'SEN',
    tags: [ 'primary', 'engagement', 'awareness' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'charisma',
    name: { en: 'Charisma', th: 'เสน่ห์' },
    description: { en: 'Measures force of personality, persuasion, and leadership. Often associated with \'communication\' and a combat role in auras, buffs, debuffs, and morale.', th: 'วัดพลังบุคลิกภาพ การโน้มน้าวใจ และความเป็นผู้นำ มักเกี่ยวข้องกับ \'การสื่อสาร\' และบทบาทในการต่อสู้ด้านออร่า บัพ ดีบัฟ และขวัญกำลังใจ' },
    abbreviation: 'CHA',
    tags: [ 'primary', 'aura', 'buff', 'debuff', 'morale' ],
    createdAt: '2023-01-01T00:00:00Z'
  }
];
