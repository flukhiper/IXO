import { BaseRepository } from './BaseRepository';
import { DowntimeConfigModel } from '@/models/mongoose/DowntimeConfig';
import type { DowntimeConfig } from '@/types/config/downtime';

export class DowntimeConfigRepository extends BaseRepository<DowntimeConfig> {
  constructor () {
    super(DowntimeConfigModel);
  }
  // Add any DowntimeConfig-specific methods here if needed
} 