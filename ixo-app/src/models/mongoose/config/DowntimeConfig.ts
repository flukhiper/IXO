import mongoose from 'mongoose';
import type { DowntimeConfig } from '@/types/config/downtime';
import { baseConfigFields, EffectSchema } from './common';
import { DOWNTIME_DURATION } from '@/constants/config/downtime';

const DowntimeRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const DowntimeRepairSchema = new mongoose.Schema({
  numberOfItems: { type: Number, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const DowntimeDetailSchema = new mongoose.Schema({
  maxNumberOfUse: { type: Number, required: true },

  downTimePointsCost: { type: Number, required: true },
  skillCheckId: { type: String },
  restore: { type: DowntimeRestoreSchema },
  repair: { type: DowntimeRepairSchema },
  effects: { type: [ EffectSchema ] }
}, { _id: false });

const durationKeys = Object.values(DOWNTIME_DURATION);
const durationShape = Object.fromEntries(durationKeys.map(key => [ key, { type: DowntimeDetailSchema } ]));

const DowntimeConfigSchema = new mongoose.Schema<DowntimeConfig>({
  ...baseConfigFields,
  duration: { type: durationShape, required: true }
}, { versionKey: false, timestamps: true });

DowntimeConfigSchema.index({ gameSystemId: 1 });
DowntimeConfigSchema.index({ ownerId: 1 });

export const DowntimeConfigModel = mongoose.models.DowntimeConfig || mongoose.model<DowntimeConfig>('DowntimeConfig', DowntimeConfigSchema);
