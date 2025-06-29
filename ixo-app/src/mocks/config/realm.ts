import type { RealmConfig } from '@/types/config/realm';

export const mockRealms: RealmConfig[] = // --- Updated Realm Configurations with Aethel Lore ---
[
  {
    id: 'primordia',
    name: { en: 'Primordia', th: 'ไพรเมอร์เดีย' },
    description: {
      en: 'At the cosmic heart of all existence, Primordia is the shattered origin world, born from a cataclysmic event initiated by The Fracturer. Once an idyllic realm governed by The Aethel under The Absolute\'s benevolent rule, it now pulses with raw, chaotic energy. The Fracturer\'s sealed prison, The Continuum Seal, lies at its core, constantly hinting at a need for maintenance to prevent further unraveling of reality. All inter-world travel is perilous and unpredictable, occurring only through spontaneous dimension cracks within this nexus. It was here that many of The Aethel were transformed by their inner desires, gaining diverse forms and new abilities.',
      th: 'ที่ใจกลางจักรวาลแห่งการดำรงอยู่ทั้งหมด ไพรเมอร์เดียคือโลกต้นกำเนิดที่แตกสลาย ซึ่งเกิดจากเหตุการณ์หายนะที่ริเริ่มโดยผู้ทำลายล้าง เคยเป็นอาณาจักรในอุดมคติที่ปกครองโดย The Aethel ภายใต้การปกครองอันเมตตาของ The Absolute ปัจจุบันมันเต็มไปด้วยพลังงานที่ดิบและวุ่นวาย คุกที่ปิดผนึกของผู้ทำลายล้าง The Continuum Seal อยู่ที่แกนกลางของมัน บ่งบอกถึงความจำเป็นในการบำรุงรักษาเพื่อป้องกันการคลายตัวของความเป็นจริง การเดินทางข้ามโลกทั้งหมดเป็นอันตรายและคาดเดาไม่ได้ โดยเกิดขึ้นผ่านรอยแยกมิติที่เกิดขึ้นเองภายในศูนย์รวมนี้ ที่นี่เองที่ The Aethel จำนวนมากได้รับการเปลี่ยนแปลงตามความปรารถนาภายในของพวกเขา ได้รับรูปแบบและความสามารถที่หลากหลาย'
    },
    tags: [ 'core', 'origin', 'fractured', 'nexus' ],
    archetypeIds: [ 'rift-seeker', 'shard-keeper' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'symphonia-varis',
    name: { en: 'Symphonia Varis', th: 'ซิมโฟเนีย วาริส' },
    description: {
      en: 'A realm of joy, inspiration, and performance, resembling a living theme park or fantasy garden. It\'s driven by emotion, beauty, and expressive freedom.',
      th: 'อาณาจักรแห่งความสุข แรงบันดาลใจ และการแสดง คล้ายสวนสนุกหรือสวนแฟนตาซีที่มีชีวิตขับเคลื่อนด้วยอารมณ์ ความงาม และอิสระในการแสดงออก'
    },
    tags: [ 'entertainment', 'emotion' ],
    archetypeIds: [ 'captivating-muse', 'luminous-performer' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'gaea-libris',
    name: { en: 'Gaea Libris', th: 'ไกอา ลิบริส' },
    description: {
      en: 'A vast, untamed wilderness characterized by dense jungles and monumental, living libraries where ancient lore is interwoven with the very landscape.',
      th: 'ป่าอันกว้างใหญ่ที่ยังไม่ถูกควบคุม โดดเด่นด้วยป่าทึบและห้องสมุดมีชีวิตขนาดใหญ่ที่ตำนานโบราณถักทอเข้ากับภูมิทัศน์'
    },
    tags: [ 'nature', 'knowledge' ],
    archetypeIds: [ 'cosmic-seer', 'verdant-whisperer' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'artificium',
    name: { en: 'Artificium', th: 'อาร์ติฟิเซียม' },
    description: {
      en: 'A sprawling network of technologically advanced island cities across a vast ocean, driven by invention and commerce, where towering structures and bustling markets dictate wealth and power.',
      th: 'เครือข่ายเมืองเกาะที่ก้าวหน้าทางเทคโนโลยีขนาดใหญ่ทอดตัวข้ามมหาสมุทรอันกว้างใหญ่ ขับเคลื่อนด้วยการประดิษฐ์และการค้า ที่ซึ่งโครงสร้างสูงตระหง่านและตลาดที่คึกคักกำหนดความมั่งคั่งและอำนาจ'
    },
    tags: [ 'technology', 'commerce' ],
    archetypeIds: [ 'master-mechanic', 'wealth-accumulator' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'doloria',
    name: { en: 'Doloria', th: 'โดโลเรีย' },
    description: {
      en: 'A harsh, desolate land reminiscent of a demon world or a perpetually shadowed realm, where survival is the highest art.',
      th: 'ดินแดนที่โหดร้ายและรกร้าง คล้ายกับโลกปีศาจหรืออาณาจักรที่ถูกปกคลุมด้วยเงาอย่างต่อเนื่อง ที่ซึ่งการเอาชีวิตรอดคือศิลปะขั้นสูงสุด'
    },
    tags: [ 'survival', 'sport' ],
    archetypeIds: [ 'relentless-survivor', 'shadow-scavenger' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'aethelgard',
    name: { en: 'Aethelgard', th: 'เอเธลการ์ด' },
    description: {
      en: 'A realm steeped in medieval grandeur, where knights, royalty, and ancient magic define existence and uphold a strict social order. It carries the deep echoes of The Aethel\'s shared, yet divergent, history, reflecting the profound social divide between the transformed Varied Aethel and the traditionalist Unchanged Aethel.',
      th: 'อาณาจักรที่เต็มไปด้วยความยิ่งใหญ่แบบยุคกลาง ซึ่งอัศวิน ราชวงศ์ และเวทมนตร์โบราณกำหนดการดำรงอยู่และรักษาลำดับทางสังคมที่เข้มงวด มันแบกรับเสียงสะท้อนอันลึกซึ้งของประวัติศาสตร์ร่วมกันแต่แตกต่างกันของ The Aethel สะท้อนถึงความแตกแยกทางสังคมอย่างลึกซึ้งระหว่าง The Varied Aethel ที่ได้รับการเปลี่ยนแปลงและ The Unchanged Aethel ที่ยึดมั่นในประเพณี'
    },
    tags: [ 'magic', 'royalty', 'aethel', 'social-divide' ],
    archetypeIds: [ 'arcane-loremaster', 'diplomatic-regent' ],
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'bellarax',
    name: { en: 'Bellarax', th: 'เบลลารักซ์' },
    description: {
      en: 'A sprawling, untamed land dominated by mighty, diverse species locked in perpetual wars for territory and resources, where strength is the ultimate law.',
      th: 'ดินแดนที่กว้างใหญ่ยังไม่ถูกควบคุม ซึ่งถูกครอบงำโดยเผ่าพันธุ์ที่ทรงพลังและหลากหลายที่ติดอยู่ในสงครามชั่วนิรันดร์เพื่อแย่งชิงอาณาเขตและทรัพยากร ที่ซึ่งความแข็งแกร่งคือกฎหมายสูงสุด'
    },
    tags: [ 'war', 'strength' ],
    archetypeIds: [ 'iron-general', 'cunning-warlord' ],
    createdAt: '2023-01-01T00:00:00Z'
  }
];
