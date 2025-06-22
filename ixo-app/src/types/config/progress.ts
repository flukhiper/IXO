import { PROGRESS_GAIN_TYPE } from '@/constants/progress';
import { ReferenceValue } from './value';

export type ProgressGainType = typeof PROGRESS_GAIN_TYPE[keyof typeof PROGRESS_GAIN_TYPE];

export interface ProgressGainConfig {
  type: ProgressGainType;
  reference: ReferenceValue;
}

export interface ProgressLevelConfig {
  gains: ProgressGainConfig[];
}

export interface ProgressConfig {
  [level: number]: ProgressLevelConfig;
}
