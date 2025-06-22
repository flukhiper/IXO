import { RACE_REF_ID } from '@/constants/race';
import type { RaceConfig } from '@/types/config/race';

export class RaceConfigManager {
  readonly refId = RACE_REF_ID;

  private map = new Map<string, RaceConfig>();

  constructor (initialRaces: RaceConfig[] = []) {
    for (const race of initialRaces) {
      this.add(race);
    }
  }

  add (race: RaceConfig) {
    if (this.map.has(race.id)) {
      throw new Error(`Race "${race.id}" already exists.`);
    }
    this.map.set(race.id, race);
  }

  get (id: string): RaceConfig | undefined {
    return this.map.get(id);
  }

  list (): RaceConfig[] {
    return Array.from(this.map.values());
  }

  listIds (): string[] {
    return Array.from(this.map.keys());
  }

  delete (id: string): boolean {
    return this.map.delete(id);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  // Find all races that have a certain tag
  findByTag (tag: string): RaceConfig[] {
    return this.list().filter(race =>
      race.tags?.includes(tag)
    );
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
