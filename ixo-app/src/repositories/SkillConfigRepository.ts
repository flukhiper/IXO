import { BaseRepository } from './BaseRepository';
import { SkillConfigModel } from '@/models/mongoose/SkillConfig';
import type { SkillConfig } from '@/types/config/skill';
import { normalizeSkillConfig, denormalizeSkillConfig, NormalizedSkillConfig } from '@/utils/config/skill';

export class SkillConfigRepository extends BaseRepository<SkillConfig> {
  constructor () {
    super(SkillConfigModel);
  }

  async saveOne (item: SkillConfig) {
    const normalized = normalizeSkillConfig(item);
    await super.saveOne(normalized as unknown as SkillConfig);
  }

  async updateOne (id: string, update: Partial<SkillConfig>) {
    // No special normalization needed for SkillConfig fields
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<SkillConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeSkillConfig(raw as unknown as NormalizedSkillConfig) : null;
  }

  async getAll (): Promise<SkillConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeSkillConfig(raw as unknown as NormalizedSkillConfig));
  }
  // Add any SkillConfig-specific methods here if needed
} 