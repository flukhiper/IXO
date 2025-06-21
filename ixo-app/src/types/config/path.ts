import type { MultiLangText } from '../common';

export interface PathConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];
}