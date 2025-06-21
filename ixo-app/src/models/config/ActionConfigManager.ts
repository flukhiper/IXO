// src/manager/actionConfig.ts
import type { ActionConfig } from '@/types/config/action';

export class ActionConfigManager {
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

  clear (): void {
    this.map.clear();
  }
}