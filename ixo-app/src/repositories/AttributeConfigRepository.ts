import type { AttributeConfig } from '@/types/config/attribute';
import { AttributeConfigModel } from '@/models/mongoose/AttributeConfig';
import { BaseRepository } from './BaseRepository';
import { normalizeAttributeConfig, denormalizeAttributeConfig, NormalizedAttributeConfig } from '@/utils/config/attribute';
import { normalizeValue } from '@/utils/config/helper';

export class AttributeConfigRepository extends BaseRepository<AttributeConfig> {
  constructor () {
    super(AttributeConfigModel);
  }

  async saveOne (item: AttributeConfig) {
    const normalized = normalizeAttributeConfig(item);
    await super.saveOne(normalized as unknown as AttributeConfig);
  }

  async updateOne (id: string, update: Partial<AttributeConfig>) {
    const normalizedUpdate: Partial<NormalizedAttributeConfig> = {};
  
    // Copy over all fields except baseValue/restoreValue
    for (const key in update) {
      if (key !== 'baseValue' && key !== 'restoreValue' && Object.prototype.hasOwnProperty.call(update, key)) {
        // @ts-expect-error: dynamic assignment
        normalizedUpdate[key] = update[key];
      }
    }
  
    if (update.baseValue !== undefined) {
      normalizedUpdate.baseValue = normalizeValue(update.baseValue);
    }
    if (update.restoreValue !== undefined) {
      normalizedUpdate.restoreValue = normalizeValue(update.restoreValue);
    }
  
    await super.updateOne(id, normalizedUpdate as Partial<AttributeConfig>);
  }

  async getById (id: string): Promise<AttributeConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeAttributeConfig(raw as unknown as NormalizedAttributeConfig) : null;
  }

  async getAll (): Promise<AttributeConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeAttributeConfig(raw as unknown as NormalizedAttributeConfig));
  }
} 