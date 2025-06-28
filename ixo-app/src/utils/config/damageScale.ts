import { DamageScaleConfig } from '@/types/config/damageScale';
import { generateId } from './helper';

export function createDamageScaleConfig (
  input: Omit<DamageScaleConfig, 'id' | 'createdAt'>
): DamageScaleConfig {
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
