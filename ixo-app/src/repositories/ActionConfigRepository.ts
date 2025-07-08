import { BaseRepository } from './BaseRepository';
import { ActionConfigModel } from '@/models/mongoose/ActionConfig';
import type { ActionConfig } from '@/types/config/action';

export class ActionConfigRepository extends BaseRepository<ActionConfig> {
  constructor () {
    super(ActionConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
} 