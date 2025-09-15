import { FactionConfigRepository } from '@/repositories/config/FactionConfigRepository';
import { BaseService } from '@/services/BaseService';
import type { FactionConfig } from '@/types/config/faction';

export class FactionConfigService extends BaseService<FactionConfig, FactionConfigRepository> {
  constructor () {
    super(new FactionConfigRepository());
  }
} 