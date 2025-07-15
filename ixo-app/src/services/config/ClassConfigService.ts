import { ClassConfigRepository } from '@/repositories/config/ClassConfigRepository';
import type { ClassConfig } from '@/types/config/class';
import { BaseService } from '../BaseService';
 
export class ClassConfigService extends BaseService<ClassConfig, ClassConfigRepository> {
  constructor () {
    super(new ClassConfigRepository());
  }

  async getByGameSystemId (gameSystemId: string) {
    return this.repository.getAllByFilter({ gameSystemId });
  }

  async getByIds (ids: string[], gameSystemId?: string) {
    const filter: Record<string, unknown> = { id: { $in: ids } };
    if (gameSystemId) filter.gameSystemId = gameSystemId;
    return this.repository.getAllByFilter(filter);
  }
} 