// src/models/schemas/action.schema.ts
import { model, Schema }  from 'mongoose';

import type { ActionConfigSchema } from '@/types/schema/action';

import { BaseMongooseSchema } from './BaseMongooseSchema';


const ActionConfigMongooseSchema = new Schema<ActionConfigSchema & BaseMongooseSchema>({
  id: { type: String, required: true },
  name: { type: Schema.Types.Mixed, required: true },
  description: { type: Schema.Types.Mixed },
  tags: { type: [ String ], default: [] },
  type: { type: String, required: true },
  level: { type: Schema.Types.Mixed, required: true },
  references: { type: [ Schema.Types.Mixed ], default: [] },
  requirements: { type: [ Schema.Types.Mixed ], default: [] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, required: true },
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});


export const ActionModel = model<ActionConfigSchema & BaseMongooseSchema>('ActionConfig', ActionConfigMongooseSchema);