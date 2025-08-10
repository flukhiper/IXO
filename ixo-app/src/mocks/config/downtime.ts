import type { DowntimeConfig } from '@/types/config/downtime';
import { DOWNTIME_DURATION } from '@/constants/config/downtime';
import { VALUE_TYPE } from '@/constants/config/base';

export const mockDowntimes: DowntimeConfig[] = [
  {
    id: 'downtime-prepare-loadout',
    name: {
      en: 'Prepare Loadout',
      th: 'เตรียมอุปกรณ์'
    },
    description: {
      en: 'You take time for mental and physical practice, deciding which of your known techniques and skills you will keep at the forefront of your mind. This is the only time you can change your prepared actions within the limits of your Action Slots (AS) and your prepared skills within the limits of your Skill Slots (SS).',
      th: 'คุณใช้เวลาในการฝึกฝนทางจิตใจและร่างกาย ตัดสินใจว่าจะเก็บเทคนิคและทักษะที่รู้จักไว้ในใจของคุณ นี่เป็นช่วงเวลาเดียวที่คุณสามารถเปลี่ยนการกระทำที่เตรียมไว้ภายในขีดจำกัดของช่องแอคชั่น (AS) และทักษะที่เตรียมไว้ภายในขีดจำกัดของช่องทักษะ (SS) ของคุณ'
    },
    icon: 'loadout',
    thumbnail: 'prepare-loadout-downtime.jpg',
    tags: [ 'preparation', 'mental', 'practice' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isSystem: true,
    duration: {
      [DOWNTIME_DURATION.SHORT]: {
        numberOfUsage: 1,
        downTimePointsCost: 1
      }
    }
  },
  {
    id: 'downtime-tend-to-wounds',
    name: {
      en: 'Tend to Wounds',
      th: 'ดูแลบาดแผล'
    },
    description: {
      en: 'You spend time tending to your injuries or those of an ally. During short downtime, you can restore 1d4 + Character Level HP to yourself or one ally. During long downtime, you can fully restore all HP to yourself or one ally.',
      th: 'คุณใช้เวลาในการดูแลบาดแผลของคุณหรือของพันธมิตร ในช่วงเวลาพักสั้น คุณสามารถฟื้นฟู 1d4 + ระดับตัวละคร HP ให้กับตัวเองหรือพันธมิตรหนึ่งคน ในช่วงเวลาพักยาว คุณสามารถฟื้นฟู HP ทั้งหมดให้กับตัวเองหรือพันธมิตรหนึ่งคน'
    },
    icon: 'healing',
    thumbnail: 'tend-wounds-downtime.jpg',
    tags: [ 'healing', 'recovery', 'medical' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isSystem: true,
    duration: {
      [DOWNTIME_DURATION.SHORT]: {
        numberOfUsage: 99,
        downTimePointsCost: 1,
        restore: [
          {
            attributeId: 'attr-hit-points',
            value: {
              type: VALUE_TYPE.DICE,
              formula: '1d4 + Character Level'
            }
          }
        ]
      },
      [DOWNTIME_DURATION.LONG]: {
        numberOfUsage: 99,
        downTimePointsCost: 3,
        restore: [
          {
            attributeId: 'attr-hit-points',
            value: {
              type: VALUE_TYPE.CONSTANT,
              value: 999 // Represents full HP restoration
            }
          }
        ]
      }
    }
  },
  {
    id: 'downtime-maintain-gear',
    name: {
      en: 'Maintain Gear',
      th: 'บำรุงรักษาอุปกรณ์'
    },
    description: {
      en: 'You perform essential upkeep on equipment to restore its Durability. During short downtime, you can repair one item with a DC 13 Tinker check, restoring 1d4 Durability. During long downtime, you can repair two items with the same procedure. If you are proficient with Smith\'s Tools, you automatically succeed and restore 1d4 + 2 Durability.',
      th: 'คุณทำการบำรุงรักษาที่จำเป็นสำหรับอุปกรณ์เพื่อฟื้นฟูความทนทาน ในช่วงเวลาพักสั้น คุณสามารถซ่อมแซมไอเทมหนึ่งชิ้นด้วยการตรวจสอบ Tinker DC 13 ฟื้นฟูความทนทาน 1d4 ในช่วงเวลาพักยาว คุณสามารถซ่อมแซมไอเทมสองชิ้นด้วยขั้นตอนเดียวกัน หากคุณมีความเชี่ยวชาญในเครื่องมือช่างเหล็ก คุณจะสำเร็จโดยอัตโนมัติและฟื้นฟูความทนทาน 1d4 + 2'
    },
    icon: 'repair',
    thumbnail: 'maintain-gear-downtime.jpg',
    tags: [ 'repair', 'maintenance', 'equipment' ],
    ownerId: 'admin-user-1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T12:30:00.000Z',
    gameSystemId: 'game-system-1',
    isSystem: true,
    duration: {
      [DOWNTIME_DURATION.SHORT]: {
        numberOfUsage: 1,
        downTimePointsCost: 1,
        repair: {
          numberOfItems: 1,
          value: {
            type: VALUE_TYPE.DICE,
            formula: '1d4'
          },
          skillCheckId: 'skill-tinker',
          modifierFormula: 'DC 13'
        }
      },
      [DOWNTIME_DURATION.LONG]: {
        numberOfUsage: 1,
        downTimePointsCost: 2,
        repair: {
          numberOfItems: 2,
          value: {
            type: VALUE_TYPE.DICE,
            formula: '1d4'
          },
          skillCheckId: 'skill-tinker',
          modifierFormula: 'DC 13'
        }
      }
    }
  }
];

export default mockDowntimes;
