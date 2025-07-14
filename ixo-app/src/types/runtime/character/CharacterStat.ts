// Character stats (STR, DEX, CON, etc.)
export interface CharacterStat {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  statId: string; // Reference to stat config
  baseValue: number; // Starts at 0, can be -1 to +3 at creation
  currentValue: number;
  modifiers: StatModifier[];
}

export interface StatModifier {
  id: string; // crypto.randomUUID() generated
  statId: string; // Reference to character stat
  source: string; // 'origin', 'class', 'item', 'trait', 'player-choice', etc.
  sourceId?: string; // ID of the source (originId, classId, etc.), optional for player-choice
  value: number; // Flat value only
  isActive: boolean;
} 