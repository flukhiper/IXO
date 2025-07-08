import {  ITEM_TYPE } from '@/constants/config/item';
import type { BaseConfig, ConditionFormula, DiceValue, EffectConfig, FixedValue, FullValue, HalfValue } from './base';

export interface InventorySpace {
  rows: number;      // e.g., 6
  columns: number;   // e.g., 12
}

// Core Base
export type ItemType = typeof ITEM_TYPE[keyof typeof ITEM_TYPE];
export interface ItemBaseConfig extends BaseConfig {
  type: ItemType;
  icon?: string;
  thumbnail?: string;
  tags?: string[];

  weight: number;
  cost: number; // gold cost
  augmentSlots: number; // number of augment slots
  space: InventorySpace;

  slotTypes: string[]; // e.g., ['main-hand', 'off-hand', 'armor', 'accessory', 'backpack', 'utility']
  
  requiredCharacterLevel: number;
  requiredProficiencies: {
    proficiencyId: string;
    level: number;
  }[]; // must have at least one proficiency to able to use this item without proficiency penalty. [] mean no proficiency penalty
  requiredStats: {
    statId: string;
    conditionFormulas: ConditionFormula;
  }[]; // must have at least one stat to able to use this item without stat penalty. [] mean no stat penalty

  effects?: EffectConfig[];
}

export interface WeaponPropertyConfig {
  light?: boolean; // light mean Usable for off-hand dual wield, Medium mean nothing, Heavy mean require stat STR 2 give modify AGI -2 (not stack with armor) except have range properties
  range?: FixedValue | DiceValue; // this is ranged weapon
  finesse?: boolean; // Use DEX instead of STR if higher
  thrown?: FixedValue | DiceValue; // this item is throwable
  extraReach?: FixedValue | DiceValue; // this item has extra reach
  twoHanded?: boolean; // Requires two hands to use and stat STR 2 and give modify AGI -2
  versatile?: FixedValue | DiceValue; // new damage when use two hands
  enhancement?: 1 | 2 | 3; // Magical/quality boost, max +3
}
export interface ItemWeaponConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.WEAPON;
  weapon: {
    damageTypeId: string; // e.g., 'slashing', 'piercing', 'bludgeoning'
    damage: FixedValue | DiceValue;
    range: FixedValue | DiceValue;
    property: WeaponPropertyConfig;
  };
}
export interface ShieldPropertyConfig {
  light?: boolean; // Max agi bounus: unlimited
  medium?: boolean; // Max agi bounus: 2, require stat STR 2+
  heavy?: boolean; // Max agi bounus: 1, require stat STR 3+
  enhancement?: 1 | 2 | 3; // Magical/quality boost, max +3
}
export interface ItemShieldConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.SHIELD;
  shield: {
    armoreBonus: FixedValue | DiceValue;
    durabilityPoints: number;
    property: ShieldPropertyConfig;
  };
}
export interface ArmorPropertyConfig {
  light?: boolean; // Max agi bounus: unlimited
  medium?: boolean; // Max agi bounus: 2, require stat STR 2+, disadvantage on stealth
  heavy?: boolean; // Max agi bounus: 1, require stat STR 4+, disadvantage on stealth, -2m to movement speed
  enhancement?: 1 | 2 | 3; // Magical/quality boost, max +3
}
export interface ItemArmorConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ARMOR;
  armor: {
    armoreBonus: FixedValue | DiceValue;
    durabilityPoints: number;
    property: ShieldPropertyConfig;
  };
}
export interface ItemAccessoryConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ACCESSORY;
}
export interface ItemBackpackConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.BACKPACK;
  backpack: {
    space: InventorySpace;
  };
}
export interface ItemUtilityConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.UTILITY;
  utility: {
    actionIds: string[];
    isExpendable: boolean;
    numberOfUsages?: number;
  };
}
export interface ItemConsumableConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.CONSUMABLE;
  consumable: {
    damages?: {
      damageTypeId: string;
      baseValue: FixedValue | DiceValue;
    };
    restores?: {
      attributeId: string;
      baseValue: FixedValue | DiceValue | HalfValue | FullValue;
    };
    conditionIds?: string[];
    removeConditionTags?: string[];
    
    isExpendable: boolean;
    numberOfUsages?: number;
  };
}

// Final Union
export type ItemConfig =
  | ItemWeaponConfig
  | ItemShieldConfig
  | ItemArmorConfig
  | ItemAccessoryConfig
  | ItemBackpackConfig
  | ItemUtilityConfig
  | ItemConsumableConfig;