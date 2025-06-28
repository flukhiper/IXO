import type { ArchetypeConfig } from '@/types/config/archetype';
import { generateId } from './helper';

export function createArchetypeConfig (input: Omit<ArchetypeConfig, 'id' | 'createdAt'>): ArchetypeConfig {
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
