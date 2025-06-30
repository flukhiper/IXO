import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const PathConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: [ String ]
}, { versionKey: false, timestamps: true });

export const PathConfigModel = mongoose.models.PathConfig || mongoose.model('PathConfig', PathConfigSchema); 