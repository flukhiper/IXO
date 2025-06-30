import { BaseRepository } from './BaseRepository';
import { DamageTypeConfigModel } from '@/models/mongoose/DamageTypeConfig';
import type { DamageTypeConfig } from '@/types/config/damageType';
import { normalizeDamageTypeConfig, denormalizeDamageTypeConfig, NormalizedDamageTypeConfig } from '@/utils/config/damageType';

export class DamageTypeConfigRepository extends BaseRepository<DamageTypeConfig> {
  constructor () {
    super(DamageTypeConfigModel);
  }

  async saveOne (item: DamageTypeConfig) {
    const normalized = normalizeDamageTypeConfig(item);
    await super.saveOne(normalized as unknown as DamageTypeConfig);
  }

  async updateOne (id: string, update: Partial<DamageTypeConfig>) {
    // No special normalization needed for DamageTypeConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<DamageTypeConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeDamageTypeConfig(raw as unknown as NormalizedDamageTypeConfig) : null;
  }

  async getAll (): Promise<DamageTypeConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeDamageTypeConfig(raw as unknown as NormalizedDamageTypeConfig));
  }
  // Add any DamageTypeConfig-specific methods here if needed
} 
