import type { DamageScaleConfig } from '@/types/config/damageScale';
import { mockDamageScales } from '@/mocks/config/damageScale';
import { BaseConfigManager } from './BaseConfigManager';

export class DamageScaleConfigManager extends BaseConfigManager<DamageScaleConfig> {
  constructor () {
    super(mockDamageScales);
  }
}
