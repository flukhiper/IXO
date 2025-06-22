import { PROFICIENCY_REF_ID } from '@/constants/proficiency';
import type { ProficiencyConfig } from '@/types/config/proficiency';

export class ProficiencyConfigManager {
  readonly refId = PROFICIENCY_REF_ID;

  private map = new Map<string, ProficiencyConfig>();

  constructor (initialProficiencies: ProficiencyConfig[] = []) {
    for (const proficiency of initialProficiencies) {
      this.add(proficiency);
    }
  }

  add (proficiency: ProficiencyConfig) {
    if (this.map.has(proficiency.id)) {
      throw new Error(`Proficiency "${proficiency.id}" already exists.`);
    }
    this.map.set(proficiency.id, proficiency);
  }

  get (id: string): ProficiencyConfig | undefined {
    return this.map.get(id);
  }

  list (): ProficiencyConfig[] {
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

  // Find all proficiencies that have a certain tag
  findByTag (tag: string): ProficiencyConfig[] {
    return this.list().filter(prof =>
      prof.tags?.includes(tag)
    );
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
