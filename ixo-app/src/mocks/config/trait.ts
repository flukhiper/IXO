import type { TraitConfig } from '@/types/config/trait';

export const mockFullTraits: TraitConfig[] = [
  {
    id: 'telari',
    name: {
      en: 'Telari',
      th: 'เทลารี'
    },
    description: {
      en: '**Origin:** The base race created by The Architect for optimal efficiency and order. They are strictly governed by **Logic and Duty**, devoid of complex emotions. **Appearance:** Externally human-like, but possess a disturbing stillness. They have pale skin and eyes that lack the sparkle of true feeling, reflecting their inability to feel basic emotions like love, fear, or anger.',
      th: '**ที่มา:** เผ่าพันธุ์พื้นฐานที่ถูกสร้างโดย เดอะ อาร์คิเทคท์ เพื่อชีวิตที่มี **ระเบียบและความมีประสิทธิภาพสูงสุด** พวกเขาขับเคลื่อนด้วย **ตรรกะและหน้าที่** เท่านั้น **รูปลักษณ์:** ภายนอกเหมือนมนุษย์ แต่มีท่าทางที่สงบนิ่งจนน่าขนลุก สีผิวซีดจาง และดวงตาที่ขาดประกายแห่งความรู้สึก พวกเขาขาดความสามารถในการรู้สึกรัก, กลัว, หรือโกรธ'
    },
    abilities: [
      {
        name: {
          en: 'Absolute Calling',
          th: 'บัญญัติหน้าที่'
        },
        description: {
          en: 'Every Telari is assigned a lifelong Function (**Calling**) by The Architect at birth. This grants them accelerated learning and aptitude for all necessary skills related to that Function. (e.g., Fast proficiency/expertise gain in skills related to their assigned role like Engineering, Strategy, or Medicine).',
          th: 'เทลารีทุกคนจะได้รับ **หน้าที่ (Calling)** ที่กำหนดโดย เดอะ อาร์คิเทคท์ ตั้งแต่เกิด สิ่งนี้ทำให้พวกเขาเรียนรู้และมีความถนัดในความชำนาญที่จำเป็นสำหรับหน้าที่นั้นได้อย่างรวดเร็ว (เช่น ได้รับความชำนาญพิเศษในทักษะที่เกี่ยวข้องกับบทบาทที่ได้รับมอบหมาย เช่น วิศวกรรม, กลยุทธ์, หรือการแพทย์)'
        }
      },
      {
        name: {
          en: 'Absolute Rule',
          th: 'บัญญัติต้องห้าม'
        },
        description: {
          en: 'Telari are bound by the absolute rules and prohibitions set by The Architect. They **cannot consciously violate** any established Command or protocol, even if illogical, unless a stronger Command supersedes it. This limitation prevents acts of betrayal, self-interest, or emotional impulses.',
          th: 'เทลารีถูกผูกมัดด้วยกฎและข้อห้ามที่ เดอะ อาร์คิเทคท์ กำหนดไว้ พวกเขา **ไม่สามารถขัดขืนข้อกำหนดที่ถูกกำหนดไว้ได้โดยเจตนา** แม้ว่าสิ่งนั้นจะดูไร้ตรรกะก็ตาม ข้อจำกัดนี้ขัดขวางการทรยศ, การกระทำเพื่อผลประโยชน์ส่วนตัว, หรือการตอบสนองตามอารมณ์'
        }
      },
      {
        name: {
          en: 'Request for Command',
          th: 'คำขอแห่งบัญชา'
        },
        description: {
          en: 'Telari are normally unable to utilize skills known as **Commands** (e.g., *Create Water*). However, a Telari may petition The Architect to gain temporary access to a specific Command.',
          th: 'โดยปกติ เทลารีจะไม่สามารถใช้ทักษะที่เรียกว่า **บัญชา (Command)** (เช่น สร้างน้ำ) ได้ แต่ถ้าทำการ **ร้องขอ (request)** ต่อ เดอะ อาร์คิเทคท์ และได้รับอนุญาต ก็จะสามารถใช้บัญชานั้นได้ชั่วคราว'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'oni', 
    name: {
      en: 'Oni',
      th: 'โอนิ'
    },
    description: {
      en: '**Origin:** Former Telari consumed by intense **Wrath**, leading to physical transformation as a vessel for pure, destructive anger. This form embodies violence and raw physical power. **Appearance:** Large and formidable, their body color changes based on the type of rage (Red: direct anger, Green: spite/hatred, Blue: cold fury from sorrow). Pronounced **horns** grow larger corresponding to the current intensity of their rage.',
      th: '**ที่มา:** อดีต Telari ที่ถูกทำลายด้วย **โทสะ (Wrath)** ที่รุนแรง พวกเขากลายพันธุ์เพื่อเป็นภาชนะที่แข็งแกร่งพอจะรองรับความโกรธดิบนี้ ซึ่งเป็นอารมณ์ที่แสดงออกถึง **ความรุนแรงและการทำลายล้าง** **รูปลักษณ์:** ร่างกายใหญ่โตและทรงพลัง รูปลักษณ์ถูกกำหนดด้วย **เฉดสีความโกรธ** หลัก (แดง, เขียว, ฟ้า) มี **เขา** ที่งอกออกมาอย่างชัดเจน ขนาดของเขาจะใหญ่ขึ้นตามปริมาณความโกรธที่รู้สึกอยู่'
    },
    abilities: [
      {
        name: {
          en: 'Oni Physique',
          th: 'ร่างกายของโอนิ'
        },
        description: {
          en: 'The Oni possess a formidable physique, granting them exceptional strength, resilience, and vitality. Their transformed body provides natural resistance to physical harm, reflecting their ability to withstand the extreme emotional turmoil within.',
          th: 'โอนิมีร่างกายที่น่าเกรงขาม ทำให้พวกเขามีพละกำลัง ความทนทาน และความมีชีวิตชีวาที่ยอดเยี่ยม ร่างกายที่เปลี่ยนแปลงของพวกเขาให้ความต้านทานต่อความเสียหายทางกายภาพโดยธรรมชาติ ซึ่งสะท้อนถึงความสามารถในการทนต่อความปั่นป่วนทางอารมณ์ภายใน'
        }
      },
      {
        name: {
          en: 'Rage Burst',
          th: 'ระเบิดความโกรธ'
        },
        description: {
          en: 'The Oni can channel the stored emotional energy (Rage) concentrated in their horns and body, releasing it as a devastating blast of destructive force, capable of overwhelming enemies in a localized area.',
          th: 'โอนิสามารถดึงพลังงานทางอารมณ์ (ความโกรธ) ที่สะสมอยู่ในเขาและร่างกาย ออกมาเป็นคลื่นพลังทำลายล้างที่รุนแรง ซึ่งสามารถทำลายล้างศัตรูในพื้นที่เป้าหมายได้อย่างหนักหน่วง'
        }
      },
      {
        name: {
          en: 'Zero Point Boiling',
          th: 'เดือดทะลุจุดศูนย์'
        },
        description: {
          en: 'When an Oni accumulates rage to its absolute peak, their skin turns pure black, and their physical abilities and powers are amplified dramatically. However, this uncontrolled state causes them to lose all self-control and rationality, entering a berserk state for a period of time.',
          th: 'เมื่อโอนิสะสมความโกรธจนถึงขีดสุด สีผิวจะเปลี่ยนเป็นสีดำสนิท และความสามารถทางกายภาพและพลังจะเพิ่มขึ้นอย่างมาก อย่างไรก็ตาม สภาวะที่ไม่สามารถควบคุมได้นี้จะทำให้พวกเขา **ขาดสติและเหตุผล** เข้าสู่สภาวะคลุ้มคลั่งเป็นระยะเวลาหนึ่ง'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'machina',
    name: {
      en: 'Machina',
      th: 'มาชินา'
    },
    description: {
      en: '**Origin:** Former Telari driven by an insatiable **Greed** for **self-perfection and ultimate capability**. They converted to non-organic machine bodies to continuously accumulate and integrate new abilities. **Appearance:** Human-like frame of metal and ceramic with a visible **Energy Core**. Initial form is highly specialized based on their first desire (e.g., oversized limbs for strength). They maintain a modular design for constant self-modification.',
      th: '**ที่มา:** อดีต Telari ที่ถูกทำลายด้วย **ความโลภ (Greed)** ซึ่งคือความโลภอย่างไม่สิ้นสุดใน **ความสมบูรณ์แบบและความสามารถที่ไร้ขีดจำกัด** พวกเขากลายพันธุ์เป็นโครงสร้างที่ไม่ใช่สิ่งมีชีวิตเพื่อการ **สะสมและบูรณาการ** ความสามารถใหม่ๆ อย่างต่อเนื่อง **รูปลักษณ์:** ร่างกายคล้ายมนุษย์ประกอบด้วยโลหะและเซรามิก มี **แก่นพลังงาน (Energy Core)** ที่มองเห็นได้ชัดเจน รูปร่างเริ่มต้นจะมีความเฉพาะทางตามความต้องการแรกเริ่ม (เช่น แขนใหญ่หากโลภในพละกำลัง) และสามารถปรับเปลี่ยนเพิ่มได้ตลอดเวลา'
    },
    abilities: [
      {
        name: {
          en: 'Machine Body',
          th: 'ร่างกายเครื่องจักร'
        },
        description: {
          en: 'The Machina\'s body is fundamentally designed to support a specific function or a set of tools, granting them inherent aptitude or special slots for dedicated equipment. This reflects the highly specialized nature of their initial transformation.',
          th: 'ร่างกายของมาชินาได้รับการออกแบบมาโดยพื้นฐานเพื่อรองรับหน้าที่ที่ชัดเจน หรือชุดเครื่องมือเฉพาะทาง ทำให้พวกเขามีความถนัดโดยกำเนิด หรือช่องพิเศษสำหรับติดตั้งอุปกรณ์เฉพาะกิจ สิ่งนี้สะท้อนถึงลักษณะเฉพาะทางของการกลายพันธุ์ครั้งแรกของพวกเขา'
        }
      },
      {
        name: {
          en: 'Body Modification',
          th: 'ร่างกายปรับแต่ง'
        },
        description: {
          en: 'Machina can actively modify their physical structure to enhance their performance or utility. By expending resources or time, they can reinforce armor, install temporary weapon systems, or integrate sensory upgrades, allowing them to adapt to evolving threats or environments.',
          th: 'มาชินาสามารถปรับแต่งโครงสร้างทางกายภาพของตนเองอย่างจริงจังเพื่อเพิ่มประสิทธิภาพหรือประโยชน์ใช้สอย ด้วยการใช้ทรัพยากรหรือเวลา พวกเขาสามารถเสริมความแข็งแกร่งของเกราะ, ติดตั้งระบบอาวุธชั่วคราว, หรือบูรณาการการอัปเกรดเซ็นเซอร์ ทำให้พวกเขาสามารถปรับตัวให้เข้ากับภัยคุกคามหรือสภาพแวดล้อมที่เปลี่ยนแปลงไปได้'
        }
      },
      {
        name: {
          en: 'Synthetic Core Power',
          th: 'แหล่งพลังงานสังเคราะห์'
        },
        description: {
          en: 'The Machina\'s Energy Core can be recharged by drawing power from external sources (e.g., electrical grids, raw magical currents, or specific chemical compounds). This makes them independent of conventional biological needs but reliant on finding compatible energy to maintain optimal function.',
          th: 'แก่นพลังงานของมาชินาสามารถชาร์จพลังงานใหม่ได้โดยการดึงพลังงานจากแหล่งภายนอก (เช่น ระบบไฟฟ้า, กระแสเวทมนตร์ดิบ, หรือสารประกอบเคมีเฉพาะ) สิ่งนี้ทำให้พวกเขาเป็นอิสระจากความต้องการทางชีวภาพทั่วไป แต่จำเป็นต้องพึ่งพาแหล่งพลังงานที่เข้ากันได้เพื่อรักษาประสิทธิภาพสูงสุด'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'stigma',
    name: {
      en: 'Stigma',
      th: 'สติกมา'
    },
    description: {
      en: '**Origin:** Former Telari consumed by **Envy**, unable to tolerate their perceived flaws compared to the qualities of wild creatures. They mutated into **Therianthropes** to **fill the void** by physically embodying the traits they most coveted (e.g., speed, dominance). **Appearance:** Bipedal, human-like structure with the body fully transformed into the features of a specific animal (fur, scales, claws, wings), reflecting the quality they envy and seek to embody.',
      th: '**ที่มา:** อดีต Telari ที่ยอมจำนนต่อ **ความอิจฉา (Envy)** ซึ่งเป็นความรู้สึกขาดแคลนที่รุนแรง การกลายพันธุ์จึงเปลี่ยนพวกเขาให้เป็น **ครึ่งมนุษย์ครึ่งสัตว์ (Therianthrope)** เพื่อ **เติมเต็ม** คุณสมบัติหรือความสามารถที่ตนเองอิจฉาและขาดแคลน **รูปลักษณ์:** คงโครงสร้างมนุษย์สองขา แต่ร่างกายทั้งหมดถูกเปลี่ยนแปลงเป็นลักษณะของสัตว์ชนิดใดชนิดหนึ่ง ซึ่งกำหนดโดย **คุณสมบัติที่พวกเขาอิจฉา** (เช่น ขน, เกล็ด, กรงเล็บ, ปีก) ร่างกายของพวกเขาคือสัญลักษณ์ของความพยายามในการเติมเต็ม'
    },
    abilities: [
      {
        name: {
          en: 'Animal Instinct',
          th: 'สัญชาตญาณแห่งสัตว์'
        },
        description: {
          en: 'Stigma possess sharpened senses and receive the natural survival instincts of their animal archetype, greatly improving their perception, tracking, and natural navigation abilities.',
          th: 'สติกมามีประสาทสัมผัสที่เฉียบแหลมและได้รับสัญชาตญาณการเอาตัวรอดตามธรรมชาติของสัตว์ต้นแบบที่ตนเองหลงใหล ทำให้ความสามารถในการรับรู้ การสะกดรอย และการนำทางดีขึ้นอย่างมาก'
        }
      },
      {
        name: {
          en: 'Soul Bond',
          th: 'สายสัมพันธ์แห่งจิตวิญญาณ'
        },
        description: {
          en: 'The Stigma can communicate and deeply understand animals of the same species as their transformed body.',
          th: 'สติกมามีความสามารถในการสื่อสารและทำความเข้าใจสัตว์ชนิดเดียวกับที่พวกเขากลายร่างมาได้อย่างลึกซึ้ง'
        }
      },
      {
        name: {
          en: 'Archetype Body',
          th: 'ร่างต้นแบบเฉพาะทาง'
        },
        description: {
          en: 'This ability represents the full utilization of the physical features of the obsessed animal archetype. The name of the ability dynamically changes based on the Stigma\'s animal form (e.g., \'Body of the Hawk\' or \'Body of the Serpent\'), allowing them to effectively use features like talons, venomous fangs, functional wings, or reinforced scales in combat and utility.',
          th: 'ความสามารถนี้แสดงถึงการใช้คุณสมบัติทางกายภาพของสัตว์ต้นแบบที่ถูกหลงใหลอย่างเต็มที่ ชื่อความสามารถจะเปลี่ยนไปตามรูปแบบสัตว์ของสติกมา (เช่น **\'ร่างกายของนก\'** สำหรับมนุษย์เหยี่ยว หรือ **\'ร่างกายของงู\'** สำหรับมนุษย์งู) ซึ่งช่วยให้พวกเขาสามารถใช้คุณสมบัติต่าง ๆ เช่น กรงเล็บ, เขี้ยวพิษ, ปีก, หรือเกล็ดที่แข็งแกร่ง ในการต่อสู้และประโยชน์ใช้สอย'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'siren',
    name: {
      en: 'Siren',
      th: 'ไซเรน'
    },
    description: {
      en: '**Origin:** Former Telari overcome by **Lust**—the intense desire for **emotional possession** and control over others through seduction and beauty. They mutated into irresistible tools of temptation. **Appearance:** Possess an **unearthly and dangerously beautiful** appearance. They feature **fish-fin ears** and **patches of skin that are dazzling, iridescent scales** that reflect light in beautiful colors, enhancing their power to lure and dominate their victims.',
      th: '**ที่มา:** อดีต Telari ที่พ่ายแพ้ต่อ **ราคะ (Lust)** ที่ต้องการ **ครอบครองทางอารมณ์** และควบคุมผู้อื่นผ่านเสน่ห์ การกลายพันธุ์เปลี่ยนพวกเขาให้เป็นเครื่องมือแห่งการล่อลวงที่ไม่อาจต้านทานได้ **รูปลักษณ์:** รูปลักษณ์ที่ **งดงามจนเกินจริง** และน่าดึงดูดใจอย่างร้ายกาจ **หูเป็นครีบปลา** ที่อ่อนช้อย และมี **ผิวหนังบางส่วนเป็นเกล็ดที่สะท้อนแสงเป็นสีสันอย่างงดงาม** เพื่อดึงดูดและครอบงำเหยื่อ'
    },
    abilities: [
      {
        name: {
          en: 'Enchanted Voice',
          th: 'คำพูดต้องมนต์'
        },
        description: {
          en: 'The Siren\'s voice is imbued with a powerful, hypnotic charm that can manipulate the emotions of listeners, making them receptive to suggestions and highly prone to compliance.',
          th: 'คำพูดของไซเรนมีเสน่ห์ดึงดูดและพลังสะกดจิตที่ทรงพลัง ซึ่งสามารถบงการอารมณ์ของผู้ฟัง ทำให้พวกเขาเปิดรับข้อเสนอแนะและคล้อยตามได้อย่างง่ายดาย'
        }
      },
      {
        name: {
          en: 'Water Dance',
          th: 'ระบำสายน้ำ'
        },
        description: {
          en: 'Through graceful movements of their body, the Siren can subtly control and manipulate small to medium bodies of water, allowing them to redirect streams or create minor whirlpools for distraction or defense.',
          th: 'ผ่านการเคลื่อนไหวของร่างกายที่สง่างาม ไซเรนสามารถควบคุมและบงการสายน้ำขนาดเล็กถึงกลางได้อย่างละเอียดอ่อน ทำให้พวกเขาสามารถเปลี่ยนทิศทางกระแสน้ำ หรือสร้างวังน้ำวนขนาดเล็กเพื่อเบี่ยงเบนความสนใจหรือป้องกันตัว'
        }
      },
      {
        name: {
          en: 'Siren Tail',
          th: 'หางไซเรน'
        },
        description: {
          en: 'The Siren has the innate ability to transform their legs into a powerful, hydrodynamic tail. In this state, the Siren gains complete freedom to move, breathe, and exist in deep water environments.',
          th: 'ไซเรนมีความสามารถโดยกำเนิดในการแปลงส่วนขาให้กลายเป็นหางที่มีพลังและสามารถเคลื่อนที่ในน้ำได้ดี ในสถานะนี้ ไซเรนจะได้รับอิสระในการเคลื่อนไหว หายใจ และดำรงชีวิตในสภาพแวดล้อมใต้น้ำได้อย่างสมบูรณ์'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'dampyr',
    name: {
      en: 'Dampyr',
      th: 'แดมเพียร์'
    },
    description: {
      en: '**Origin:** Former Telari ruined by **Gluttony**—the unending craving to **consume** life, energy, or experience to achieve **endless existence**. They transformed into vessels that must be constantly replenished. **Appearance:** They look **mostly human** but possess specific traits signaling their parasitic need: **pale, almost white skin** (from lack of sunlight/life), **red eyes** (reflecting the blood/life hunger), **fangs**, and **pointed, elf-like ears** that convey their predatory status.',
      th: '**ที่มา:** อดีต Telari ที่ถูกทำลายด้วย **ความหิวกระหาย (Gluttony)** ในชีวิต, พลังงาน, และการดำรงอยู่ที่ไม่มีวันสิ้นสุด การกลายพันธุ์เปลี่ยนพวกเขาให้เป็นภาชนะที่ต้องเติมเต็มตลอดเวลา **รูปลักษณ์:** **ภายนอกเหมือนมนุษย์ทุกอย่าง** เว้นแต่มีคุณสมบัติเฉพาะที่แสดงถึงการเป็นผู้บริโภคพลังงาน: **ผิวขาวซีด** (จากการขาดแสง/ชีวิต), **ตาสีแดง** (สะท้อนการกระหายเลือด/ชีวิต), **เขี้ยว** และ **หูแหลมเหมือนเอลฟ์** ที่แสดงถึงความเป็นสิ่งมีชีวิตชั้นสูงที่พยายามดำรงอยู่'
    },
    abilities: [
      {
        name: {
          en: 'Sanguine Sustenance',
          th: 'กลืนกินโลหิต'
        },
        description: {
          en: 'The Dampyr can sustain their eternal existence (immortality) by siphoning the blood and vital essence from other living beings, a never-ending need driven by Gluttony.',
          th: 'แดมเพียร์สามารถต่อชีวิตอมตะได้โดยการสูบเลือดและแก่นแท้ของชีวิตจากสิ่งมีชีวิตอื่น ซึ่งเป็นความต้องการที่ไม่สิ้นสุดที่ขับเคลื่อนด้วยความหิวกระหาย'
        }
      },
      {
        name: {
          en: 'Hemomancy',
          th: 'มนต์โลหิต'
        },
        description: {
          en: 'The Dampyr can manipulate and control blood, both their own and that of their victims, to enhance their physical attacks or cast specific offensive spells related to blood manipulation.',
          th: 'แดมเพียร์สามารถควบคุมและบงการเลือดของตนเองและของเหยื่อ เพื่อเสริมการโจมตีทางกายภาพ หรือร่ายมนต์คาถาที่เกี่ยวข้องกับการควบคุมโลหิต'
        }
      },
      {
        name: {
          en: 'Mimetic Shift',
          th: 'แปลงกายอำพราง'
        },
        description: {
          en: 'The Dampyr can transform their entire physical appearance to perfectly mimic any creature from whom they have successfully drained blood, using this ability for infiltration and deception.',
          th: 'แดมเพียร์สามารถกลายร่างเป็นสิ่งมีชีวิตที่ตนเองเคยดูดเลือดได้อย่างสมบูรณ์แบบ โดยใช้ความสามารถนี้เพื่อวัตถุประสงค์ในการแทรกซึมและหลอกลวง'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'shade',
    name: {
      en: 'Shade',
      th: 'เชด'
    },
    description: {
      en: '**Origin:** Former Telari who succumbed to **Sloth**, rejecting the need for any physical effort and seeking **freedom from obligation**. Their mutation transformed them into near-incorporeal beings, relying on psionic power to manipulate others into acting for them. **Appearance:** Their body is **translucent** or shadow-like, allowing objects to be **seen through** them. They possess the unique ability to **assume any appearance** they desire, which they use to effortlessly manipulate reality and avoid physical exertion.',
      th: '**ที่มา:** อดีต Telari ที่ยอมจำนนต่อ **ความเกียจคร้าน (Sloth)** พวกเขาปฏิเสธความจำเป็นในการออกแรงทางกายภาพใด ๆ และต้องการดำรงอยู่แบบ **ไร้พันธะ** การกลายพันธุ์เปลี่ยนพวกเขาให้เป็นร่างที่แทบไม่มีสสาร เพื่อให้สามารถใช้พลังจิตในการควบคุมผู้อื่นแทน **รูปลักษณ์:** ร่างกายจะดู **โปร่งใส** หรือเป็นเงาที่สามารถ **มองทะลุได้** และสามารถ **มีรูปลักษณ์เป็นอะไรก็ได้** ตามที่พวกเขาต้องการ เพื่อหลีกเลี่ยงการกระทำทางกายภาพ หรือเพื่อบิดเบือนความเป็นจริงได้อย่างง่ายดาย'
    },
    abilities: [
      {
        name: {
          en: 'Incorporeal State',
          th: 'ไร้กายา'
        },
        description: {
          en: 'Shades lack a defined physical form. This primary trait allows solid objects, including non-magical attacks, to pass straight through them, effectively eliminating the need for physical effort or defense.',
          th: 'เชดไม่มีร่างกายที่เป็นรูปลักษณ์ชัดเจน ทำให้สิ่งต่าง ๆ รวมถึงการโจมตีที่ไม่ใช่เวทมนตร์ สามารถทะลุผ่านตัวได้โดยตรง ซึ่งเป็นการขจัดความจำเป็นในการออกแรงทางกายภาพหรือการป้องกัน'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'dragona',
    name: {
      en: 'Dragona',
      th: 'ดราโกนา'
    },
    description: {
      en: '**Origin:** Former Telari overwhelmed by extreme **Pride**, believing they are superior and worthy of The Architect\'s full power. Their mutation transformed them into magnificent, powerful beings, embodying their absolute arrogance. **Appearance:** They are humans with distinct Dragonic traits: everyone possesses **horns** (representing power), a **tail** (representing balance and authority), and **wings** (representing their perceived supremacy and status as \'rulers\').',
      th: '**ที่มา:** อดีต Telari ที่ถูกครอบงำด้วย **ความภาคภูมิ (Pride)** ที่สุดโต่ง พวกเขาเชื่อว่าตนเองเหนือกว่าและคู่ควรกับอำนาจสูงสุดของ เดอะ อาร์คิเทคท์ การกลายพันธุ์เปลี่ยนพวกเขาให้เป็นร่างที่ **สง่างามและเปี่ยมพลัง** **รูปลักษณ์:** พวกเขาเป็นมนุษย์ที่มีรูปร่างเป็นมังกรที่ทุกคนต้องมีคือ **เขา** ที่แข็งแกร่ง, **หาง** ที่แสดงความสมดุลและอำนาจ, และ **ปีก** ที่แสดงถึงความเหนือกว่าและสถานะ "ผู้ปกครอง"'
    },
    abilities: [
      {
        name: {
          en: 'Draconic Path',
          th: 'วิถีแห่งมังกร'
        },
        description: {
          en: 'Driven by their extreme Pride, the Dragona continually evolves as they age and grow stronger. This evolution is a commitment to perfection, culminating in the rare state where they physically complete their transformation, ultimately becoming a true, fully-formed Dragon.',
          th: 'ด้วยแรงขับเคลื่อนจากความภาคภูมิอย่างสุดโต่ง ดราโกนาจะวิวัฒนาการอย่างต่อเนื่องเมื่อเติบโตและแข็งแกร่งขึ้น วิวัฒนาการนี้เป็นการมุ่งสู่ความสมบูรณ์แบบ ซึ่งจะไปถึงจุดสูงสุดเมื่อพวกเขาเปลี่ยนร่างเสร็จสมบูรณ์ กลายเป็นมังกรที่แท้จริงในที่สุด'
        }
      },
      {
        name: {
          en: 'Dragon Scales',
          th: 'เกล็ดมังกร'
        },
        description: {
          en: 'The Dragona\'s scales are incredibly strong, a physical manifestation of their arrogance. They are exceptionally resistant to most forms of physical and elemental damage, making them exceedingly difficult to penetrate.',
          th: 'เกล็ดของดราโกนาแข็งแกร่งอย่างไม่น่าเชื่อ เป็นการสำแดงออกทางกายภาพของความเย่อหยิ่งของพวกเขา ทำให้ทนทานต่อความเสียหายทางกายภาพและธาตุส่วนใหญ่ได้อย่างยอดเยี่ยม จนยากที่จะเจาะทะลุได้'
        }
      },
      {
        name: {
          en: 'Dragon\'s Breath',
          th: 'ลมหายใจมังกร'
        },
        description: {
          en: 'The Dragona can exhale a powerful wave of pure elemental energy. The specific element (Fire, Water, Wind, etc.) is determined by the individual Dragona\'s inherent dominant personality trait or ancestral alignment.',
          th: 'ดราโกนาสามารถพ่นคลื่นพลังงานธาตุบริสุทธิ์ออกมาจากปากได้ พลังงานธาตุที่ออกมา (ไฟ, น้ำ, ลม, เป็นต้น) จะขึ้นอยู่กับคุณลักษณะเฉพาะตัวหรือการจัดเรียงบรรพบุรุษที่โดดเด่นของดราโกนาแต่ละตน'
        }
      }
    ],
    value: 2,
    gameSystemId: 'fracture-fiction'
  }
];

export const mockPartTraits: TraitConfig[] = [
  {
    id: 'oni-horn',
    name: {
      en: 'Oni Horn',
      th: 'เขาโอนิ'
    },
    description: {
      en: 'Long, sharp horns located on the forehead. They visibly grow or shrink depending on the intensity of the Oni\'s current rage, serving as an indicator of their emotional state and raw power.',
      th: 'เขายาวแหลมอยู่บนกลางหน้าผาก สามารถขยายหรือหดได้ตามความรู้สึกโกรธของโอนิ ทำหน้าที่เป็นตัวบ่งชี้สถานะทางอารมณ์และพลังดิบของพวกเขา'
    },
    abilities: [
      {
        name: {
          en: 'Rage Burst',
          th: 'ระเบิดความโกรธ'
        },
        description: {
          en: 'A creature with Oni Horns can channel the stored emotional energy (Rage) within them to augment their physical power.',
          th: 'สิ่งมีชีวิตที่มีเขาโอนิสามารถดูดซับพลังงานทางอารมณ์ (ความโกรธ) ที่สะสมอยู่ภายในเขา เพื่อเสริมพละกำลังกายของตนได้'
        }
      }
    ],
    value: 1,
    gameSystemId: 'fracture-fiction'
  },
  {
    id: 'oni-body',
    name: {
      en: 'Oni Body',
      th: 'ร่างกายโอนิ'
    },
    description: {
      en: 'The Oni Body is a manifestation of the Oni\'s raw power and rage. It is characterized by a muscular, sinewy frame that enhances the Oni\'s physical abilities and allows them to channel their emotional energy more effectively.',
      th: 'ผิวของร่ายกายจะเป็นสีอื่นที่ไม่ใช่สีผิวของมนุษย์(แดง, น้ำเงิน, เขียว เป็นต้น) มีความแข็งแกร่งกว่าร่างกายของมนุษย์ธรรมดา'
    },
    abilities: [
      {
        name: {
          en: 'Oni Strength',
          th: 'พละกำลังของโอนิ'
        },
        description: {
          en: 'A creature with Oni Body has exceptional strength, resilience, and vitality.',
          th: 'สิ่งมีชีวิตที่มีร่างกายโอนิจะมีความแข็งแรง, ความทนทาน, และความยืดยุ่นมากกว่ามนุษย์ธรรมดา'
        }
      }
    ],
    value: 1,
    gameSystemId: 'fracture-fiction'
  }
];

export const mockTraits: TraitConfig[] = [
  ...mockFullTraits
];