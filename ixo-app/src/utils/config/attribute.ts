import type { AttributeConfig } from '@/types/config/attribute';
import { generateId } from './helper';

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
