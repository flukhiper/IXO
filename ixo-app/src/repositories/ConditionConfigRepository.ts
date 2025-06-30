import type { ConditionConfig } from '@/types/config/condition';
import { ConditionConfigModel } from '@/models/mongoose/ConditionConfig';
import { BaseRepository } from './BaseRepository';

export class ConditionConfigRepository extends BaseRepository<ConditionConfig> {
  constructor () {
    super(ConditionConfigModel);
  }
  // Add any ConditionConfig-specific methods here if needed
} 