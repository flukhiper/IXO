import type { ItemConfig } from '@/types/config/item';
import { mockItems } from '@/mocks/config/item';
import { BaseConfigManager } from './BaseConfigManager';

export class ItemConfigManager extends BaseConfigManager<ItemConfig> {
  constructor () {
    super(mockItems);
  }
} 