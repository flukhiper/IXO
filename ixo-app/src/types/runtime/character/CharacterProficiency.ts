// Character proficiency (e.g., weapons, domains, armors)
export interface CharacterProficiency {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  proficiencyId: string; // Reference to proficiency config
  level: number; // Starts at 0, can be raised to 1 at creation
} 