import type { DowntimeConfig } from '@/types/config/downtime';
import { mockDowntimes } from '@/mocks/config/downtime';
import { BaseConfigManager } from './BaseConfigManager';

export class DowntimeConfigManager extends BaseConfigManager<DowntimeConfig> {
  constructor () {
    super(mockDowntimes);
  }
} 