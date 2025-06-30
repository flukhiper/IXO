import { ItemConfigRepository } from '@/repositories/ItemConfigRepository';
import type { ItemConfig } from '@/types/config/item';

export class ItemConfigService {
  private readonly repository = new ItemConfigRepository();

  async create (item: ItemConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(item);
  }

  async getById (id: string): Promise<ItemConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<ItemConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<ItemConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 