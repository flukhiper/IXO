import mongoose from 'mongoose';
import type { GameSystem } from '@/types/config/gameSystem';
import { LocalizeTextSchema } from './common';

const CharacterBuildingRuleSchema = new mongoose.Schema({
  startingTraitValue: { type: Number, required: true },
  startingProficiencyPoints: { type: Number, required: true },
  startingMaxProficiency: { type: Number, required: true },
  startingStatPoints: { type: Number, required: true },
  startingStatMaxValue: { type: Number, required: true },
  startingGolds: { type: Number, required: true },
  startingActionIds: { type: [ String ], required: true },
  startingDamageResistanceScaleId: { type: String, required: true },
  characterMaxLevel: { type: Number, required: true }
}, { _id: false });

const GamePlayRuleSchema = new mongoose.Schema({
  followUpThreshold: { type: Number, required: true },
  downtimeIds: { type: [ String ], required: true }
}, { _id: false });

const GameSystemConfigSchema = new mongoose.Schema<GameSystem>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  thumbnail: { type: String },
  tags: { type: [ String ], default: [] },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  isPublic: { type: Boolean, required: true },
  characterBuildingRule: { type: CharacterBuildingRuleSchema, required: true },
  gamePlayRule: { type: GamePlayRuleSchema, required: true }
}, { versionKey: false, timestamps: true });

// Indexes for efficient queries
GameSystemConfigSchema.index({ id: 1 }, { unique: true });
GameSystemConfigSchema.index({ ownerId: 1 });
GameSystemConfigSchema.index({ isPublic: 1 });

export const GameSystemConfigModel = mongoose.models.GameSystemConfig || mongoose.model<GameSystem>('GameSystemConfig', GameSystemConfigSchema);
