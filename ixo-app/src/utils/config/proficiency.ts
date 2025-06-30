import { ProficiencyConfig } from '@/types/config/proficiency';
import { generateId } from './helper';

export function createProficiencyConfig (
  input: Omit<ProficiencyConfig, 'id' | 'createdAt'>
): ProficiencyConfig {
  if (!input.name?.['en']) {
    throw new Error('ProficiencyConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedProficiencyConfig = ProficiencyConfig;

export function normalizeProficiencyConfig (prof: ProficiencyConfig): NormalizedProficiencyConfig {
  // No special normalization needed, but keep for consistency
  return { ...prof };
}

export function denormalizeProficiencyConfig (raw: NormalizedProficiencyConfig): ProficiencyConfig {
  // No special denormalization needed, but keep for consistency
  return { ...raw };
}