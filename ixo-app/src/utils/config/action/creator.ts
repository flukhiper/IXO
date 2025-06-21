// src/utils/actionConfig/create.ts
import { generateId } from '@/utils/helper';
import type { ActionConfig, ActionRequirement, ActionType, ActionLevelConfig } from '@/types/config/action';

interface CreateActionConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  type: ActionType;
  level: Record<number, ActionLevelConfig>;
  attributes?: string[];
  requirements?: ActionRequirement[];
}

export function createActionConfig (params: CreateActionConfigParams): ActionConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = [],
    type,
    level,
    attributes = [],
    requirements = []
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
    type,
    level,
    attributes,
    requirements
  };
}
