import mongoose from 'mongoose';
import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { AnyAttributeConfig } from '@/types/config/attribute';
import { LocalizeTextSchema } from './common';

const OnEventPhaseChangedSchema = new mongoose.Schema({
  phase: { type: String, required: true },
  event: { type: String, required: true }
}, { _id: false });

const RestoreSchema = new mongoose.Schema({
  on: { type: OnEventPhaseChangedSchema, required: true },
  baseValue: mongoose.Schema.Types.Mixed,
  formula: String
}, { _id: false });

const AttributeConfigSchema = new mongoose.Schema<AnyAttributeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, enum: Object.values(ATTRIBUTE_TYPE), required: true },
  isSystem: { type: Boolean, required: true },
  tags: { type: [ String ], default: [] },
  baseValue: { type: mongoose.Schema.Types.Mixed, required: true },
  restores: { type: [ RestoreSchema ] },
  formula: { type: String }
}, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

export const AttributeConfigModel = mongoose.models.AttributeConfig || mongoose.model<AnyAttributeConfig>('AttributeConfig', AttributeConfigSchema); 