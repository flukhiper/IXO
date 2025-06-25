import { ITEM_PROPERTY_TYPE, ITEM_REQUIREMENT_TYPE, ITEM_TYPE } from '@/constants/item';
import type { MultiLangText } from '@/types/common';
import type { ItemType } from '@/types/config/item';
import type { BaseMapSchema } from './base';
import type { ReferenceValueSchema } from './value';

export interface ItemRequirementProficiencySchema {
  type: typeof ITEM_REQUIREMENT_TYPE.PROFICIENCY;
  proficiency: ReferenceValueSchema;
  condition: string | number;
}
export interface ItemRequirementLevelSchema {
  type: typeof ITEM_REQUIREMENT_TYPE.LEVEL;
  condition: string | number;
}
export interface ItemRequirementStatSchema {
  type: typeof ITEM_REQUIREMENT_TYPE.STAT;
  stat: ReferenceValueSchema;
  condition: string | number;
}
export type ItemRequirementSchema =
  | ItemRequirementProficiencySchema
  | ItemRequirementLevelSchema
  | ItemRequirementStatSchema;

export interface ItemAttributeModifierSchema {
  attribute: ReferenceValueSchema;
  modifier: string;
}
export interface ItemStatModifierSchema {
  stat: ReferenceValueSchema;
  modifier: string;
}
export type ItemModifierSchema = ItemAttributeModifierSchema | ItemStatModifierSchema;


export interface ItemPropertyVersatileSchema {
  type: typeof ITEM_PROPERTY_TYPE.VERSATILE;
  value: string | number;
}
export interface ItemPropertyFitnessSchema {
  type: typeof ITEM_PROPERTY_TYPE.FITNESS;
  hitModifier: string;
  damageModifier: string;
}
export interface ItemPropertyUpgradeSchema {
  type: typeof ITEM_PROPERTY_TYPE.UPGRADE;
  value: number;
}
export interface ItemPropertyEnhanceSchema {
  type: typeof ITEM_PROPERTY_TYPE.ENHANCE;
  id: string;
  name: MultiLangText;
  damage: {
    damageType: string;
    value: string | number;
  };
}
export interface ItemPropertyTwoHandSchema {
  type: typeof ITEM_PROPERTY_TYPE.TWO_HAND;
}
export interface ItemPropertyExtraReachSchema {
  type: typeof ITEM_PROPERTY_TYPE.EXTRA_REACH;
  value: number;
}
export type ItemPropertySchema =
  | ItemPropertyVersatileSchema
  | ItemPropertyFitnessSchema
  | ItemPropertyUpgradeSchema
  | ItemPropertyEnhanceSchema
  | ItemPropertyTwoHandSchema
  | ItemPropertyExtraReachSchema;

export interface ItemWeaponSchema {
  hit: {
    type: string;
    id: string;
    modifier: string;
  };
  damage: {
    type: string;
    value: string | number;
    modifier: string;
  };
  properties?: ItemPropertySchema[];
  conditions?: string[];
}
export interface ItemShieldSchema {
  modifier: string; // Typically an AC or block boost
}
export interface ItemArmorArmorClassSchema {
  base?: number;
  modifier?: string;
  maxModifier?: number;
}
export interface ItemArmorSchema {
  armorSlotType: string; // e.g., 'clothwear', 'footwear', 'headwear'
  armorClass?: ItemArmorArmorClassSchema;
  properties?: ItemPropertySchema[];
  conditions?: string[]; // applied when wearer is hit or hit others
}
export interface ItemAccessorySchema {
  inventorySlot?: { rows: number; columns: number }; // e.g. backpack
  wearSlot?: number; // e.g. belt gives more utility slots
}
export interface ItemConsumableRestorSchema {
  attribute: string;
  value: number;
}
export interface ItemConsumableSchema {
  numberOfUse?: number;
  restore?: ItemConsumableRestorSchema;
  conditions?: string[]; // conditions applied when used
}
export interface ItemUtilitySchema {
  damage?: {
    damageType: string;
    value: string | number;
  };
}

export interface ItemConfigSchemaBase<T extends ItemType> extends BaseMapSchema {
  tags: string[];
  space: { rows: number; columns: number };
  weight: number;
  price: number;
  type: T;
  requirements: ItemRequirementSchema[];
  actions?: ReferenceValueSchema[];
  conditions?: ReferenceValueSchema[];
  modifiers?: ItemModifierSchema[];
}

export interface ItemConfigSchemaWeapon extends ItemConfigSchemaBase<typeof ITEM_TYPE.WEAPON> {
  weapon: ItemWeaponSchema;
}

export interface ItemConfigSchemaShield extends ItemConfigSchemaBase<typeof ITEM_TYPE.SHIELD> {
  shield: ItemShieldSchema;
}

export interface ItemConfigSchemaArmor extends ItemConfigSchemaBase<typeof ITEM_TYPE.ARMOR> {
  armor: ItemArmorSchema;
}

export interface ItemConfigSchemaAccessory extends ItemConfigSchemaBase<typeof ITEM_TYPE.ACCESSORY> {
  accessory: ItemAccessorySchema;
}

export interface ItemConfigSchemaConsumable extends ItemConfigSchemaBase<typeof ITEM_TYPE.CONSUMABLE> {
  consumable: ItemConsumableSchema;
}

export interface ItemConfigSchemaUtility extends ItemConfigSchemaBase<typeof ITEM_TYPE.UTILITY> {
  utility: ItemUtilitySchema;
}

export type ItemConfigSchema =
| ItemConfigSchemaWeapon
| ItemConfigSchemaShield
| ItemConfigSchemaArmor
| ItemConfigSchemaAccessory
| ItemConfigSchemaConsumable
| ItemConfigSchemaUtility;
