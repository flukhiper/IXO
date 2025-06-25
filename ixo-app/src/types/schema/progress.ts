import type { ProgressGainType } from '@/types/config/progress';
import type { ReferenceValueSchema } from './value';

export interface ProgressGainSchema {
  type: ProgressGainType;
  reference: ReferenceValueSchema;
}

export interface ProgressLevelSchema {
  gains: ProgressGainSchema[];
}

export interface ProgressConfigSchema {
  [level: number]: ProgressLevelSchema;
}
