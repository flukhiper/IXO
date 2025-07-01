import { ITEM_WEIGHT, ITEM_BONUS_EFFECT_TYPE, ITEM_TYPE } from '@/constants/config/item';
import type { BaseConfig, FixedValue, DiceValue, RefValue, InventorySpace, ConditionFormula, OnEventStatConfig, OnEventGotDamageConfig, OnEventGotHitConfig, OnEventAttributeConfig } from './base';

export interface ItemDamageConfig {
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface ItemRestoreConfig {
  attributeId: string;
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface ItemHitConfig {
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
// Equipment Types

export type ItemBonusEffectOn = 
| OnEventAttributeConfig
| OnEventStatConfig
| OnEventGotDamageConfig
| OnEventGotHitConfig;
// Bonus Effects
export type ItemBonusEffectType = typeof ITEM_BONUS_EFFECT_TYPE[keyof typeof ITEM_BONUS_EFFECT_TYPE];
export type ItemBonusEffectConfig =
| ItemBonusEffectModifyStatConfig
| ItemBonusEffectModifyAttributeConfig
| ItemBonusEffectRestrictActionConfig
| ItemBonusEffectRestrictEquipmentConfig
| ItemBonusEffectBlockConditionConfig
| ItemBonusEffectGainConditionConfig
| ItemBonusEffectGainActionConfig
| ItemBonusEffectGainAdvantageConfig
| ItemBonusEffectGainResistenceConfig
| ItemBonusEffectAddDamageConfig
| ItemBonusEffectReduceDamageConfig
| ItemBonusEffectShowFlavorTextConfig;

export interface ItemBonusEffectModifyStatConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.MODIFY_STAT;
  statId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
export interface ItemBonusEffectModifyAttributeConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.MODIFY_ATTRIBUTE;
  attributeId: string;
  formula: string; // e.g., "-2", "stat(strength) * 0.5"
}
export interface ItemBonusEffectRestrictActionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.RESTRICT_ACTION;
  tags: string[]; // e.g., "melee", "magic"
}
export interface ItemBonusEffectRestrictEquipmentConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.RESTRICT_EQUIPMENT;
  equipmentSlotId: string; // e.g., "main-hand", "off-hand"
  tags: string[]; // e.g., "melee", "magic"
}
export interface ItemBonusEffectBlockConditionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.BLOCK_CONDITION;
  tags: string[]; // e.g., ["frightened", "fatigue"]
}
export interface ItemBonusEffectGainConditionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.GAIN_CONDITION;
  conditionIds: string[];
  ons: ItemBonusEffectOn[];
}
export interface ItemBonusEffectGainActionConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.GAIN_ACTION;
  actionIds: string[];
  ons: ItemBonusEffectOn[];
}
export interface ItemBonusEffectGainAdvantageConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.GAIN_ADVANTAGE;
  attributeIds: string[];
  isDisadvantage?: boolean; // false (default) means advantage, true means disadvantage
}
export interface ItemBonusEffectGainResistenceConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.GAIN_RESISTENCE;
  damageTypeId: string;
  damageScaleId: string;
}
export interface ItemBonusEffectAddDamageConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.ADD_DAMAGE;
  additionalDamage: ItemDamageConfig;
}
export interface ItemBonusEffectReduceDamageConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.REDUCE_DAMAGE;
  damageTypeId: string;
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface ItemBonusEffectShowFlavorTextConfig {
  type: typeof ITEM_BONUS_EFFECT_TYPE.SHOW_FLAVOR_TEXT;
}

// Final Union
export type ItemConfig =
  | ItemWeaponConfig
  | ItemShieldConfig
  | ItemArmorConfig
  | ItemAccessoryConfig
  | ItemConsumableConfig
  | ItemUtilityConfig;

// Core Base
export type ItemType = typeof ITEM_TYPE[keyof typeof ITEM_TYPE];
export interface ItemBaseConfig extends BaseConfig {
  type: ItemType;
  icon?: string;
  thumbnail?: string;
  tags?: string[];
  weight: number;
  space: InventorySpace;
  value: number;

  slotTypes: string[];

  proficiencyIds: string[]; // must have at least one proficiency to able to use this item without proficiency penalty. [] mean no proficiency penalty

  requiredCharacterLevel: number;
  requiredStats: {
    statId: string;
    conditionFormulas: ConditionFormula;
  }[];  // Used for pool filtering

  bonusEffects: ItemBonusEffectConfig[];
}

export type ItemWeight = typeof ITEM_WEIGHT[keyof typeof ITEM_WEIGHT];
export interface WeaponPropertyConfig {
  weight: ItemWeight; // light mean Usable for off-hand dual wield, Medium mean nothing, Heavy mean require stat STR 2 give modify AGI -2 (not stack with armor) except have range properties
  range?: { // mean this weapon is range weapon
    range: FixedValue | DiceValue;
    maxRange?: FixedValue | DiceValue; // if out of range, gain disadvantage
  };
  finesse?: {
    newHit: ItemHitConfig;
    newDamages: ItemDamageConfig[];
  };            // Use DEX instead of STR if higher
  thrown?: {
    range: {
      range: FixedValue | DiceValue;
      maxRange?: FixedValue | DiceValue; // if out of range, gain disadvantage
    };
  };
  extraReach?: {
    newRange: FixedValue | DiceValue;
  };
  twoHanded?: boolean;          // Requires two hands to use and stat STR 2 and give modify AGI -2
  versatile?: {
    newDamages: ItemDamageConfig[];
  };
  enhancement?: 1 | 2 | 3; // 💡 New: Magical/quality boost, max +3
  customize?: {
    maxCustomize: number;
  };
}
export interface ItemWeaponConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.WEAPON;
  weapon: {
    hit: ItemHitConfig;
    damages: ItemDamageConfig[];
    ranage: FixedValue | DiceValue;
    
    property: WeaponPropertyConfig;
  };
}
export interface ShieldPropertyConfig {
  weight: ItemWeight; // light mean full affected by DEX, Medium mean affected by DEX max at 2 and require stat STR 1, Heavy mean not affected by DEX and require stat STR 2 give modify AGI -2 (not stack with armor) 
  enhancement?: 1 | 2 | 3;
  customize?: {
    maxCustomize: number;
  };
}
export interface ItemShieldConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.SHIELD;
  shield: {
    armorClass: FixedValue | RefValue;
    formula?: string;

    property: ShieldPropertyConfig;
  };
}
export interface ArmorPropertyConfig {
  weight: ItemWeight; // light mean full affected by AGI, Medium mean affected by AGI max at 2 and require stat STR 1, Heavy mean not affected by AGI and require stat STR 2 give modify AGI -2
  enhancement?: 1 | 2 | 3;
  customize?: {
    maxCustomize: number;
  };
}
export interface ItemArmorConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ARMOR;
  armor: {
    armorClass: FixedValue | RefValue;
    formula?: string;

    property: ArmorPropertyConfig;
  };
}
export interface ItemAccessoryConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ACCESSORY;
}

// Usage & Combat Config
export interface ItemUsageLimit {
  isExpendable: boolean;
  maxUses: number;
  cooldownTurns: number;
}
// Consumable
export interface ItemConsumableConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.CONSUMABLE;
  consumable: {
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
  utility: {
    actionIds: string[];
    usageLimit?: ItemUsageLimit;
  };
}
