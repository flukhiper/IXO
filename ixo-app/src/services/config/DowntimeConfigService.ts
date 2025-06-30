import { DowntimeConfigRepository } from '@/repositories/DowntimeConfigRepository';
import type { DowntimeConfig } from '@/types/config/downtime';

export class DowntimeConfigService {
  private readonly repository = new DowntimeConfigRepository();

  async create (downtime: DowntimeConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(downtime);
  }

  async getById (id: string): Promise<DowntimeConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<DowntimeConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<DowntimeConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 