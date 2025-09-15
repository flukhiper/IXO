import type { TraitConfig } from '@/types/config/trait';

export const mockTraits: TraitConfig[] = [
];

export const mockFullTraits: TraitConfig[] = [
  {
    id: 'trait-dracari',
    name: {
      en: 'Dracari',
      th: 'ดราคาริ'
    },
    description: {
      en: 'A race of Eminent beings directly influenced by the wrathful Wraith. Half-human, half-dragon, their bodies are flames of wrath that never extinguish.',
      th: 'เผ่าพันธุ์ Eminent ที่ได้รับอิทธิพลโดยตรงจาก Wraith ผู้เดือดดาล ครึ่งมนุษย์ครึ่งมังกร ร่างกายคือเปลวเพลิงแห่งโทสะที่ไม่มีวันมอด'
    },
    icon: 'dracari-icon',
    thumbnail: 'dracari-thumbnail.jpg',
    tags: [
      'dracari',
      'eminent',
      'dragon',
      'fire',
      'wrath',
      'warrior'
    ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    skillSelectionRule: [
      {
        skillIds: [ 
          'skill-blood-of-wrath', 
          'skill-scales-of-endurance', 
          'skill-breath-of-dracari' 
        ],
        numberOfSelections: 3
      }
    ]
  },
  {
    id: 'trait-syralis',
    name: {
      en: 'Syralis',
      th: 'ไซราลิส'
    },
    description: {
      en: 'Eminent beings blessed by Lust of desire. A race with captivating beauty whose voice and charm can enchant hearts like magic.',
      th: 'Eminent ผู้ได้รับพรจาก Lust แห่งความปรารถนา เผ่าพันธุ์ที่มีรูปลักษณ์งดงามตรึงตา เสียงและเสน่ห์ของพวกเขาสามารถสะกดหัวใจได้ราวเวทมนตร์'
    },
    icon: 'syralis-icon',
    thumbnail: 'syralis-thumbnail.jpg',
    tags: [
      'syralis',
      'eminent',
      'merfolk',
      'charm',
      'desire',
      'beauty'
    ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    skillSelectionRule: [
      {
        skillIds: [ 
          'skill-syralis-charm', 
          'skill-tideform', 
          'skill-alluring-presence' 
        ],
        numberOfSelections: 3
      }
    ]
  },
  {
    id: 'trait-elvarin',
    name: {
      en: 'Elvarin',
      th: 'เอลวาริน'
    },
    description: {
      en: 'An Eminent race of ambition and acquisition, those who refuse to let anything be taken from them. Their bodies, minds, and memories do not decay, earning them the title of "the immortal race."',
      th: 'เผ่าพันธุ์ Eminent แห่งความทะเยอทะยานและการไขว่คว้า ผู้ไม่ยอมให้สิ่งใดถูกพรากไปจากตน ร่างกาย จิตใจ และความทรงจำของพวกเขาไม่ถดถอย ทำให้ถูกขนานนามว่า "เผ่าพันธุ์อมตะ"'
    },
    icon: 'elvarin-icon',
    thumbnail: 'elvarin-thumbnail.jpg',
    tags: [
      'elvarin',
      'eminent',
      'immortal',
      'ambition',
      'preservation',
      'noble'
    ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    skillSelectionRule: [
      {
        skillIds: [ 
          'skill-endless-vitality', 
          'skill-timeless-memory', 
          'skill-unfading-will' 
        ],
        numberOfSelections: 3
      }
    ]
  },
  {
    id: 'trait-teknith',
    name: {
      en: 'Teknith',
      th: 'เทคนิธ'
    },
    description: {
      en: 'A cybernetic Eminent race born from the influence of Gluttony. They possess a "Core" as their center instead of internal organs, with bodies filled with mechanisms and artificial organs. The more time passes, the further their bodies drift from their original living form.',
      th: 'เผ่าพันธุ์ Eminent กึ่งชีวกลที่เกิดขึ้นจากอิทธิพลของ Gluttony พวกเขามี "แก่นพลัง" เป็นศูนย์กลางแทนอวัยวะภายใน ร่างกายเต็มไปด้วยกลไกและอวัยวะเทียม ยิ่งกาลเวลาผ่านไป ร่างกายพวกเขายิ่งห่างไกลจากความเป็นสิ่งมีชีวิตเดิม'
    },
    icon: 'teknith-icon',
    thumbnail: 'teknith-thumbnail.jpg',
    tags: [
      'teknith',
      'eminent',
      'cybernetic',
      'gluttony',
      'evolution',
      'mechanical'
    ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    skillSelectionRule: [
      {
        skillIds: [ 
          'skill-body-modification',
          'skill-reboot-protocol',
          'skill-neuron-network' 
        ],
        numberOfSelections: 3
      }
    ]
  },
  {
    id: 'trait-veylin',
    name: {
      en: 'Veylin',
      th: 'เวย์ลิน'
    },
    description: {
      en: 'A small Eminent race often overlooked, but hiding immense power and potential within. They grow through "feelings of inferiority" that drive them to covet what others possess.',
      th: 'เผ่าพันธุ์ Eminent ขนาดเล็กที่มักถูกมองข้าม แต่ซ่อนพลังและศักยภาพอันมหาศาลไว้ภายใน พวกเขาเติบโตด้วย "ความรู้สึกต่ำต้อย" ที่คอยผลักดันให้ไขว่คว้าสิ่งที่ผู้อื่นมี'
    },
    icon: 'veylin-icon',
    thumbnail: 'veylin-thumbnail.jpg',
    tags: [
      'veylin',
      'eminent',
      'envy',
      'adaptation',
      'mimicry',
      'shadow'
    ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    skillSelectionRule: [
      {
        skillIds: [ 
          'skill-adaptive-form',
          'skill-mimic-insight',
          'skill-echo-aptitude' 
        ],
        numberOfSelections: 3
      }
    ]
  },
  {
    id: 'trait-furalis',
    name: {
      en: 'Furalis',
      th: 'ฟูราลิส'
    },
    description: {
      en: 'A Beastfolk Eminent race deeply connected to nature. They live in harmony with their surroundings, never rushing, but hiding power and intelligence deep within.',
      th: 'เผ่าพันธุ์ Eminent Beastfolk ที่ผูกพันกับธรรมชาติ พวกเขาใช้ชีวิตอย่างสอดคล้องกับรอบตัว ไม่รีบร้อน แต่ซ่อนพลังและความเฉลียวฉลาดไว้อย่างลึกซึ้ง'
    },
    icon: 'furalis-icon',
    thumbnail: 'furalis-thumbnail.jpg',
    tags: [
      'furalis',
      'eminent',
      'beastfolk',
      'nature',
      'harmony',
      'guardian'
    ],
    ownerId: 'admin',
    gameSystemId: 'fractured-faction',
    isSystem: true,
    value: 2,
    skillSelectionRule: [
      {
        skillIds: [ 
          'skill-natural-affinity',
          'skill-beastfolk-reflex',
          'skill-harmonized-life' 
        ],
        numberOfSelections: 3
      }
    ]
  }
];

export const mockAllTraits = [
  ...mockTraits
];

export default mockAllTraits;
