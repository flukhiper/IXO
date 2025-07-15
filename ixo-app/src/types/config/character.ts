import { EQUIPMENT_SLOT_TYPE, INFINITE_VALUE } from '@/constants/config/character';
import type { BaseConfig } from './base';


export type EquipmentSlotType = (typeof EQUIPMENT_SLOT_TYPE)[keyof typeof EQUIPMENT_SLOT_TYPE];
export interface CharacterConfig extends BaseConfig {
  startStatPoint: number; // Number of points player can assign to attributes at creation
  startOriginChoice: string[]; // Origin IDs player can choose from at creation
  startTraitChoice: string[]; // Trait IDs player can choose from at creation
  startNumberOfTraitChoice: number; // Number of traits player can choose from at creation, default is 2, full traits have a value of 2, partial traits have a value of 1
  startClassChoice: string[]; // Class IDs player can choose from at creation
  startProficiencyPoint: number; // Number of points player can assign to proficiencies at creation, default is 4
  startGold: number; // Number of gold player can spend at creation
  startInventorySpace: { rows: number; columns: number }; // Default inventory grid size
  equipmentRules: {
    numberOfWeaponSet: number; // number of weapon sets allowed

    numberOfApparel: number | typeof INFINITE_VALUE; // number of apparel slots allowed, default is 1, like having many layers of clothing
    numberOfAccessory: number | typeof INFINITE_VALUE; // number of accessory slots allowed, default is 4, like having many accessories
    numberOfBackpack: number | typeof INFINITE_VALUE; // number of backpack slots allowed, default is 1, like having many backpacks
    numberOfUtility: number | typeof INFINITE_VALUE; // number of utility slots allowed, default is 0, like having many utility items
  };

  tags?: string[]; // optional groupings like "starter", "template"
}