import { generateId } from '@/utils/config/helper';
import type { SkillConfig, SkillStackConfig, SkillRequirementConfig, SkillEffectConfig } from '@/types/config/skill';

export interface CreateSkillConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  stack?: SkillStackConfig;
  requirement: SkillRequirementConfig[];
  effects: SkillEffectConfig[];
}

export function createSkillConfig (params: CreateSkillConfigParams): SkillConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = [],
    stack,
    requirement,
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
    requirement,
    effects
  };
}
