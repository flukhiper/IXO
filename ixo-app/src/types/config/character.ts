import type { BaseConfig } from './base';
import type { StatThresholdRequirement } from './common';

export interface ActionPoolFilter {
  requiredActionTags?: string[]; // e.g., ["support", "fire"]
  requiredLevel?: number;        // only include actions with level ≤ this
  requiredStatThresholds?: StatThresholdRequirement[];
}

export interface SkillPoolFilter {
  requiredSkillTags?: string[];  // if you later add tags to skills
  requiredLevel?: number;
  requiredStatThresholds?: StatThresholdRequirement[];
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
  inventorySlot: {
    rows: number;      // e.g., 6
    columns: number;   // e.g., 12
  };
}

export interface CharacterConfig extends BaseConfig {
  startingActions?: string[];  // Action IDs granted at creation
  startingItems?: string[];    // Item IDs granted at creation

  equipmentRules?: CharacterEquipmentConfig;
  progression?: CharacterProgressionConfig;

  tags?: string[]; // optional groupings like "starter", "template"
}