import type { ActionConfig } from '@/types/config/action';
import { ActionConfigModel } from '@/models/mongoose/ActionConfig';
import { BaseRepository } from './BaseRepository';

export class ActionConfigRepository extends BaseRepository<ActionConfig> {
  constructor () {
    super(ActionConfigModel);
  }
  // Add any ActionConfig-specific methods here if needed
} 