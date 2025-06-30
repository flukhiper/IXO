import { ProficiencyConfigRepository } from '@/repositories/ProficiencyConfigRepository';
import type { ProficiencyConfig } from '@/types/config/proficiency';

export class ProficiencyConfigService {
  private readonly repository = new ProficiencyConfigRepository();

  async create (proficiency: ProficiencyConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(proficiency);
  }

  async getById (id: string): Promise<ProficiencyConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<ProficiencyConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<ProficiencyConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 