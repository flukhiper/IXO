import { KEYWORD_TYPE, KEYWORD_VALUE_TYPE } from '@/constants/config/base';
import type { BaseKeyword } from '@/types/config/keyword/base';

// Mechanical Bonus Keywords
export interface AimKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.AIM;
  value: number | typeof KEYWORD_VALUE_TYPE.ANY; // if any, then the value is not specified
}
export interface BlockKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.BLOCK;
  value: number | typeof KEYWORD_VALUE_TYPE.ANY; // if any, then the value is not specified
}
export interface SwiftKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SWIFT;
  value: number | typeof KEYWORD_VALUE_TYPE.ANY; // if any, then the value is not specified
}
export interface ToughKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.TOUGH;
  value: number | typeof KEYWORD_VALUE_TYPE.ANY; // if any, then the value is not specified
}
export interface ReflexKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.REFLEX;
  value: number | typeof KEYWORD_VALUE_TYPE.ANY; // if any, then the value is not specified
}