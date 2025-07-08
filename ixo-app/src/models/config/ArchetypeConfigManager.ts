import type { ArchetypeConfig } from '@/types/config/origin';
import { mockArchetypes } from '@/mocks/config/archetype';
import { BaseConfigManager } from './BaseConfigManager';

export class ArchetypeConfigManager extends BaseConfigManager<ArchetypeConfig> {
  constructor () {
    super(mockArchetypes);
  }
} 