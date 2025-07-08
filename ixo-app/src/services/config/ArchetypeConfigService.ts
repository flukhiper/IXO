import { ArchetypeConfigRepository } from '@/repositories/ArchetypeConfigRepository';
import type { ArchetypeConfig } from '@/types/config/origin';
import { BaseConfigService } from './BaseConfigService';

export class ArchetypeConfigService extends BaseConfigService<ArchetypeConfig, ArchetypeConfigRepository> {
  constructor () {
    super(new ArchetypeConfigRepository());
  }
} 