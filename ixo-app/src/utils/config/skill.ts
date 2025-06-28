import type { SkillConfig } from '@/types/config/skill';
import { generateId } from './helper';

export function createSkillConfig (
  input: Omit<SkillConfig, 'id' | 'createdAt'>
): SkillConfig {
  if (!input.name?.['en']) {
    throw new Error('SkillConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}
