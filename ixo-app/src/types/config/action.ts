import { ACTION_CAST_TYPE } from '@/constants/config/action';
import { BaseConfig } from './common';

export interface ActionCost {
  attributeId: string;
  value: number;
}

export type ActionCastType = typeof ACTION_CAST_TYPE[keyof typeof ACTION_CAST_TYPE];

export interface ActionConfig extends BaseConfig {
  cost: ActionCost[];
  castType: ActionCastType;
}