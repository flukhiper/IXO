import { CreatureConfigRepository } from '@/repositories/CreatureConfigRepository';
import type { CreatureConfig } from '@/types/config/creature';
import { BaseConfigService } from './BaseConfigService';

export class CreatureConfigService extends BaseConfigService<CreatureConfig, CreatureConfigRepository> {
  constructor () {
    super(new CreatureConfigRepository());
  }
} 