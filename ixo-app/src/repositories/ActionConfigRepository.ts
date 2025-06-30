import type { ActionConfig } from '@/types/config/action';
import { ActionConfigModel } from '@/models/mongoose/ActionConfig';
import { BaseRepository } from './BaseRepository';
import { normalizeActionConfig, denormalizeActionConfig, NormalizedActionConfig } from '@/utils/config/action';

export class ActionConfigRepository extends BaseRepository<ActionConfig> {
  constructor () {
    super(ActionConfigModel);
  }

  async saveOne (item: ActionConfig) {
    const normalized = normalizeActionConfig(item);
    await super.saveOne(normalized as unknown as ActionConfig);
  }

  async updateOne (id: string, update: Partial<ActionConfig>) {
    // No special normalization needed for ActionConfig fields in update
    await super.updateOne(id, update);
  }

  async getById (id: string): Promise<ActionConfig | null> {
    const raw = await super.getById(id);
    return raw ? denormalizeActionConfig(raw as unknown as NormalizedActionConfig) : null;
  }

  async getAll (): Promise<ActionConfig[]> {
    const raws = await super.getAll();
    return raws.map(raw => denormalizeActionConfig(raw as unknown as NormalizedActionConfig));
  }
  // Add any ActionConfig-specific methods here if needed
} 