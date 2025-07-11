import mongoose, { Schema } from 'mongoose';

// --- Subdocument Schemas ---

const AttributeModifierSchema = new Schema({
  id: { type: String, required: true },
  source: { type: String, required: true },
  sourceId: { type: String, required: false },
  value: { type: Number, required: true },
  isActive: { type: Boolean, required: true }
}, { _id: false });

const StatModifierSchema = new Schema({
  id: { type: String, required: true },
  source: { type: String, required: true },
  sourceId: { type: String, required: false },
  value: { type: Number, required: true },
  isActive: { type: Boolean, required: true }
}, { _id: false });

const CharacterAttributeSchema = new Schema({
  attributeId: { type: String, required: true },
  baseValue: { type: Schema.Types.Mixed, required: true },
  currentValue: { type: Schema.Types.Mixed, required: true },
  modifiers: { type: [ AttributeModifierSchema ], default: [] }
}, { _id: false });

const CharacterStatSchema = new Schema({
  statId: { type: String, required: true },
  baseValue: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  modifiers: { type: [ StatModifierSchema ], default: [] }
}, { _id: false });

const CharacterTraitSchema = new Schema({
  traitId: { type: String, required: true },
  isActive: { type: Boolean, required: true }
}, { _id: false });

const CharacterClassSchema = new Schema({
  classId: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  level: { type: Number, required: true },
  acquiredAt: { type: Date, required: true }
}, { _id: false });

const CharacterSkillSchema = new Schema({
  skillId: { type: String, required: true },
  type: { type: String, enum: [ 'class', 'general', 'role' ], required: true },
  classId: { type: String, required: false },
  role: { type: String, required: false },
  learnedAt: { type: Date, required: true },
  isActive: { type: Boolean, required: true }
}, { _id: false });

const CharacterProficiencySchema = new Schema({
  proficiencyId: { type: String, required: true },
  level: { type: Number, required: true }
}, { _id: false });

// --- Inventory Grid System ---

const InventoryGridItemSchema = new Schema({
  itemId: { type: String, required: true },
  quantity: { type: Number, required: true },
  position: {
    row: { type: Number, required: true },
    column: { type: Number, required: true }
  }
}, { _id: false });

const InventoryGridSchema = new Schema({
  rows: { type: Number, required: true },
  columns: { type: Number, required: true },
  items: { type: [ InventoryGridItemSchema ], default: [] }
}, { _id: false });

const CharacterInventorySchema = new Schema({
  base: { type: InventoryGridSchema, required: true },
  containers: { type: Map, of: InventoryGridSchema, default: {} }
}, { _id: false });

// --- Gear/Weapon Slots ---

// For gearSlots and weaponSets, use Map<string, [string]> or [string] for arrays of itemIds

// --- Main Character Schema ---

const CharacterSchema = new Schema({
  playerID: { type: String, required: true },
  name: { type: String, required: true },
  gameSystemId: { type: String, required: true },
  portrait: { type: String },
  isPublic: { type: Boolean, default: false },
  level: { type: Number, required: true },
  originId: { type: String, required: true },
  traits: { type: [ CharacterTraitSchema ], default: [] },
  classes: { type: [ CharacterClassSchema ], default: [] },
  skills: { type: [ CharacterSkillSchema ], default: [] },
  proficiencies: { type: [ CharacterProficiencySchema ], default: [] },
  attributes: { type: [ CharacterAttributeSchema ], default: [] },
  stats: { type: [ CharacterStatSchema ], default: [] },
  gearSlots: { type: Map, of: [ String ], default: {} }, // { slotKey: [itemId, ...] }
  weaponSets: { type: [ Map ], of: [ String ], default: [] }, // array of { slotKey: [itemId, ...] }
  inventory: { type: CharacterInventorySchema, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Character || mongoose.model('Character', CharacterSchema);