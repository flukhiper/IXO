import { CharacterConfig } from '@/types/config/character';

export const mockCharacterConfigs: CharacterConfig = {
  id: 'character-default',
  name: { en: 'Default Character' },
  ownerId: 'system',
  gameSystemId: 'game-system-ixo',
  startStatPoint: 3,
  startOriginChoice: [
    'origin-primordia',
    'origin-symphonia-varis',
    'origin-gaea-libris',
    'origin-artificium',
    'origin-doloria',
    'origin-aethelgard',
    'origin-bellarax',
    'origin-wanderer'
  ],
  startTraitChoice: [
    'trait-dragonoid',
    'trait-kijin',
    'trait-mechina',
    'trait-werebeast',
    'trait-fairy',
    'trait-demonia',
    'trait-siren',
    'trait-aethel',
    'trait-oni-horn',
    'trait-lupine-ears',
    'trait-antennae',
    'trait-analytical-lenses',
    'trait-ember-glow',
    'trait-predatory-gaze',
    'trait-feral-claws',
    'trait-shielding-plates',
    'trait-digitigrade-stance',
    'trait-rooted-stance',
    'trait-gecko-grip',
    'trait-draconic-scales',
    'trait-photosensitive-sheen',
    'trait-ashen-epidermis',
    'trait-vestigial-wings',
    'trait-barbed-spines',
    'trait-hypnotic-resonance',
    'trait-vocal-mimicry'
  ],
  startClassChoice: [
    'enforcer',
    'scout',
    'seer',
    'operator',
    'invoker',
    'herald'
  ],
  startGold: 100,
  equipmentRules: {
    numberOfWeaponSet: 2,
    numberOfMainHand: 1,
    numberOfOffHand: 1,
    numberOfApparel: 1,
    numberOfAccessory: 'infinite',
    numberOfBackpack: 1,
    numberOfUtility: 0
  },
  progression: {
    1: {
      proficiencyPoint: 3,
      skillGain: [
        {
          includedSkillTags: [ 'role', 'tier-0' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    2: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'tier-1' ],
          excludedSkillTags: [],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    3: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'tier-1' ],
          excludedSkillTags: [],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    4: {
      proficiencyPoint: 0,
      skillGain: [],
      actionGain: [],
      statModifier: [
        { statId: 'any', value: 1 }
      ],
      attributeModifier: []
    },
    5: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'general', 'tier-1' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    6: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'tier-2' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    7: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'tier-2' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    8: {
      proficiencyPoint: 0,
      skillGain: [],
      actionGain: [],
      statModifier: [
        { statId: 'any', value: 1 }
      ],
      attributeModifier: []
    },
    9: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'general', 'tier-2' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    10: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'tier-3' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    11: {
      proficiencyPoint: 0,
      skillGain: [
        {
          includedSkillTags: [ 'tier-3' ],
          numberOfSkill: 1
        }
      ],
      actionGain: [],
      statModifier: [],
      attributeModifier: []
    },
    12: {
      proficiencyPoint: 0,
      skillGain: [],
      actionGain: [],
      statModifier: [
        { statId: 'any', value: 1 }
      ],
      attributeModifier: []
    }
  },
  shortDowntimeActivitySlots: 2,
  longDowntimeActivitySlots: 1,
  tags: [ 'base-game-rules' ]
};
  