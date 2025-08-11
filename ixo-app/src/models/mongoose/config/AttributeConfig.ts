import mongoose from 'mongoose';
import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';
import type { AnyAttributeConfig, ResourceAttributeConfig, ConstantAttributeConfig, DiceAttributeConfig, SkillCheckAttributeConfig, SavingThrowAttributeConfig, BaseAttributeConfig } from '@/types/config/attribute';
import { baseConfigFields, ConstantValueSchema, DiceValueSchema } from './common';

// Base fields for all attributes
const baseAttributeFields = {
  ...baseConfigFields,
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modiferFomular: { type: String },
  abbreviation: { type: String, required: true }
};

// Discriminator schemas for each attribute type
const ResourceAttributeSchema = new mongoose.Schema({
  ...baseAttributeFields,
  value: { type: ConstantValueSchema, required: true }
});

const ConstantAttributeSchema = new mongoose.Schema({
  ...baseAttributeFields,
  value: { type: ConstantValueSchema, required: true }
});

const DiceAttributeSchema = new mongoose.Schema({
  ...baseAttributeFields,
  value: { type: DiceValueSchema, required: true }
});

const SkillCheckAttributeSchema = new mongoose.Schema({
  ...baseAttributeFields,
  value: { type: DiceValueSchema, required: true }
});

const SavingThrowAttributeSchema = new mongoose.Schema({
  ...baseAttributeFields,
  value: { type: DiceValueSchema, required: true }
});

// Main AttributeConfig schema using discriminators
const AttributeConfigSchema = new mongoose.Schema<Omit<BaseAttributeConfig, 'type'>>(baseAttributeFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

AttributeConfigSchema.index({ gameSystemId: 1 });
AttributeConfigSchema.index({ ownerId: 1 }); 

export const AttributeConfigModel = mongoose.models.AttributeConfig || mongoose.model<Omit<AnyAttributeConfig, 'type'>>('AttributeConfig', AttributeConfigSchema);

// Attach and export discriminators
export const ResourceAttributeModel = AttributeConfigModel.discriminator<ResourceAttributeConfig>(ATTRIBUTE_TYPE.RESOURCE, ResourceAttributeSchema);
export const ConstantAttributeModel = AttributeConfigModel.discriminator<ConstantAttributeConfig>(ATTRIBUTE_TYPE.CONSTANT, ConstantAttributeSchema);
export const DiceAttributeModel = AttributeConfigModel.discriminator<DiceAttributeConfig>(ATTRIBUTE_TYPE.DICE, DiceAttributeSchema);
export const SkillCheckAttributeModel = AttributeConfigModel.discriminator<SkillCheckAttributeConfig>(ATTRIBUTE_TYPE.SKILL_CHECK, SkillCheckAttributeSchema);
export const SavingThrowAttributeModel = AttributeConfigModel.discriminator<SavingThrowAttributeConfig>(ATTRIBUTE_TYPE.SAVING_CHECK, SavingThrowAttributeSchema); 