import type { Model } from 'mongoose';

export abstract class BaseRepository<T extends { id: string }> {
  protected model: Model<T>;

  constructor (model: Model<T>) {
    this.model = model;
  }

  async saveOne (item: T) {
    await this.model.updateOne({ id: item.id }, item, { upsert: true });
  }

  async updateOne (id: string, update: Partial<T>) {
    await this.model.updateOne({ id }, { $set: update });
  }

  async deleteOne (id: string) {
    await this.model.deleteOne({ id });
  }

  async getById (id: string): Promise<T | null> {
    const doc = await this.model.findOne({ id }).lean();
    return doc ? (doc as unknown as T) : null;
  }

  async getAll (): Promise<T[]> {
    const docs = await this.model.find().lean();
    return docs as unknown as T[];
  }

  async saveMany (items: T[]) {
    if (items.length === 0) return;
    await this.model.bulkWrite(
      items.map(item => ({
        updateOne: {
          filter: { id: item.id },
          update: { $set: item },
          upsert: true
        }
      }))
    );
  }

  async deleteAll () {
    await this.model.deleteMany({});
  }
} 