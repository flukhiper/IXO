import { MultiLangText } from '@/types/common';

export interface BaseMapSchema {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  gameSystemId: string;
  ownerId: string;
  isPublic: boolean;
}