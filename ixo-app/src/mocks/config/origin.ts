import type { OriginConfig } from '@/types/config/origin';
import { KEYWORD_TYPE } from '@/constants/config/base';

export const mockOrigins: OriginConfig[] = [
  {
    id: 'origin-primordia',
    name: {
      en: 'Primordia',
      th: 'พริมอร์เดีย'
    },
    description: {
      en: 'You are a child of the chaotic, untamed nexus. Growing up where reality itself is unstable has forced you to become adaptable above all else. Your senses are honed to perceive the slightest disturbance, and your mind is a flexible tool, ready to learn whatever skill is necessary to survive the impossible.',
      th: 'คุณเป็นลูกของจุดเชื่อมต่อที่วุ่นวายและป่าเถื่อน การเติบโตในที่ที่ความเป็นจริงไม่เสถียรบังคับให้คุณต้องปรับตัวเหนือสิ่งอื่นใด ประสาทสัมผัสของคุณได้รับการฝึกฝนให้รับรู้การรบกวนที่เล็กที่สุด และจิตใจของคุณเป็นเครื่องมือที่ยืดหยุ่น พร้อมที่จะเรียนรู้ทักษะใดๆ ที่จำเป็นสำหรับการอยู่รอดในสิ่งที่เป็นไปไม่ได้'
    },
    tags: [ 'homeland', 'chaos', 'adaptable' ],
    icon: 'primordia-icon',
    specialty: {
      name: {
        en: 'Reality Sense',
        th: 'ประสาทสัมผัสแห่งความเป็นจริง'
      },
      description: {
        en: 'Your upbringing in the unstable nexus has given you an uncanny ability to sense disturbances in reality itself.',
        th: 'การเติบโตในจุดเชื่อมต่อที่ไม่เสถียรทำให้คุณมีความสามารถพิเศษในการรับรู้การรบกวนในความเป็นจริงเอง'
      }
    },
    effects: [
      {
        name: {
          en: 'Detection Gifted',
          th: 'พรสวรรค์การตรวจจับ'
        },
        description: {
          en: 'You are naturally gifted at detecting hidden things and sensing danger.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการตรวจจับสิ่งซ่อนเร้นและรับรู้อันตราย'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'detection'
          }
        ]
      },
      {
        name: {
          en: 'Adaptive Learning',
          th: 'การเรียนรู้แบบปรับตัว'
        },
        description: {
          en: 'Choose any skill check to become gifted in.',
          th: 'เลือกการตรวจสอบทักษะใดๆ เพื่อให้มีความสามารถพิเศษ'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'any',
            numberOfAttributes: 1
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-symphonia-varis',
    name: {
      en: 'Symphonia Varis',
      th: 'ซิมโฟเนีย วาริส'
    },
    description: {
      en: 'You hail from a realm where every moment is a performance. Life in Symphonia Varis is a dance, a song, a spectacle. You learned to move with a performer\'s grace and agility, captivating onlookers and navigating the wondrous, ever-shifting stage of your world with dazzling acrobatic feats.',
      th: 'คุณมาจากอาณาจักรที่ทุกช่วงเวลาคือการแสดง ชีวิตในซิมโฟเนีย วาริสคือการเต้นรำ เพลง และการแสดง คุณเรียนรู้ที่จะเคลื่อนไหวด้วยความสง่างามและความคล่องแคล่วของนักแสดง ดึงดูดผู้ชมและนำทางเวทีมหัศจรรย์ที่เปลี่ยนแปลงตลอดเวลาของโลกด้วยการแสดงกายกรรมที่ตระการตา'
    },
    tags: [ 'homeland', 'performance', 'grace' ],
    icon: 'symphonia-varis-icon',
    specialty: {
      name: {
        en: 'Stage Presence',
        th: 'การปรากฏตัวบนเวที'
      },
      description: {
        en: 'Your natural charisma and stage presence make you a natural performer and leader.',
        th: 'เสน่ห์และการปรากฏตัวบนเวทีตามธรรมชาติทำให้คุณเป็นนักแสดงและผู้นำโดยธรรมชาติ'
      }
    },
    effects: [
      {
        name: {
          en: 'Performance Gifted',
          th: 'พรสวรรค์การแสดง'
        },
        description: {
          en: 'You are naturally gifted at performing arts and entertainment.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการแสดงศิลปะและความบันเทิง'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'performance'
          }
        ]
      },
      {
        name: {
          en: 'Acrobatics Gifted',
          th: 'พรสวรรค์กายกรรม'
        },
        description: {
          en: 'You are naturally gifted at acrobatic movements and physical agility.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการเคลื่อนไหวกายกรรมและความคล่องแคล่วทางกาย'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'acrobatics'
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-gaea-libris',
    name: {
      en: 'Gaea Libris',
      th: 'เกีย ลิบริส'
    },
    description: {
      en: 'Raised in a world where knowledge grows like trees, your mind was shaped by observation and logic. You learned to spot the subtle clues hidden within the living wilderness and connect them, deducing the patterns of nature and the secrets of the ancient, interwoven lore.',
      th: 'เติบโตในโลกที่ความรู้เติบโตเหมือนต้นไม้ จิตใจของคุณถูกหล่อหลอมด้วยการสังเกตและตรรกะ คุณเรียนรู้ที่จะค้นพบเบาะแสที่ซ่อนเร้นในป่าที่มีชีวิตและเชื่อมโยงพวกมันเข้าด้วยกัน อนุมานรูปแบบของธรรมชาติและความลับของตำนานโบราณที่สานต่อกัน'
    },
    tags: [ 'homeland', 'knowledge', 'nature' ],
    icon: 'gaea-libris-icon',
    specialty: {
      name: {
        en: 'Natural Scholar',
        th: 'นักวิชาการแห่งธรรมชาติ'
      },
      description: {
        en: 'Your connection to the living knowledge of Gaea Libris gives you unique insights into natural phenomena.',
        th: 'การเชื่อมโยงกับความรู้ที่มีชีวิตของเกีย ลิบริสทำให้คุณมีมุมมองเฉพาะเกี่ยวกับปรากฏการณ์ทางธรรมชาติ'
      }
    },
    effects: [
      {
        name: {
          en: 'Deduction Gifted',
          th: 'พรสวรรค์การอนุมาน'
        },
        description: {
          en: 'You are naturally gifted at logical reasoning and solving puzzles.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการใช้เหตุผลทางตรรกะและการแก้ปริศนา'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'deduction'
          }
        ]
      },
      {
        name: {
          en: 'Perception Gifted',
          th: 'พรสวรรค์การรับรู้'
        },
        description: {
          en: 'You are naturally gifted at noticing details and observing your surroundings.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการสังเกตรายละเอียดและการรับรู้สภาพแวดล้อม'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'perception'
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-artificium',
    name: {
      en: 'Artificium',
      th: 'อาร์ติฟิเซียม'
    },
    description: {
      en: 'Life in the sky-islands of Artificium is a complex equation of commerce and invention. To succeed, you learned not only how to build and repair intricate devices, but also how to study them—analyzing their functions and weaknesses to innovate or exploit them for profit and power.',
      th: 'ชีวิตในเกาะลอยฟ้าของอาร์ติฟิเซียมคือสมการที่ซับซ้อนของการค้าและการประดิษฐ์ เพื่อให้ประสบความสำเร็จ คุณเรียนรู้ไม่เพียงแค่การสร้างและซ่อมแซมอุปกรณ์ที่ซับซ้อน แต่ยังเรียนรู้วิธีการศึกษาพวกมัน—วิเคราะห์ฟังก์ชันและจุดอ่อนเพื่อนวัตกรรมหรือใช้ประโยชน์เพื่อกำไรและอำนาจ'
    },
    tags: [ 'homeland', 'technology', 'commerce' ],
    icon: 'artificium-icon',
    specialty: {
      name: {
        en: 'Innovation',
        th: 'นวัตกรรม'
      },
      description: {
        en: 'Your understanding of technology and commerce allows you to create and improve devices.',
        th: 'ความเข้าใจในเทคโนโลยีและการค้าของคุณช่วยให้คุณสร้างและปรับปรุงอุปกรณ์ได้'
      }
    },
    effects: [
      {
        name: {
          en: 'Analyze Gifted',
          th: 'พรสวรรค์การวิเคราะห์'
        },
        description: {
          en: 'You are naturally gifted at analyzing and understanding complex systems.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการวิเคราะห์และเข้าใจระบบที่ซับซ้อน'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'analyze'
          }
        ]
      },
      {
        name: {
          en: 'Tinker Gifted',
          th: 'พรสวรรค์การซ่อมแซม'
        },
        description: {
          en: 'You are naturally gifted at repairing and modifying mechanical devices.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการซ่อมแซมและปรับแต่งอุปกรณ์กลไก'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'tinker'
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-doloria',
    name: {
      en: 'Doloria',
      th: 'โดโลเรีย'
    },
    description: {
      en: 'Doloria taught you that survival is a physical contest. In its harsh and desolate landscapes, you learned to push your body past its limits, enduring incredible hardship. More importantly, you learned that sometimes the only way to survive is to run—to sprint faster than whatever was hunting you.',
      th: 'โดโลเรียสอนคุณว่าการอยู่รอดคือการแข่งขันทางกายภาพ ในภูมิประเทศที่โหดร้ายและรกร้าง คุณเรียนรู้ที่จะผลักดันร่างกายเกินขีดจำกัด ทนต่อความยากลำบากที่เหลือเชื่อ สิ่งที่สำคัญกว่านั้นคือคุณเรียนรู้ว่าบางครั้งวิธีเดียวที่จะอยู่รอดคือการวิ่ง—วิ่งให้เร็วกว่าสิ่งที่กำลังล่าคุณ'
    },
    tags: [ 'homeland', 'survival', 'endurance' ],
    icon: 'doloria-icon',
    specialty: {
      name: {
        en: 'Survival Instinct',
        th: 'สัญชาตญาณการอยู่รอด'
      },
      description: {
        en: 'Your harsh upbringing has given you an unbreakable will and survival instinct.',
        th: 'การเติบโตที่โหดร้ายทำให้คุณมีจิตใจที่แข็งแกร่งและสัญชาตญาณการอยู่รอดที่ไม่ย่อท้อ'
      }
    },
    effects: [
      {
        name: {
          en: 'Sprint Gifted',
          th: 'พรสวรรค์การวิ่งเร็ว'
        },
        description: {
          en: 'You are naturally gifted at running and sprinting at high speeds.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการวิ่งและวิ่งเร็วด้วยความเร็วสูง'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'sprint'
          }
        ]
      },
      {
        name: {
          en: 'Athletics Gifted',
          th: 'พรสวรรค์กีฬา'
        },
        description: {
          en: 'You are naturally gifted at physical activities and athletic feats.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการทำกิจกรรมทางกายและความสำเร็จทางกีฬา'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'athletics'
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-aethelgard',
    name: {
      en: 'Aethelgard',
      th: 'เอเธลการ์ด'
    },
    description: {
      en: 'In the realm of knights and magicians, history is power. Your upbringing in Aethelgard, with its strict codes and ancient lineage, taught you the value of knowing the past—recalling laws, treaties, and histories—and using that knowledge to persuade others in the complex political landscape of the court.',
      th: 'ในอาณาจักรของอัศวินและนักเวทมนตร์ ประวัติศาสตร์คืออำนาจ การเติบโตในเอเธลการ์ด ด้วยกฎเกณฑ์ที่เข้มงวดและเชื้อสายโบราณ สอนคุณถึงคุณค่าของการรู้จักอดีต—การจดจำกฎหมาย สนธิสัญญา และประวัติศาสตร์—และการใช้ความรู้เหล่านั้นเพื่อโน้มน้าวผู้อื่นในภูมิทัศน์ทางการเมืองที่ซับซ้อนของราชสำนัก'
    },
    tags: [ 'homeland', 'nobility', 'history' ],
    icon: 'aethelgard-icon',
    specialty: {
      name: {
        en: 'Noble Heritage',
        th: 'มรดกแห่งขุนนาง'
      },
      description: {
        en: 'Your noble upbringing gives you access to courtly knowledge and political connections.',
        th: 'การเติบโตแบบขุนนางทำให้คุณเข้าถึงความรู้ของราชสำนักและการเชื่อมโยงทางการเมือง'
      }
    },
    effects: [
      {
        name: {
          en: 'Persuasion Gifted',
          th: 'พรสวรรค์การโน้มน้าว'
        },
        description: {
          en: 'You are naturally gifted at convincing and persuading others.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการโน้มน้าวและชักจูงผู้อื่น'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'persuasion'
          }
        ]
      },
      {
        name: {
          en: 'Recall Gifted',
          th: 'พรสวรรค์การจดจำ'
        },
        description: {
          en: 'You are naturally gifted at remembering and recalling information.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการจดจำและเรียกคืนข้อมูล'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'recall'
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-bellarax',
    name: {
      en: 'Bellarax',
      th: 'เบลลารักซ์'
    },
    description: {
      en: 'Bellarax is a world of endless war where strength is paramount—but brute force alone is not enough. You learned that true dominance comes from projecting power to intimidate your rivals and weaving clever lies to misdirect your enemies, ensuring victory before the first blow is even struck.',
      th: 'เบลลารักซ์เป็นโลกแห่งสงครามที่ไม่มีที่สิ้นสุดที่ความแข็งแกร่งเป็นสิ่งสำคัญ—แต่พลังดิบเพียงอย่างเดียวไม่เพียงพอ คุณเรียนรู้ว่าการครอบงำที่แท้จริงมาจากการแสดงพลังเพื่อข่มขู่คู่แข่งและการสร้างเรื่องโกหกที่ฉลาดเพื่อเบี่ยงเบนศัตรูของคุณ รับประกันชัยชนะก่อนที่จะมีการโจมตีครั้งแรกเสียอีก'
    },
    tags: [ 'homeland', 'war', 'intimidation' ],
    icon: 'bellarax-icon',
    specialty: {
      name: {
        en: 'Warrior\'s Cunning',
        th: 'ความฉลาดของนักรบ'
      },
      description: {
        en: 'Your experience in endless conflict has taught you both physical and psychological warfare.',
        th: 'ประสบการณ์ในการขัดแย้งที่ไม่มีที่สิ้นสุดสอนคุณทั้งการสงครามทางกายภาพและจิตวิทยา'
      }
    },
    effects: [
      {
        name: {
          en: 'Deception Gifted',
          th: 'พรสวรรค์การหลอกลวง'
        },
        description: {
          en: 'You are naturally gifted at lying and deceiving others.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการโกหกและหลอกลวงผู้อื่น'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'deception'
          }
        ]
      },
      {
        name: {
          en: 'Intimidation Gifted',
          th: 'พรสวรรค์การข่มขู่'
        },
        description: {
          en: 'You are naturally gifted at intimidating and frightening others.',
          th: 'คุณมีความสามารถพิเศษตามธรรมชาติในการข่มขู่และทำให้ผู้อื่นกลัว'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_GIFTED,
            skillCheckAttributeId: 'intimidation'
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  },
  {
    id: 'origin-wanderer',
    name: {
      en: 'The Wanderer',
      th: 'ผู้เดินทาง'
    },
    description: {
      en: 'You do not belong to any single realm. Perhaps you were born in the void between worlds, are the sole survivor of a forgotten community, or have simply traveled so extensively that no one place can claim you. Your identity is a mosaic of experiences, making you uniquely versatile and self-made.',
      th: 'คุณไม่ได้เป็นของอาณาจักรใดอาณาจักรหนึ่ง บางทีคุณอาจเกิดในช่องว่างระหว่างโลก เป็นผู้รอดชีวิตเพียงคนเดียวของชุมชนที่ถูกลืม หรือเพียงแค่เดินทางอย่างกว้างขวางจนไม่มีที่ไหนสามารถอ้างสิทธิ์คุณได้ ตัวตนของคุณคือการรวมกันของประสบการณ์ ทำให้คุณมีความหลากหลายและสร้างตัวเองขึ้นมาโดยเฉพาะ'
    },
    tags: [ 'special', 'versatile', 'self-made' ],
    icon: 'wanderer-icon',
    specialty: {
      name: {
        en: 'Adaptive Experience',
        th: 'ประสบการณ์ที่ปรับตัวได้'
      },
      description: {
        en: 'Your diverse experiences allow you to adapt to any situation and learn quickly.',
        th: 'ประสบการณ์ที่หลากหลายของคุณช่วยให้คุณปรับตัวกับสถานการณ์ใดๆ และเรียนรู้ได้อย่างรวดเร็ว'
      }
    },
    effects: [
      {
        name: {
          en: 'Versatile Learning',
          th: 'การเรียนรู้ที่หลากหลาย'
        },
        description: {
          en: 'Choose any three different skill checks to become learned in.',
          th: 'เลือกการตรวจสอบทักษะที่แตกต่างกันสามอย่างเพื่อให้มีความรู้'
        },
        keywords: [
          {
            type: KEYWORD_TYPE.SKILL_CHECK_LEARNED,
            skillCheckAttributeId: 'any',
            numberOfAttributes: 3
          }
        ]
      }
    ],
    gameSystemId: 'game-system-ixo',
    ownerId: 'system'
  }
]; 