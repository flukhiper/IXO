import { MultiLangText } from '@/types/common';

export interface BaseMapSchema {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  isPublic: boolean;
}