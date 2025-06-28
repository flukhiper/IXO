import { CharacterConfig } from '@/types/config/character';
import { generateId } from './helper';

export function createCharacterConfig (
  input: Omit<CharacterConfig, 'id' | 'createdAt'>
): CharacterConfig {
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English is always present
    createdAt: new Date().toISOString()
  };
}
