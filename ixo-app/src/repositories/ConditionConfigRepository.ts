import type { ConditionConfig } from '@/types/config/condition';
import { ConditionConfigModel } from '@/models/mongoose/ConditionConfig';
import { BaseRepository } from './BaseRepository';
import { normalizeConditionConfig, denormalizeConditionConfig, NormalizedConditionConfig } from '@/utils/config/condition';

export class ConditionConfigRepository extends BaseRepository<ConditionConfig> {
  constructor () {
    super(ConditionConfigModel);
  }

  async saveOne (item: ConditionConfig) {
    const normalized = normalizeConditionConfig(item);
    await super.saveOne(normalized as unknown as ConditionConfig);
  }

  async updateOne (id: string, update: Partial<ConditionConfig>) {
    // No special normalization needed for ConditionConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<ConditionConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeConditionConfig(raw as unknown as NormalizedConditionConfig) : null;
  }

  async getAll (): Promise<ConditionConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeConditionConfig(raw as unknown as NormalizedConditionConfig));
  }
  // Add any ConditionConfig-specific methods here if needed
} 