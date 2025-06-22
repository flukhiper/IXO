import { EQUIPMENT_REF_ID } from '@/constants/equipment';
import type { EquipmentConfig } from '@/types/config/equipment';

export class EquipmentConfigManager {
  readonly refId = EQUIPMENT_REF_ID;

  private equipment: EquipmentConfig;

  constructor (equipment: EquipmentConfig) {
    this.equipment = equipment;
  }

  getWeaponSet () {
    return this.equipment.weaponSet;
  }

  getArmorSlots () {
    return this.equipment.armorSlots;
  }

  getAccessorySlots () {
    return this.equipment.accessorySlots;
  }

  getSlotById (id: string) {
    return [ ...this.equipment.armorSlots, ...this.equipment.accessorySlots ].find(slot => slot.id === id);
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}