import { TALENT_TYPE } from '@/constants/config/talent';
import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export type TalentType = 'unique' | 'augment';

export interface BaseTalentConfig extends BaseConfig {
  type: TalentType;
}

export interface UniqueTalentConfig extends BaseTalentConfig {
  type: typeof TALENT_TYPE.UNIQUE;
}

export interface AugmentTalentConfig extends BaseTalentConfig {
  type: typeof TALENT_TYPE.AUGMENT;

  required: AugmentTalentRequirement;
}

export interface AugmentTalentRequirement {
  talentId: string | typeof NONE_VALUE.STRING;
  level: number | typeof NONE_VALUE.NUMBER;
}

export type TalentConfig = UniqueTalentConfig | AugmentTalentConfig;