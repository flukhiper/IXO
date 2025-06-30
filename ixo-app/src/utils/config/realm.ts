import { RealmConfig } from '@/types/config/realm';
import { generateId } from './helper';

export function createRealmConfig (input: Omit<RealmConfig, 'id' | 'createdAt'>): RealmConfig {
  if (!input.name?.['en']) {
    throw new Error('RealmConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assuming 'en' is always present
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedRealmConfig = RealmConfig;

export function normalizeRealmConfig (realm: RealmConfig): NormalizedRealmConfig {
  // No special normalization needed, but keep for consistency
  return { ...realm };
}

export function denormalizeRealmConfig (raw: NormalizedRealmConfig): RealmConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
}