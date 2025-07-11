import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { isAttributeTypeUnique } from '@/utils/config/attribute/typeGuard';

import type { AttributeConfig, AttributeType } from '@/types/config/attribute';

export class AttributeConfigManager {
  readonly refId = ATTRIBUTE_REF_ID;

  private map = new Map<string, AttributeConfig>();

  constructor (initial: AttributeConfig[] = []) {
    for (const config of initial) {
      this.add(config);
    }
  }

  add (config: AttributeConfig) {
    if (this.map.has(config.id)) {
      throw new Error(`Attribute "${config.id}" already exists.`);
    }

    if (isAttributeTypeUnique(config.attrType) && this.getByType(config.attrType)) {
      throw new Error(`Unique attribute type "${config.attrType}" already exists.`);
    }

    this.map.set(config.id, config);
  }

  get (id: string) {
    return this.map.get(id);
  }

  getByType (attrType: AttributeType): AttributeConfig | undefined {
    return Array.from(this.map.values()).find(attr => attr.attrType === attrType);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  list (): AttributeConfig[] {
    return Array.from(this.map.values());
  }

  listIds (): string[] {
    return Array.from(this.map.keys());
  }

  delete (id: string): boolean {
    return this.map.delete(id);
  }

  validate (): void {
    const uniqueTypes = new Set<AttributeType>();
    for (const config of this.map.values()) {
      if (isAttributeTypeUnique(config.attrType)) {
        if (uniqueTypes.has(config.attrType)) {
          throw new Error(`Duplicate unique attribute type: ${config.attrType}`);
        }
        uniqueTypes.add(config.attrType);
      }
    }
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
