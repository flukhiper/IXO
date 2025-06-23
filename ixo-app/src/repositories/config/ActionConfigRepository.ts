// src/models/repositories/ActionConfigRepository.ts
import { ActionModel } from '@/models/mongoose/ActionConfigModel';
import type { ActionConfigSchema } from '@/types/schema/action';
import { Types } from 'mongoose';
export class ActionConfigRepository {
  async saveMany (
    schemas: ActionConfigSchema[],
    gameSystemId: string,
    ownerId: string
  ) {
    await ActionModel.deleteMany({ gameSystemId });

    console.log(schemas);
    await ActionModel.insertMany(schemas.map(schema=>({ 
      ...schema, 
      gameSystemId,
      ownerId: new Types.ObjectId(ownerId) 
    })));
  }

  async loadMany (gameSystemId: string): Promise<ActionConfigSchema[]> {
    return ActionModel.find({ gameSystemId }).lean();
  }
}
