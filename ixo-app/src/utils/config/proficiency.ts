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