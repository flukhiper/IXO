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
