import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const StatConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  abbreviation: { type: String, required: true },
  tags: [ String ]
}, { versionKey: false, timestamps: true });

export const StatConfigModel = mongoose.models.StatConfig || mongoose.model('StatConfig', StatConfigSchema); 