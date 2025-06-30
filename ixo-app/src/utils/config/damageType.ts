import { DamageTypeConfig } from '@/types/config/damageType';
import { generateId } from './helper';

export function createDamageTypeConfig (
  input: Omit<DamageTypeConfig, 'id' | 'createdAt'>
): DamageTypeConfig {
  if (!input.name?.['en']) {
    throw new Error('DamageTypeConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedDamageTypeConfig = DamageTypeConfig;

export function normalizeDamageTypeConfig (dmgType: DamageTypeConfig): NormalizedDamageTypeConfig {
  // No special normalization needed, but keep for consistency
  return { ...dmgType };
}

export function denormalizeDamageTypeConfig (raw: NormalizedDamageTypeConfig): DamageTypeConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
}