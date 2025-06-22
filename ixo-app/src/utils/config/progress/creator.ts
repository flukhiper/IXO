import type { ProgressConfig, ProgressLevelConfig } from '@/types/config/progress';

export interface CreateProgressConfigParams {
  levels: Record<number, ProgressLevelConfig>;
}

export function createProgressConfig (params: CreateProgressConfigParams): ProgressConfig {
  return params.levels;
}
