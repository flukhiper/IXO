import type { ActionConfig } from '@/types/config/action';
import { generateId } from './helper';

export function createActionConfig (input: Omit<ActionConfig, 'id' | 'createdAt'>): ActionConfig {
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English name always exists
    createdAt: new Date().toISOString()
  };
}
