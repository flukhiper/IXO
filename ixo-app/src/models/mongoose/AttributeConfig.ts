import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const AttributeConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, required: true },
  baseValue: { type: mongoose.Schema.Types.Mixed, required: true },
  restoreOns: [ String ],
  restoreValue: { type: mongoose.Schema.Types.Mixed },
  tags: [ String ],
  formula: String
}, { versionKey: false, timestamps: true });

export const AttributeConfigModel = mongoose.models.AttributeConfig || mongoose.model('AttributeConfig', AttributeConfigSchema); 