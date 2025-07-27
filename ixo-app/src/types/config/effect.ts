import { ADVANTAGE_EFFECT_TYPE, BONUS_EFFECT_TYPE, DISADVANTAGE_EFFECT_TYPE, EFFECT_TARGET_TYPE, SPECIALTY_EFFECT_TYPE, TALENT_EFFECT_TYPE } from '@/constants/config/effect';
import type { ConstantValue } from './base';
import type { LocalizeText } from './common';

export type EffectType = 
  | TalentEffectType
  | BonusEffectType
  | AdvantageEffectType
  | DisadvantageEffectType
  | SpecialtyEffectType;

export interface BaseEffect {
  name?: LocalizeText;
  description?: LocalizeText;
  type: EffectType;
}

export type TalentEffectType = typeof TALENT_EFFECT_TYPE[keyof typeof TALENT_EFFECT_TYPE];
export interface TalentEffect extends BaseEffect {
  type: TalentEffectType;
  attributeId: string;
  modifierValue: ConstantValue;
}

export type BonusEffectType = typeof BONUS_EFFECT_TYPE[keyof typeof BONUS_EFFECT_TYPE];
export interface BonusEffect extends BaseEffect {
  type: BonusEffectType;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string;
  modifierValue: ConstantValue;
}

export type AdvantageEffectType = typeof ADVANTAGE_EFFECT_TYPE[keyof typeof ADVANTAGE_EFFECT_TYPE];
export interface AdvantageEffect extends BaseEffect {
  type: AdvantageEffectType;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string;
}

export type DisadvantageEffectType = typeof DISADVANTAGE_EFFECT_TYPE[keyof typeof DISADVANTAGE_EFFECT_TYPE];
export interface DisadvantageEffect extends BaseEffect {
  type: DisadvantageEffectType;
  target: typeof EFFECT_TARGET_TYPE.ATTRIBUTE | typeof EFFECT_TARGET_TYPE.STAT;
  id: string;
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
| SpecialtyEffect;