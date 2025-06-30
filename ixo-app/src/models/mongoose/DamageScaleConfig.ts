import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const DamageScaleConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  multiplier: Number,
  tags: [ String ]
}, { versionKey: false, timestamps: true });

export const DamageScaleConfigModel = mongoose.models.DamageScaleConfig || mongoose.model('DamageScaleConfig', DamageScaleConfigSchema); 