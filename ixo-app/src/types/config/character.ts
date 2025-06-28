import type { InventorySpace } from './common';

export interface ActionPoolFilter {
  includedActionTags?: string[];   // Must include ALL these tags
  excludedActionTags?: string[];   // Must NOT include ANY of these tags
}

export interface SkillPoolFilter {
  includedSkillTags?: string[];   // Must include ALL these tags
  excludedSkillTags?: string[];   // Must NOT include ANY of these tags
}

export interface CharacterGainConfig {
  actionIds?: string[]; // actions granted directly
  skillIds?: string[];  // skills granted directly

  actionGainFromPool?: number; // number of actions player can choose from the pool
  skillGainFromPool?: number;  // number of skills player can choose from the pool

  actionPoolFilter?: ActionPoolFilter;
  skillPoolFilter?: SkillPoolFilter;
}

export interface CharacterProgressionConfig {
  gainPerLevel: Record<number, CharacterGainConfig>; // e.g., { 2: {...}, 3: {...} }
}

export interface CharacterEquipmentConfig {
  slotLimits?: Record<string, number>;  // e.g., { "main-hand": 1, "off-hand": 1 }
  defaultInventorySpace: InventorySpace;
}

export interface CharacterConfig {
  startingActions?: string[];  // Action IDs granted at creation
  startingItems?: string[];    // Item IDs granted at creation
  startProficiencyPoint?: number; // Number of points player can assign to proficiencies at creation

  equipmentRules?: CharacterEquipmentConfig;
  progression?: CharacterProgressionConfig;
  
  halfDowntimeIds?: string[]; // DowntimeConfig ids allowed during half downtime
  fullDowntimeIds?: string[]; // DowntimeConfig ids allowed during full downtime
  
  defaultTraitSize?: number; // Number of traits allowed to choose during character creation
  defaultDamageScales?: Record<string, string>; 

  tags?: string[]; // optional groupings like "starter", "template"
}