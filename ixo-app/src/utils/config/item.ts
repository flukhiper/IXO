import type { ItemAccessoryConfig, ItemArmorConfig, ItemConsumableConfig, ItemShieldConfig, ItemUtilityConfig, ItemWeaponConfig, ItemConfig, ItemHitConfig, ItemDamageConfig, ItemRestoreConfig, WeaponPropertyConfig, ItemUsageLimit } from '@/types/config/item';
import { generateId, NormalizedVale } from './helper';
import { normalizeValue, denormalizeValue } from './helper';
import { DiceValue, FixedValue } from '@/types/config/base';

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

// --- Normalization/Denormalization helpers ---
export type NormalizedItemHitConfig = Omit<ItemHitConfig, 'baseValue'> & { baseValue: NormalizedVale };
export type NormalizedItemDamageConfig = Omit<ItemDamageConfig, 'baseValue'> & { baseValue: NormalizedVale };

export function normalizeItemHitConfig (hit?: ItemHitConfig): NormalizedItemHitConfig | undefined {
  if (!hit) return undefined;
  return {
    ...hit,
    baseValue: normalizeValue(hit.baseValue)
  };
}

export function denormalizeItemHitConfig (hit?: NormalizedItemHitConfig): ItemHitConfig | undefined {
  if (!hit) return undefined;
  return {
    ...hit,
    baseValue: denormalizeValue(hit.baseValue)
  };
}

export function normalizeItemDamageConfig (dmg: ItemDamageConfig): NormalizedItemDamageConfig {
  return {
    ...dmg,
    baseValue: normalizeValue(dmg.baseValue)
  };
}

export function denormalizeItemDamageConfig (dmg: NormalizedItemDamageConfig): ItemDamageConfig {
  return {
    ...dmg,
    baseValue: denormalizeValue(dmg.baseValue) as FixedValue | DiceValue
  };
}

export type NormalizedItemConfig = Omit<ItemConfig, 'weapon' | 'armor' | 'consumable'> & {
  weapon?: {
    hit?: NormalizedItemHitConfig;
    damages?: NormalizedItemDamageConfig[];
    restores?: ItemRestoreConfig[];
    conditionIds?: string[];
    removeConditionIds?: string[];
    property?: WeaponPropertyConfig;
  };
  armor?: ItemArmorConfig['armor'];
  shield?: ItemShieldConfig['shield'];
  utility?: ItemUtilityConfig['utility'];
  consumable?: {
    damages?: NormalizedItemDamageConfig[];
    restores?: ItemRestoreConfig[];
    conditionIds?: string[];
    removeConditionIds?: string[];
    usageLimit?: ItemUsageLimit;
  };
};

export function normalizeItemConfig (item: ItemConfig): NormalizedItemConfig {
  if (item.type === 'weapon') {
    const { weapon, ...base } = item as ItemWeaponConfig;
    return {
      ...base,
      type: item.type,
      weapon: weapon
        ? {
          ...weapon,
          hit: weapon.hit ? normalizeItemHitConfig(weapon.hit) : undefined,
          damages: weapon.damages ? weapon.damages.map(normalizeItemDamageConfig) : undefined
        }
        : undefined
    };
  } else if (item.type === 'consumable') {
    const { consumable, ...base } = item as ItemConsumableConfig;
    return {
      ...base,
      type: item.type,
      consumable: consumable
        ? {
          ...consumable,
          damages: consumable.damages ? consumable.damages.map(normalizeItemDamageConfig) : undefined
        }
        : undefined
    };
  } else if (item.type === 'armor') {
    const { armor, ...base } = item as ItemArmorConfig;
    return {
      ...base,
      type: item.type,
      armor: armor ? { ...armor } : undefined
    };
  } else if (item.type === 'shield') {
    const { shield, ...base } = item as ItemShieldConfig;
    return {
      ...base,
      type: item.type,
      shield: shield ? { ...shield } : undefined
    };
  } else if (item.type === 'accessory') {
    const { ...base } = item as ItemAccessoryConfig;
    return {
      ...base,
      type: item.type
    };
  } else {
    const { utility, ...base } = item as ItemUtilityConfig;
    return {
      ...base,
      type: item.type,
      utility: utility ? { ...utility } : undefined
    };
  }
}

export function denormalizeItemConfig (raw: NormalizedItemConfig): ItemConfig {
  if (raw.type === 'weapon') {
    const { weapon, ...base } = raw as NormalizedItemConfig & { weapon: NormalizedItemConfig['weapon'] };
    return {
      ...base,
      type: raw.type,
      weapon: weapon
        ? {
          ...weapon,
          hit: weapon.hit ? denormalizeItemHitConfig(weapon.hit as NormalizedItemHitConfig) : undefined,
          damages: weapon.damages ? (weapon.damages as NormalizedItemDamageConfig[]).map(denormalizeItemDamageConfig) : undefined
        }
        : undefined
    } as ItemConfig;
  } else if (raw.type === 'consumable') {
    const { consumable, ...base } = raw as NormalizedItemConfig & { consumable: NormalizedItemConfig['consumable'] };
    return {
      ...base,
      type: raw.type,
      consumable: consumable
        ? {
          ...consumable,
          damages: consumable.damages ? (consumable.damages as NormalizedItemDamageConfig[]).map(denormalizeItemDamageConfig) : undefined
        }
        : undefined
    } as ItemConfig;
  } else if (raw.type === 'armor') {
    const { armor, ...base } = raw as NormalizedItemConfig & { armor: NormalizedItemConfig['armor'] };
    return {
      ...base,
      type: raw.type,
      armor: armor ? { ...armor } : undefined
    } as ItemConfig;
  } else if (raw.type === 'shield') {
    const { shield, ...base } = raw as NormalizedItemConfig & { shield: NormalizedItemConfig['shield'] };
    return {
      ...base,
      type: raw.type,
      shield: shield ? { ...shield } : undefined
    } as ItemConfig;
  } else if (raw.type === 'accessory') {
    const { ...base } = raw as NormalizedItemConfig;
    return {
      ...base,
      type: raw.type
    } as ItemConfig;
  } else {
    const { utility, ...base } = raw as NormalizedItemConfig & { utility: NormalizedItemConfig['utility'] };
    return {
      ...base,
      type: raw.type,
      utility: utility ? { ...utility } : undefined
    } as ItemConfig;
  }
}