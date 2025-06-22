import { STAT_REF_ID } from '@/constants/stat';

import type { StatConfig } from '@/types/config/stat';

export class StatConfigManager {
  readonly refId = STAT_REF_ID;

  private map = new Map<string, StatConfig>();

  constructor (initial: StatConfig[] = []) {
    for (const config of initial) {
      this.add(config);
    }
  }

  add (config: StatConfig) {
    if (this.map.has(config.id)) {
      throw new Error(`Stat "${config.id}" already exists.`);
    }

    this.map.set(config.id, config);
  }

  get (id: string) {
    return this.map.get(id);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  list (): StatConfig[] {
    return Array.from(this.map.values());
  }

  listIds (): string[] {
    return Array.from(this.map.keys());
  }

  delete (id: string): boolean {
    return this.map.delete(id);
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
