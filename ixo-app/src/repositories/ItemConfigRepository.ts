import { BaseRepository } from './BaseRepository';
import { ItemConfigModel } from '@/models/mongoose/ItemConfig';
import type { ItemConfig } from '@/types/config/item';

export class ItemConfigRepository extends BaseRepository<ItemConfig> {
  constructor () {
    super(ItemConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
