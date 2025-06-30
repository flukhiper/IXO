import type { ActionConfig } from '@/types/config/action';
import { mockActions } from '@/mocks/config/action';
import { BaseConfigManager } from './BaseConfigManager';

export class ActionConfigManager extends BaseConfigManager<ActionConfig> {
  constructor () {
    super(mockActions);
  }
} 