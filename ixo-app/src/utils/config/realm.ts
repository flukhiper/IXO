import { RealmConfig } from '@/types/config/realm';
import { generateId } from './helper';

export function createRealmConfig (input: Omit<RealmConfig, 'id' | 'createdAt'>): RealmConfig {
  return {
    ...input,
    id: generateId(input.name['en']), // assuming 'en' is always present
    createdAt: new Date().toISOString()
  };
}