import { EQUIPMENT_SLOT_TYPE, INFINITE_VALUE } from '@/constants/config/character';
import type { BaseConfig, DiceValue, FixedValue } from './base';
import { SkillType } from './skill';

export interface CharacterGainConfig {
  statModifier?: {
    statId: string;
    value: number;
  }[];
  attributeModifier?: {
    attributeId: string;
    baseValue: FixedValue | DiceValue;
    formula?: string;
  }[];

  proficiencyPoint?: number; // number of points player can assign to proficiencies at creation

  skillGain?: {
    tier?: number; // must be 1, 2, or 3
    skillType?: SkillType; // must be 'class', 'general', or 'role'
    classId?: string; // must be a valid class ID
    roleId?: string; // must be a valid role ID
    includedSkillTags?: string[];   // Must include ALL these tags
    excludedSkillTags?: string[];   // Must NOT include ANY of these tags
    numberOfSkill: number; // number of skills player can choose from the pool
  }[];
  actionGain?: {
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
  startNumberOfTraitChoice: number; // Number of traits player can choose from at creation, default is 2, full traits have a value of 2, partial traits have a value of 1
  startClassChoice: string[]; // Class IDs player can choose from at creation
  startProficiencyPoint: number; // Number of points player can assign to proficiencies at creation, default is 4
  startGold: number; // Number of gold player can spend at creation

  equipmentRules: {
    numberOfWeaponSet: number; // number of weapon sets allowed

    numberOfApparel: number | typeof INFINITE_VALUE; // number of apparel slots allowed, default is 1, like having many layers of clothing
    numberOfAccessory: number | typeof INFINITE_VALUE; // number of accessory slots allowed, default is 4, like having many accessories
    numberOfBackpack: number | typeof INFINITE_VALUE; // number of backpack slots allowed, default is 1, like having many backpacks
    numberOfUtility: number | typeof INFINITE_VALUE; // number of utility slots allowed, default is 0, like having many utility items
  };
  classProgression: Record<number, CharacterGainConfig>;

  tags?: string[]; // optional groupings like "starter", "template"
}