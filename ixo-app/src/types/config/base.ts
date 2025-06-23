import { MultiLangText } from '@/types/common';

export interface BaseMapConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
}