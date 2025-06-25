import { VALUE_TYPE } from '@/constants/value';
import type { MultiLangText } from '@/types/common';

export interface EquipmentSlotSchema {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags: string[];
  layer: number | typeof VALUE_TYPE.INFINITE;
}

export interface EquipmentConfigSchema {
  weaponSet: number;
  armorSlots: EquipmentSlotSchema[];
  accessorySlots: EquipmentSlotSchema[];
}
