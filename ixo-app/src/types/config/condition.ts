import { CONDITION_STACK_TYPE } from '@/constants/config/condition';
import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { Effect } from './effect';

export interface ConditionDamage {
  type: string; 
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
  isSystem: boolean;
  
  stackId: string;
  stackType: ConditionStackType;
  stackPriority?: number;

  duration?: number;
  damage?: ConditionDamage[];
  restore?: ConditionRestore[];
  effects?: Effect[];
}