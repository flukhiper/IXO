import type { PathConfig } from '@/types/config/path';
import { generateId } from '@/utils/config/helper';

export interface CreatePathConfigFixValueParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
}

export function createPathConfigFixValue (params: CreatePathConfigFixValueParams): PathConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = []
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
    tags
  };
}