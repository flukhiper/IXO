import { DamageScaleConfigRepository } from '@/repositories/DamageScaleConfigRepository';
import type { DamageScaleConfig } from '@/types/config/damageScale';

export class DamageScaleConfigService {
  private readonly repository = new DamageScaleConfigRepository();

  async create (damageScale: DamageScaleConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(damageScale);
  }

  async getById (id: string): Promise<DamageScaleConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<DamageScaleConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<DamageScaleConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
}
