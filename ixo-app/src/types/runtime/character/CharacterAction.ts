/**
 * Character Action - represents an action that a character has access to
 * This could be from class, origin, traits, or other sources
 */
export interface CharacterAction {

  /** Unique identifier for this character action instance */
  id: string;
  
  /** Reference to the character this action belongs to */
  characterId: string;
  
  /** Reference to the action configuration */
  actionId: string;
  
  /** Type of source (class, origin, trait, etc.) */
  source: 'class' | 'origin' | 'trait' | 'item' | 'other';
  
  /** ID of the source (classId, originId, traitId, etc.) */
  sourceId: string;
  
  /** Whether this action is currently available to the character */
  isActive: boolean;
}

 