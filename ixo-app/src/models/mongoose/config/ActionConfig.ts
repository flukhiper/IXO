import mongoose from 'mongoose';
import type { ActionConfig, CommandActionConfig, ItemActionConfig } from '@/types/config/action';
import { ACTION_TYPE, ACTION_STACK_TYPE, ACTION_COST_TYPE, ACTION_REQUIRED_ITEM_TYPE, ACTION_ITEM_OPTION } from '@/constants/config/action';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

// Sub-schemas for nested objects
const ActionArmorClassSchema = new mongoose.Schema({
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ActionDamageSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ActionRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const BaseActionDetailSchema = new mongoose.Schema({
  usage: {
    type: {
      type: String,
      enum: Object.values(ACTION_ITEM_OPTION)
    },
    maxNumberOfUse: { type: Number }
  },
  focusPointsCost: { type: Number },
  movementSpeedCost: { type: Number },
  range: { type: mongoose.Schema.Types.Mixed },
  hit: { type: mongoose.Schema.Types.Mixed, required: true },
  armorClass: { type: ActionArmorClassSchema },
  damage: { type: [ ActionDamageSchema ] },
  restore: { type: [ ActionRestoreSchema ] },
  effects: { type: [ EffectConfigSchema ], default: [] }
}, { _id: false });

// Base fields for all actions
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
  usedSlots: { type: Number },
  stackId: { type: String, required: true },
  stackType: { type: String, enum: Object.values(ACTION_STACK_TYPE), required: true },
  stackPriority: { type: Number },
  proficiencyId: { type: String },
  type: { type: String, enum: Object.values(ACTION_TYPE), required: true },
  actionCost: { type: String, enum: Object.values(ACTION_COST_TYPE) },
  isSystem: { type: Boolean, required: true }
};

// Discriminator schemas for each action type

const ItemActionConfigSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ACTION_TYPE.ITEM ], required: true },
  requiredItem: { type: String, enum: Object.values(ACTION_REQUIRED_ITEM_TYPE), required: true },
  requiredItemId: { type: String },
  requiredItemProficiency: { type: Boolean },
  proficiencyId: { type: String },
  level: { type: Map, of: BaseActionDetailSchema, required: true }
});

const CommandActionConfigSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ACTION_TYPE.COMMAND ], required: true },
  commandLevel: { type: Number, required: true },
  level: { type: Map, of: BaseActionDetailSchema, required: true }
});

// Main ActionConfig schema using discriminators
const ActionConfigSchema = new mongoose.Schema(baseFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

ActionConfigSchema.index({ id: 1 }, { unique: true });
ActionConfigSchema.index({ gameSystemId: 1 });
ActionConfigSchema.index({ ownerId: 1 }); 

export const ActionConfigModel = mongoose.models.ActionConfig || mongoose.model<ActionConfig>('ActionConfig', ActionConfigSchema);

// Attach and export discriminators
export const ItemActionModel = ActionConfigModel.discriminator<ItemActionConfig>('item', ItemActionConfigSchema);
export const CommandActionModel = ActionConfigModel.discriminator<CommandActionConfig>('command', CommandActionConfigSchema); 