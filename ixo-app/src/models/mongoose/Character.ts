
import mongoose, { Schema } from 'mongoose';

// --- Subdocument Schemas ---

const AttributeModifierSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  source: { type: String, required: true }, // 'origin', 'class', 'item', 'trait', etc.
  sourceId: { type: String, required: false }, // ID of the source (originId, classId, etc.)
  value: { type: Number, required: true }, // Flat value only
  isActive: { type: Boolean, default: true }
}, { _id: false });

const StatModifierSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  source: { type: String, required: true }, // 'origin', 'class', 'item', 'trait', 'player-choice', etc.
  sourceId: { type: String, required: false }, // ID of the source (originId, classId, etc.)
  value: { type: Number, required: true }, // Flat value only
  isActive: { type: Boolean, default: true }
}, { _id: false });

const CharacterAttributeSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  attributeId: { type: String, required: true },
  baseValue: { type: Schema.Types.Mixed, required: true }, // Can be number or string (e.g., "2d6+3")
  currentValue: { type: Schema.Types.Mixed, required: true },
  modifiers: { type: [ AttributeModifierSchema ], default: [] }
}, { _id: false });

const CharacterStatSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  statId: { type: String, required: true },
  baseValue: { type: Number, required: true, min: -1, max: 3 }, // Starts at 0, can be -1 to +3 at creation
  currentValue: { type: Number, required: true },
  modifiers: { type: [ StatModifierSchema ], default: [] }
}, { _id: false });

const CharacterTraitSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  traitId: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const CharacterClassSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  classId: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  level: { type: Number, required: true, min: 1, max: 12 },
  acquiredAt: { type: Date, default: Date.now }
}, { _id: false });

const CharacterSkillSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  skillId: { type: String, required: true },
  type: { type: String, enum: [ 'class', 'general', 'role' ], required: true },
  classId: { type: String, required: false }, // Set if type = 'class'
  role: { type: String, required: false }, // Set if type = 'role'
  learnedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const CharacterProficiencySchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  proficiencyId: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 1, default: 0 } // Starts at 0, can be raised to 1 at creation
}, { _id: false });

// --- Updated Inventory Grid System (No Quantity) ---

const InventoryPositionSchema = new Schema({
  row: { type: Number, required: true, min: 0, max: 5 }, // 6 rows (0-5)
  column: { type: Number, required: true, min: 0, max: 11 } // 12 columns (0-11)
}, { _id: false });

const CharacterInventoryItemSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated - unique for each inventory item instance
  itemConfigId: { type: String, required: true }, // Reference to the item config
  position: { type: InventoryPositionSchema, required: true }
}, { _id: false });

const InventoryGridSchema = new Schema({
  rows: { type: Number, required: true, default: 6 },
  columns: { type: Number, required: true, default: 12 },
  items: { type: [ CharacterInventoryItemSchema ], default: [] }
}, { _id: false });

const CharacterInventorySchema = new Schema({
  base: { type: InventoryGridSchema, required: true }, // The character's body inventory (6x12 grid)
  containers: { type: Map, of: InventoryGridSchema, default: {} } // e.g., backpack, pouch, etc.
}, { _id: false });

// --- Gear/Weapon Slots ---

const CharacterGearSlotSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  slotType: { type: String, enum: [ 'apparel', 'accessory', 'backpack', 'utility' ], required: true },
  itemConfigId: { type: String, required: true }
}, { _id: false });

const CharacterWeaponSetSchema = new Schema({
  id: { type: String, required: true }, // crypto.randomUUID() generated
  setName: { type: String, required: true, default: 'Default' },
  mainHandItemId: { type: String, required: false },
  offHandItemId: { type: String, required: false }
}, { _id: false });

// --- Main Character Schema ---

