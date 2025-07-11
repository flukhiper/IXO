import { DamageTypeConfigRepository } from '@/repositories/config/DamageTypeConfigRepository';
import type { DamageTypeConfig } from '@/types/config/damageType';
import { BaseService } from '../BaseService';

export class DamageTypeConfigService extends BaseService<DamageTypeConfig, DamageTypeConfigRepository> {
  constructor () {
    super(new DamageTypeConfigRepository());
  }
} 