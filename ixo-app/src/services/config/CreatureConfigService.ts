import { CreatureConfigRepository } from '@/repositories/config/CreatureConfigRepository';
import type { CreatureConfig } from '@/types/config/creature';
import { BaseService } from '../BaseService';

export class CreatureConfigService extends BaseService<CreatureConfig, CreatureConfigRepository> {
  constructor () {
    super(new CreatureConfigRepository());
  }
} 