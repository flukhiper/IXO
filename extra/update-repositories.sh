#!/bin/bash

# List of repositories to update (excluding BaseRepository and already updated ones)
REPOS=(
  "ConditionConfigRepository"
  "DamageScaleConfigRepository"
  "ProficiencyConfigRepository"
  "TraitConfigRepository"
  "ArchetypeConfigRepository"
  "PathConfigRepository"
  "RealmConfigRepository"
  "DowntimeConfigRepository"
  "ItemConfigRepository"
  "CreatureConfigRepository"
  "StatConfigRepository"
  "SkillConfigRepository"
  "GameConfigSystemRepository"
)

# Template for repository files
generate_repo() {
  local name=$1
  echo "import { BaseRepository } from './BaseRepository';
import { ${name}Model } from '@/models/mongoose/${name}';
import type { ${name/Repository/} } from '@/types/config/${name/ConfigRepository/}';

export class ${name} extends BaseRepository<${name/Repository/}> {
  constructor () {
    super(${name}Model);
  }
  // All base methods from BaseRepository are inherited and used directly
}"
}

# Update each repository
for repo in "${REPOS[@]}"; do
  echo "Updating $repo..."
  generate_repo "$repo" > "src/repositories/$repo.ts"
done

echo "Done updating repositories!" 