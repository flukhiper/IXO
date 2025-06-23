import { ITEM_PROPERTY_TYPE, ITEM_REQUIREMENT_TYPE, ITEM_TYPE } from '@/constants/item';

import type { MultiLangText } from '@/types/common';
import type { FixValue, DiceValue, ConditionValue, ReferenceValue, ModifierValue } from './value';
import type { BaseMapConfig } from './base';

export type ItemType = typeof ITEM_TYPE[keyof typeof ITEM_TYPE];
export type ItemRequirementType = typeof ITEM_REQUIREMENT_TYPE[keyof typeof ITEM_REQUIREMENT_TYPE];
export type ItemPropertyType = typeof ITEM_PROPERTY_TYPE[keyof typeof ITEM_PROPERTY_TYPE];

export interface ItemRequirementProficiencyConfig {
  type: typeof ITEM_REQUIREMENT_TYPE.PROFICIENCY;
  proficiency: ReferenceValue;
  condition: ConditionValue;
}
export interface ItemRequirementLevelConfig {
  type: typeof ITEM_REQUIREMENT_TYPE.LEVEL;
  condition: ConditionValue;
}
export interface ItemRequirementStatConfig {
  type: typeof ITEM_REQUIREMENT_TYPE.STAT;
  stat: ReferenceValue;
  condition: ConditionValue;
}
export type ItemRequirementConfig =
  | ItemRequirementProficiencyConfig
  | ItemRequirementLevelConfig
  | ItemRequirementStatConfig;

export interface ItemAttributeModifierConfig {
  attribute: ReferenceValue;
  modifier: ModifierValue;
}

export interface ItemStatModifierConfig {
  stat: ReferenceValue;
  modifier: ModifierValue;
}

export type ItemModifierConfig =
  | ItemAttributeModifierConfig
  | ItemStatModifierConfig;

export interface ItemPropertyVersatileConfig {
  type: typeof ITEM_PROPERTY_TYPE.VERSATILE;
  value: DiceValue | FixValue;
}
export interface ItemPropertyFitnessConfig {
  type: typeof ITEM_PROPERTY_TYPE.FITNESS;
  hitModifier: ModifierValue;
  damageModifier: ModifierValue;
}
export interface ItemPropertyUpgradeConfig {
  type: typeof ITEM_PROPERTY_TYPE.UPGRADE;
  value: FixValue;
}
export interface ItemPropertyEnhanceConfig {
  type: typeof ITEM_PROPERTY_TYPE.ENHANCE;
  id: string;
  name: MultiLangText;
  damage: {
    damageType: ReferenceValue;
    value: DiceValue | FixValue;
  };
}
export interface ItemPropertyTwoHandConfig {
  type: typeof ITEM_PROPERTY_TYPE.TWO_HAND;
}
export interface ItemPropertyExtraReachConfig {
  type: typeof ITEM_PROPERTY_TYPE.EXTRA_REACH;
  value: FixValue;
}
export type ItemPropertyConfig =
  | ItemPropertyVersatileConfig
  | ItemPropertyFitnessConfig
  | ItemPropertyUpgradeConfig
  | ItemPropertyEnhanceConfig
  | ItemPropertyTwoHandConfig
  | ItemPropertyExtraReachConfig;

export interface ItemWeaponConfig {
  hit: {
    attribute: ReferenceValue;
    modifier: ModifierValue;
  };
  damage: {
    damageType: ReferenceValue;
    value: DiceValue | FixValue;
    modifier: ModifierValue;
  };
  properties?: ItemPropertyConfig[];
  conditions?: ReferenceValue[];
}

export interface ItemShieldConfig {
  modifier: ModifierValue; // Typically an AC or block boost
}

export interface ItemArmorArmorClassConfig {
  base?: FixValue;
  modifier?: ModifierValue;
  maxModifier?: FixValue;
}

export interface ItemArmorConfig {
  armorSlotType: ReferenceValue; // e.g., 'clothwear', 'footwear', 'headwear'
  armorClass?: ItemArmorArmorClassConfig;
  properties?: ItemPropertyConfig[];
  conditions?: ReferenceValue[]; // applied when wearer is hit or hit others
}

export interface ItemAccessoryConfig {
  inventorySlot?: { rows: number; columns: number }; // e.g. backpack
  wearSlot?: FixValue; // e.g. belt gives more utility slots
}

export interface ItemConsumableRestorConfig {
  attribute: ReferenceValue;
  value: FixValue;
}

export interface ItemConsumableConfig {
  numberOfUse?: FixValue;
  restore?: ItemConsumableRestorConfig;
  conditions?: ReferenceValue[]; // conditions applied when used
}

export interface ItemUtilityConfig {
  damage?: {
    damageType: ReferenceValue;
    value: DiceValue | FixValue;
  };
}

export interface ItemConfigBase<T extends ItemType> extends BaseMapConfig {
  tags: string[];
  space: { rows: number; columns: number };
  weight: number;
  price: number;
  type: T;
  requirements: ItemRequirementConfig[];
  actions?: ReferenceValue[];
  conditions?: ReferenceValue[];
  modifiers?: ItemModifierConfig[];
}

export interface ItemConfigWeapon extends ItemConfigBase<typeof ITEM_TYPE.WEAPON> {
  weapon: ItemWeaponConfig;
}

export interface ItemConfigShield extends ItemConfigBase<typeof ITEM_TYPE.SHIELD> {
  shield: ItemShieldConfig;
}

export interface ItemConfigArmor extends ItemConfigBase<typeof ITEM_TYPE.ARMOR> {
  armor: ItemArmorConfig;
}

export interface ItemConfigAccessory extends ItemConfigBase<typeof ITEM_TYPE.ACCESSORY> {
  accessory: ItemAccessoryConfig;
}

export interface ItemConfigConsumable extends ItemConfigBase<typeof ITEM_TYPE.CONSUMABLE> {
  consumable: ItemConsumableConfig;
}

export interface ItemConfigUtility extends ItemConfigBase<typeof ITEM_TYPE.UTILITY> {
  utility: ItemUtilityConfig;
}

export type ItemConfig = 
| ItemConfigWeapon
| ItemConfigShield
| ItemConfigArmor
| ItemConfigAccessory
| ItemConfigConsumable
| ItemConfigUtility;