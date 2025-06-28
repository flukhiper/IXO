import type { ConditionConfig } from '@/types/config/condition';
import { generateId } from './helper';

export function createConditionConfig (
  input: Omit<ConditionConfig, 'id' | 'createdAt'>
): ConditionConfig {
  if (!input.name?.['en']) {
    throw new Error('ConditionConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
