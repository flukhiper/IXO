import mongoose from 'mongoose';
import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { AnyAttributeConfig } from '@/types/config/attribute';
import { LocalizeTextSchema } from './common';

const RestoreSchema = new mongoose.Schema({
  phase: { type: String, required: true },
  baseValue: mongoose.Schema.Types.Mixed,
  formula: { type: String }
}, { _id: false });

const AttributeConfigSchema = new mongoose.Schema<AnyAttributeConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, enum: Object.values(ATTRIBUTE_TYPE), required: true },
  abbreviation: { type: String },
  tags: { type: [ String ] },
  icon: { type: String },
  isSystem: { type: Boolean, required: true },
  isHidden: { type: Boolean, required: true },
  baseValue: { type: mongoose.Schema.Types.Mixed, required: true },
  formula: { type: String },
  restores: { type: [ RestoreSchema ] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true }
}, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

export const AttributeConfigModel = mongoose.models.AttributeConfig || mongoose.model<AnyAttributeConfig>('AttributeConfig', AttributeConfigSchema); 