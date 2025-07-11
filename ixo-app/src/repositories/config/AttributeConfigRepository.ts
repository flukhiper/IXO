import { BaseRepository } from '../BaseRepository';
import { AttributeConfigModel } from '@/models/mongoose/config/AttributeConfig';
import type { AnyAttributeConfig } from '@/types/config/attribute';

export class AttributeConfigRepository extends BaseRepository<AnyAttributeConfig> {
  constructor () {
    super(AttributeConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
} 