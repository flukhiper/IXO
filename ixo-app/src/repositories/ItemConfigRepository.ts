import { BaseRepository } from './BaseRepository';
import { ItemConfigModel } from '@/models/mongoose/ItemConfig';
import type { ItemConfig } from '@/types/config/item';

export class ItemConfigRepository extends BaseRepository<ItemConfig> {
  constructor () {
    super(ItemConfigModel);
  }
  // Add any ItemConfig-specific methods here if needed
} 