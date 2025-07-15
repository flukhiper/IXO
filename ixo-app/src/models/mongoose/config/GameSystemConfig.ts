import mongoose from 'mongoose';
import type { GameSystem } from '@/types/config/gameSystem';
import { LocalizeTextSchema } from './common';

const GameSystemConfigSchema = new mongoose.Schema<GameSystem>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [ String ] },
  isPublic: { type: Boolean, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

// Indexes for efficient queries
GameSystemConfigSchema.index({ id: 1 }, { unique: true });
GameSystemConfigSchema.index({ ownerId: 1 });
GameSystemConfigSchema.index({ isPublic: 1 });

export const GameSystemConfigModel = mongoose.models.GameSystemConfig || mongoose.model<GameSystem>('GameSystemConfig', GameSystemConfigSchema);
