// utils/conditionConfig/create.ts
import { generateId } from '@/utils/helper';
import type { ConditionConfig, ConditionEffect, TickTrigger, ConditionStackConfig } from '@/types/condition';

export interface CreateConditionConfigParams {
  name: string;
  description?: string;
  tags?: string[];
  stack?: ConditionStackConfig;
  ticks?: TickTrigger[];
  effects: ConditionEffect[];
}

export function createConditionConfig (params: CreateConditionConfigParams): ConditionConfig {
  const {
    name,
    description,
    tags = [],
    stack,
    ticks = [],
    effects
  } = params;

  return {
    id: generateId(name),
    name,
    description,
    tags,
    stack,
    ticks,
    effects
  };
}