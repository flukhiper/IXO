import type { OriginConfig } from '@/types/config/origin';
import { TALENT_EFFECT_TYPE } from '@/constants/config/effect';

export const mockOrigins: OriginConfig[] = [
  {
    id: 'origin-wraith',
    name: {
      th: 'มิติแห่ง Wraith – "แดนคำราม (Roaring Expanse)"',
      en: 'Dimension of Wraith – "Roaring Expanse"'
    },
    description: {
      th: 'โลกถูกแผดเผาด้วยลาวา, หินแหลมคม, พายุเพลิง และเถ้าถ่านพัดผ่านทุกอณู ภูมิประเทศดูเหมือนผ่านสงครามมานานนับพันปี — ทุกอย่างบิดเบี้ยวจากความเดือดดาลของ Wraith ท้องฟ้ามืดครึ้ม, แสงอาทิตย์ทะลุผ่านเมฆแดงได้เพียงเลือนราง สิ่งมีชีวิตในที่นี่ถูกปรับสภาพให้ทนทาน แข็งแกร่ง และดุร้ายเพื่อความอยู่รอด',
      en: 'A world scorched by lava, sharp rocks, firestorms, and pervasive ashes. The landscape appears to have endured millennia of war, everything distorted by Wraith\'s fury. The sky is dark, with only faint sunlight penetrating red clouds. Life here is adapted to be tough, strong, and fierce for survival.'
    },
    icon: '/icons/wraith-icon.png',
    thumbnail: '/thumbnails/wraith-thumbnail.jpg',
    tags: [ 'combat', 'endurance', 'physical' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:00:00Z',
    updatedAt: '2025-07-29T13:00:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-power'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-endurance'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-intimidation'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-sprint'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-acrobatics'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-instinct'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-lust',
    name: {
      th: 'มิติแห่ง Lust – "แดนฝันหวาน (Velvet Mirage)"',
      en: 'Dimension of Lust – "Velvet Mirage"'
    },
    description: {
      th: 'โลกที่เต็มไปด้วยทิวทัศน์แสนงดงามราวความฝัน — ทุ่งดอกไม้ที่ไม่มีวันโรยรา เมืองลอยฟ้าเรืองแสง ดนตรีอ่อนหวานล่องลอยในอากาศ ทุกสิ่งถูกออกแบบมาเพื่อให้รู้สึก "สบาย" และ "พอใจ" ไม่มีสิ่งใดดูอันตราย... แต่มักมีบางอย่างผิดแปลกหากมองนานเกินไป เบื้องหลังความงามคือโครงสร้างลวงตา ผู้ควบคุมมิตินี้ในปัจจุบัน ไม่ใช่ Lust แต่เป็นผู้อื่น ที่แอบควบคุมโลกฝันในนามของเธอ',
      en: 'A world full of dreamlike beautiful scenery - eternal flower fields, glowing floating cities, sweet music drifting through the air. Everything is designed to feel \'comfortable\' and \'satisfied,\' nothing seems dangerous... but something often feels off if stared at for too long. Behind the beauty is an illusory structure. The current controller of this dimension is not Lust, but another, secretly manipulating the dream world in her name.'
    },
    icon: '/icons/lust-icon.png',
    thumbnail: '/thumbnails/lust-thumbnail.jpg',
    tags: [ 'social', 'charm', 'illusion' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:05:00Z',
    updatedAt: '2025-07-29T13:05:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-persuasion'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-performance'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-insight'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-deception'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-acrobatics'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-greed',
    name: {
      th: 'มิติแห่ง Greed – "นครขั้นบันได (The Gilded Steps)"',
      en: 'Dimension of Greed – "The Gilded Steps"'
    },
    description: {
      th: 'มิติแห่งนี้คือเมืองสูงตระหง่านที่แบ่งเป็น "ชั้น" ตามลำดับชนชั้น — ยิ่งอยู่สูง ยิ่งมั่งคั่ง ยิ่งมีอำนาจ อาคารชั้นบนหรูหราราวพระราชวังทองคำ ส่วนชั้นล่างคือเขาวงกตของตลาดมืด, ท่อระบายน้ำ, และเหล่าผู้สิ้นหวัง กฎหมาย, ศีลธรรม และความยุติธรรมถูกตีความผ่านผลประโยชน์ — "ถูก" คือสิ่งที่ทำให้ได้กำไรมากที่สุด ทุกสิ่งเป็นสัญญา — ทุกความสัมพันธ์, ทุกความฝัน, ทุกชีวิต',
      en: 'This dimension is a towering city divided into \'levels\' according to social class - the higher one is, the wealthier and more powerful. Upper-level buildings are luxurious like golden palaces, while lower levels are a labyrinth of black markets, sewers, and desperate souls. Law, morality, and justice are interpreted through self-interest - \'right\' is whatever yields the most profit. Everything is a contract - every relationship, every dream, every life.'
    },
    icon: '/icons/greed-icon.png',
    thumbnail: '/thumbnails/greed-thumbnail.jpg',
    tags: [ 'strategy', 'negotiation', 'manipulation' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:10:00Z',
    updatedAt: '2025-07-29T13:10:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-deception'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-analyze'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-persuasion'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-recall'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-insight'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-deduction'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-gluttony',
    name: {
      th: 'มิติแห่ง Gluttony – "แดนล้นปัญญา (Overflowing Sanctum)"',
      en: 'Dimension of Gluttony – "Overflowing Sanctum"'
    },
    description: {
      th: 'ภูมิประเทศผสมผสานระหว่างสถาปัตยกรรมล้ำยุค, หอคอยทดลองที่พุ่งสูงสู่ท้องฟ้า และเส้นทางพลังงานที่ไหลเวียนไปทั่ว สิ่งประดิษฐ์ทุกชนิด, สิ่งมีชีวิตดัดแปลง, และภูมิศาสตร์ที่ไม่สมเหตุสมผล — ทั้งหมดคือผลลัพธ์จากการทดลองไม่หยุดยั้ง ผู้คนในมิตินี้อาศัยอยู่ในเมืองทดลอง, โดมพลังงาน, หรือลอยอยู่ในโครงข่ายของเครื่องจักรที่เปลี่ยนแปลงตลอดเวลา แต่บางมุมของโลก เริ่มมี "คราบเงาดำ" คลานเข้ามา — สิ่งแปลกประหลาดที่ไร้ชื่อเรียก, ไม่มีใครควบคุม และไม่ควรมีอยู่',
      en: 'The landscape blends futuristic architecture, towering experimental spires reaching for the sky, and pulsating energy pathways throughout. All manner of artifacts, mutated creatures, and illogical geography—all are results of ceaseless experimentation. People in this dimension live in experimental cities, energy domes, or float within an ever-changing network of machinery. But in some corners of the world, \'dark stains\' begin to crawl in—strange, nameless entities, uncontrolled by anyone, and shouldn\'t exist.'
    },
    icon: '/icons/gluttony-icon.png',
    thumbnail: '/thumbnails/gluttony-thumbnail.jpg',
    tags: [ 'intellect', 'innovation', 'technology' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:15:00Z',
    updatedAt: '2025-07-29T13:15:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-tinker'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-deduction'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-analyze'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-operate'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-recall'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-finesse'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-envy',
    name: {
      th: 'มิติแห่ง Envy – "แดนเงาซ้อน (Mirror Abyss)"',
      en: 'Dimension of Envy – "Mirror Abyss"'
    },
    description: {
      th: 'เคยเป็นโลกธรรมดา… กระทั่ง Envy ค่อย ๆ เปลี่ยนมันทีละน้อย ปัจจุบัน มิตินี้เต็มไปด้วยสิ่งที่ "เหมือนจะดี" แต่กลับไม่มีชีวิตชีวา: เมืองไร้ความฝัน, ผู้คนไร้เป้าหมาย, การดำรงอยู่แบบเชื่องช้า ทุกสิ่งถูกจัดสรรให้ง่ายดาย — ไม่มีใครต้องตัดสินใจหรือแบกรับภาระ เพราะ Envy ทำทุกอย่างให้หมด ภูมิทัศน์สะท้อนซ้อนกันราวกับภาพในกระจก แตกเป็นลายเส้นร้าวของอดีตที่ถูกขังไว้ ท้องฟ้าเหมือนกระจกแตกปริ — แสงสลัวที่สะท้อนจากโลกอื่นมาถึงที่นี่จางลงเรื่อย ๆ',
      en: 'Once an ordinary world... until Envy slowly changed it. Currently, this dimension is filled with things that \'seem good\' but lack vitality: dreamless cities, aimless people, slow existence. Everything is made easy - no one has to decide or bear burdens, because Envy does everything. The landscape reflects itself like a shattered mirror, broken lines of a past trapped within. The sky is like fractured glass - dim light reflecting from other worlds fades here.'
    },
    icon: '/icons/envy-icon.png',
    thumbnail: '/thumbnails/envy-thumbnail.jpg',
    tags: [ 'subterfuge', 'observation', 'adaptation' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:20:00Z',
    updatedAt: '2025-07-29T13:20:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-deception'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-insight'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-stealth'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-finesse'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-perception'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-instinct'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-lazy',
    name: {
      th: 'มิติแห่ง Lazy – "แดนหมอกนิรันดร์ (Fogveil Expanse)"',
      en: 'Dimension of Lazy – "Fogveil Expanse"'
    },
    description: {
      th: 'ดินแดนอันกว้างใหญ่ที่มีทรัพยากรเพียงพอ ทุกสิ่งดูถูกสร้างมาเพื่อให้ดำรงอยู่ได้อย่างง่ายดาย สภาพภูมิประเทศหลากหลาย: ป่าดึกดำบรรพ์, หุบเขาเงียบสงบ, บึงนิ่ง, ทะเลหมอก ไม่มีเทคโนโลยีล้ำสมัยหรือเวทมนตร์ซับซ้อน — ทุกอย่างใช้ธรรมชาติเป็นฐาน เช่น การเพาะปลูกร่วมกับวิญญาณดิน, การเดินทางตามร่องแสงดวงจันทร์ ผู้คนที่นี่ใช้ชีวิต ช้า, ง่าย, สงบ — ไม่แข่งขัน ไม่เร่งรีบ',
      en: 'A vast land with abundant resources, where everything seems designed for effortless existence. Diverse landscapes: ancient forests, tranquil valleys, still bogs, seas of fog. No advanced technology or complex magic - everything is nature-based, such as cultivating with earth spirits or navigating by moonlight. People here live slow, simple, peaceful lives - no competition, no rush.'
    },
    icon: '/icons/lazy-icon.png',
    thumbnail: '/thumbnails/lazy-thumbnail.jpg',
    tags: [ 'survival', 'nature', 'stealth' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:25:00Z',
    updatedAt: '2025-07-29T13:25:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-stealth'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-perception'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-endurance'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-instinct'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-insight'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-acrobatics'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-pride',
    name: {
      th: 'มิติแห่ง Pride – "หอคอยนิรันดร์ (The Eternal Spire)"',
      en: 'Dimension of Pride – "The Eternal Spire"'
    },
    description: {
      th: 'โลกในมิตินี้ถูกออกแบบเหมือน "หอคอย" ที่ไม่มีที่สิ้นสุด — แต่ละชั้นของหอคอยคือดินแดนแห่งชนชั้นและความสำเร็จ ชั้นล่างเป็นเหมือนเมืองสามัญ, ชนชั้นแรงงาน, ผู้เริ่มต้นชีวิต ยิ่งสูงขึ้น ยิ่งใกล้ "แสงนิรันดร์" ที่เชื่อกันว่าเป็นจุดสูงสุดของการมีตัวตน ไม่มีใครรู้ว่าบนสุดของหอคอยมีอะไร แต่ทุกคนถูกสอนให้ ปีนขึ้นไป — และปีนด้วย "คุณค่าในตนเอง" โครงสร้างทั้งหมดดูหรูหรา, คมกริบ, สมมาตร, เต็มไปด้วยสัญลักษณ์ของความยิ่งใหญ่ (รูปปั้น, ภาพจารึก, คำคมบนผนัง ฯลฯ)',
      en: 'The world in this dimension is designed like an endless \'spire\' - each floor of the spire is a land of class and achievement. The lower floors are like common cities, working class, life beginners. The higher one goes, the closer to \'eternal light\' believed to be the pinnacle of existence. No one knows what is at the very top of the spire, but everyone is taught to climb - and to climb with \'self-worth.\' The entire structure looks luxurious, sharp, symmetrical, filled with symbols of greatness (statues, carvings, quotes on walls, etc.).'
    },
    icon: '/icons/pride-icon.png',
    thumbnail: '/thumbnails/pride-thumbnail.jpg',
    tags: [ 'ambition', 'self-improvement', 'leadership' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:30:00Z',
    updatedAt: '2025-07-29T13:30:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-intimidation'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-performance'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-persuasion'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-power'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-endurance'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-deduction'
          },
          {
            type: TALENT_EFFECT_TYPE.PROMISING,
            attributeId: 'skill-analyze'
          }
        ],
        numberOfSelections: 2
      }
    ]
  },
  {
    id: 'origin-cosmos',
    name: {
      th: 'มิติแห่ง Cosmos – "ศูนย์กลางแห่งความจริงที่แตกร้าว" (Realm of Resonance)',
      en: 'Dimension of Cosmos – "Fractured Core of Reality" (Realm of Resonance)'
    },
    description: {
      th: '"โลกเดิมแตกสลายที่นี่ ที่แห่งนี้จึงไม่เหมือนมิติไหน… เพราะมันคือ \'ทุกมิติ\' และ \'ไม่มีมิติ\' ในเวลาเดียวกัน" เป็นมิติที่ สลับซับซ้อนและเหนือการคาดเดา เหตุการณ์ประหลาดเกิดขึ้นอยู่ตลอด — ท้องฟ้าที่เปลี่ยนสีเอง, กฎแรงโน้มถ่วงที่สลับด้าน, เวลาไหลย้อน ความฝันของคนคนหนึ่งอาจกลายเป็นเมืองที่ผู้คนอยู่จริงได้ ดินแดนบางส่วนดูเหมือนหลุดมาจากมิติอื่น: ป่าร้อนแรงคล้าย Wraith, ปราสาทแสนเย้ายวนของ Lust, เขตวิจัยที่ไร้ผู้คนคล้าย Gluttony — ทั้งหมดปะปนกันโดยไร้แบบแผน ไม่มีแผนที่ตายตัว — ทิศทางและขนาดของพื้นที่เปลี่ยนไปตลอดเวลา มีสิ่งก่อสร้างจากโลกเดิมปะปนกับสิ่งแปลกประหลาดอย่าง "น้ำตกที่ไหลขึ้นฟ้า" หรือ "ป่าแห่งเสียงกระซิบ" อากาศ, แสง, เวลา, และความเป็นจริงแปรผันตลอดเวลา เหมือนฝันที่กำลังสร้างตัวเองตลอดเวลา',
      en: '\'The original world shattered here. This place is unlike any other dimension... because it is \'all dimensions\' and \'no dimension\' at the same time.\' It is a complex and unpredictable dimension where strange events occur constantly - skies that change color on their own, inverted gravity, time flowing backward. One person\'s dream can become a city where people actually live. Some parts of the land look like they came from other dimensions: fiery forests similar to Wraith, alluring castles of Lust, deserted research areas like Gluttony - all mixed chaotically. No fixed map - direction and size of areas constantly change. Contains structures from the original world mixed with strange phenomena like \'waterfalls flowing upwards\' or \'forests of whispers.\' Air, light, time, and reality fluctuate constantly, like a dream building itself.'
    },
    icon: '/icons/cosmos-icon.png',
    thumbnail: '/thumbnails/cosmos-thumbnail.jpg',
    tags: [ 'adaptation', 'reality-bending', 'perception' ],
    ownerId: 'user-system',
    createdAt: '2025-07-29T13:35:00Z',
    updatedAt: '2025-07-29T13:35:00Z',
    gameSystemId: 'system-core',
    effectSelectionRule: [
      {
        effects: [
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-power'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-endurance'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-stealth'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-acrobatics'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-sprint'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-perception'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-insight'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-instinct'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-tinker'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-operate'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-finesse'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-recall'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-deduction'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-analyze'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-persuasion'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-deception'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-intimidation'
          },
          {
            type: TALENT_EFFECT_TYPE.LEARNED,
            attributeId: 'skill-performance'
          }
        ],
        numberOfSelections: 4
      }
    ]
  }
];

export default mockOrigins;
