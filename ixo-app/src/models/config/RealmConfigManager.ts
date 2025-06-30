import type { RealmConfig } from '@/types/config/realm';
import { mockRealms } from '@/mocks/config/realm';
import { BaseConfigManager } from './BaseConfigManager';

export class RealmConfigManager extends BaseConfigManager<RealmConfig> {
  constructor () {
    super(mockRealms);
  }
} 