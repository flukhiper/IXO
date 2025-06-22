import type { DamageScaleConfig, DamageTypeConfig } from '@/types/config/damage';
import { createFixValue, generateId } from '@/utils/config/helper';

interface CreateDamageScaleConfigParams {
  name: string;
  nameTh: string;
  value: number;
  description?: string;
  descriptionTh?: string;
}
export function createDamageScaleConfig (params: CreateDamageScaleConfigParams): DamageScaleConfig {
  const { name, nameTh = '', value, description = '', descriptionTh = '' } = params;
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
    value: createFixValue(value)
  };
}

interface CreateDamageTypeConfigParams {
  name: string;
  nameTh: string;
  description?: string;
  descriptionTh?: string;
}
export function createDamageTypeConfig (params: CreateDamageTypeConfigParams): DamageTypeConfig {
  const { name, nameTh = '', description = '', descriptionTh = '' } = params;
  return {
    id: generateId(name),
    name: {
      en: name,
      th: nameTh
    },
    description: {
      en: description,
      th: descriptionTh
    }
  };
}
