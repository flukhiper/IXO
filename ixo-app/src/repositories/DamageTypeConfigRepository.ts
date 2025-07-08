import { BaseRepository } from './BaseRepository';
import { DamageTypeConfigModel } from '@/models/mongoose/DamageTypeConfig';
import type { DamageTypeConfig } from '@/types/config/damageType';

export class DamageTypeConfigRepository extends BaseRepository<DamageTypeConfig> {
  constructor () {
    super(DamageTypeConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
} 
