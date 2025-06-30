import { AttributeConfigRepository } from '@/repositories/AttributeConfigRepository';
import type { AttributeConfig } from '@/types/config/attribute';

export class AttributeConfigService {
  private readonly repository = new AttributeConfigRepository();

  async create (attribute: AttributeConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(attribute);
  }

  async getById (id: string): Promise<AttributeConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<AttributeConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<AttributeConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 