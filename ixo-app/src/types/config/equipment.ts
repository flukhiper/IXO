import { WEAPON_SLOT_ID } from '@/constants/equipment';

import type { MultiLangText } from '@/types/common';
import type { FixValue, InfiniteValue } from './value';

export type WeaponSlotId = typeof WEAPON_SLOT_ID[keyof typeof WEAPON_SLOT_ID];

type EquipmentLayerValue = FixValue | InfiniteValue;

export interface EquipmentSlotConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags: string[];
  layer: EquipmentLayerValue;
}

export interface EquipmentConfig {
  weaponSet: FixValue;
  armorSlots: EquipmentSlotConfig[];
  accessorySlots: EquipmentSlotConfig[];
}