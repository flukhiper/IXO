import mongoose from 'mongoose';
import type { CharacterAttribute, AttributeModifier } from '@/types/runtime/character/CharacterAttribute';

const attributeModifierSchema = new mongoose.Schema<AttributeModifier>({
  id: {
    type: String,
    required: true
  },
  attributeId: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  sourceId: {
    type: String,
    required: false
  },
  value: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  }
}, { _id: false });

const characterAttributeSchema = new mongoose.Schema<CharacterAttribute>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  attributeId: {
    type: String,
    required: true
  },
  baseValue: {
    type: mongoose.Schema.Types.Mixed, // Can be number or string
    required: true
  },
  currentValue: {
    type: mongoose.Schema.Types.Mixed, // Can be number or string
    required: true
  },
  modifiers: {
    type: [ attributeModifierSchema ],
    default: []
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterAttributeSchema.index({ characterId: 1 });
characterAttributeSchema.index({ attributeId: 1 });
characterAttributeSchema.index({ characterId: 1, attributeId: 1 });

export const CharacterAttributeModel = mongoose.model<CharacterAttribute>('CharacterAttribute', characterAttributeSchema); 