// Character origin reference
export interface CharacterOrigin {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  originId: string; // Reference to origin config
} 