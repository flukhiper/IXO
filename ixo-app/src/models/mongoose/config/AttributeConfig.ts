import mongoose from 'mongoose';
import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { AnyAttributeConfig, ResourceAttributeConfig, ConstantAttributeConfig, DiceAttributeConfig, SkillCheckAttributeConfig, SavingThrowAttributeConfig } from '@/types/config/attribute';
import { ConstantValueSchema, DiceValueSchema, LocalizeTextSchema } from './common';

// Base fields for all attributes
const baseFields = {
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
  type: { type: String, enum: Object.values(ATTRIBUTE_TYPE), required: true },
  modiferFomular: { type: String },
  isSystem: { type: Boolean, required: true }
};

// Discriminator schemas for each attribute type
const ResourceAttributeSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ATTRIBUTE_TYPE.RESOURCE ], required: true },
  value: { type: ConstantValueSchema, required: true }
});

const ConstantAttributeSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ATTRIBUTE_TYPE.CONSTANT ], required: true },
  value: { type: ConstantValueSchema, required: true }
});

const DiceAttributeSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ATTRIBUTE_TYPE.DICE ], required: true },
  value: { type: DiceValueSchema, required: true }
});

const SkillCheckAttributeSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ATTRIBUTE_TYPE.SKILL_CHECK ], required: true },
  value: { type: DiceValueSchema, required: true }
});

const SavingThrowAttributeSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ATTRIBUTE_TYPE.SAVING_CHECK ], required: true },
  value: { type: DiceValueSchema, required: true }
});

// Main AttributeConfig schema using discriminators
const AttributeConfigSchema = new mongoose.Schema(baseFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

AttributeConfigSchema.index({ id: 1 }, { unique: true });
AttributeConfigSchema.index({ gameSystemId: 1 });
AttributeConfigSchema.index({ ownerId: 1 }); 

export const AttributeConfigModel = mongoose.models.AttributeConfig || mongoose.model<AnyAttributeConfig>('AttributeConfig', AttributeConfigSchema);

// Attach and export discriminators
export const ResourceAttributeModel = AttributeConfigModel.discriminator<ResourceAttributeConfig>('resource', ResourceAttributeSchema);
export const ConstantAttributeModel = AttributeConfigModel.discriminator<ConstantAttributeConfig>('constant', ConstantAttributeSchema);
export const DiceAttributeModel = AttributeConfigModel.discriminator<DiceAttributeConfig>('dice', DiceAttributeSchema);
export const SkillCheckAttributeModel = AttributeConfigModel.discriminator<SkillCheckAttributeConfig>('skillCheck', SkillCheckAttributeSchema);
export const SavingThrowAttributeModel = AttributeConfigModel.discriminator<SavingThrowAttributeConfig>('savingCheck', SavingThrowAttributeSchema); 