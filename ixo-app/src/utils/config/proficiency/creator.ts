import { generateId } from '@/utils/config/helper';
import type { ProficiencyConfig, ProficiencyLevelConfig } from '@/types/config/proficiency';

export interface CreateProficiencyConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  level: Record<number, ProficiencyLevelConfig>;
}

export function createProficiencyConfig (params: CreateProficiencyConfigParams): ProficiencyConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = [],
    level
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
    level
  };
}
