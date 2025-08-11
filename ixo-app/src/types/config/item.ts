import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { Effect } from './effect';
import { ITEM_ARMOR_TYPE, ITEM_EQUIPPED_SLOT, ITEM_RARITY, ITEM_TYPE, MAX_ITEM_REFINED_LEVEL } from '@/constants/config/item';

export interface ItemDamage {
  damageTypeId: string;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}

export interface ItemArmor {
  value: ConstantValue;
  modifierFormula?: string;
}

export interface WeaponProperty {
  range?: number;
  light: boolean;
  finesse: boolean;
  extraReach?: number;
  thrown: boolean;
  twoHanded: boolean;
  versatile?: ItemDamage;
  refined?: ItemRefinedLevel;
}

export type ItemArmorType = typeof ITEM_ARMOR_TYPE[keyof typeof ITEM_ARMOR_TYPE];
export interface ArmorProperty {
  type: ItemArmorType;
  refined?: ItemRefinedLevel;
}

export type ItemRefinedLevel = typeof MAX_ITEM_REFINED_LEVEL[number];
export type ItemType = typeof ITEM_TYPE[keyof typeof ITEM_TYPE];
export type ItemRarity = typeof ITEM_RARITY[keyof typeof ITEM_RARITY];
export type ItemEquippedSlot = typeof ITEM_EQUIPPED_SLOT[keyof typeof ITEM_EQUIPPED_SLOT];
export interface BaseItemConfig extends BaseConfig {
  type: ItemType;
  rarity: ItemRarity;
  weight: number;
  price: number;
  space: [number, number];
  equippedSlot: ItemEquippedSlot;
  requiredProficiencyId?: string;
  durabilityPoints?: number;
  damage?: ItemDamage;
  armor?: ItemArmor;
  actionIds?: string[];
  downtimeActivityIds?: string[];
  effects?: Effect[];
}
export interface WeaponItemConfig extends BaseItemConfig {
  type: typeof ITEM_TYPE.WEAPON;
  equippedSlot: typeof ITEM_EQUIPPED_SLOT.MAIN_HANDED | typeof ITEM_EQUIPPED_SLOT.OFF_HANDED;
  durabilityPoints: number;
  damage: ItemDamage;
  weaponProperties: WeaponProperty;
  actionIds: string[];
}
export interface ArmorItemConfig extends BaseItemConfig {
  type: typeof ITEM_TYPE.ARMOR;
  equippedSlot: typeof ITEM_EQUIPPED_SLOT.ARMOR;
  durabilityPoints: number;
  armor: ItemArmor;
  armorProperties: ArmorProperty;
  actionIds: string[];
}
export interface ShieldItemConfig extends BaseItemConfig {
  type: typeof ITEM_TYPE.SHIELD;
  equippedSlot: typeof ITEM_EQUIPPED_SLOT.MAIN_HANDED | typeof ITEM_EQUIPPED_SLOT.OFF_HANDED;
  durabilityPoints: number;
  armor: ItemArmor;
  armorProperties: ArmorProperty;
  actionIds: string[];
}

export interface AccessoryItemConfig extends BaseItemConfig {
  type: typeof ITEM_TYPE.ACCESSORY;
  equippedSlot: typeof ITEM_EQUIPPED_SLOT.ACCESSORY;
  utilitySlots?: number;
}

export interface BackpackItemConfig extends BaseItemConfig {
  type: typeof ITEM_TYPE.BACKPACK;
  equippedSlot: typeof ITEM_EQUIPPED_SLOT.BACKPACK;
  space: [number, number];
}

export interface UtilityItemConfig extends BaseItemConfig {
  type: typeof ITEM_TYPE.UTILITY;
  equippedSlot: typeof ITEM_EQUIPPED_SLOT.UTILITY;
}

export type ItemConfig =
  | WeaponItemConfig
  | ArmorItemConfig
  | ShieldItemConfig
  | AccessoryItemConfig
  | BackpackItemConfig
  | UtilityItemConfig;