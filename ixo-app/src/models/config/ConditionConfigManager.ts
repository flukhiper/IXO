import { CONDITION_REF_ID } from '@/constants/condition';
import type { ConditionConfig } from '@/types/config/condition';

export class ConditionConfigManager {
  readonly refId = CONDITION_REF_ID;

  private map = new Map<string, ConditionConfig>();

  constructor (initialConditions: ConditionConfig[] = []) {
    for (const condition of initialConditions) {
      this.add(condition);
    }
  }

  add (condition: ConditionConfig) {
    if (this.map.has(condition.id)) {
      throw new Error(`Condition "${condition.id}" already exists.`);
    }
    this.map.set(condition.id, condition);
  }

  get (id: string): ConditionConfig | undefined {
    return this.map.get(id);
  }

  list (): ConditionConfig[] {
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

  // Find all conditions that have a certain tag
  findByTag (tag: string): ConditionConfig[] {
    return this.list().filter(condition =>
      condition.tags?.includes(tag)
    );
  }

  // Find all conditions sharing a given stack ID
  findByStackId (stackId: string): ConditionConfig[] {
    return this.list().filter(condition =>
      condition.stack?.id === stackId
    );
  }

  hasRefId (id: string): boolean {
    return this.refId === id;
  }
}
