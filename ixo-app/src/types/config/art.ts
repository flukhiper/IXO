import { ART_CAST_TYPE, ART_TYPE } from '@/constants/config/art';
import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export interface ArtCost {
  attributeId: string;
  value: number;
}

export type ArtCastType = typeof ART_CAST_TYPE[keyof typeof ART_CAST_TYPE];

export type ArtType = typeof ART_TYPE[keyof typeof ART_TYPE];
export interface BaseArtConfig extends BaseConfig {
  type: ArtType;
  cost: ArtCost[];
  castType: ArtCastType;
  required: ArtRequirement;
}

export interface ArtRequirement {
  artId: string | typeof NONE_VALUE.STRING;
  level: number | typeof NONE_VALUE.NUMBER;
  proficiencies: ArtProficiencyRequirement[] | typeof NONE_VALUE.OBJECT;
}

export interface ArtProficiencyRequirement {
  proficiencyId: string;
  level: number;
}

export interface CombatArtConfig extends BaseArtConfig {
  type: typeof ART_TYPE.COMBAT;
}

export interface CommandArtConfig extends BaseArtConfig {
  type: typeof ART_TYPE.COMMAND;
}

export type ArtConfig = CombatArtConfig | CommandArtConfig;