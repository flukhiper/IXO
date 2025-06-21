import type { PathConfig } from '@/types/config/path';

export class PathConfigManager {
  private map = new Map<string, PathConfig>();

  constructor (initial: PathConfig[] = []) {
    for (const config of initial) {
      this.add(config);
    }
  }

  add (config: PathConfig) {
    if (this.map.has(config.id)) {
      throw new Error(`Path "${config.id}" already exists.`);
    }

    this.map.set(config.id, config);
  }

  get (id: string) {
    return this.map.get(id);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  list (): PathConfig[] {
    return Array.from(this.map.values());
  }

  delete (id: string): boolean {
    return this.map.delete(id);
  }
}
