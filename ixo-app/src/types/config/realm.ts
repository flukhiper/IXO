import { BaseConfig } from './base';

export interface RealmConfig extends BaseConfig {
  archetypeIds: string[];        // List of ArchetypeConfig IDs
  icon?: string;                 // Optional: icon for UI
  thumbnail?: string;          // UI thumbnail (larger, for overview or preview)
  tags?: string[];               // Optional: filter/group
}