import type { ArchetypeConfig } from '@/types/config/archetype';
import { mockArchetypes } from '@/mocks/config/archetype';
import { BaseConfigManager } from './BaseConfigManager';

export class ArchetypeConfigManager extends BaseConfigManager<ArchetypeConfig> {
  constructor () {
    super(mockArchetypes);
  }
} 