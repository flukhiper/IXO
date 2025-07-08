import { BaseRepository } from './BaseRepository';
import { ConditionConfigModel } from '@/models/mongoose/ConditionConfig';
import type { ConditionConfig } from '@/types/config/condition';

export class ConditionConfigRepository extends BaseRepository<ConditionConfig> {
  constructor () {
    super(ConditionConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
