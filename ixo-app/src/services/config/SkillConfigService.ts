import { SkillConfigRepository } from '@/repositories/SkillConfigRepository';
import type { SkillConfig } from '@/types/config/skill';

export class SkillConfigService {
  private readonly repository = new SkillConfigRepository();

  async create (skill: SkillConfig) {
    // Add validation or transformation here if needed
    await this.repository.saveOne(skill);
  }

  async getById (id: string): Promise<SkillConfig | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<SkillConfig[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<SkillConfig>) {
    // Add validation or transformation here if needed
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 