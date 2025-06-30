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

// --- Normalization/Denormalization helpers ---
export type NormalizedStatConfig = StatConfig;

export function normalizeStatConfig (stat: StatConfig): NormalizedStatConfig {
  // No special normalization needed for StatConfig, but keep for consistency
  return { ...stat };
}

export function denormalizeStatConfig (raw: NormalizedStatConfig): StatConfig {
  // No special denormalization needed for StatConfig, but keep for consistency
  return { ...raw };
}