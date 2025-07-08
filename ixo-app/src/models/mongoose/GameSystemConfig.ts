import mongoose from 'mongoose';
import type { GameSystem } from '@/types/config/gameSystem';
import { LocalizeTextSchema } from './common';

const GameSystemConfigSchema = new mongoose.Schema<GameSystem>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ], default: [] }
}, { versionKey: false, timestamps: true });

export const GameSystemConfigModel = mongoose.models.GameSystemConfig || mongoose.model<GameSystem>('GameSystemConfig', GameSystemConfigSchema);
