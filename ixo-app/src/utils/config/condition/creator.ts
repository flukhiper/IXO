import { generateId } from '@/utils/helper';
import type { ConditionConfig, ConditionEffect, TickTrigger, ConditionStackConfig } from '@/types/config/condition';

interface CreateConditionConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  stack?: ConditionStackConfig;
  ticks?: TickTrigger[];
  effects: ConditionEffect[];
}
export function createConditionConfig (params: CreateConditionConfigParams): ConditionConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = [],
    stack,
    ticks = [],
    effects
  } = params;

  return {
    id: generateId(name),
    name: {
      en: name,
      th: nameTh
    },
    description: {
      en: description,
      th: descriptionTh
    },
    tags,
    stack,
    ticks,
    effects
  };
}