import type { ConditionConfig } from '@/types/config/condition';

export class ConditionConfigManager {
  private conditionMap = new Map<string, ConditionConfig>();

  constructor (initialConditions: ConditionConfig[] = []) {
    for (const condition of initialConditions) {
      this.add(condition);
    }
  }

  add (condition: ConditionConfig) {
    if (this.conditionMap.has(condition.id)) {
      throw new Error(`Condition "${condition.id}" already exists.`);
    }
    this.conditionMap.set(condition.id, condition);
  }

  get (id: string): ConditionConfig | undefined {
    return this.conditionMap.get(id);
  }

  list (): ConditionConfig[] {
    return Array.from(this.conditionMap.values());
  }

  delete (id: string): boolean {
    return this.conditionMap.delete(id);
  }

  has (id: string): boolean {
    return this.conditionMap.has(id);
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
}
