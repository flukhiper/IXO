import mongoose from 'mongoose';

const LocalizeTextSchema = new mongoose.Schema({}, { _id: false, strict: false });

const StartStatLimitSchema = new mongoose.Schema({
  min: Number,
  max: Number
}, { _id: false });

const CharacterEquipmentConfigSchema = new mongoose.Schema({
  slotLimits: { type: Map, of: Number },
  defaultInventorySpace: { type: Number }
}, { _id: false });

const ActionPoolFilterSchema = new mongoose.Schema({
  includedActionTags: [ String ],
  excludedActionTags: [ String ]
}, { _id: false });

const SkillPoolFilterSchema = new mongoose.Schema({
  includedSkillTags: [ String ],
  excludedSkillTags: [ String ]
}, { _id: false });

const CharacterGainConfigSchema = new mongoose.Schema({
  actionIds: [ String ],
  skillIds: [ String ],
  actionGainFromPool: Number,
  skillGainFromPool: Number,
  actionPoolFilter: ActionPoolFilterSchema,
  skillPoolFilter: SkillPoolFilterSchema
}, { _id: false });

const CharacterProgressionConfigSchema = new mongoose.Schema({
  gainPerLevel: { type: Map, of: CharacterGainConfigSchema }
}, { _id: false });

const CharacterConfigSchema = new mongoose.Schema({
  startingActions: [ String ],
  startingItems: [ String ],
  startProficiencyPoint: Number,
  startStatPoint: Number,
  startStatLimit: StartStatLimitSchema,
  equipmentRules: CharacterEquipmentConfigSchema,
  progression: CharacterProgressionConfigSchema,
  halfDowntimeIds: [ String ],
  fullDowntimeIds: [ String ],
  defaultTraitSize: Number,
  defaultDamageScales: { type: Map, of: String },
  tags: [ String ]
}, { _id: false });

const GameConfigSystemSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  statIds: [ String ],
  skillIds: [ String ],
  itemIds: [ String ],
  actionIds: [ String ],
  conditionIds: [ String ],
  attributeIds: [ String ],
  creatureIds: [ String ],
  downtimeIds: [ String ],
  realmIds: [ String ],
  pathIds: [ String ],
  archetypeIds: [ String ],
  traitIds: [ String ],
  proficiencyIds: [ String ],
  damageTypeIds: [ String ],
  damageScaleIds: [ String ],
  characterConfig: { type: CharacterConfigSchema, required: true }
}, { versionKey: false, timestamps: true });

export const GameConfigSystemModel = mongoose.models.GameConfigSystem || mongoose.model('GameConfigSystem', GameConfigSystemSchema); 