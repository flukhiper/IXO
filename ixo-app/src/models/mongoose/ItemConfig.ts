import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const ItemConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: String,
  icon: String,
  tags: [ String ],
  slotType: String,
  proficiencyIds: [ String ],
  requiredCharacterLevel: Number,
  requiredStatThresholds: { type: [ Object ] },
  bonusEffects: { type: [ Object ] }
}, { versionKey: false, timestamps: true });

export const ItemConfigModel = mongoose.models.ItemConfig || mongoose.model('ItemConfig', ItemConfigSchema); 