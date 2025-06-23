import { generateId } from '@/utils/config/helper';
import type { ActionConfig, ActionRequirementConfig, ActionType, ActionLevelConfig } from '@/types/config/action';
import type { ReferenceValue } from '@/types/config/value';

export interface CreateActionConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  type: ActionType;
  level: Record<number, ActionLevelConfig>;
  references?: ReferenceValue[];
  requirements?: ActionRequirementConfig[];
}

export function createActionConfig ({
  name,
  nameTh = '',
  description = '',
  descriptionTh = '',
  tags = [],
  type,
  level,
  references = [],
  requirements = []
}: CreateActionConfigParams): ActionConfig {

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
    references,
    requirements
  };
}