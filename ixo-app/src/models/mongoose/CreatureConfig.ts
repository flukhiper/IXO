import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const CreatureConfigSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: String,
  thumbnail: String,
  tags: [ String ],
  level: Number,
  attributeOverrides: { type: [ Object ] },
  traitIds: [ String ],
  actionIds: [ String ],
  skillIds: [ String ],
  conditionIds: [ String ],
  equipment: { type: Object },
  defaultDamageScales: { type: Object }
}, { versionKey: false, timestamps: true });

export const CreatureConfigModel = mongoose.models.CreatureConfig || mongoose.model('CreatureConfig', CreatureConfigSchema); 