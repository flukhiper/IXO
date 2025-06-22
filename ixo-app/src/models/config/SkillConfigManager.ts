import { SKILL_REF_ID } from '@/constants/skill';

import type { SkillConfig } from '@/types/config/skill';

export class SkillConfigManager {
  readonly refId = SKILL_REF_ID;

  private map = new Map<string, SkillConfig>();

  constructor (initialSkills: SkillConfig[] = []) {
    for (const skill of initialSkills) {
      this.add(skill);
    }
  }

  add (skill: SkillConfig) {
    if (this.map.has(skill.id)) {
      throw new Error(`Skill "${skill.id}" already exists.`);
    }
    this.map.set(skill.id, skill);
  }

  get (id: string): SkillConfig | undefined {
    return this.map.get(id);
  }

  list (): SkillConfig[] {
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

  // Find all skills that have a certain tag
  findByTag (tag: string): SkillConfig[] {
    return this.list().filter(skill =>
      skill.tags?.includes(tag)
    );
  }

  // Find all skills sharing a given stack ID
  findByStackId (stackId: string): SkillConfig[] {
    return this.list().filter(skill =>
      skill.stack?.id === stackId
    );
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
