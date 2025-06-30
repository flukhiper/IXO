import { BaseRepository } from './BaseRepository';
import { ItemConfigModel } from '@/models/mongoose/ItemConfig';
import type { ItemConfig } from '@/types/config/item';
import { normalizeItemConfig, denormalizeItemConfig, NormalizedItemConfig } from '@/utils/config/item';

export class ItemConfigRepository extends BaseRepository<ItemConfig> {
  constructor () {
    super(ItemConfigModel);
  }

  async saveOne (item: ItemConfig) {
    const normalized = normalizeItemConfig(item);
    await super.saveOne(normalized as unknown as ItemConfig);
  }

  async updateOne (id: string, update: Partial<ItemConfig>) {
    // No special normalization needed for ItemConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<ItemConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeItemConfig(raw as unknown as NormalizedItemConfig) : null;
  }

  async getAll (): Promise<ItemConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeItemConfig(raw as unknown as NormalizedItemConfig));
  }
  // Add any ItemConfig-specific methods here if needed
} 