import type { TraitConfig } from '@/types/config/trait';
import { mockTraits } from '@/mocks/config/trait';
import { BaseConfigManager } from './BaseConfigManager';

export class TraitConfigManager extends BaseConfigManager<TraitConfig> {
  constructor () {
    super(mockTraits);
  }
} 