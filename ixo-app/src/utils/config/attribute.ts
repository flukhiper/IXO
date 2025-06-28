import { AttributeConfig } from '@/types/config/attribute';
import { generateId } from './helper';

export function createAttributeConfig (
  input: Omit<AttributeConfig, 'id' | 'createdAt'>
): AttributeConfig {
  if (!input.name?.['en']) {
    throw new Error('AttributeConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English always exists
    createdAt: new Date().toISOString()
  };
}

export function isRestorableAttribute (attr: AttributeConfig): boolean {
  return !!(attr.restoreOn && attr.restoreValue);
}