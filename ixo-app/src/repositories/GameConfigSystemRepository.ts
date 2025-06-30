import type { CharacterConfig } from '@/types/config/character';
import type { LocalizeText } from '@/types/config/base';
import { GameConfigSystemModel } from '@/models/mongoose/GameConfigSystem';
import { BaseRepository } from './BaseRepository';

export interface GameConfigSystemDTO {
  id: string;
  name: LocalizeText;
  description?: LocalizeText;
  statIds: string[];
  skillIds: string[];
  itemIds: string[];
  actionIds: string[];
  conditionIds: string[];
  attributeIds: string[];
  creatureIds: string[];
  downtimeIds: string[];
  realmIds: string[];
  pathIds: string[];
  archetypeIds: string[];
  traitIds: string[];
  proficiencyIds: string[];
  damageTypeIds: string[];
  damageScaleIds: string[];
  characterConfig: CharacterConfig;
}

export class GameConfigSystemRepository extends BaseRepository<GameConfigSystemDTO> {
  constructor () {
    super(GameConfigSystemModel);
  }
  // Add any GameConfigSystem-specific methods here if needed
} 