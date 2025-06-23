// src/models/schemas/action.schema.ts
import { ActionConfigSchema } from '@/types/schema/action';
import { model, Schema, Types }  from 'mongoose';

export const ActionConfigMongooseSchema = new Schema({
  id: { type: String, required: true },
  name: { type: Object, required: true },
  description: { type: Object },
  tags: [ String ],
  type: { type: String, required: true },
  level: { type: Object, required: true },
  references: { type: Array },
  requirements: { type: Array },
  gameSystemId: { type: Types.ObjectId, required: true },
  ownerId: { type: String, required: true },
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: () => new Date() }
});


export const ActionModel = model<ActionConfigSchema>('ActionConfig', ActionConfigMongooseSchema);