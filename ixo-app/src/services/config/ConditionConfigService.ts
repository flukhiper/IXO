import { ConditionConfigRepository } from '@/repositories/config/ConditionConfigRepository';
import type { ConditionConfig } from '@/types/config/condition';
import { BaseService } from '../BaseService';

export class ConditionConfigService extends BaseService<ConditionConfig, ConditionConfigRepository> {
  constructor () {
    super(new ConditionConfigRepository());
  }
} 