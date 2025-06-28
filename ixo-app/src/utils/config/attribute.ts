import { AttributeConfig } from '@/types/config/attribute';
import { generateId } from './helper';

export function createAttributeConfig (
  input: Omit<AttributeConfig, 'id' | 'createdAt'>
): AttributeConfig {
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English always exists
    createdAt: new Date().toISOString()
  };
}

export function isRestorableAttribute (attr: AttributeConfig): boolean {
  return !!(attr.restoreOn && attr.restoreValue);
}