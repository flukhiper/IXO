import { DamageScaleConfigRepository } from '@/repositories/DamageScaleConfigRepository';
import type { DamageScaleConfig } from '@/types/config/damageScale';
import { BaseConfigService } from './BaseConfigService';

export class DamageScaleConfigService extends BaseConfigService<DamageScaleConfig, DamageScaleConfigRepository> {
  constructor () {
    super(new DamageScaleConfigRepository());
  }
}
