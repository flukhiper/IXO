import { VALUE_TYPE } from '@/constants/value';
import type { DamageScaleConfig, DamageTypeConfig } from '@/types/config/damage';
import { generateId } from '@/utils/helper';

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
    value: {
      type: VALUE_TYPE.FIX,
      value
    }
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
