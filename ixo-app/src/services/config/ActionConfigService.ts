import { ActionConfigRepository } from '@/repositories/ActionConfigRepository';
import type { ActionConfig } from '@/types/config/action';

export class ActionConfigService {
  private readonly repository = new ActionConfigRepository();

  async create (action: ActionConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(action);
  }

  async getById (id: string): Promise<ActionConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<ActionConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<ActionConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
}
