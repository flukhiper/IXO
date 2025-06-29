import type { ItemConfig } from '@/types/config/item';

export const mockItems: ItemConfig[] = // --- Sample Item Configurations ---
[
  // --- Weapons ---
  {
    id: 'shortsword',
    name: { en: 'Shortsword', th: 'ดาบสั้น' },
    description: { en: 'A light and versatile blade, favoring quick strikes.', th: 'ดาบที่เบาและใช้งานได้หลากหลาย เหมาะสำหรับการโจมตีที่รวดเร็ว' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'weapon',
    icon: 'https://placehold.co/32x32/808080/FFFFFF?text=🗡️',
    tags: [ 'melee', 'light', 'one-handed', 'finesse' ],
    weight: 1.0,
    space: { rows: 1, columns: 2 },
    value: 50,
    slotType: 'main-hand',
    proficiencyIds: [ 'simple-weapons', 'martial-weapons' ],
    weapon: {
      hit: {
        baseValue: { type: 'dice', formula: '1d20' },
        formula: 'stat(dexterity-modifier) || stat(strength-modifier)'
      },
      damages: [
        {
          damageTypeId: 'piercing',
          baseValue: { type: 'dice', formula: '1d6' },
          formula: 'stat(dexterity-modifier) || stat(strength-modifier)'
        }
      ],
      property: {
        weight: 'light',
        finesse: true
      }
    }
  },
  {
    id: 'longbow',
    name: { en: 'Longbow', th: 'คันธนูยาว' },
    description: { en: 'A powerful two-handed bow, capable of long-range precision shots.', th: 'คันธนูสองมือที่ทรงพลัง สามารถยิงได้อย่างแม่นยำในระยะไกล' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'weapon',
    icon: 'https://placehold.co/32x32/8B4513/FFFFFF?text=🏹',
    tags: [ 'ranged', 'two-handed', 'bow' ],
    weight: 2.0,
    space: { rows: 1, columns: 4 },
    value: 100,
    slotType: 'main-hand',
    proficiencyIds: [ 'martial-weapons' ],
    weapon: {
      hit: {
        baseValue: { type: 'dice', formula: '1d20' },
        formula: 'stat(dexterity-modifier)'
      },
      damages: [
        {
          damageTypeId: 'piercing',
          baseValue: { type: 'dice', formula: '1d8' },
          formula: 'stat(dexterity-modifier)'
        }
      ],
      property: {
        weight: 'medium',
        range: {
          normal: 45,
          max: 180
        },
        twoHanded: true
      }
    }
  },
  {
    id: 'throwing-axe',
    name: { en: 'Throwing Axe', th: 'ขวานขว้าง' },
    description: { en: 'A small axe balanced for throwing, effective at mid-range.', th: 'ขวานขนาดเล็กที่สมดุลสำหรับการขว้าง มีประสิทธิภาพในระยะกลาง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'weapon',
    icon: 'https://placehold.co/32x32/8B4513/FFFFFF?text=🪓',
    tags: [ 'melee', 'thrown', 'light', 'one-handed' ],
    weight: 0.5,
    space: { rows: 1, columns: 1 },
    value: 15,
    slotType: 'main-hand',
    proficiencyIds: [ 'simple-weapons' ],
    weapon: {
      hit: {
        baseValue: { type: 'dice', formula: '1d20' },
        formula: 'stat(strength-modifier)'
      },
      damages: [
        {
          damageTypeId: 'slashing',
          baseValue: { type: 'dice', formula: '1d6' },
          formula: 'stat(strength-modifier)'
        }
      ],
      property: {
        weight: 'light',
        thrown: {
          range: {
            normal: 6,
            max: 18
          }
        }
      }
    }
  },

  // --- Shields ---
  {
    id: 'wooden-shield',
    name: { en: 'Wooden Shield', th: 'โล่ไม้' },
    description: { en: 'A basic shield providing simple protection.', th: 'โล่พื้นฐานที่ให้การป้องกันอย่างง่าย' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'shield',
    icon: 'https://placehold.co/32x32/A9A9A9/000000?text=🛡️',
    tags: [ 'light', 'defense' ],
    weight: 2.5,
    space: { rows: 2, columns: 2 },
    value: 10,
    slotType: 'off-hand',
    proficiencyIds: [ 'shields' ],
    shield: {
      armorClassBonus: 2,
      property: {
        weight: 'medium'
      }
    }
  },
  {
    id: 'tower-shield',
    name: { en: 'Tower Shield', th: 'โล่หอคอย' },
    description: { en: 'A massive shield providing extensive cover, but restricting movement.', th: 'โล่ขนาดใหญ่ที่ให้การคุ้มกันอย่างกว้างขวาง แต่จำกัดการเคลื่อนไหว' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'shield',
    icon: 'https://placehold.co/32x32/778899/FFFFFF?text=🏰',
    tags: [ 'heavy', 'defense' ],
    weight: 7.0,
    space: { rows: 3, columns: 3 },
    value: 80,
    slotType: 'off-hand',
    proficiencyIds: [ 'heavy-shields' ],
    shield: {
      armorClassBonus: 4,
      property: {
        weight: 'heavy',
        customize: {
          type: 'effect',
          effect: {
            type: 'attribute-modify',
            attributeId: 'agility-modifier',
            formula: '-2'
          }
        }
      }
    }
  },

  // --- Armor ---
  {
    id: 'leather-armor',
    name: { en: 'Leather Armor', th: 'เกราะหนัง' },
    description: { en: 'Light and flexible armor, favored by agile warriors.', th: 'เกราะที่เบาและยืดหยุ่น เป็นที่ชื่นชอบของนักรบผู้คล่องแคล่ว' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'armor',
    icon: 'https://placehold.co/32x32/CD853F/FFFFFF?text=🧥',
    tags: [ 'light', 'armor' ],
    weight: 5.0,
    space: { rows: 3, columns: 4 },
    value: 20,
    slotType: 'body',
    proficiencyIds: [ 'light-armor' ],
    armor: {
      armorClass: { type: 'fixed', value: 11 },
      formula: 'stat(agility-modifier)',
      property: {
        weight: 'light'
      }
    }
  },
  {
    id: 'chain-mail',
    name: { en: 'Chain Mail', th: 'เสื้อเกราะโซ่' },
    description: { en: 'Heavy and protective armor, offering substantial defense.', th: 'เกราะหนักและป้องกัน ให้การป้องกันที่แข็งแกร่ง' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'armor',
    icon: 'https://placehold.co/32x32/808080/FFFFFF?text=⛓️',
    tags: [ 'heavy', 'armor' ],
    weight: 20.0,
    space: { rows: 4, columns: 5 },
    value: 150,
    slotType: 'body',
    proficiencyIds: [ 'heavy-armor' ],
    armor: {
      armorClass: { type: 'fixed', value: 16 },
      formula: '0',
      property: {
        weight: 'heavy',
        customize: {
          type: 'effect',
          effect: {
            type: 'attribute-modify',
            attributeId: 'agility-modifier',
            formula: '-2'
          }
        }
      }
    }
  },

  // --- Accessories ---
  {
    id: 'ring-of-protection',
    name: { en: 'Ring of Protection', th: 'แหวนแห่งการป้องกัน' },
    description: { en: 'A magical ring granting minor protective enchantments.', th: 'แหวนเวทมนตร์ที่มอบมนต์เสน่ห์ป้องกันเล็กน้อย' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'accessory',
    icon: 'https://placehold.co/32x32/DAA520/000000?text=💍',
    tags: [ 'ring', 'magic' ],
    weight: 0.05,
    space: { rows: 1, columns: 1 },
    value: 100,
    slotType: 'finger',
    bonusEffects: [
      {
        type: 'attribute-modify',
        attributeId: 'armor-class',
        formula: '1'
      }
    ]
  },

  // --- Consumables ---
  {
    id: 'healing-potion-minor',
    name: { en: 'Minor Healing Potion', th: 'โพชั่นฟื้นฟูขนาดเล็ก' },
    description: { en: 'A small vial containing a shimmering red liquid, capable of mending minor wounds.', th: 'ขวดเล็ก ๆ บรรจุของเหลวสีแดงระยิบระยับ สามารถรักษาบาดแผลเล็กน้อยได้' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'consumable',
    icon: 'https://placehold.co/32x32/FF6347/FFFFFF?text=🧪',
    tags: [ 'potion', 'healing' ],
    weight: 0.2,
    space: { rows: 1, columns: 1 },
    value: 25,
    slotType: 'utility',
    consumable: {
      restores: [
        {
          attributeId: 'hit-point',
          formula: '2d4 + 2'
        }
      ],
      usageLimit: { isExpendable: true, maxUses: 1 }
    }
  },

  // --- Utilities ---
  {
    id: 'thieves-tools',
    name: { en: 'Thieves\' Tools', th: 'เครื่องมือโจร' },
    description: { en: 'A set of delicate tools used for picking locks and disarming traps.', th: 'ชุดเครื่องมือที่ละเอียดอ่อนใช้สำหรับสะเดาะกุญแจและปลดกับดัก' },
    createdAt: '2023-01-01T00:00:00Z',
    type: 'utility',
    icon: 'https://placehold.co/32x32/5A5A5A/FFFFFF?text=�',
    tags: [ 'tool', 'dexterity' ],
    weight: 0.5,
    space: { rows: 1, columns: 2 },
    value: 50,
    slotType: 'utility',
    utility: {
      actionIds: [ 'inspect-mechanism' ],
      usageLimit: { isExpendable: false }
    }
  }
];