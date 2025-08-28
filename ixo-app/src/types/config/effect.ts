import { EFFECT_ID_OPTION, EFFECT_PROFICIENCY_LEVEL, EFFECT_TARGET_TYPE, EFFECT_TYPE } from '@/constants/config/effect';
import type { LocalizeText } from './common';
import type { ConstantValue, DiceValue } from './base';

export interface EffectSelectionRule {
  effects: Effect[];
  numberOfSelections: number;
}

export type EffectType = 
  | typeof EFFECT_TYPE[keyof typeof EFFECT_TYPE];

export interface BaseEffect {
  type: EffectType;
}

export type ProficiencyLevel = 
  | typeof EFFECT_PROFICIENCY_LEVEL.TERRIBLE
  | typeof EFFECT_PROFICIENCY_LEVEL.UNFAVORED
  | typeof EFFECT_PROFICIENCY_LEVEL.PROFICIENCY
  | typeof EFFECT_PROFICIENCY_LEVEL.EXPERT
  | typeof EFFECT_PROFICIENCY_LEVEL.MASTER
  | typeof EFFECT_PROFICIENCY_LEVEL.GENIUS;

export interface ProficiencyEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.PROFICIENCY;
  attributeId: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
  level: ProficiencyLevel;
}

export interface BonusEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.BONUS;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
  modifierFormula: string;
}

export interface AdvantageEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.ADVANTAGE;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
  isDisadvantage: boolean;
}

export interface DamageBoostEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.DAMAGE_BOOST;
  damageType: string;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}

export interface ConditionEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.CONDITION;
  conditionId: string;
  overrideDuration?: number;
}

export interface SpecialtyEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.SPECIAL;
  flavorText: LocalizeText;
}

export type Effect = 
| ProficiencyEffect
| BonusEffect
| AdvantageEffect
| DamageBoostEffect
| SpecialtyEffect;