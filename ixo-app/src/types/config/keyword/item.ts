import { KEYWORD_TYPE } from '@/constants/config/base';
import type { BaseKeyword } from '@/types/config/keyword/base';
import { DiceValue, FixedValue, FullValue, HalfValue } from '../base';

// Item Keywords
export interface RepairKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.REPAIR;
  numberOfItems: number; // number of items to repair
  baseValue: DiceValue | FixedValue | FullValue | HalfValue;
  formula?: string;
}
export interface MakeKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.MAKE;
  itemId: string;
  numberOfItems: number; // number of items to make
}