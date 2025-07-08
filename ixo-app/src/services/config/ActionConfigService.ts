import { ActionConfigRepository } from '@/repositories/ActionConfigRepository';
import type { ActionConfig } from '@/types/config/action';
import { BaseConfigService } from './BaseConfigService';

export class ActionConfigService extends BaseConfigService<ActionConfig, ActionConfigRepository> {
  constructor () {
    super(new ActionConfigRepository());
  }
}
