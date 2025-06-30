import type { StatConfig } from '@/types/config/stat';
import { mockStats } from '@/mocks/config/stat';
import { BaseConfigManager } from './BaseConfigManager';

export class StatConfigManager extends BaseConfigManager<StatConfig> {
  constructor () {
    super(mockStats);
  }
} 