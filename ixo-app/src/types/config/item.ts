import { ITEM_WEIGHT, ITEM_TYPE } from '@/constants/config/item';
import { EFFECT_TYPE } from '@/constants/config/base';
import type { BaseConfig, FixedValue, DiceValue, RefValue, InventorySpace, ConditionFormula, EffectRestrictActionConfig, EffectRestrictEquipmentConfig, EffectBlockConditionConfig, EffectGainConditionConfig, EffectGainActionConfig, EffectGainAdvantageConfig, EffectGainResistenceConfig, EffectAddDowntimeConfig, EffectShowFlavorTextConfig, EffectModifyAttributeConfig, EffectModifyStatConfig } from './base';

export interface ItemUsageLimit {
  isExpendable: boolean;
  maxUses: number;
  cooldownTurns: number;
}

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

// Bonus Effects
export type ItemBonusEffectType = 
| typeof EFFECT_TYPE.MODIFY_STAT
| typeof EFFECT_TYPE.MODIFY_ATTRIBUTE
| typeof EFFECT_TYPE.RESTRICT_ACTION
| typeof EFFECT_TYPE.RESTRICT_EQUIPMENT
| typeof EFFECT_TYPE.BLOCK_CONDITION
| typeof EFFECT_TYPE.GAIN_CONDITION
| typeof EFFECT_TYPE.GAIN_ACTION
| typeof EFFECT_TYPE.GAIN_ADVANTAGE
| typeof EFFECT_TYPE.GAIN_RESISTENCE
| typeof EFFECT_TYPE.ADD_DOWNTIME
| typeof EFFECT_TYPE.SHOW_FLAVOR_TEXT
| typeof EFFECT_TYPE.SELECT_EFFECT;

export type ItemBonusEffectConfig =
| EffectModifyStatConfig
| EffectModifyAttributeConfig
| EffectRestrictActionConfig
| EffectRestrictEquipmentConfig
| EffectBlockConditionConfig
| EffectGainConditionConfig
| EffectGainActionConfig
| EffectGainAdvantageConfig
| EffectGainResistenceConfig
| EffectAddDowntimeConfig
| EffectShowFlavorTextConfig
| ItemBonusEffectSelectEffectConfig;

export interface ItemBonusEffectSelectEffectConfig {
  type: typeof EFFECT_TYPE.SELECT_EFFECT;
  effects: Exclude<ItemBonusEffectConfig, ItemBonusEffectSelectEffectConfig>[];
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
  range?: FixedValue | DiceValue;
  finesse?: {
    newHit: ItemHitConfig;
    newDamage: ItemDamageConfig;
  };            // Use DEX instead of STR if higher
  thrown?: {
    range: FixedValue | DiceValue;
  };
  extraReach?: {
    newRange: FixedValue | DiceValue;
  };
  twoHanded?: boolean;          // Requires two hands to use and stat STR 2 and give modify AGI -2
  versatile?: {
    newDamages: ItemDamageConfig;
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
    damage: ItemDamageConfig;
    range: FixedValue | DiceValue;
    
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
    armorClass: {
      baseValue: FixedValue | RefValue;
      formula?: string;
    };

    usageLimit: ItemUsageLimit;

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
    armorClass: {
      baseValue: FixedValue | RefValue;
      formula?: string;
    };

    usageLimit: ItemUsageLimit;

    property: ArmorPropertyConfig;
  };
}
export interface ItemAccessoryConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.ACCESSORY;
}
export interface ItemConsumableConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.CONSUMABLE;
  consumable: {
    damages?: ItemDamageConfig;
    restores?: ItemRestoreConfig;
    conditionIds?: string[];
    removeConditionTags?: string[];
    usageLimit?: ItemUsageLimit;
  };
}
export interface ItemUtilityConfig extends ItemBaseConfig {
  type: typeof ITEM_TYPE.UTILITY;
  utility: {
    actionIds: string[];
    usageLimit?: ItemUsageLimit;
  };
}
