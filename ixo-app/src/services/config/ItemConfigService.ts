import { ItemConfigRepository } from '@/repositories/config/ItemConfigRepository';
import type { ItemConfig } from '@/types/config/item';
import { BaseService } from '../BaseService';

export class ItemConfigService extends BaseService<ItemConfig, ItemConfigRepository> {
  constructor () {
    super(new ItemConfigRepository());
  }
} 