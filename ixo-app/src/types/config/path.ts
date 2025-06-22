import type { MultiLangText } from '@/types/common';

export interface PathConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];
}