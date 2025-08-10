import { ADVANTAGE_EFFECT_TYPE, BONUS_EFFECT_TYPE, DAMAGE_BOOST_EFFECT_TYPE, DISADVANTAGE_EFFECT_TYPE, EFFECT_ID_OPTION, EFFECT_TARGET_TYPE, SPECIALTY_EFFECT_TYPE, TALENT_EFFECT_TYPE } from '@/constants/config/effect';
import type { LocalizeText } from './common';
import { ConstantValue, DiceValue } from './base';

export interface EffectSelectionRule {
  effects: Effect[];
  numberOfSelections: number;
}

export type EffectType = 
  | TalentEffectType
  | BonusEffectType
  | AdvantageEffectType
  | DisadvantageEffectType
  | DamageBoostEffectType
  | SpecialtyEffectType;

export interface BaseEffect {
  type: EffectType;
}

export type TalentEffectType = typeof TALENT_EFFECT_TYPE[keyof typeof TALENT_EFFECT_TYPE];
export interface TalentEffect extends BaseEffect {
  type: TalentEffectType;
  attributeId: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
}

export type BonusEffectType = typeof BONUS_EFFECT_TYPE[keyof typeof BONUS_EFFECT_TYPE];
export interface BonusEffect extends BaseEffect {
  type: BonusEffectType;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
  modifierFormula: string;
}

export type AdvantageEffectType = typeof ADVANTAGE_EFFECT_TYPE[keyof typeof ADVANTAGE_EFFECT_TYPE];
export interface AdvantageEffect extends BaseEffect {
  type: AdvantageEffectType;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
}

export type DisadvantageEffectType = typeof DISADVANTAGE_EFFECT_TYPE[keyof typeof DISADVANTAGE_EFFECT_TYPE];
export interface DisadvantageEffect extends BaseEffect {
  type: DisadvantageEffectType;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string | typeof EFFECT_ID_OPTION.ALL_SKILL | typeof EFFECT_ID_OPTION.ALL_SAVING;
}

export type DamageBoostEffectType = typeof DAMAGE_BOOST_EFFECT_TYPE[keyof typeof DAMAGE_BOOST_EFFECT_TYPE];
export interface DamageBoostEffect extends BaseEffect {
  type: DamageBoostEffectType;
  damageType: string;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}

export type SpecialtyEffectType = typeof SPECIALTY_EFFECT_TYPE[keyof typeof SPECIALTY_EFFECT_TYPE];
export interface SpecialtyEffect extends BaseEffect {
  type: SpecialtyEffectType;
  flavorText: LocalizeText;
}

export type Effect = 
| TalentEffect
| BonusEffect
| AdvantageEffect
| DisadvantageEffect
| DamageBoostEffect
| SpecialtyEffect;