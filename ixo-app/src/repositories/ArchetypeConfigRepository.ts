import type { ArchetypeConfig } from '@/types/config/archetype';
import { ArchetypeConfigModel } from '@/models/mongoose/ArchetypeConfig';
import { BaseRepository } from './BaseRepository';
import { normalizeArchetypeConfig, denormalizeArchetypeConfig, NormalizedArchetypeConfig } from '@/utils/config/archetype';

export class ArchetypeConfigRepository extends BaseRepository<ArchetypeConfig> {
  constructor () {
    super(ArchetypeConfigModel);
  }

  async saveOne (item: ArchetypeConfig) {
    const normalized = normalizeArchetypeConfig(item);
    await super.saveOne(normalized as unknown as ArchetypeConfig);
  }

  async updateOne (id: string, update: Partial<ArchetypeConfig>) {
    // No special normalization needed for ArchetypeConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<ArchetypeConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeArchetypeConfig(raw as unknown as NormalizedArchetypeConfig) : null;
  }

  async getAll (): Promise<ArchetypeConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeArchetypeConfig(raw as unknown as NormalizedArchetypeConfig));
  }
  // Add any ArchetypeConfig-specific methods here if needed
} 