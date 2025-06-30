import { BaseRepository } from './BaseRepository';
import { DamageScaleConfigModel } from '@/models/mongoose/DamageScaleConfig';
import type { DamageScaleConfig } from '@/types/config/damageScale';
import { normalizeDamageScaleConfig, denormalizeDamageScaleConfig, NormalizedDamageScaleConfig } from '@/utils/config/damageScale';

export class DamageScaleConfigRepository extends BaseRepository<DamageScaleConfig> {
  constructor () {
    super(DamageScaleConfigModel);
  }

  async saveOne (item: DamageScaleConfig) {
    const normalized = normalizeDamageScaleConfig(item);
    await super.saveOne(normalized as unknown as DamageScaleConfig);
  }

  async updateOne (id: string, update: Partial<DamageScaleConfig>) {
    // No special normalization needed for DamageScaleConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<DamageScaleConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeDamageScaleConfig(raw as unknown as NormalizedDamageScaleConfig) : null;
  }

  async getAll (): Promise<DamageScaleConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeDamageScaleConfig(raw as unknown as NormalizedDamageScaleConfig));
  }
  // Add any DamageScaleConfig-specific methods here if needed
} 