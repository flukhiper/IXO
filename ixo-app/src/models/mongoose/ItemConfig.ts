import mongoose from 'mongoose';
import type { ItemConfig } from '@/types/config/item';
import { LocalizeTextSchema } from './common';

const ItemConfigSchema = new mongoose.Schema<ItemConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const ItemConfigModel = mongoose.models.ItemConfig || mongoose.model<ItemConfig>('ItemConfig', ItemConfigSchema);
