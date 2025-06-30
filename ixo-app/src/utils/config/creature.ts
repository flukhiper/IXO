import type { CreatureConfig } from '@/types/config/creature';
import { generateId, normalizeValue, denormalizeValue } from './helper';

export function createCreatureConfig (
  input: Omit<CreatureConfig, 'id' | 'createdAt'>
): CreatureConfig {
  if (!input.name?.['en']) {
    throw new Error('CreatureConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedCreatureConfig = Omit<CreatureConfig, 'attributeOverrides'> & {
  attributeOverrides?: { attributeId: string; value: string | number }[];
};

export function normalizeCreatureConfig (creature: CreatureConfig): NormalizedCreatureConfig {
  return {
    ...creature,
    attributeOverrides: creature.attributeOverrides
      ? creature.attributeOverrides.map(override => ({
        ...override,
        value: normalizeValue(override.value) as string | number
      }))
      : undefined
  };
}

export function denormalizeCreatureConfig (raw: NormalizedCreatureConfig): CreatureConfig {
  return {
    ...raw,
    attributeOverrides: raw.attributeOverrides
      ? raw.attributeOverrides.map(override => ({
        ...override,
        value: denormalizeValue(override.value)
      }))
      : undefined
  } as CreatureConfig;
} 