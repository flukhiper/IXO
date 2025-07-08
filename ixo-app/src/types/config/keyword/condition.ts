import { KEYWORD_TYPE } from '@/constants/config/base';
import type { BaseKeyword } from '@/types/config/keyword/base';

// Condition Keywords
export interface ConcentrationKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.CONCENTRATION;
  duration: number;
  durationFormula?: string;
}
export interface ConditionKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.CONDITION;
  conditionId: string;
  durationFormula?: string;
}