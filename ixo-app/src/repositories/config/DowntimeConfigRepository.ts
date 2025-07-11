import { BaseRepository } from '../BaseRepository';
import { DowntimeConfigModel } from '@/models/mongoose/config/DowntimeConfig';
import type { DowntimeConfig } from '@/types/config/downtime';

export class DowntimeConfigRepository extends BaseRepository<DowntimeConfig> {
  constructor () {
    super(DowntimeConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
