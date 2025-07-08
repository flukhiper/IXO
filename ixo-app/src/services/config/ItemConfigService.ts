import { ItemConfigRepository } from '@/repositories/ItemConfigRepository';
import type { ItemConfig } from '@/types/config/item';
import { BaseConfigService } from './BaseConfigService';

export class ItemConfigService extends BaseConfigService<ItemConfig, ItemConfigRepository> {
  constructor () {
    super(new ItemConfigRepository());
  }
} 