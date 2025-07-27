import type { BaseModel } from './base';

export interface CharacterBuildingRule {
  startingTraitValue: number;

  startingProficiencyPoints: number;
  startingMaxProficiency: number;

  startingStatPoints: number;
  startingStatMaxValue: number;

  startingGolds: number;
  
  startingActionIds: string[];
  startingDamageResistanceScaleId: string;

  characterMaxLevel: number;
}

export interface GamePlayRule {
  followUpThreshold: number;
}

export interface GameSystem extends BaseModel {
  isPublic: boolean;

  characterBuildingRule: CharacterBuildingRule;
  gamePlayRule: GamePlayRule;
}