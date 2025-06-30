import type { ConditionConfig } from '@/types/config/condition';
import { mockConditions } from '@/mocks/config/condition';
import { BaseConfigManager } from './BaseConfigManager';

export class ConditionConfigManager extends BaseConfigManager<ConditionConfig> {
  constructor () {
    super(mockConditions);
  }
} 