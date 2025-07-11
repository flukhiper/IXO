import { AttributeConfigRepository } from '@/repositories/config/AttributeConfigRepository';
import type { AnyAttributeConfig } from '@/types/config/attribute';
import { BaseService } from '../BaseService';

export class AttributeConfigService extends BaseService<AnyAttributeConfig, AttributeConfigRepository> {
  constructor () {
    super(new AttributeConfigRepository());
  }

  async createMany (items: AnyAttributeConfig[]) {
    await super.createMany(items);
  }

  async deleteAll () {
    await super.deleteAll();
  }
} 