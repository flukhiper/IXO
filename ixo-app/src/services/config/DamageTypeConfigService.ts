import { DamageTypeConfigRepository } from '@/repositories/DamageTypeConfigRepository';
import type { DamageTypeConfig } from '@/types/config/damageType';

export class DamageTypeConfigService {
  private readonly repository = new DamageTypeConfigRepository();

  async create (damageType: DamageTypeConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(damageType);
  }

  async getById (id: string): Promise<DamageTypeConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<DamageTypeConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<DamageTypeConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 