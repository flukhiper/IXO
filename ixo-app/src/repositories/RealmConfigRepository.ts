import { BaseRepository } from './BaseRepository';
import { RealmConfigModel } from '@/models/mongoose/RealmConfig';
import type { RealmConfig } from '@/types/config/realm';
import { normalizeRealmConfig, denormalizeRealmConfig, NormalizedRealmConfig } from '@/utils/config/realm';

export class RealmConfigRepository extends BaseRepository<RealmConfig> {
  constructor () {
    super(RealmConfigModel);
  }

  async saveOne (item: RealmConfig) {
    const normalized = normalizeRealmConfig(item);
    await super.saveOne(normalized as unknown as RealmConfig);
  }

  async updateOne (id: string, update: Partial<RealmConfig>) {
    // No special normalization needed for RealmConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<RealmConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeRealmConfig(raw as unknown as NormalizedRealmConfig) : null;
  }

  async getAll (): Promise<RealmConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeRealmConfig(raw as unknown as NormalizedRealmConfig));
  }
  // Add any RealmConfig-specific methods here if needed
} 