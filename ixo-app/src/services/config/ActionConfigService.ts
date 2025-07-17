import { ActionConfigRepository } from '@/repositories/config/ActionConfigRepository';
import type { ActionConfig } from '@/types/config/action';
import { BaseService } from '../BaseService';

export class ActionConfigService extends BaseService<ActionConfig, ActionConfigRepository> {
  constructor () {
    super(new ActionConfigRepository());
  }

  async getAllByFilter (filter: Record<string, unknown>) {
    return this.repository.getAllByFilter(filter);
  }
}
