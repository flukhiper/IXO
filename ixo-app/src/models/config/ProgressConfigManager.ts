import { PROGRESS_REF_ID } from '@/constants/progress';
import type { ProgressConfig, ProgressLevelConfig, ProgressGainConfig } from '@/types/config/progress';

export class ProgressConfigManager {
  readonly refId = PROGRESS_REF_ID;

  private progress: ProgressConfig;

  constructor (progress: ProgressConfig = {}) {
    this.progress = progress;
  }

  getLevel (level: number): ProgressLevelConfig | undefined {
    return this.progress[level];
  }

  listLevels (): number[] {
    return Object.keys(this.progress).map(Number).sort((a, b) => a - b);
  }

  getGains (level: number): ProgressGainConfig[] {
    return this.progress[level]?.gains ?? [];
  }

  addLevel (level: number, gains: ProgressGainConfig[]): void {
    this.progress[level] = { gains };
  }

  deleteLevel (level: number): boolean {
    if (this.progress[level]) {
      delete this.progress[level];
      return true;
    }
    return false;
  }

  hasLevel (level: number): boolean {
    return !!this.progress[level];
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
