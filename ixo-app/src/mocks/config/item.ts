import type { ItemConfig } from '@/types/config/item';
import { ITEM_TYPE, ITEM_RARITY, ITEM_EQUIPPED_SLOT, ITEM_ARMOR_TYPE } from '@/constants/config/item';
import { VALUE_TYPE } from '@/constants/config/base';
import { BONUS_EFFECT_TYPE, ADVANTAGE_EFFECT_TYPE, EFFECT_TARGET_TYPE, DAMAGE_BOOST_EFFECT_TYPE } from '@/constants/config/effect';

export const mockItems: ItemConfig[] = [
  // Longswords
  {
    id: 'longsword-basic',
    name: { en: 'Longsword', th: 'ดาบยาว' },
    description: { en: 'A versatile martial melee weapon that can be used one-handed or two-handed.', th: 'อาวุธต่อสู้ระยะประชิดที่ใช้ได้ทั้งมือเดียวและสองมือ' },
    icon: '⚔️',
    thumbnail: '/images/weapons/longsword.png',
    tags: [ 'weapon', 'martial', 'melee', 'versatile', 'slashing' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.WEAPON,
    rarity: ITEM_RARITY.COMMON,
    weight: 1.35,
    price: 15,
    space: [ 1, 4 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.MAIN_HANDED,
    requiredProficiencyId: 'proficiency-martial-weapons',
    durabilityPoints: 100,
    damage: {
      type: 'damage-type-slashing',
      value: { type: VALUE_TYPE.DICE, formula: '1d8' },
      modifierFormula: 'strength'
    },
    weaponProperties: {
      light: false,
      finesse: false,
      thrown: false,
      twoHanded: false,
      versatile: {
        type: 'damage-type-slashing',
        value: { type: VALUE_TYPE.DICE, formula: '1d10' },
        modifierFormula: 'strength'
      }
    },
    actionIds: [ 'action-attack' ]
  },

  // Greatswords
  {
    id: 'greatsword-basic',
    name: { en: 'Greatsword', th: 'ดาบใหญ่' },
    description: { en: 'A massive two-handed sword that delivers devastating slashing damage.', th: 'ดาบขนาดใหญ่ที่ใช้สองมือ ใช้ฟันสร้างความเสียหายอย่างรุนแรง' },
    icon: '🗡️',
    thumbnail: '/images/weapons/greatsword.png',
    tags: [ 'weapon', 'martial', 'melee', 'two-handed', 'slashing', 'heavy' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.WEAPON,
    rarity: ITEM_RARITY.COMMON,
    weight: 2.7,
    price: 50,
    space: [ 1, 6 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.MAIN_HANDED,
    requiredProficiencyId: 'proficiency-martial-weapons',
    durabilityPoints: 150,
    damage: {
      type: 'damage-type-slashing',
      value: { type: VALUE_TYPE.DICE, formula: '2d6' },
      modifierFormula: 'strength'
    },
    weaponProperties: {
      light: false,
      finesse: false,
      thrown: false,
      twoHanded: true
    },
    actionIds: [ 'action-attack' ]
  },

  // Daggers
  {
    id: 'dagger-basic',
    name: { en: 'Dagger', th: 'มีดสั้น' },
    description: { en: 'A simple, light weapon that can be thrown or used in melee combat.', th: 'อาวุธง่ายๆ ที่เบา สามารถขว้างหรือใช้ต่อสู้ระยะประชิดได้' },
    icon: '🗡️',
    thumbnail: '/images/weapons/dagger.png',
    tags: [ 'weapon', 'simple', 'melee', 'ranged', 'piercing', 'light', 'finesse', 'thrown' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.WEAPON,
    rarity: ITEM_RARITY.COMMON,
    weight: 0.45,
    price: 2,
    space: [ 1, 1 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.MAIN_HANDED,
    requiredProficiencyId: 'proficiency-simple-weapons',
    durabilityPoints: 50,
    damage: {
      type: 'damage-type-piercing',
      value: { type: VALUE_TYPE.DICE, formula: '1d4' },
      modifierFormula: 'strength'
    },
    weaponProperties: {
      light: true,
      finesse: true,
      thrown: true,
      twoHanded: false
    },
    actionIds: [ 'action-attack' ]
  },

  // Longbows
  {
    id: 'longbow-basic',
    name: { en: 'Longbow', th: 'คันธนูยาว' },
    description: { en: 'A powerful ranged weapon that requires two hands to use effectively.', th: 'อาวุธยิงระยะไกลที่ทรงพลัง ต้องใช้สองมือเพื่อประสิทธิภาพสูงสุด' },
    icon: '🏹',
    thumbnail: '/images/weapons/longbow.png',
    tags: [ 'weapon', 'martial', 'ranged', 'piercing', 'two-handed', 'ammunition' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.WEAPON,
    rarity: ITEM_RARITY.COMMON,
    weight: 1.0,
    price: 50,
    space: [ 1, 5 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.MAIN_HANDED,
    requiredProficiencyId: 'proficiency-martial-weapons',
    durabilityPoints: 80,
    damage: {
      type: 'damage-type-piercing',
      value: { type: VALUE_TYPE.DICE, formula: '1d8' },
      modifierFormula: 'dexterity'
    },
    weaponProperties: {
      range: 45,
      light: false,
      finesse: false,
      thrown: false,
      twoHanded: true
    },
    actionIds: [ 'action-attack' ]
  },

  // Special Weapons
  {
    id: 'longbow-elven',
    name: { en: 'Elven Longbow', th: 'คันธนูยาวเอลฟ์' },
    description: { en: 'A masterfully crafted longbow of elven make, offering superior accuracy and range.', th: 'คันธนูยาวที่สร้างอย่างประณีตโดยเอลฟ์ ให้ความแม่นยำและระยะยิงที่เหนือกว่า' },
    icon: '🌿🏹',
    thumbnail: '/images/weapons/elven-longbow.png',
    tags: [ 'weapon', 'martial', 'ranged', 'piercing', 'two-handed', 'ammunition', 'elven', 'magical' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.WEAPON,
    rarity: ITEM_RARITY.RARE,
    weight: 0.9,
    price: 1000,
    space: [ 1, 5 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.MAIN_HANDED,
    requiredProficiencyId: 'proficiency-martial-weapons',
    durabilityPoints: 120,
    damage: {
      type: 'damage-type-piercing',
      value: { type: VALUE_TYPE.DICE, formula: '1d8' },
      modifierFormula: 'dexterity'
    },
    weaponProperties: {
      range: 60,
      light: false,
      finesse: false,
      thrown: false,
      twoHanded: true
    },
    actionIds: [ 'action-attack' ],
    effects: [
      {
        type: ADVANTAGE_EFFECT_TYPE.ADVANTAGE,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'skill-perception'
      },
      {
        type: BONUS_EFFECT_TYPE.BONUS,
        target: EFFECT_TARGET_TYPE.ATTRIBUTE,
        id: 'damage-type-piercing',
        modifierFormula: '1d4'
      }
    ]
  },

  // Armor Items
  {
    id: 'armor-broken-padded',
    name: { en: 'Broken Padded Armor', th: 'เกราะผ้าที่ชำรุด' },
    description: { en: 'A standard gambeson of quilted cloth. Good for catching blows, but almost unbearably sweaty.', th: 'เกราะผ้าที่ทำจากผ้าทอหลายชั้น ดีสำหรับรับการโจมตี แต่เหงื่อออกแทบทนไม่ได้' },
    icon: '🛡️',
    thumbnail: '/images/armor/broken-padded-armor.png',
    tags: [ 'armor', 'light', 'cloth', 'gambeson', 'broken' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ARMOR,
    rarity: ITEM_RARITY.COMMON,
    weight: 3.6,
    price: 30,
    space: [ 2, 3 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ARMOR,
    requiredProficiencyId: 'proficiency-light-armor',
    durabilityPoints: 80,
    armor: {
      value: { type: VALUE_TYPE.CONSTANT, value: 11 },
      modifierFormula: 'dexterity'
    },
    armorProperties: {
      type: ITEM_ARMOR_TYPE.LIGHT
    },
    actionIds: [ 'action-armor-block' ]
  },
  {
    id: 'armor-breastplate',
    name: { en: 'Breastplate', th: 'เกราะอก' },
    description: { en: 'This standard-sized breastplate is lined with thick padding meant to cushion the wearer and deflect blows from assailants. The uniform squares of the padding suggest a mathematically-mind crafter.', th: 'เกราะอกขนาดมาตรฐานที่มีการบุด้วยวัสดุหนาเพื่อรองรับผู้สวมใส่และสะท้อนการโจมตีจากศัตรู รูปสี่เหลี่ยมสม่ำเสมอของวัสดุบุแสดงถึงช่างที่มีความคิดทางคณิตศาสตร์' },
    icon: '🛡️',
    thumbnail: '/images/armor/breastplate.png',
    tags: [ 'armor', 'medium', 'metal', 'breastplate', 'standard' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ARMOR,
    rarity: ITEM_RARITY.COMMON,
    weight: 9.0,
    price: 100,
    space: [ 2, 4 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ARMOR,
    requiredProficiencyId: 'proficiency-medium-armor',
    durabilityPoints: 120,
    armor: {
      value: { type: VALUE_TYPE.CONSTANT, value: 14 },
      modifierFormula: 'dexterity'
    },
    armorProperties: {
      type: ITEM_ARMOR_TYPE.MEDIUM
    },
    actionIds: [ 'action-armor-block' ]
  },
  {
    id: 'armor-chain-mail',
    name: { en: 'Chain Mail', th: 'เกราะโซ่' },
    description: { en: 'The tight weave of chains in this armor chimes like wind through leaves.', th: 'การถักโซ่ที่แน่นของเกราะนี้ส่งเสียงดังเหมือนลมผ่านใบไม้' },
    icon: '🛡️',
    thumbnail: '/images/armor/chain-mail.png',
    tags: [ 'armor', 'heavy', 'metal', 'chain', 'stealth-disadvantage' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ARMOR,
    rarity: ITEM_RARITY.COMMON,
    weight: 18.0,
    price: 130,
    space: [ 2, 5 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ARMOR,
    requiredProficiencyId: 'proficiency-heavy-armor',
    durabilityPoints: 150,
    armor: {
      value: { type: VALUE_TYPE.CONSTANT, value: 16 }
    },
    armorProperties: {
      type: ITEM_ARMOR_TYPE.HEAVY
    },
    actionIds: [ 'action-armor-block' ]
  },
  {
    id: 'clothing-basic',
    name: { en: 'Clothes', th: 'เสื้อผ้า' },
    description: { en: 'Basic clothing that provides no benefit to the character wearing them.', th: 'เสื้อผ้าพื้นฐานที่ไม่ให้ประโยชน์ใดๆ กับตัวละครที่สวมใส่' },
    icon: '👕',
    thumbnail: '/images/clothing/basic-clothes.png',
    tags: [ 'clothing', 'basic', 'no-benefit', 'camp' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ARMOR,
    rarity: ITEM_RARITY.COMMON,
    weight: 1.8,
    price: 11,
    space: [ 1, 2 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ARMOR,
    requiredProficiencyId: 'proficiency-light-armor',
    durabilityPoints: 40,
    armor: {
      value: { type: VALUE_TYPE.CONSTANT, value: 10 },
      modifierFormula: 'dexterity'
    },
    armorProperties: {
      type: ITEM_ARMOR_TYPE.CLOTHING
    },
    actionIds: []
  },

  // Shield Items
  {
    id: 'shield-broken',
    name: { en: 'Broken Shield', th: 'โล่ที่แตกหัก' },
    description: { en: 'This old splintered shield is no stronger than a child\'s toy.', th: 'โล่เก่าที่แตกหักนี้แข็งแกร่งไม่ต่างจากของเล่นเด็ก' },
    icon: '🛡️',
    thumbnail: '/images/shields/broken-shield.png',
    tags: [ 'shield', 'broken', 'damaged', 'wooden' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.SHIELD,
    rarity: ITEM_RARITY.COMMON,
    weight: 2.7,
    price: 15,
    space: [ 1, 2 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.OFF_HANDED,
    requiredProficiencyId: 'proficiency-shields',
    durabilityPoints: 30,
    armor: {
      value: { type: VALUE_TYPE.CONSTANT, value: 1 }
    },
    armorProperties: {
      type: ITEM_ARMOR_TYPE.LIGHT
    },
    actionIds: [ 'action-shield-block' ]
  },
  {
    id: 'shield-metal',
    name: { en: 'Metal Shield', th: 'โล่โลหะ' },
    description: { en: 'Though the metal is only of moderate quality, a proud, flaming fist decorates the front of this shield.', th: 'แม้ว่าโลหะจะมีคุณภาพปานกลาง แต่โล่ใบนี้มีสัญลักษณ์กำปั้นที่ลุกเป็นไฟประดับอยู่ด้านหน้า' },
    icon: '🛡️',
    thumbnail: '/images/shields/metal-shield.png',
    tags: [ 'shield', 'metal', 'flaming-fist', 'mercenary' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.SHIELD,
    rarity: ITEM_RARITY.COMMON,
    weight: 2.7,
    price: 15,
    space: [ 1, 2 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.OFF_HANDED,
    requiredProficiencyId: 'proficiency-shields',
    durabilityPoints: 100,
    armor: {
      value: { type: VALUE_TYPE.CONSTANT, value: 2 }
    },
    armorProperties: {
      type: ITEM_ARMOR_TYPE.MEDIUM
    },
    actionIds: [ 'action-shield-block' ]
  },

  // Accessory Items
  {
    id: 'ring-amethyst-silver',
    name: { en: 'Amethyst Ring', th: 'แหวนอเมทิสต์' },
    description: { en: 'The silver band\'s cool undertones highlight this ring\'s vivid purple gemstone.', th: 'วงแหวนเงินที่มีโทนสีเย็นเน้นให้แหวนอเมทิสต์สีม่วงสดใสเด่นชัดขึ้น' },
    icon: '💍',
    thumbnail: '/images/accessories/amethyst-ring-silver.png',
    tags: [ 'ring', 'jewelry', 'amethyst', 'silver', 'barter' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.COMMON,
    weight: 0.05,
    price: 18,
    space: [ 1, 1 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 50,
    actionIds: []
  },
  {
    id: 'ring-amethyst-gold',
    name: { en: 'Amethyst Ring (Gold)', th: 'แหวนอเมทิสต์ (ทอง)' },
    description: { en: 'An unusual piece, this gold-studded amethyst caused a stir at the Wide plaza in Baldur\'s Gate.', th: 'ชิ้นงานที่ผิดปกติ แหวนอเมทิสต์ที่ประดับด้วยทองคำนี้สร้างความฮือฮาที่จัตุรัสไวด์ในเมืองบัลดูร์เกท' },
    icon: '💍',
    thumbnail: '/images/accessories/amethyst-ring-gold.png',
    tags: [ 'ring', 'jewelry', 'amethyst', 'gold', 'barter', 'baldur-gate' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.COMMON,
    weight: 0.05,
    price: 20,
    space: [ 1, 1 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 50,
    actionIds: []
  },
  {
    id: 'ring-callous-glow',
    name: { en: 'Callous Glow Ring', th: 'แหวนแสงเย็นชา' },
    description: { en: 'A grudging gleam emits from this ring - more an indictment of light than an endorsement.', th: 'แสงเรืองรองที่ไม่เต็มใจเปล่งออกมาจากแหวนนี้ - มากกว่าการประณามแสงมากกว่าการสนับสนุน' },
    icon: '💍✨',
    thumbnail: '/images/accessories/callous-glow-ring.png',
    tags: [ 'ring', 'jewelry', 'magical', 'radiant-damage', 'illuminated' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.UNCOMMON,
    weight: 0.05,
    price: 40,
    space: [ 1, 1 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 80,
    actionIds: [],
    effects: [
      {
        type: DAMAGE_BOOST_EFFECT_TYPE.DAMAGE_BOOST,
        damageType: 'damage-type-radiant',
        value: { type: VALUE_TYPE.CONSTANT, value: 2 }
      }
    ]
  },
  {
    id: 'cloak-basic',
    name: { en: 'Cloak', th: 'ผ้าคลุม' },
    description: { en: 'Woven of heavy wool, this cloak is solid of make if somewhat stiff to wear.', th: 'ทอจากขนแกะหนา ผ้าคลุมนี้มีคุณภาพดีแม้ว่าจะแข็งกระด้างสวมใส่' },
    icon: '🧥',
    thumbnail: '/images/accessories/basic-cloak.png',
    tags: [ 'cloak', 'clothing', 'wool', 'no-bonus' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.COMMON,
    weight: 0.5,
    price: 20,
    space: [ 1, 2 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 60,
    actionIds: []
  },
  {
    id: 'cloak-cindermoth',
    name: { en: 'Cindermoth Cloak', th: 'ผ้าคลุมผีเสื้อถ่าน' },
    description: { en: 'With every rustle of this cloak, small moths like windblown embers appear around you - they flutter for a moment, then fade into inconsequence.', th: 'เมื่อผ้าคลุมนี้สั่นไหว ผีเสื้อเล็กๆ เหมือนถ่านที่ปลิวตามลมจะปรากฏรอบตัวคุณ - พวกมันโบยบินสักครู่แล้วจางหายไป' },
    icon: '🧥🔥',
    thumbnail: '/images/accessories/cindermoth-cloak.png',
    tags: [ 'cloak', 'clothing', 'magical', 'fire', 'burning', 'moths' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.UNCOMMON,
    weight: 0.5,
    price: 70,
    space: [ 1, 2 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 80,
    actionIds: [],
    effects: [
      {
        type: DAMAGE_BOOST_EFFECT_TYPE.DAMAGE_BOOST,
        damageType: 'damage-type-fire',
        value: { type: VALUE_TYPE.CONSTANT, value: 1 }
      }
    ]
  },
  {
    id: 'headwear-brimmed-hat',
    name: { en: 'Brimmed Hat', th: 'หมวกปีกกว้าง' },
    description: { en: 'This wizardly hat has a little embroidered rabbit inside its lining - the rabbit is called snowball, and once he was lost, never to be found again.', th: 'หมวกของพ่อมดนี้มีกระต่ายปักเล็กๆ อยู่ด้านใน - กระต่ายตัวนั้นชื่อสโนว์บอล และครั้งหนึ่งเขาเคยหายไป ไม่เคยพบอีกเลย' },
    icon: '🎩',
    thumbnail: '/images/accessories/brimmed-hat.png',
    tags: [ 'headwear', 'hat', 'wizard', 'embroidered', 'rabbit', 'snowball' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.COMMON,
    weight: 0.3,
    price: 15,
    space: [ 1, 1 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 50,
    actionIds: []
  },
  {
    id: 'headwear-browbeaten-circlet',
    name: { en: 'Browbeaten Circlet', th: 'มงกุฎหน้าผาก' },
    description: { en: 'A circlet that has seen better days, worn by those who have faced many challenges.', th: 'มงกุฎที่เคยผ่านวันเวลาที่ดีกว่า สวมใส่โดยผู้ที่เผชิญกับความท้าทายมากมาย' },
    icon: '👑',
    thumbnail: '/images/accessories/browbeaten-circlet.png',
    tags: [ 'headwear', 'circlet', 'worn', 'challenged', 'experienced' ],
    ownerId: 'admin-user-1',
    gameSystemId: 'game-system-1',
    type: ITEM_TYPE.ACCESSORY,
    rarity: ITEM_RARITY.COMMON,
    weight: 0.2,
    price: 25,
    space: [ 1, 1 ],
    equippedSlot: ITEM_EQUIPPED_SLOT.ACCESSORY,
    durabilityPoints: 60,
    actionIds: []
  }
];