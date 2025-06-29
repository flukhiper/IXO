import { ITEM_WEIGHT, ITEM_BONUS_EFFECT_TYPE, ITEM_CUSTOMIZE_TYPE, ITEM_TYPE } from '@/constants/config/item';
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
  formula?: string;
}
export interface ItemDamageConfig {
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  formula?: string;
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
export type ItemCustomizeConfig =
  | { type: typeof ITEM_CUSTOMIZE_TYPE.DAMAGE; damage: ItemDamageConfig }
  | { type: typeof ITEM_CUSTOMIZE_TYPE.EFFECT; effect: ItemBonusEffectConfig };
export type ItemWeight = typeof ITEM_WEIGHT[keyof typeof ITEM_WEIGHT];
export interface WeaponPropertyConfig {
  weight?: ItemWeight; // light mean Usable for off-hand dual wield, Medium mean nothing, Heavy mean require stat STR 2 give modify AGI -2 (not stack with armor) except have range properties
  range?: { // mean this weapon is range weapon
    normal: number;           // e.g., 6
    max: number;              // e.g., 18
  };
  finesse?: boolean;            // Use DEX instead of STR if higher
  thrown?: {
    range: {
      normal: number;           // e.g., 6
      max: number;              // e.g., 18
    };
  };
  extraReach?: {
    bonusMeters: number;        // e.g., 1.5 (increased melee range)
  };
  twoHanded?: boolean;          // Requires two hands to use and stat STR 2 and give modify AGI -2
  versatile?: {
    alternateDamage: ItemDamageConfig; // Damage when used 2-handed
  };
  enhancement?: 1 | 2 | 3; // 💡 New: Magical/quality boost, max +3
  customize?: ItemCustomizeConfig;
}
export interface ItemWeaponConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.WEAPON;
  weapon?: {
    hit?: ItemHitConfig;
    damages?: ItemDamageConfig[];
    restores?: ItemRestoreConfig[];
    conditionIds?: string[];
    removeConditionIds?: string[];
    
    // NEW refined weapon property system
    property?: WeaponPropertyConfig;
  };
}

export interface ShieldPropertyConfig {
  enhancement?: 1 | 2 | 3;
  customize?: {
    type: typeof ITEM_CUSTOMIZE_TYPE.EFFECT;
    effect: ItemBonusEffectConfig;
  };
  weight?: ItemWeight; // light mean full affected by DEX, Medium mean affected by DEX max at 2 and require stat STR 1, Heavy mean not affected by DEX and require stat STR 2 give modify AGI -2 (not stack with armor) 
}

export interface ItemShieldConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.SHIELD;
  shield?: {
    armorClassBonus: number;

    property?: ShieldPropertyConfig;
  };
}
export interface ArmorPropertyConfig {
  enhancement?: 1 | 2 | 3;
  customize?: {
    type: typeof ITEM_CUSTOMIZE_TYPE.EFFECT;
    effect: ItemBonusEffectConfig;
  };
  weight?: ItemWeight; // light mean full affected by AGI, Medium mean affected by AGI max at 2 and require stat STR 1, Heavy mean not affected by AGI and require stat STR 2 give modify AGI -2
}
export interface ItemArmorConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ARMOR;
  armor?: {
    armorClass: FixedValue | RefValue;
    formula?: string;

    property?: ArmorPropertyConfig;
  };
}

export interface ItemAccessoryConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ACCESSORY;
}

// Consumable
export interface ItemConsumableConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.CONSUMABLE;
  consumable?: {
    damages?: ItemDamageConfig[];
    restores?: ItemRestoreConfig[];
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
