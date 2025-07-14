// Skill type: class, general, or role
export type SkillType = 'class' | 'general' | 'role';

// Character skill (learned from class, general, or role)
export interface CharacterSkill {
  id: string; // crypto.randomUUID() generated
  characterId: string; // Reference to character
  skillId: string; // Reference to the skill config
  type: SkillType; // 'class' | 'general' | 'role'
  isActive: boolean; // If the skill is currently usable
} 