const CharacterSchema = new Schema({
  id: { type: String, required: true, unique: true }, // crypto.randomUUID() generated
  playerID: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  gameSystemId: { type: String, required: true },
  portrait: { type: String },
  isPublic: { type: Boolean, default: false },
  level: { type: Number, required: true, min: 1, max: 12 },
  originId: { type: String, required: true },
  traits: { type: [ CharacterTraitSchema ], default: [] },
  classes: { type: [ CharacterClassSchema ], default: [] },
  skills: { type: [ CharacterSkillSchema ], default: [] },
  proficiencies: { type: [ CharacterProficiencySchema ], default: [] },
  attributes: { type: [ CharacterAttributeSchema ], default: [] },
  stats: { type: [ CharacterStatSchema ], default: [] },
  gearSlots: { type: [ CharacterGearSlotSchema ], default: [] }, // Array of gear slots
  weaponSets: { type: [ CharacterWeaponSetSchema ], default: [] }, // Array of weapon sets
  inventory: { type: CharacterInventorySchema, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
  collection: 'characters'
});

// --- Indexes for Performance ---

// Core character indexes
CharacterSchema.index({ playerID: 1 });
CharacterSchema.index({ gameSystemId: 1 });
CharacterSchema.index({ isPublic: 1 });
CharacterSchema.index({ createdAt: -1 });

// Compound indexes for common queries
CharacterSchema.index({ playerID: 1, gameSystemId: 1 });
CharacterSchema.index({ playerID: 1, isPublic: 1 });

// --- Virtual Fields for Common Queries ---

// Virtual for total class levels
CharacterSchema.virtual('totalClassLevels').get(function () {
  return this.classes.reduce((total, charClass) => total + charClass.level, 0);
});

// Virtual for active classes
CharacterSchema.virtual('activeClasses').get(function () {
  return this.classes.filter(charClass => charClass.isActive);
});

// Virtual for active skills
CharacterSchema.virtual('activeSkills').get(function () {
  return this.skills.filter(skill => skill.isActive);
});

// Virtual for active traits
CharacterSchema.virtual('activeTraits').get(function () {
  return this.traits.filter(trait => trait.isActive);
});

// Virtual for inventory item count
CharacterSchema.virtual('inventoryItemCount').get(function () {
  const baseCount = this.inventory.base.items.length;
  const containerCount = Object.values(this.inventory.containers).reduce((total, container) => {
    return total + container.items.length;
  }, 0);
  return baseCount + containerCount;
});

// --- Pre-save Middleware ---

// Ensure unique IDs for all subdocuments
CharacterSchema.pre('save', function (next) {
  // Generate IDs for new subdocuments that don't have them
  this.traits.forEach(trait => {
    if (!trait.id) trait.id = crypto.randomUUID();
  });
  
  this.classes.forEach(charClass => {
    if (!charClass.id) charClass.id = crypto.randomUUID();
  });
  
  this.skills.forEach(skill => {
    if (!skill.id) skill.id = crypto.randomUUID();
  });
  
  this.proficiencies.forEach(proficiency => {
    if (!proficiency.id) proficiency.id = crypto.randomUUID();
  });
  
  this.attributes.forEach(attribute => {
    if (!attribute.id) attribute.id = crypto.randomUUID();
    attribute.modifiers.forEach(modifier => {
      if (!modifier.id) modifier.id = crypto.randomUUID();
    });
  });
  
  this.stats.forEach(stat => {
    if (!stat.id) stat.id = crypto.randomUUID();
    stat.modifiers.forEach(modifier => {
      if (!modifier.id) modifier.id = crypto.randomUUID();
    });
  });
  
  this.gearSlots.forEach(gearSlot => {
    if (!gearSlot.id) gearSlot.id = crypto.randomUUID();
  });
  
  this.weaponSets.forEach(weaponSet => {
    if (!weaponSet.id) weaponSet.id = crypto.randomUUID();
  });
  
  // Generate IDs for inventory items
  this.inventory.base.items.forEach(item => {
    if (!item.id) item.id = crypto.randomUUID();
  });
  
  this.inventory.containers.forEach(container => {
    container.items.forEach(item => {
      if (!item.id) item.id = crypto.randomUUID();
    });
  });
  
  next();
});

export default mongoose.models.Character || mongoose.model('Character', CharacterSchema);