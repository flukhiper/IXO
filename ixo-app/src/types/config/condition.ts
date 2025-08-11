import { CONDITION_STACK_TYPE } from '@/constants/config/condition';
import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { Effect } from './effect';

export interface ConditionDamage {
  damageTypeId: string; 
  value: ConstantValue | DiceValue; 
  modifierFormula?: string;
}

export interface ConditionRestore {
  attributeId: string;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}

export type ConditionStackType = typeof CONDITION_STACK_TYPE[keyof typeof CONDITION_STACK_TYPE];
export interface ConditionConfig extends BaseConfig {
  stack: {
    type: ConditionStackType;
    id: string;
    priority?: number;
  };

  duration?: number;
  damage?: ConditionDamage[];
  restore?: ConditionRestore[];
  effects?: Effect[];
}