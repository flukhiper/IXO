import mongoose from 'mongoose';
import type { 
  CharacterInventory, 
  CharacterInventoryGrid, 
  CharacterInventoryItem, 
  CharacterInventoryPosition 
} from '@/types/runtime/character/CharacterInventory';

const characterInventoryPositionSchema = new mongoose.Schema<CharacterInventoryPosition>({
  row: {
    type: Number,
    required: true
  },
  column: {
    type: Number,
    required: true
  }
}, { _id: false });

const characterInventoryItemSchema = new mongoose.Schema<CharacterInventoryItem>({
  id: {
    type: String,
    required: true
  },
  itemConfigId: {
    type: String,
    required: true
  },
  position: {
    type: characterInventoryPositionSchema,
    required: true
  },
  containerId: {
    type: String,
    required: false
  }
}, { _id: false });

const characterInventoryGridSchema = new mongoose.Schema<CharacterInventoryGrid>({
  rows: {
    type: Number,
    required: true
  },
  columns: {
    type: Number,
    required: true
  },
  items: {
    type: [ characterInventoryItemSchema ],
    default: []
  }
}, { _id: false });

const characterInventorySchema = new mongoose.Schema<CharacterInventory>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  base: {
    type: characterInventoryGridSchema,
    required: true
  },
  containers: {
    type: Map,
    of: characterInventoryGridSchema,
    default: {}
  },
  currency: {
    gold: { type: Number, required: true, default: 0 }
    // Add more currencies (e.g., silver, copper) as needed
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterInventorySchema.index({ characterId: 1 });

export const CharacterInventoryModel = mongoose.model<CharacterInventory>('CharacterInventory', characterInventorySchema); 