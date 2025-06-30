import type { TraitConfig } from '@/types/config/trait';
import { generateId } from './helper';

export function createTraitConfig (
  input: Omit<TraitConfig, 'id' | 'createdAt'>
): TraitConfig {
  if (!input.name?.['en']) {
    throw new Error('TraitConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedTraitConfig = TraitConfig;

export function normalizeTraitConfig (trait: TraitConfig): NormalizedTraitConfig {
  // No special normalization needed, but keep for consistency
  return { ...trait };
}

export function denormalizeTraitConfig (raw: NormalizedTraitConfig): TraitConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
} 