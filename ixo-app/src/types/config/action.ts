import { ACTION_TYPE } from '@/constants/config/action';
import type { BaseConfig, EffectConfig } from './base';

export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];  
export interface ActionConfig extends BaseConfig {
  type: ActionType;
  icon?: string;
  tags?: string[];
  
  levelConfigs: Record<number, EffectConfig[]>; // each level defines cost, hit, damage, etc.
}