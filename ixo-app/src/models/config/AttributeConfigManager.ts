import type { AttributeConfig } from '@/types/config/attribute';
import { mockAttributes } from '@/mocks/config/attribute';
import { BaseConfigManager } from './BaseConfigManager';

export class AttributeConfigManager extends BaseConfigManager<AttributeConfig> {
  constructor () {
    super(mockAttributes);
  }
} 