import { StatConfig } from '@/types/config/stat';
import { generateId } from './helper';

export function createStatConfig (input: Omit<StatConfig, 'id' | 'createdAt'>): StatConfig {
  if (!input.name?.['en']) {
    throw new Error('StatConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assuming English always exists
    createdAt: new Date().toISOString()
  };
}