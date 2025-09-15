import { EFFECT_ACTIVATE_ON, EFFECT_ID_OPTION, EFFECT_PROFICIENCY_LEVEL, EFFECT_TARGET_TYPE, EFFECT_TYPE } from '@/constants/config/effect';
import { CHARACTER_STAT_MODIFIER_OPTION } from '@/constants/config/gameSystem';
import { MAX_CHARACTER_GAIN_LEVEL } from '@/constants/config/gameSystem';
import type { LocalizeText } from './common';
import type { ConstantValue, DiceValue } from './base';
import type { ActionSelectionRule } from './action';
import type { DowntimeSelectionRule } from './downtime';
import type { SkillSelectionRule } from './skill';

export interface EffectSelectionRule {
  effects: Effect[];
  numberOfSelections: number;
}

export type EffectType = 
  | typeof EFFECT_TYPE[keyof typeof EFFECT_TYPE];

export interface BaseEffect {
  type: EffectType;
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
export interface GainEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.GAIN;
  gain: Gain;
  level?: GainLevel;
}

export type ActivateOn = typeof EFFECT_ACTIVATE_ON[keyof typeof EFFECT_ACTIVATE_ON];  

export type ActivateEffect =
| OnAttributeChangeActivateEffect
| PreventConditionEffect;

export interface OnAttributeChangeActivateEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.ACTIVATE;
  on: typeof EFFECT_ACTIVATE_ON.ON_ATTRIBUTE_CHANGE;
  attributeId: string;
  operator: '>' | '<' | '>=' | '<=' | '=' | '!=';
  formula: string;
  effects: Effect[];
}

export interface PreventConditionEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.PREVENT_CONDITION;
  conditionIds: string[];
}

export interface SpecialtyEffect extends BaseEffect {
  type: typeof EFFECT_TYPE.SPECIAL;
  name: LocalizeText;
  flavorText: LocalizeText;
}

export type Effect = 
| BonusEffect
| AdvantageEffect
| DamageBoostEffect
| ProficiencyEffect
| GainEffect
| ActivateEffect
| SpecialtyEffect;