import mongoose from 'mongoose';
import type { DowntimeConfig } from '@/types/config/downtime';
import { EffectConfigSchema, LocalizeTextSchema } from './common';
import { DOWNTIME_DURATION } from '@/constants/config/downtime';

const DowntimeRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  skillCheckId: { type: String },
  modifierFormula: { type: String }
}, { _id: false });

const DowntimeRepairSchema = new mongoose.Schema({
  numberOfItems: { type: Number, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  skillCheckId: { type: String },
  modifierFormula: { type: String }
}, { _id: false });

const DowntimeDetailSchema = new mongoose.Schema({
  numberOfUsage: { type: Number, required: true },
  downTimePointsCost: { type: Number, required: true },
  restore: { type: [ DowntimeRestoreSchema ], default: undefined },
  repair: { type: DowntimeRepairSchema, default: undefined },
  effects: { type: [ EffectConfigSchema ], default: undefined }
}, { _id: false });

const durationKeys = Object.values(DOWNTIME_DURATION);
const durationShape = Object.fromEntries(durationKeys.map(key => [ key, { type: DowntimeDetailSchema, default: undefined } ]));

const DowntimeConfigSchema = new mongoose.Schema<DowntimeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  thumbnail: { type: String },
  tags: { type: [ String ], default: [] },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  gameSystemId: { type: String, required: true },
  isSystem: { type: Boolean, required: true },
  duration: { type: durationShape, required: true }
}, { versionKey: false, timestamps: true });

DowntimeConfigSchema.index({ id: 1 }, { unique: true });
DowntimeConfigSchema.index({ gameSystemId: 1 });
DowntimeConfigSchema.index({ ownerId: 1 });

export const DowntimeConfigModel = mongoose.models.DowntimeConfig || mongoose.model<DowntimeConfig>('DowntimeConfig', DowntimeConfigSchema);
