// Character class (supports multi-classing and class history)
export interface CharacterClass {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  classId: string; // Reference to the class config
  isActive: boolean; // Is this the current/main class?
  level: number; // Level in this class
} 