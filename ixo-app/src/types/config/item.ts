import { ITEM_RARITY, ITEM_TYPE } from '@/constants/config/item';
import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export type ItemType = typeof ITEM_TYPE[keyof typeof ITEM_TYPE];
export type ItemRarity = typeof ITEM_RARITY[keyof typeof ITEM_RARITY];
export type ItemSize = [number, number];

export interface BaseItemConfig extends BaseConfig {
  type: ItemType;
  price: number;
  weight: number;
  rarity: ItemRarity;
  size: ItemSize;
  durabilityPoints: number | typeof NONE_VALUE.NUMBER;
}

export interface WeaponItemDamage {
  type: string;
  value: string;
}

export interface WeaponItemConfig extends BaseItemConfig {
  damage: WeaponItemDamage;
}

export interface ArmorItemArmor {
  value: string;
}

export interface ArmorItemConfig extends BaseItemConfig {
  armor: ArmorItemArmor;
}

export interface ShieldItemConfig extends BaseItemConfig {
  armor: ArmorItemArmor;
}

export interface AccessoryItemConfig extends BaseItemConfig {}

export interface UtilityItemConfig extends BaseItemConfig {}