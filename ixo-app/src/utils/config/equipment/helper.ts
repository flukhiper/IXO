import { VALUE_TYPE } from '@/constants/value';
import type { EquipmentSlotConfig } from '@/types/config/equipment';
import { createFixValue, createInfiniteValue, generateId } from '@/utils/config/helper';

export interface CreateEquipmentSlotConfigParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags: string[];
  layer: number | typeof VALUE_TYPE.INFINITE;
}

export function createEquipmentSlotConfig ({
  name,
  nameTh = '',
  description = '',
  descriptionTh = '',
  tags = [],
  layer
}: CreateEquipmentSlotConfigParams): EquipmentSlotConfig {
  const rawLayer = layer === VALUE_TYPE.INFINITE 
    ? createInfiniteValue()
    : createFixValue(layer);
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
    layer: rawLayer
  };
}