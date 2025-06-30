import { BaseRepository } from './BaseRepository';
import { StatConfigModel } from '@/models/mongoose/StatConfig';
import type { StatConfig } from '@/types/config/stat';
import { normalizeStatConfig, denormalizeStatConfig, NormalizedStatConfig } from '@/utils/config/stat';

export class StatConfigRepository extends BaseRepository<StatConfig> {
  constructor () {
    super(StatConfigModel);
  }

  async saveOne (item: StatConfig) {
    const normalized = normalizeStatConfig(item);
    await super.saveOne(normalized as unknown as StatConfig);
  }

  async updateOne (id: string, update: Partial<StatConfig>) {
    // No special normalization needed for StatConfig fields
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<StatConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeStatConfig(raw as unknown as NormalizedStatConfig) : null;
  }

  async getAll (): Promise<StatConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeStatConfig(raw as unknown as NormalizedStatConfig));
  }

  // Add any StatConfig-specific methods here if needed
} 