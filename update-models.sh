#!/bin/bash

# List of models to update (excluding already updated ones)
MODELS=(
  "ConditionConfig"
  "DamageScaleConfig"
  "ProficiencyConfig"
  "TraitConfig"
  "ArchetypeConfig"
  "PathConfig"
  "RealmConfig"
  "DowntimeConfig"
  "ItemConfig"
  "CreatureConfig"
  "StatConfig"
  "SkillConfig"
  "GameSystemConfig"
)

# Template for model files
generate_model() {
  local name=$1
  echo "import mongoose from 'mongoose';
import type { $name } from '@/types/config/${name/Config/}';
import { LocalizeTextSchema } from './common';

const ${name}Schema = new mongoose.Schema<$name>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  tags: { type: [String], default: [] }
}, { versionKey: false, timestamps: true });

export const ${name}Model = mongoose.models.$name || mongoose.model<$name>('$name', ${name}Schema);"
}

# Update each model
for model in "${MODELS[@]}"; do
  echo "Updating $model..."
  generate_model "$model" > "src/models/mongoose/$model.ts"
done

echo "Done updating models!" 