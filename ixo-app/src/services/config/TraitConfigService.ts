import { TraitConfigRepository } from '@/repositories/config/TraitConfigRepository';
import type { TraitConfig } from '@/types/config/trait';
import { BaseService } from '../BaseService';

export class TraitConfigService extends BaseService<TraitConfig, TraitConfigRepository> {
  constructor () {
    super(new TraitConfigRepository());
  }
} 