import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const ConditionConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: String,
  tags: [ String ],
  stack: { type: Object },
  removeTicks: { type: [ Object ] },
  effects: { type: [ Object ] }
}, { versionKey: false, timestamps: true });

export const ConditionConfigModel = mongoose.models.ConditionConfig || mongoose.model('ConditionConfig', ConditionConfigSchema); 