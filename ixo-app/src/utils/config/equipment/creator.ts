import type { EquipmentConfig, EquipmentSlotConfig } from '@/types/config/equipment';
import { createFixValue } from '../helper';

export interface CreateEquipmentConfigParams {
  weaponSet: number;
  armorSlots?: EquipmentSlotConfig[];
  accessorySlots?: EquipmentSlotConfig[];
}

export function createEquipmentConfig ({
  weaponSet,
  armorSlots = [],
  accessorySlots = []
}: CreateEquipmentConfigParams): EquipmentConfig {
  return {
    weaponSet: createFixValue(weaponSet),
    armorSlots,
    accessorySlots
  };
}