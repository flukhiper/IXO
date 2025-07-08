export abstract class BaseConfigService<T, R extends { saveOne: (item: T) => Promise<void>; getById: (id: string) => Promise<T | null>; getAll: () => Promise<T[]>; updateOne: (id: string, update: Partial<T>) => Promise<void>; deleteOne: (id: string) => Promise<void> }> {
  protected readonly repository: R;

  constructor (repository: R) {
    this.repository = repository;
  }

  async create (item: T) {
    await this.repository.saveOne(item);
  }

  async getById (id: string): Promise<T | null> {
    return this.repository.getById(id);
  }

  async getAll (): Promise<T[]> {
    return this.repository.getAll();
  }

  async update (id: string, update: Partial<T>) {
    await this.repository.updateOne(id, update);
  }

  async delete (id: string) {
    await this.repository.deleteOne(id);
  }
} 