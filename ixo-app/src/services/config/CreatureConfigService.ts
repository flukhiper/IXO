import { CreatureConfigRepository } from '@/repositories/CreatureConfigRepository';
import type { CreatureConfig } from '@/types/config/creature';

export class CreatureConfigService {
  private readonly repository = new CreatureConfigRepository();

  async create (creature: CreatureConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(creature);
  }

  async getById (id: string): Promise<CreatureConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<CreatureConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<CreatureConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 