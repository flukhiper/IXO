import type { DamageTypeConfig } from '@/types/config/damageType';
import { mockDamageTypes } from '@/mocks/config/damageType';
import { BaseConfigManager } from './BaseConfigManager';

export class DamageTypeConfigManager extends BaseConfigManager<DamageTypeConfig> {
  constructor () {
    super(mockDamageTypes);
  }
} 