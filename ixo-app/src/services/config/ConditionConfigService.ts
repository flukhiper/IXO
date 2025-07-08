import { ConditionConfigRepository } from '@/repositories/ConditionConfigRepository';
import type { ConditionConfig } from '@/types/config/condition';
import { BaseConfigService } from './BaseConfigService';

export class ConditionConfigService extends BaseConfigService<ConditionConfig, ConditionConfigRepository> {
  constructor () {
    super(new ConditionConfigRepository());
  }
} 