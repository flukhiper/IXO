import type { ArchetypeConfig } from '@/types/config/archetype';
import { generateId } from './helper';

export function createArchetypeConfig (input: Omit<ArchetypeConfig, 'id' | 'createdAt'>): ArchetypeConfig {
  if (!input.name?.['en']) {
    throw new Error('createArchetypeConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
