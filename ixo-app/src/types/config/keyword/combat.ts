import { KEYWORD_TYPE } from '@/constants/config/base';
import type { DiceValue, FixedValue } from '@/types/config/base';
import type { BaseKeyword } from '@/types/config/keyword/base';

// Combat Feature Keywords
export interface ArmorPierceKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.ARMOR_PIERCE;
}
export interface SunderKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SUNDER;
  value: number;
}
export interface BoostKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.BOOST;
  damageType: string;
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
export interface CooldownKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.COOLDOWN;
  value: number;
}
export interface DoubleAttackKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.DOUBLE_ATTACK;
}
export interface PreciseKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.PRECISE;
}
export interface TrueStrikeKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.TRUE_STRIKE;
}