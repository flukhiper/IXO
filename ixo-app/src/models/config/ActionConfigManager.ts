import { ACTION_REF_ID } from '@/constants/action';

import type { ActionConfig } from '@/types/config/action';
import type { ActionConfigSchema } from '@/types/schema/action';

import { toActionSchema } from '@/utils/schema/action/toTransformer';
import { fromActionSchema } from '@/utils/schema/action/fromTransformer';

import { BaseMapConfigManager } from './BaseConfigManager';

export class ActionConfigManager extends BaseMapConfigManager<ActionConfig, ActionConfigSchema> {
  readonly refId = ACTION_REF_ID;
  
  constructor (initial: ActionConfig[] = []) {
    super(initial);
  }

  toSchema (config: ActionConfig): ActionConfigSchema {
    return toActionSchema(config, { isPublic: this.isPublish });
  }

  fromSchema (schema: ActionConfigSchema): ActionConfig {
    return fromActionSchema(schema);
  }
}