import { PathConfigRepository } from '@/repositories/PathConfigRepository';
import type { PathConfig } from '@/types/config/path';

export class PathConfigService {
  private readonly repository = new PathConfigRepository();

  async create (path: PathConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(path);
  }

  async getById (id: string): Promise<PathConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<PathConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<PathConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 