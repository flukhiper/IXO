export abstract class BaseConfigManager<T extends { id: string }> {
  protected items: Map<string, T>;

  constructor (initialItems: T[] = []) {
    this.items = new Map(initialItems.map(item => [ item.id, item ]));
  }

  load (items: T[]) {
    this.items = new Map(items.map(item => [ item.id, item ]));
  }

  getAll (): T[] {
    return Array.from(this.items.values());
  }

  getById (id: string): T | undefined {
    return this.items.get(id);
  }

  add (item: T) {
    this.items.set(item.id, item);
  }

  update (id: string, updated: Partial<T>) {
    const item = this.items.get(id);
    if (item) {
      this.items.set(id, { ...item, ...updated });
    }
  }

  remove (id: string) {
    this.items.delete(id);
  }
} 