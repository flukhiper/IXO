import { BaseRepository } from './BaseRepository';
import { DowntimeConfigModel } from '@/models/mongoose/DowntimeConfig';
import type { DowntimeConfig } from '@/types/config/downtime';
import { normalizeDowntimeConfig, denormalizeDowntimeConfig, NormalizedDowntimeConfig } from '@/utils/config/downtime';

export class DowntimeConfigRepository extends BaseRepository<DowntimeConfig> {
  constructor () {
    super(DowntimeConfigModel);
  }

  async saveOne (item: DowntimeConfig) {
    const normalized = normalizeDowntimeConfig(item);
    await super.saveOne(normalized as unknown as DowntimeConfig);
  }

  async updateOne (id: string, update: Partial<DowntimeConfig>) {
    // No special normalization needed for DowntimeConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<DowntimeConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeDowntimeConfig(raw as unknown as NormalizedDowntimeConfig) : null;
  }

  async getAll (): Promise<DowntimeConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeDowntimeConfig(raw as unknown as NormalizedDowntimeConfig));
  }
  // Add any DowntimeConfig-specific methods here if needed
} 