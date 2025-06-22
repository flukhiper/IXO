import { createFixValue, generateId } from '@/utils/config/helper';

import type { StatConfig, StatModifierConfig } from '@/types/config/stat';

export interface CreateStatConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  value: number;
  modifiers: Array<StatModifierConfig>;
}

export function createStatConfig (params: CreateStatConfigParams): StatConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    value,
    modifiers = []
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
    value: createFixValue(value),
    modifiers
  };
}