import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const DowntimeConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: String,
  tags: [ String ],
  effects: { type: Object }
}, { versionKey: false, timestamps: true });

export const DowntimeConfigModel = mongoose.models.DowntimeConfig || mongoose.model('DowntimeConfig', DowntimeConfigSchema); 