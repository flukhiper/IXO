import mongoose from 'mongoose';
import type { DowntimeConfig } from '@/types/config/downtime';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const RequiredProficiencySchema = new mongoose.Schema({
  proficiencyId: { type: String, required: true },
  level: { type: Number, required: true }
}, { _id: false });

const DowntimePeriodSchema = new mongoose.Schema({
  cost: { type: Number, required: true },
  duration: { type: Number, required: true },
  effects: { type: [ EffectConfigSchema ], required: true }
}, { _id: false });

const DowntimeConfigSchema = new mongoose.Schema<DowntimeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  tags: { type: [ String ] },
  requiredProficiencies: { type: [ RequiredProficiencySchema ], required: true },
  shortDowntime: { type: DowntimePeriodSchema },
  longDowntime: { type: DowntimePeriodSchema },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true });

export const DowntimeConfigModel = mongoose.models.DowntimeConfig || mongoose.model<DowntimeConfig>('DowntimeConfig', DowntimeConfigSchema);
