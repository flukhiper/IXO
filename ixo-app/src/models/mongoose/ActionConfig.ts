import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const ActionConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: String,
  tags: [ String ],
  type: String,
  pathId: String,
  requiredCharacterLevel: Number,
  requiredStatThresholds: { type: [ Object ] },
  levelConfigs: { type: Object }
}, { versionKey: false, timestamps: true });

export const ActionConfigModel = mongoose.models.ActionConfig || mongoose.model('ActionConfig', ActionConfigSchema); 