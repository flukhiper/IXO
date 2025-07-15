import { OriginConfigRepository } from '@/repositories/config/OriginConfigRepository';
import { BaseService } from '@/services/BaseService';
import type { OriginConfig } from '@/types/config/origin';

export class OriginConfigService extends BaseService<OriginConfig, OriginConfigRepository> {
  constructor () {
    super(new OriginConfigRepository());
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