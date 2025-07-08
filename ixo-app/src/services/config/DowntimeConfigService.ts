import { DowntimeConfigRepository } from '@/repositories/DowntimeConfigRepository';
import type { DowntimeConfig } from '@/types/config/downtime';
import { BaseConfigService } from './BaseConfigService';

export class DowntimeConfigService extends BaseConfigService<DowntimeConfig, DowntimeConfigRepository> {
  constructor () {
    super(new DowntimeConfigRepository());
  }
} 