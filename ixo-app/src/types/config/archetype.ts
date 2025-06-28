import type { BaseConfig, LocalizeText } from './base';

export interface ArchetypeAbilityRef {
  attributeId: string;             // must refer to an attribute of type 'ability'
  scalingFormula?: string;         // e.g. "base + (level * 2)"
}

export interface ArchetypeSpecialty {
  name: LocalizeText;
  description: LocalizeText;
}

export interface ArchetypeConfig extends BaseConfig {
  abilities: ArchetypeAbilityRef[];   // references to attributes of type 'ability'
  specialty: ArchetypeSpecialty;      // unique, descriptive trait
  icon?: string;                      // URL to icon image (optional but recommended)
  tags?: string[];                    // optional grouping
}