import type { AttributeConfig } from '@/types/config/attribute';
import { generateId } from './helper';
import { normalizeValue, denormalizeValue } from './helper';

export function createAttributeConfig (
  input: Omit<AttributeConfig, 'id' | 'createdAt'>
): AttributeConfig {
  if (!input.name?.['en']) {
    throw new Error('AttributeConfig must have English name (name.en) to generate ID.');
  }

  // Assumes English name always exists and is unique for ID generation
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

/**
 * Checks if an attribute is restorable (has both restoreOns and restoreValue defined).
 */
export function isRestorableAttribute (attr: AttributeConfig): boolean {
  return Array.isArray(attr.restoreOns) && attr.restoreOns.length > 0 && attr.restoreValue !== undefined;
}

// --- Normalization/Denormalization helpers ---
export type NormalizedAttributeConfig = Omit<AttributeConfig, 'baseValue' | 'restoreValue'> & {
  baseValue: string | number;
  restoreValue?: string | number;
};

export function normalizeAttributeConfig (attr: AttributeConfig): NormalizedAttributeConfig {
  return {
    ...attr,
    baseValue: normalizeValue(attr.baseValue) as string | number,
    restoreValue: attr.restoreValue ? normalizeValue(attr.restoreValue) as string | number : undefined
  };
}

export function denormalizeAttributeConfig (raw: NormalizedAttributeConfig): AttributeConfig {
  return {
    ...raw,
    baseValue: denormalizeValue(raw.baseValue),
    restoreValue: raw.restoreValue !== undefined ? denormalizeValue(raw.restoreValue) : undefined
  } as AttributeConfig;
}
