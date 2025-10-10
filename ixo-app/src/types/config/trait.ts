import { MAX_TRAIT_VALUE } from '@/constants/config/trait';
import { BaseConfig } from './common';

export interface TraitConfig extends BaseConfig {
  value: typeof MAX_TRAIT_VALUE[number];
}