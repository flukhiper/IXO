import type { Expression } from './expression';

export interface GameDefinition {
  id: string;
  statDefs: StatDefinition[];
  attrDefs: AttributeDefinition[];
}
  
export interface Modifier {
  id: string;
  source: string;
  formula: Expression;
}

export interface AttributeDefinition {
  id: string; // e.g., "HP", "MP", "ArmorClass"
  name: string;
  base: number;
  modifiers: Modifier[];
}

export interface StatDefinition {
  id: string;         // e.g., "STR"
  name: string;       // "Strength"
  description?: string;
}
