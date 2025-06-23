import type { BaseMapConfig } from '@/types/config/base';

export abstract class BaseMapConfigManager<Config extends BaseMapConfig, Schema> {
  protected readonly map = new Map<string, Config>();

  protected isPublish = true;

  constructor (initial: Config[] = []) {
    for (const config of initial) {
      this.add(config);
    }
  }

  abstract refId: string;

  abstract toSchema (config: Config): Schema;
  abstract fromSchema (schema: Schema): Config;

  toSchemaAll (): Schema[] {
    return this.list().map(config => this.toSchema(config));
  }

  fromSchemaAll (schemas: Schema[]): void {
    for (const schema of schemas) {
      const config = this.fromSchema(schema);
      this.add(config); // or set in the map
    }
  }

  add (config: Config): void {
    this.map.set(config.id, config);
  }

  get (id: string): Config | undefined {
    return this.map.get(id);
  }

  has (id: string): boolean {
    return this.map.has(id);
  }

  list (): Config[] {
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

  getIsPublish (): boolean {
    return this.isPublish;
  }

  setIsPublish (value: boolean): void {
    this.isPublish = value;
  }
}