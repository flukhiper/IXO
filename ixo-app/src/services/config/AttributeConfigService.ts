import { AttributeConfigRepository } from '@/repositories/AttributeConfigRepository';
import type { AnyAttributeConfig } from '@/types/config/attribute';
import { BaseConfigService } from './BaseConfigService';

export class AttributeConfigService extends BaseConfigService<AnyAttributeConfig, AttributeConfigRepository> {
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