import { KEYWORD_TYPE, KEYWORD_VALUE_TYPE } from '@/constants/config/base';
import { BaseKeyword } from './base';

type SpecialValue = typeof KEYWORD_VALUE_TYPE.ANY | typeof KEYWORD_VALUE_TYPE.ALL;
// Permanent Bonus Keywords
export interface AttributeGiftedKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.ATTRIBUTE_GIFTED;
  attributeId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that gifted
}
export interface SkillCheckGiftedKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SKILL_CHECK_GIFTED;
  skillCheckAttributeId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that gifted
}
export interface SavingThrowGiftedKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SAVING_THROW_GIFTED;
  savingThrowId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that gifted
}
export interface AttributeLearnedKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.ATTRIBUTE_LEARNED;
  attributeId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that learned
}
export interface SkillCheckLearnedKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SKILL_CHECK_LEARNED;
  skillCheckAttributeId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that learned
}
export interface SavingThrowLearnedKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SAVING_THROW_LEARNED;
  savingThrowId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that learned
}
export interface AttributeMasteryKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.ATTRIBUTE_MASTERY;
  attributeId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that mastered
}
export interface SkillCheckMasteryKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SKILL_CHECK_MASTERY;
  skillCheckAttributeId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that mastered
}
export interface SavingThrowMasteryKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SAVING_THROW_MASTERY;
  savingThrowId: string | SpecialValue;
  numberOfAttributes?: number; // if skillCheckAttributeId is typeof KEYWORD_VALUE_TYPE.ANY, this is the number of attributes that mastered
}
  