import { ArchetypeConfigRepository } from '@/repositories/ArchetypeConfigRepository';
import type { ArchetypeConfig } from '@/types/config/archetype';

export class ArchetypeConfigService {
  private readonly repository = new ArchetypeConfigRepository();

  async create (archetype: ArchetypeConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(archetype);
  }

  async getById (id: string): Promise<ArchetypeConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<ArchetypeConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<ArchetypeConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 