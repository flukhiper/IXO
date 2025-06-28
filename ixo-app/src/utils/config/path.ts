import type { PathConfig } from '@/types/config/path';
import { generateId } from './helper';

export function createPathConfig (
  input: Omit<PathConfig, 'id' | 'createdAt'>
): PathConfig {
  if (!input.name?.['en']) {
    throw new Error('PathConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
