import mongoose from 'mongoose';
import type { ArchetypeConfig } from '@/types/config/origin';
import { LocalizeTextSchema } from './common';

const ArchetypeConfigSchema = new mongoose.Schema<ArchetypeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const ArchetypeConfigModel = mongoose.models.ArchetypeConfig || mongoose.model<ArchetypeConfig>('ArchetypeConfig', ArchetypeConfigSchema);
