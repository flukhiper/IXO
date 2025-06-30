import { BaseRepository } from './BaseRepository';
import { CreatureConfigModel } from '@/models/mongoose/CreatureConfig';
import type { CreatureConfig } from '@/types/config/creature';
import { normalizeCreatureConfig, denormalizeCreatureConfig, NormalizedCreatureConfig } from '@/utils/config/creature';

export class CreatureConfigRepository extends BaseRepository<CreatureConfig> {
  constructor () {
    super(CreatureConfigModel);
  }

  async saveOne (item: CreatureConfig) {
    const normalized = normalizeCreatureConfig(item);
    await super.saveOne(normalized as unknown as CreatureConfig);
  }

  async updateOne (id: string, update: Partial<CreatureConfig>) {
    // No special normalization needed for CreatureConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<CreatureConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeCreatureConfig(raw as unknown as NormalizedCreatureConfig) : null;
  }

  async getAll (): Promise<CreatureConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeCreatureConfig(raw as unknown as NormalizedCreatureConfig));
  }
  // Add any CreatureConfig-specific methods here if needed
} 