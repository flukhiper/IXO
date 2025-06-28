import { ITEM_BONUS_EFFECT_TYPE, ITEM_TYPE } from '@/constants/config/item';
import type { BaseConfig, FixedValue, DiceValue, RefValue } from './base';
import type { InventorySpace, StatThresholdRequirement } from './common';

// Bonus Effects
export type ItemBonusEffectType = typeof ITEM_BONUS_EFFECT_TYPE[keyof typeof ITEM_BONUS_EFFECT_TYPE];
export type ItemBonusEffectConfig =
  | ItemBonusEffectStatModifyConfig
  | ItemBonusEffectAttributeModifyConfig
  | ItemBonusEffectRestrictActionConfig
  | ItemBonusEffectActionConfig
  | ItemBonusEffectResistenceConfig
  | ItemBonusEffectConditionConfig
  | ItemBonusEffectAdvantageAttributeConfig;

export interface ItemBonusEffectStatModifyConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.STAT_MODIFY;
  statId: string;
  formula: string;
}
export interface ItemBonusEffectAttributeModifyConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.ATTRIBUTE_MODIFY;
  attributeId: string;
  formula: string;
}
export interface ItemBonusEffectRestrictActionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.RESTRICT_ACTION;
  tags?: string[];
}
export interface ItemBonusEffectActionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.ACTION;
  actionIds?: string[];
}
export interface ItemBonusEffectResistenceConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.RESISTENCE;
  damageTypeId: string;
  damageScaleId: string;
}
export interface ItemBonusEffectConditionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.CONDITION;
  conditionIds?: string[];
}
export interface ItemBonusEffectAdvantageAttributeConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.ADVANTAGE_ATTRIBUTE;
  attributeIds: string[];
  isDisadvantage?: boolean;
}

// Usage & Combat Config
export interface ItemUsageLimit {
  isExpendable?: boolean;
  maxUses?: number;
  cooldownTurns?: number;
}
export interface ItemHitConfig {
  baseValue: FixedValue | DiceValue | RefValue;
  scalingFormula?: string;
}
export interface ItemDamageConfig {
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  scalingFormula?: string;
}
export interface ItemRestoreConfig {
  attributeId: string;
  formula: string;
}

// Core Base
export type ItemType = typeof ITEM_TYPE[keyof typeof ITEM_TYPE];
export interface ItemBaseConfig extends BaseConfig {
  type: ItemType;
  icon?: string;
  tags?: string[];
  weight?: number;
  space?: InventorySpace;
  value?: number;

  slotType: string;
  proficiencyIds?: string[];
  requiredCharacterLevel?: number;
  requiredStatThresholds?: StatThresholdRequirement[];

  bonusEffects?: ItemBonusEffectConfig[];
}

// Equipment Types
export interface ItemWeaponConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.WEAPON;
  weapon?: {
    hit?: ItemHitConfig;
    damage?: ItemDamageConfig[];
    restore?: ItemRestoreConfig[];
    conditionIds?: string[];
    removeConditionIds?: string[];
    properties?: string[];
  };
}

export interface ItemShieldConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.SHIELD;
  shield?: {
    armorClassBonus: number;
  };
}

export interface ItemArmorConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ARMOR;
  armor?: {
    armorClass: FixedValue | RefValue;
    scalingFormula?: string;
  };
}

export interface ItemAccessoryConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ACCESSORY;
}

// Consumable
export interface ItemConsumableConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.CONSUMABLE;
  consumable?: {
    damage?: ItemDamageConfig[];
    restore?: ItemRestoreConfig[];
    conditionIds?: string[];
    removeConditionIds?: string[];
    usageLimit?: ItemUsageLimit;
  };
}

// Utility
export interface ItemUtilityConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.UTILITY;
  utility?: {
    actionIds: string[];
    usageLimit?: ItemUsageLimit;
  };
}

// Final Union
export type ItemConfig =
  | ItemWeaponConfig
  | ItemShieldConfig
  | ItemArmorConfig
  | ItemAccessoryConfig
  | ItemConsumableConfig
  | ItemUtilityConfig;
