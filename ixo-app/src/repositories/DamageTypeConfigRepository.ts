import { BaseRepository } from './BaseRepository';
import { DamageTypeConfigModel } from '@/models/mongoose/DamageTypeConfig';
import type { DamageTypeConfig } from '@/types/config/damageType';

export class DamageTypeConfigRepository extends BaseRepository<DamageTypeConfig> {
  constructor () {
    super(DamageTypeConfigModel);
  }
  // Add any DamageTypeConfig-specific methods here if needed
} 