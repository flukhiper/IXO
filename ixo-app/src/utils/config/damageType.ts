import { DamageTypeConfig } from '@/types/config/damageType';
import { generateId } from './helper';

export function createDamageTypeConfig (
  input: Omit<DamageTypeConfig, 'id' | 'createdAt'>
): DamageTypeConfig {
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}