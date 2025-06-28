import type { BaseConfig, LocalizeText } from './base';
export interface ArchetypeSpecialty {
  name: LocalizeText;
  description: LocalizeText;
}

export interface ArchetypeConfig extends BaseConfig {
  abilityIds: string[];   // references to attributes of type 'ability'
  specialty?: ArchetypeSpecialty;      // unique, descriptive trait
  icon?: string;                      // URL to icon image (optional but recommended)
  tags?: string[];                    // optional grouping
}