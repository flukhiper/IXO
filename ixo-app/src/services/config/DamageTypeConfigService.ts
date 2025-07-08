import { DamageTypeConfigRepository } from '@/repositories/DamageTypeConfigRepository';
import type { DamageTypeConfig } from '@/types/config/damageType';
import { BaseConfigService } from './BaseConfigService';

export class DamageTypeConfigService extends BaseConfigService<DamageTypeConfig, DamageTypeConfigRepository> {
  constructor () {
    super(new DamageTypeConfigRepository());
  }
} 