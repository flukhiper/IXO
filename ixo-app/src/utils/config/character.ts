import { CharacterConfig } from '@/types/config/character';
import { generateId } from './helper';

export function createCharacterConfig (
  input: Omit<CharacterConfig, 'id' | 'createdAt'>
): CharacterConfig {
  if (!input.name?.['en']) {
    throw new Error('CharacterConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English is always present
    createdAt: new Date().toISOString()
  };
}
