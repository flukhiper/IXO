import { BaseRepository } from './BaseRepository';
import { PathConfigModel } from '@/models/mongoose/PathConfig';
import type { PathConfig } from '@/types/config/path';
import { normalizePathConfig, denormalizePathConfig, NormalizedPathConfig } from '@/utils/config/path';

export class PathConfigRepository extends BaseRepository<PathConfig> {
  constructor () {
    super(PathConfigModel);
  }

  async saveOne (item: PathConfig) {
    const normalized = normalizePathConfig(item);
    await super.saveOne(normalized as unknown as PathConfig);
  }

  async updateOne (id: string, update: Partial<PathConfig>) {
    // No special normalization needed for PathConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<PathConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizePathConfig(raw as unknown as NormalizedPathConfig) : null;
  }

  async getAll (): Promise<PathConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizePathConfig(raw as unknown as NormalizedPathConfig));
  }
  // Add any PathConfig-specific methods here if needed
} 