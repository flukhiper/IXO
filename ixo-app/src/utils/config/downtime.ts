import type { DowntimeConfig } from '@/types/config/downtime';
import { generateId } from './helper';

export function createDowntimeConfig (
  input: Omit<DowntimeConfig, 'id' | 'createdAt'>
): DowntimeConfig {
  if (!input.name?.['en']) {
    throw new Error('DowntimeConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedDowntimeConfig = DowntimeConfig;

export function normalizeDowntimeConfig (downtime: DowntimeConfig): NormalizedDowntimeConfig {
  // No special normalization needed, but keep for consistency
  return { ...downtime };
}

export function denormalizeDowntimeConfig (raw: NormalizedDowntimeConfig): DowntimeConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
} 