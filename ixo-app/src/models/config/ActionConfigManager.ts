import { ACTION_REF_ID } from '@/constants/action';
import type { ActionConfig } from '@/types/config/action';

export class ActionConfigManager {
  readonly refId = ACTION_REF_ID;

  private map = new Map<string, ActionConfig>();

  constructor (initial: ActionConfig[] = []) {
    for (const config of initial) {
      this.add(config);
    }
  }

  add (config: ActionConfig): void {
    this.map.set(config.id, config);
  }

  get (id: string): ActionConfig | undefined {
    return this.map.get(id);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  list (): ActionConfig[] {
    return Array.from(this.map.values());
  }

  listIds (): string[] {
    return Array.from(this.map.keys());
  }

  clear (): void {
    this.map.clear();
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}