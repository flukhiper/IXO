// Character attributes (HP, AC, Initiative, etc.)
export interface CharacterAttribute {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  attributeId: string; // Reference to attribute config
  baseValue: number | string;
  currentValue: number | string;
  modifiers: AttributeModifier[];
}

export interface AttributeModifier {
  id: string; // crypto.randomUUID() generated
  attributeId: string; // Reference to character attribute
  source: string; // 'origin', 'class', 'item', 'trait', etc.
  sourceId?: string; // ID of the source (originId, classId, etc.), optional for player-choice
  value: number; // Flat value only
  isActive: boolean;
} 