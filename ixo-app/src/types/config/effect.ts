import { EFFECT_ID_OPTION, EFFECT_TARGET_TYPE, EFFECT_TYPE } from '@/constants/config/effect';
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

export type TalentEffectType = 
  | typeof EFFECT_TYPE.TERRIBLE
  | typeof EFFECT_TYPE.UNFAVORED
  | typeof EFFECT_TYPE.AVERAGE
  | typeof EFFECT_TYPE.LEARNED
  | typeof EFFECT_TYPE.PROMISING
  | typeof EFFECT_TYPE.EXPERT
  | typeof EFFECT_TYPE.PRODIGIOUS
  | typeof EFFECT_TYPE.GOD;
export interface TalentEffect extends BaseEffect {
  type: TalentEffectType;
  attributeId: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
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
| TalentEffect
| BonusEffect
| AdvantageEffect
| DamageBoostEffect
| SpecialtyEffect;