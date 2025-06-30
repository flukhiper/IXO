import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const SkillConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: String,
  tags: [ String ],
  stack: { type: Object },
  pathId: String,
  requiredCharacterLevel: Number,
  requiredStatThresholds: { type: [ Object ] },
  effects: { type: [ Object ] }
}, { versionKey: false, timestamps: true });

export const SkillConfigModel = mongoose.models.SkillConfig || mongoose.model('SkillConfig', SkillConfigSchema); 