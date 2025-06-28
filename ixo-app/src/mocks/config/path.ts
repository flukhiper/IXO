import type { PathConfig } from '@/types/config/path';

export const mockPaths: PathConfig[] = // --- New Sample Path Configurations (Prioritizing Role, Immersive Name) ---
[
  {
    id: 'path-of-annihilation',
    name: { en: 'Path of Annihilation', th: 'เส้นทางแห่งการทำลายล้าง' },
    description: { en: 'The quintessential Damage Dealer. Forged in the chaotic energies of Primordia or the brutal arenas of Doloria, those who walk this path seek to obliterate all resistance. Their focus is pure, unbridled destruction.', th: 'ผู้สร้างความเสียหายอันดับหนึ่ง หลอมรวมจากพลังงานอันวุ่นวายของไพรเมอร์เดียหรือสังเวียนอันโหดร้ายของโดโลเรีย ผู้ที่เดินบนเส้นทางนี้แสวงหาการทำลายล้างการต่อต้านทั้งหมด จุดมุ่งเน้นของพวกเขาคือการทำลายล้างอย่างแท้จริงและไร้การควบคุม' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/DC143C/FFFFFF?text=⚔️',
    tags: [ 'offense', 'damage-dealer', 'destruction' ]
  },
  {
    id: 'path-of-ingenuity',
    name: { en: 'Path of Ingenuity', th: 'เส้นทางแห่งความเฉลียวฉลาด' },
    description: { en: 'The true Utility/Specialist. Inspired by the adaptable constructs of Artificium or the hidden knowledge of Gaea Libris, these specialists master unique tactics, uncover secrets, and bend the environment to their will.', th: 'ผู้เชี่ยวชาญด้านยูทิลิตี้ที่แท้จริง ได้รับแรงบันดาลใจจากโครงสร้างที่ปรับเปลี่ยนได้ของอาร์ติฟิเซียมหรือความรู้ที่ซ่อนเร้นของไกอา ลิบริส ผู้เชี่ยวชาญเหล่านี้เชี่ยวชาญกลยุทธ์ที่ไม่เหมือนใคร เปิดเผยความลับ และปรับเปลี่ยนสภาพแวดล้อมตามความต้องการ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/4CAF50/FFFFFF?text=🛠️',
    tags: [ 'utility', 'specialist', 'adaptability' ]
  },
  {
    id: 'path-of-influence',
    name: { en: 'Path of Influence', th: 'เส้นทางแห่งอิทธิพล' },
    description: { en: 'The quintessential Buffer/Debuffer. Drawing upon the intricate magics of Aethelgard or the expressive arts of Symphonia Varis, these practitioners manipulate the very fabric of reality, enhancing allies and debilitating foes.', th: 'ผู้เสริม/ลดพลังอันดับหนึ่ง ดึงดูดเวทมนตร์อันซับซ้อนของเอเธลการ์ดหรือศิลปะการแสดงออกของซิมโฟเนีย วาริส ผู้ปฏิบัติเหล่านี้บิดเบือนโครงสร้างความเป็นจริง เสริมพลังพันธมิตรและทำให้ศัตรูอ่อนแอลง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/8A2BE2/FFFFFF?text=✨',
    tags: [ 'buffer', 'debuffer', 'manipulation' ]
  },
  {
    id: 'path-of-fortitude',
    name: { en: 'Path of Fortitude', th: 'เส้นทางแห่งความทนทาน' },
    description: { en: 'The true Tank/Defender. Rooted in the unwavering resilience found in Doloria or the disciplined ranks of Bellarax, these defenders stand as unyielding bastions, protecting the weak and enduring the fiercest assaults.', th: 'แทงค์/ผู้พิทักษ์ที่แท้จริง หยั่งรากลึกในความยืดหยุ่นที่ไม่สั่นคลอนที่พบในโดโลเรียหรือลำดับวินัยของเบลลารักซ์ ผู้พิทักษ์เหล่านี้ยืนหยัดเป็นป้อมปราการที่ไม่ยอมแพ้ ปกป้องผู้ที่อ่อนแอและอดทนต่อการโจมตีที่รุนแรงที่สุด' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/FF8C00/FFFFFF?text=🛡️',
    tags: [ 'tank', 'defender', 'protection' ]
  },
  {
    id: 'path-of-dominion',
    name: { en: 'Path of Dominion', th: 'เส้นทางแห่งการครอบงำ' },
    description: { en: 'The ultimate Controller/Crowd Control. Masters of the mind and environment, often found among the cosmic seers of Gaea Libris or the cunning warlords of Bellarax. They dominate the battlefield by trapping and incapacitating their enemies.', th: 'ผู้ควบคุม/ควบคุมฝูงชนสูงสุด ผู้เชี่ยวชาญด้านจิตใจและสิ่งแวดล้อม มักพบในหมู่ผู้หยั่งรู้จักรวาลของไกอา ลิบริส หรือขุนศึกเจ้าเล่ห์ของเบลลารักซ์ พวกเขาครอบงำสนามรบด้วยการดักจับและทำให้ศัตรูหมดสภาพ' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/1E90FF/FFFFFF?text=🌀',
    tags: [ 'controller', 'crowd-control', 'dominance' ]
  },
  {
    id: 'path-of-renewal',
    name: { en: 'Path of Renewal', th: 'เส้นทางแห่งการฟื้นฟู' },
    description: { en: 'The definitive Healer/Support. Connected to the revitalizing energies of Gaea Libris or the inspiring spirit of Symphonia Varis, these individuals heal wounds, cleanse ailments, and empower their allies with life-affirming forces.', th: 'ผู้รักษา/ผู้สนับสนุนที่สมบูรณ์แบบ เชื่อมโยงกับพลังงานฟื้นฟูของไกอา ลิบริส หรือจิตวิญญาณที่สร้างแรงบันดาลใจของซิมโฟเนีย วาริส บุคคลเหล่านี้เยียวยาบาดแผล ขจัดโรคภัยไข้เจ็บ และเสริมพลังพันธมิตรด้วยพลังที่ยืนยันชีวิต' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/3CB371/FFFFFF?text=❤️',
    tags: [ 'healer', 'support', 'restoration' ]
  }
];
