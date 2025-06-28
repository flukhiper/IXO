import type { ActionConfig } from '@/types/config/action';
import { generateId } from './helper';

export function createActionConfig (input: Omit<ActionConfig, 'id' | 'createdAt'>): ActionConfig {
  if (!input.name?.['en']) {
    throw new Error('createActionConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English name always exists
    createdAt: new Date().toISOString()
  };
}
