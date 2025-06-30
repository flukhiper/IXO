import { BaseRepository } from './BaseRepository';
import { DamageScaleConfigModel } from '@/models/mongoose/DamageScaleConfig';
import type { DamageScaleConfig } from '@/types/config/damageScale';

export class DamageScaleConfigRepository extends BaseRepository<DamageScaleConfig> {
  constructor () {
    super(DamageScaleConfigModel);
  }
  // Add any DamageScaleConfig-specific methods here if needed
} 