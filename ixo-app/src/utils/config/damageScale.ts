import { DamageScaleConfig } from '@/types/config/damageScale';
import { generateId } from './helper';

export function createDamageScaleConfig (
  input: Omit<DamageScaleConfig, 'id' | 'createdAt'>
): DamageScaleConfig {
  if (!input.name?.['en']) {
    throw new Error('DamageScaleConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedDamageScaleConfig = DamageScaleConfig;

export function normalizeDamageScaleConfig (scale: DamageScaleConfig): NormalizedDamageScaleConfig {
  // No special normalization needed, but keep for consistency
  return { ...scale };
}

export function denormalizeDamageScaleConfig (raw: NormalizedDamageScaleConfig): DamageScaleConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
}