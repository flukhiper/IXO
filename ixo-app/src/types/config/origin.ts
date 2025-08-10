import type { BaseConfig } from './base';
import type { EffectSelectionRule } from './effect';

export interface OriginConfig extends BaseConfig {
  effectSelectionRule?: EffectSelectionRule[];
}