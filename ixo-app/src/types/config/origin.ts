import type { BaseConfig, EffectConfig, LocalizeText } from './base';

/**
 * OriginConfig represents a character's background/origin/heritage/culture/homeland/upbringing.
 * It can grant effects, traits, specialties, and other bonuses.
 */
export interface OriginConfig extends BaseConfig {
  tags?: string[]; // e.g., ["homeland", "culture", "heritage"]
  icon?: string; // URL or key for UI

  // Optional: unique specialty or story hook
  specialty?: {
    name: LocalizeText;
    description: LocalizeText;
  };

  // Effects/bonuses granted by this origin
  effects: EffectConfig[];
}