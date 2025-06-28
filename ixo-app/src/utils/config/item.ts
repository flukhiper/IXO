import type { ItemAccessoryConfig, ItemArmorConfig, ItemConsumableConfig, ItemShieldConfig, ItemUtilityConfig, ItemWeaponConfig } from '@/types/config/item';
import { generateId } from './helper';

export function createWeaponItemConfig (
  input: Omit<ItemWeaponConfig, 'id' | 'createdAt'>
): ItemWeaponConfig {
  if (!input.name?.['en']) {
    throw new Error('ItemWeaponConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
export function createShieldItemConfig (
  input: Omit<ItemShieldConfig, 'id' | 'createdAt'>
): ItemShieldConfig {
  if (!input.name?.['en']) {
    throw new Error('ItemShieldConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
export function createArmorItemConfig (
  input: Omit<ItemArmorConfig, 'id' | 'createdAt'>
): ItemArmorConfig {
  if (!input.name?.['en']) {
    throw new Error('ItemArmorConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
export function createAccessoryItemConfig (
  input: Omit<ItemAccessoryConfig, 'id' | 'createdAt'>
): ItemAccessoryConfig {
  if (!input.name?.['en']) {
    throw new Error('ItemAccessoryConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
export function createConsumableItemConfig (
  input: Omit<ItemConsumableConfig, 'id' | 'createdAt'>
): ItemConsumableConfig {
  if (!input.name?.['en']) {
    throw new Error('ItemConsumableConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
export function createUtilityItemConfig (
  input: Omit<ItemUtilityConfig, 'id' | 'createdAt'>
): ItemUtilityConfig {
  if (!input.name?.['en']) {
    throw new Error('ItemUtilityConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}