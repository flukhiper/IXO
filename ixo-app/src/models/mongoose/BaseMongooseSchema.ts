import { Types } from 'mongoose';

export interface BaseMongooseSchema  {
  gameSystemId: string;
  ownerId: Types.ObjectId;
  createdAt: Date;
}