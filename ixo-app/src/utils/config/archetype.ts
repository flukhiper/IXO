import type { ArchetypeConfig } from '@/types/config/origin';
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

// --- Normalization/Denormalization helpers ---
export type NormalizedArchetypeConfig = ArchetypeConfig;

export function normalizeArchetypeConfig (archetype: ArchetypeConfig): NormalizedArchetypeConfig {
  // No special normalization needed, but keep for consistency
  return { ...archetype };
}

export function denormalizeArchetypeConfig (raw: NormalizedArchetypeConfig): ArchetypeConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
}
