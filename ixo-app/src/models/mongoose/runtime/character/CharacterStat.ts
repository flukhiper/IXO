import mongoose from 'mongoose';
import type { CharacterStat, StatModifier } from '@/types/runtime/character/CharacterStat';

const statModifierSchema = new mongoose.Schema<StatModifier>({
  id: {
    type: String,
    required: true
  },
  statId: {
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

const characterStatSchema = new mongoose.Schema<CharacterStat>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  characterId: {
    type: String,
    required: true
  },
  statId: {
    type: String,
    required: true
  },
  baseValue: {
    type: Number,
    required: true,
    default: 0
  },
  currentValue: {
    type: Number,
    required: true,
    default: 0
  },
  modifiers: {
    type: [ statModifierSchema ],
    default: []
  }
}, {
  timestamps: true
});

// Create index for efficient queries
characterStatSchema.index({ characterId: 1 });
characterStatSchema.index({ statId: 1 });
characterStatSchema.index({ characterId: 1, statId: 1 });

export const CharacterStatModel = mongoose.model<CharacterStat>('CharacterStat', characterStatSchema); 