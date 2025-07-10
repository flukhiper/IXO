import { EQUIPMENT_SLOT_TYPE, INFINITE_VALUE } from '@/constants/config/character';
import type { BaseConfig, DiceValue, FixedValue } from './base';

export interface CharacterGainConfig {
  statModifier: {
    statId: string;
    value: number;
  }[];
  attributeModifier: {
    attributeId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  }[];

  proficiencyPoint: number; // number of points player can assign to proficiencies at creation

  skillGain: {
    includedSkillTags?: string[];   // Must include ALL these tags
    excludedSkillTags?: string[];   // Must NOT include ANY of these tags
    numberOfSkill: number; // number of skills player can choose from the pool
  }[];
  actionGain: {
    includedActionTags?: string[];   // Must include ALL these tags
    excludedActionTags?: string[];   // Must NOT include ANY of these tags
    numberOfAction: number; // number of actions player can choose from the pool
  }[];
}

export type EquipmentSlotType = (typeof EQUIPMENT_SLOT_TYPE)[keyof typeof EQUIPMENT_SLOT_TYPE];
export interface CharacterConfig extends BaseConfig {
  startStatPoint: number; // Number of points player can assign to attributes at creation
  startOriginChoice: string[]; // Origin IDs player can choose from at creation
  startTraitChoice: string[]; // Trait IDs player can choose from at creation
  startClassChoice: string[]; // Class IDs player can choose from at creation
  startGold: number; // Number of gold player can spend at creation

  equipmentRules: {
    numberOfWeaponSet: number; // number of weapon sets allowed

    numberOfMainHand: number | typeof INFINITE_VALUE; // number of main hand slots allowed
    numberOfOffHand: number | typeof INFINITE_VALUE; // number of off hand slots allowed
    numberOfApparel: number | typeof INFINITE_VALUE; // number of apparel slots allowed
    numberOfAccessory: number | typeof INFINITE_VALUE; // number of accessory slots allowed
    numberOfBackpack: number | typeof INFINITE_VALUE; // number of backpack slots allowed
    numberOfUtility: number | typeof INFINITE_VALUE; // number of utility slots allowed
  };
  progression: Record<number, CharacterGainConfig>;

  shortDowntimeActivitySlots: number; // number of short downtime activity slots
  longDowntimeActivitySlots: number; // number of long downtime activity slots

  tags?: string[]; // optional groupings like "starter", "template"
}