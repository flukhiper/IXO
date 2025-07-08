import { TraitConfigRepository } from '@/repositories/TraitConfigRepository';
import type { TraitConfig } from '@/types/config/trait';
import { BaseConfigService } from './BaseConfigService';

export class TraitConfigService extends BaseConfigService<TraitConfig, TraitConfigRepository> {
  constructor () {
    super(new TraitConfigRepository());
  }
} 