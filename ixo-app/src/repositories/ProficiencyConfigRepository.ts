import { BaseRepository } from './BaseRepository';
import { ProficiencyConfigModel } from '@/models/mongoose/ProficiencyConfig';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { normalizeProficiencyConfig, denormalizeProficiencyConfig, NormalizedProficiencyConfig } from '@/utils/config/proficiency';

export class ProficiencyConfigRepository extends BaseRepository<ProficiencyConfig> {
  constructor () {
    super(ProficiencyConfigModel);
  }

  async saveOne (item: ProficiencyConfig) {
    const normalized = normalizeProficiencyConfig(item);
    await super.saveOne(normalized as unknown as ProficiencyConfig);
  }

  async updateOne (id: string, update: Partial<ProficiencyConfig>) {
    // No special normalization needed for ProficiencyConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<ProficiencyConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeProficiencyConfig(raw as unknown as NormalizedProficiencyConfig) : null;
  }

  async getAll (): Promise<ProficiencyConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeProficiencyConfig(raw as unknown as NormalizedProficiencyConfig));
  }
  // Add any ProficiencyConfig-specific methods here if needed
} 