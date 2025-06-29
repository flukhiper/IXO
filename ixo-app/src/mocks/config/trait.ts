import { TraitConfig } from '@/types/config/trait';

export const mockTraits: TraitConfig[] = // --- Sample Trait Configurations ---
[
  {
    id: 'dragonoid',
    name: { en: 'Dragonoid', th: 'ดราโกนอยด์' },
    description: { en: 'Arrogant and resilient beings blessed with dragon scales and unwavering will.', th: 'สิ่งมีชีวิตที่เย่อหยิ่งและยืดหยุ่น ได้รับพรด้วยเกล็ดมังกรและเจตจำนงที่แน่วแน่' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🐉',
    isSpecial: true,
    tags: [ 'special', 'draconic' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'dragonoid-fearless-will', 'dragonoid-hardened-scales' ]
      }
    ]
  },
  {
    id: 'kijin',
    name: { en: 'Kijin', th: 'คิจิน' },
    description: { en: 'Battle-driven beings that grow fiercer as they bleed.', th: 'สิ่งมีชีวิตที่ถูกขับเคลื่อนด้วยการต่อสู้ซึ่งเติบโตดุร้ายขึ้นเมื่อพวกมันเลือดออก' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '💀',
    isSpecial: true,
    tags: [ 'special', 'berserker' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'kijin-pain-fury', 'kijin-unkillable-instinct' ]
      }
    ]
  },
  {
    id: 'mechina',
    name: { en: 'Mechina', th: 'เมคินา' },
    description: { en: 'Construct-like beings with unmatched adaptability and relentless efficiency.', th: 'สิ่งมีชีวิตคล้ายโครงสร้างที่ปรับตัวได้ดีเยี่ยมและมีประสิทธิภาพไม่หยุดยั้ง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '⚙️',
    isSpecial: true,
    tags: [ 'special', 'construct' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'mechina-extra-load', 'mechina-restless-processor' ]
      }
    ]
  },
  {
    id: 'werebeast',
    name: { en: 'Werebeast', th: 'วายร้าย' },
    description: { en: 'Driven by obsession and empowered by primal senses.', th: 'ถูกขับเคลื่อนด้วยความหลงใหลและได้รับพลังจากสัมผัสแห่งสัตว์ป่า' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🐾',
    isSpecial: true,
    tags: [ 'special', 'animalistic' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'werebeast-obsessive-focus', 'werebeast-predator-senses' ]
      }
    ]
  },
  {
    id: 'elf',
    name: { en: 'Elf', th: 'เอลฟ์' },
    description: { en: 'Graceful and ancient, the elves thrive on timeless intuition.', th: 'สง่างามและเก่าแก่ เหล่าเอลฟ์เจริญรุ่งเรืองด้วยสัญชาตญาณอันเป็นนิรันดร์' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🌿',
    isSpecial: true,
    tags: [ 'special', 'ancient' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'elf-timeless-composure', 'elf-ancient-gift' ]
      }
    ]
  },
  {
    id: 'demonia',
    name: { en: 'Demonia', th: 'เดโมเนีย' },
    description: { en: 'Mimics of others, born to outlast the harshest places.', th: 'ผู้เลียนแบบผู้อื่น เกิดมาเพื่ออยู่รอดในสถานที่ที่โหดร้ายที่สุด' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '😈',
    isSpecial: true,
    tags: [ 'special', 'superior' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'demonia-adaptive-copycat', 'demonia-harshborn' ]
      }
    ]
  },
  {
    id: 'siren',
    name: { en: 'Siren', th: 'ไซเรน' },
    description: { en: 'Charming voices and enchanting power, hard to resist.', th: 'เสียงอันไพเราะและพลังที่น่าหลงใหล ยากที่จะต้านทาน' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '🎶',
    isSpecial: true,
    tags: [ 'special', 'alluring' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'siren-enchanting-aura', 'siren-song-of-entrapment' ]
      }
    ]
  },
  {
    id: 'aethel-unchanged',
    name: { en: 'Aethel (Unchanged)', th: 'เอเธล (ไม่เปลี่ยนแปลง)' },
    description: { en: 'Bound by purpose, yet holding great hidden potential.', th: 'ถูกผูกมัดด้วยจุดประสงค์ แต่ยังคงมีศักยภาพที่ซ่อนเร้นอันยิ่งใหญ่' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: '💎',
    isSpecial: true,
    tags: [ 'special', 'aethel', 'unchanged' ],
    effects: [
      {
        type: 'skill',
        skillIds: [ 'aethel-obedient-role', 'aethel-hidden-spark' ]
      }
    ]
  }
];
