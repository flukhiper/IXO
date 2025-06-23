// src/models/repositories/ActionConfigRepository.ts
import { ActionModel } from '@/models/mongoose/ActionConfigModel';
import type { ActionConfigSchema } from '@/types/schema/action';

export class ActionConfigRepository {
  async saveMany (
    schemas: ActionConfigSchema[],
    gameSystemId: string
  ) {
    await ActionModel.deleteMany({ gameSystemId });
    await ActionModel.insertMany(schemas);
  }

  async loadMany (gameSystemId: string): Promise<ActionConfigSchema[]> {
    return ActionModel.find({ gameSystemId }).lean();
  }
}
