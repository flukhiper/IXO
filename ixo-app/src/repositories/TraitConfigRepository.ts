import { BaseRepository } from './BaseRepository';
import { TraitConfigModel } from '@/models/mongoose/TraitConfig';
import type { TraitConfig } from '@/types/config/trait';
import { normalizeTraitConfig, denormalizeTraitConfig, NormalizedTraitConfig } from '@/utils/config/trait';

export class TraitConfigRepository extends BaseRepository<TraitConfig> {
  constructor () {
    super(TraitConfigModel);
  }

  async saveOne (item: TraitConfig) {
    const normalized = normalizeTraitConfig(item);
    await super.saveOne(normalized as unknown as TraitConfig);
  }

  async updateOne (id: string, update: Partial<TraitConfig>) {
    // No special normalization needed for TraitConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<TraitConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeTraitConfig(raw as unknown as NormalizedTraitConfig) : null;
  }

  async getAll (): Promise<TraitConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeTraitConfig(raw as unknown as NormalizedTraitConfig));
  }
  // Add any TraitConfig-specific methods here if needed
} 
