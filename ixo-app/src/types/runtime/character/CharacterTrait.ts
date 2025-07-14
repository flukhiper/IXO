// Character trait (reference to trait config, can be toggled active/inactive)
export interface CharacterTrait {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  traitId: string; // Reference to trait config
  isActive: boolean;
} 