// ixo-app/src/utils/config/item/helper.ts
import {
  createFixValue,
  createDiceValue,
  createModifierValue,
  createReferenceValue,
  generateId
} from '@/utils/config/helper';
import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { DAMAGE_TYPE_REF_ID } from '@/constants/damage';

import type {
  ItemWeaponConfig,
  ItemShieldConfig,
  ItemArmorConfig,
  ItemAccessoryConfig,
  ItemConsumableConfig,
  ItemUtilityConfig,
  ItemPropertyVersatileConfig,
  ItemPropertyFitnessConfig,
  ItemPropertyUpgradeConfig,
  ItemPropertyEnhanceConfig,
  ItemPropertyTwoHandConfig,
  ItemPropertyExtraReachConfig,
  ItemPropertyConfig,
  ItemArmorArmorClassConfig,
  ItemConsumableRestorConfig
} from '@/types/config/item';
import { ITEM_PROPERTY_TYPE } from '@/constants/item';
import { EQUIPMENT_REF_ID } from '@/constants/equipment';
import { CONDITION_REF_ID } from '@/constants/condition';

// Weapon Helpers
export function createItemWeaponHit (attributeId: string, modifier: string): ItemWeaponConfig['hit'] {
  return {
    attribute: createReferenceValue(ATTRIBUTE_REF_ID, attributeId),
    modifier: createModifierValue(modifier)
  };
}

export function createItemWeaponDamage (damageType: string, value: string | number, modifier: string): ItemWeaponConfig['damage'] {
  const rawValue = typeof value === 'string' ? createDiceValue(value) : createFixValue(value);
  return {
    damageType: createReferenceValue(DAMAGE_TYPE_REF_ID, damageType),
    value: rawValue,
    modifier: createModifierValue(modifier)
  };
}

export function createItemWeaponPropertyVersatile (value: string | number): ItemPropertyVersatileConfig {
  return {
    type: ITEM_PROPERTY_TYPE.VERSATILE,
    value: typeof value === 'string' ? createDiceValue(value) : createFixValue(value)
  };
}

export function createItemWeaponPropertyFitness (hitMod: string, dmgMod: string): ItemPropertyFitnessConfig {
  return {
    type: ITEM_PROPERTY_TYPE.FITNESS,
    hitModifier: createModifierValue(hitMod),
    damageModifier: createModifierValue(dmgMod)
  };
}

export function createItemWeaponPropertyUpgrade (value: number): ItemPropertyUpgradeConfig {
  return {
    type: ITEM_PROPERTY_TYPE.UPGRADE,
    value: createFixValue(value)
  };
}

export function createItemWeaponPropertyEnhance (
  name: string,
  damageType: string,
  value: string | number,
  nameTh: string
): ItemPropertyEnhanceConfig {
  return {
    type: 'enhance',
    id: generateId(name),
    name: {
      en: name,
      th: nameTh
    },
    damage: {
      damageType: createReferenceValue(DAMAGE_TYPE_REF_ID, damageType),
      value: typeof value === 'string' ? createDiceValue(value) : createFixValue(value)
    }
  };
}

export function createItemWeaponPropertyTwoHand (): ItemPropertyTwoHandConfig {
  return { type: ITEM_PROPERTY_TYPE.TWO_HAND };
}

export function createItemWeaponPropertyExtraReach (value: number): ItemPropertyExtraReachConfig {
  return {
    type: ITEM_PROPERTY_TYPE.EXTRA_REACH,
    value: createFixValue(value)
  };
}

// Shield Helper
export function createItemShield (modifier: string): ItemShieldConfig {
  return {
    modifier: createModifierValue(modifier)
  };
}

// Armor Helpers
export function createItemArmorClassBase (value: number) {
  return createFixValue(value);
}

export function createItemArmorClassModifier (formula: string) {
  return createModifierValue(formula);
}

export function createItemArmorClassMax (value: number) {
  return createFixValue(value);
}

export function createItemArmorClass (params: {
  base?: number;
  modifier?: string;
  max?: number;
}): ItemArmorArmorClassConfig {
  return {
    ...params.base !== undefined && { base: createFixValue(params.base) },
    ...params.modifier && { modifier: createModifierValue(params.modifier) },
    ...params.max !== undefined && { maxModifier: createFixValue(params.max) }
  };
}

export function createItemArmor (
  armorSlotType: string,
  armorClass?: ItemArmorArmorClassConfig,
  properties?: ItemPropertyConfig[],
  conditions?: string[]
): ItemArmorConfig {
  return {
    armorSlotType: createReferenceValue(EQUIPMENT_REF_ID, armorSlotType),
    ...armorClass && { armorClass },
    ...properties && { properties },
    ...conditions && { conditions: conditions.map(id => createReferenceValue(CONDITION_REF_ID, id)) }
  };
}

// Accessory Helpers
export function createItemAccessoryWearSlot (value: number) {
  return createFixValue(value);
}

export function createItemAccessoryInventorySlot (rows: number, columns: number) {
  return { rows, columns };
}

export function createItemAccessory (params: {
  wearSlot?: number;
  inventorySlot?: { rows: number; columns: number };
}): ItemAccessoryConfig {
  return {
    ...params.wearSlot !== undefined && { wearSlot: createFixValue(params.wearSlot) },
    ...params.inventorySlot && { inventorySlot: params.inventorySlot }
  };
}

// Consumable Helpers
export function createItemConsumableNumberOfUse (value: number) {
  return createFixValue(value);
}

export function createItemConsumableRestore (attributeId: string, value: number): ItemConsumableRestorConfig {
  return {
    attribute: createReferenceValue(ATTRIBUTE_REF_ID, attributeId),
    value: createFixValue(value)
  };
}

export function createItemConsumable (params: {
  uses?: number;
  restore?: { attribute: string; value: number };
  conditions?: string[];
}): ItemConsumableConfig {
  return {
    ...params.uses !== undefined && { numberOfUse: createFixValue(params.uses) },
    ...params.restore && {
      restore: createItemConsumableRestore(params.restore.attribute, params.restore.value)
    },
    ...params.conditions && { conditions: params.conditions.map(id => createReferenceValue('condition', id)) }
  };
}

// Utility Helpers
export function createItemUtilityDamage (damageType: string, value: string | number): ItemUtilityConfig['damage'] {
  return {
    damageType: createReferenceValue(DAMAGE_TYPE_REF_ID, damageType),
    value: typeof value === 'string' ? createDiceValue(value) : createFixValue(value)
  };
}

export function createItemUtility (params: {
  damageType?: string;
  value?: string | number;
}): ItemUtilityConfig {
  return {
    ...params.damageType && params.value && {
      damage: createItemUtilityDamage(params.damageType, params.value)
    }
  };
}
