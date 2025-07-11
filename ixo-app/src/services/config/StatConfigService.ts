import { StatConfigRepository } from '@/repositories/config/StatConfigRepository';
import type { StatConfig } from '@/types/config/stat';
import { BaseService } from '../BaseService';

export class StatConfigService extends BaseService<StatConfig, StatConfigRepository> {
  constructor () {
    super(new StatConfigRepository());
  }
} 