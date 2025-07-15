import { TraitConfigRepository } from '@/repositories/config/TraitConfigRepository';
import type { TraitConfig } from '@/types/config/trait';
import { BaseService } from '../BaseService';

export class TraitConfigService extends BaseService<TraitConfig, TraitConfigRepository> {
  constructor () {
    super(new TraitConfigRepository());
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