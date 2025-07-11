import { DowntimeConfigRepository } from '@/repositories/config/DowntimeConfigRepository';
import type { DowntimeConfig } from '@/types/config/downtime';
import { BaseService } from '../BaseService';

export class DowntimeConfigService extends BaseService<DowntimeConfig, DowntimeConfigRepository> {
  constructor () {
    super(new DowntimeConfigRepository());
  }
} 