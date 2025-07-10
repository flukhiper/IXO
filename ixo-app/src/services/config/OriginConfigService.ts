import { OriginConfigRepository } from '@/repositories/OriginConfigRepository';
import type { OriginConfig } from '@/types/config/origin';
import { BaseConfigService } from './BaseConfigService';

export class OriginConfigService extends BaseConfigService<OriginConfig, OriginConfigRepository> {
  constructor () {
    super(new OriginConfigRepository());
  }
} 