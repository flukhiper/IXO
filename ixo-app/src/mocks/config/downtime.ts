import type { DowntimeConfig } from '@/types/config/downtime';

export const mockDowntimes: DowntimeConfig[] = // --- Sample Downtime Configurations ---
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
        formula: '1d4 + characterLevel',
        target: 'self'
      },
      full: {
        type: 'restore-attribute',
        attributeId: 'hit-point',
        formula: 'attr(hit-point).max',
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
        formula: 'floor(attr(energy-point).max * 0.25)',
        target: 'self'
      },
      full: {
        type: 'restore-attribute',
        attributeId: 'energy-point',
        formula: 'floor(attr(energy-point).max * 0.5)',
        target: 'self'
      }
    }
  }
];
