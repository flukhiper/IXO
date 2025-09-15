import { CHARACTER_STAT_MODIFIER_OPTION, MAX_CHARACTER_GAIN_LEVEL } from '@/constants/config/gameSystem';
import type { BaseModel } from './base';
import type { SkillSelectionRule } from './skill';
import type { ActionSelectionRule } from './action';
import type { EffectSelectionRule } from './effect';
import type { DowntimeSelectionRule } from './downtime';

export type Gain = {
  proficiencyPoints?: number;
  statModifierChoice?: {
    statIds: (typeof CHARACTER_STAT_MODIFIER_OPTION.ALL | string)[];
    numberOfSelections: number;
  };
  skillSelectionRule?: SkillSelectionRule[];
  actionSelectionRule?: ActionSelectionRule[];
  effectSelectionRule?: EffectSelectionRule[];
  downtimeSelectionRule?: DowntimeSelectionRule[];
};

export type GainLevel = typeof MAX_CHARACTER_GAIN_LEVEL[number];

export interface CharacterBuildingRule {
  startingTraitValue: number;

  startingProficiencyPoints: number;
  startingProficiencyHighestLevel: number;

  startingStatPoints: number;
  startingStatHighestValue: number;
  startingStatLowestValue: number;

  startingGolds: number;
  
  startingActionIds: string[];
  startingDamageResistanceScaleId: string;

  characterMaxLevel: typeof MAX_CHARACTER_GAIN_LEVEL.length;
  characterGain: Partial<Record<GainLevel, Gain>>;
}

export interface GamePlayRule {
  followUpThreshold: number;
  
  downtimeIds: string[];
}

export interface GameSystem extends BaseModel {
  isPublic: boolean;

  characterBuildingRule: CharacterBuildingRule;
  gamePlayRule: GamePlayRule;
}