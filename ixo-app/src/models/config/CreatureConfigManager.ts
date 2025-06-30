import type { CreatureConfig } from '@/types/config/creature';
import { mockCreatures } from '@/mocks/config/creature';
import { BaseConfigManager } from './BaseConfigManager';

export class CreatureConfigManager extends BaseConfigManager<CreatureConfig> {
  constructor () {
    super(mockCreatures);
  }
} 