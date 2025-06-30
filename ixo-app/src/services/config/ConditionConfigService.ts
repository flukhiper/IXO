import { ConditionConfigRepository } from '@/repositories/ConditionConfigRepository';
import type { ConditionConfig } from '@/types/config/condition';

export class ConditionConfigService {
  private readonly repository = new ConditionConfigRepository();

  async create (condition: ConditionConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(condition);
  }

  async getById (id: string): Promise<ConditionConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<ConditionConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<ConditionConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 