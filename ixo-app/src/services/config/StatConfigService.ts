import { StatConfigRepository } from '@/repositories/StatConfigRepository';
import type { StatConfig } from '@/types/config/stat';
import { BaseConfigService } from './BaseConfigService';

export class StatConfigService extends BaseConfigService<StatConfig, StatConfigRepository> {
  constructor () {
    super(new StatConfigRepository());
  }
} 