import { RealmConfigRepository } from '@/repositories/RealmConfigRepository';
import type { RealmConfig } from '@/types/config/realm';

export class RealmConfigService {
  private readonly repository = new RealmConfigRepository();

  async create (realm: RealmConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(realm);
  }

  async getById (id: string): Promise<RealmConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<RealmConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<RealmConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 