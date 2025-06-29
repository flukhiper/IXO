import type { DowntimeConfig } from '@/types/config/downtime';

export const mockDowntimes: DowntimeConfig[] = // --- Updated Sample Downtime Configurations ---
[
  {
    id: 'tend-to-wounds',
    name: { en: 'Tend to Wounds', th: 'ดูแลบาดแผล' },
    description: { en: 'Hastily patch yourself or an ally up to restore Hit Points.', th: 'ปฐมพยาบาลตนเองหรือพันธมิตรอย่างรวดเร็วเพื่อฟื้นฟูพลังชีวิต' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/8B0000/FFFFFF?text=🩹',
    tags: [ 'healing', 'restoration', 'combat-recovery' ],
    effects: {
      half: {
        type: 'restore-attribute',
        attributeId: 'hit-point',
        formula: '1d4 + level',
        target: 'self'
      },
      full: {
        type: 'restore-attribute',
        attributeId: 'hit-point',
        formula: 'attribute(hit-point).max',
        target: 'any'
      }
    }
  },
  {
    id: 'work-on-project',
    name: { en: 'Work on a Project', th: 'ทำงานในโครงการ' },
    description: { en: 'Dedicate time to a long-term endeavor, like crafting, research, or building.', th: 'อุทิศเวลาให้กับโครงการระยะยาว เช่น การประดิษฐ์ การวิจัย หรือการก่อสร้าง' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/4169E1/FFFFFF?text=⚙️',
    tags: [ 'crafting', 'research', 'progression' ],
    effects: {
      full: {
        type: 'trigger-project',
        notes: 'The GM will determine the progress based on the project\'s complexity and relevant skill checks.'
      }
    }
  },
  {
    id: 'rest',
    name: { en: 'Rest', th: 'พักผ่อน' },
    description: { en: 'Take a short break to recover some energy and minor wounds.', th: 'พักสั้นๆ เพื่อฟื้นฟูพลังงานและบาดแผลเล็กน้อย' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/ADD8E6/000000?text=🛌',
    tags: [ 'recovery' ],
    effects: {
      half: {
        type: 'restore-attribute',
        attributeId: 'energy-point',
        formula: 'floor(attribute(energy-point).max / 4)',
        target: 'self'
      },
      full: {
        type: 'restore-attribute',
        attributeId: 'energy-point',
        formula: 'floor(attribute(energy-point).max / 2)',
        target: 'self'
      }
    }
  },
  {
    id: 'long-rest',
    name: { en: 'Long Rest', th: 'พักผ่อนยาว' },
    description: { en: 'A substantial period of rest, restoring most resources.', th: 'การพักผ่อนเป็นระยะเวลานาน ฟื้นฟูทรัพยากรส่วนใหญ่' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/4682B4/FFFFFF?text=😴',
    tags: [ 'recovery' ],
    effects: {
      full: {
        type: 'restore-attribute',
        attributeId: 'hit-point',
        formula: 'attribute(hit-point).max',
        target: 'self'
      }
    }
  },
  {
    id: 'meditate',
    name: { en: 'Meditate', th: 'ทำสมาธิ' },
    description: { en: 'Clear your mind to regain focus and mental resources.', th: 'ชำระจิตใจเพื่อฟื้นฟูสมาธิและทรัพยากรทางจิต' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/9370DB/FFFFFF?text=🧘',
    tags: [ 'mental-recovery' ],
    effects: {
      half: {
        type: 'restore-attribute',
        attributeId: 'energy-point',
        formula: 'floor(attribute(energy-point).max * 0.25)',
        target: 'self'
      },
      full: {
        type: 'restore-attribute',
        attributeId: 'energy-point',
        formula: 'floor(attribute(energy-point).max * 0.5)',
        target: 'self'
      }
    }
  },
  {
    id: 'maintenance',
    name: { en: 'Maintenance', th: 'การบำรุงรักษา' },
    description: { en: 'Perform routine maintenance on equipment or your own systems for optimal performance.', th: 'ทำการบำรุงรักษาอุปกรณ์หรือระบบของคุณเป็นประจำเพื่อประสิทธิภาพสูงสุด' },
    createdAt: '2023-01-01T00:00:00Z',
    icon: 'https://placehold.co/32x32/696969/FFFFFF?text=🔧',
    tags: [ 'utility', 'equipment' ],
    effects: {
      half: {
        type: 'restore-attribute',
        attributeId: 'armor-class',
        formula: '1',
        target: 'self'
      },
      full: {
        type: 'restore-attribute',
        attributeId: 'armor-class',
        formula: '2',
        target: 'self'
      }
    }
  }
];
