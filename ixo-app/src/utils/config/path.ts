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

// --- Normalization/Denormalization helpers ---
export type NormalizedPathConfig = PathConfig;

export function normalizePathConfig (path: PathConfig): NormalizedPathConfig {
  // No special normalization needed, but keep for consistency
  return { ...path };
}

export function denormalizePathConfig (raw: NormalizedPathConfig): PathConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
}
