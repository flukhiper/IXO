import { RealmConfig } from '@/types/config/realm';
import { generateId } from './helper';

export function createRealmConfig (input: Omit<RealmConfig, 'id' | 'createdAt'>): RealmConfig {
  if (!input.name?.['en']) {
    throw new Error('RealmConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assuming 'en' is always present
    createdAt: new Date().toISOString()
  };
}