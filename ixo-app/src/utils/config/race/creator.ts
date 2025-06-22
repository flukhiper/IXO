import { generateId } from '@/utils/config/helper';
import type { RaceConfig, RaceGainConfig } from '@/types/config/race';

export interface CreateRaceConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  gains: RaceGainConfig[];
}

export function createRaceConfig (params: CreateRaceConfigParams): RaceConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = [],
    gains
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
    gains
  };
}
