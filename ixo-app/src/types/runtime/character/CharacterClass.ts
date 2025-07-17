// Character class (supports multi-classing and class history)
export interface CharacterClass {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  classId: string; // Reference to the class config
  level: number; // Level in this class
  isActive?: boolean; // Optional: is this the current/main class?
  // User choices for progression steps that require selection
  chosenStats?: { level: number; statIds: string[] }[]; // Stat choices per level
  chosenAttributes?: { level: number; attributeIds: string[] }[]; // Attribute choices per level
  chosenSkills?: { level: number; skillIds: string[] }[]; // Skill choices per level
  chosenActions?: { level: number; actionIds: string[] }[]; // Action choices per level
} 