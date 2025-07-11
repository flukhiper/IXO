import { DamageScaleConfigRepository } from '@/repositories/config/DamageScaleConfigRepository';
import type { DamageScaleConfig } from '@/types/config/damageScale';
import { BaseService } from '../BaseService';

export class DamageScaleConfigService extends BaseService<DamageScaleConfig, DamageScaleConfigRepository> {
  constructor () {
    super(new DamageScaleConfigRepository());
  }
}
