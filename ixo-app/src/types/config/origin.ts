import type { BaseConfig } from './base';
import type { Effect } from './effect';

export interface OriginConfig extends BaseConfig {
  effects?: Effect[];
}