import type { InventorySpace } from './base';

export interface ActionPoolFilter {
  includedActionTags?: string[];   // Must include ALL these tags
  excludedActionTags?: string[];   // Must NOT include ANY of these tags
}

export interface SkillPoolFilter {
  includedSkillTags?: string[];   // Must include ALL these tags
  excludedSkillTags?: string[];   // Must NOT include ANY of these tags
}

export interface CharacterGainConfig {
  actionIds: string[]; // actions granted directly
  skillIds: string[];  // skills granted directly

  actionGainFromPoolNumber: number; // number of actions player can choose from the pool
  skillGainFromPoolNumber: number;  // number of skills player can choose from the pool

  actionPoolFilter?: ActionPoolFilter;
  skillPoolFilter?: SkillPoolFilter;
}

export interface CharacterConfig {
  startingActions: string[];  // Action IDs granted at creation
  startingItems: string[];    // Item IDs granted at creation
  startProficiencyPoint: number; // Number of points player can assign to proficiencies at creation
  startStatPoint: number;
  startStatLimit: {
    min: number;
    max: number;
  };

  equipmentRules: {
    slotLimits: {
      slotType: string;
      limit: number;
      isSystemSlot: boolean; // true mean this slot is system slot, false mean this slot is user slot
    }[];  // e.g., { "main-hand": 1, "off-hand": 1 }
    defaultInventorySpace: InventorySpace;
  };
  progression: Record<number, CharacterGainConfig>;
  
  shortDowntimeIds: string[]; // DowntimeConfig ids allowed during short downtime
  fullDowntimeIds: string[]; // DowntimeConfig ids allowed during full downtime
  
  defaultTraitSize: number; // Number of traits allowed to choose during character creation
  defaultDamageScales: Record<string, string>; 

  tags?: string[]; // optional groupings like "starter", "template"
}