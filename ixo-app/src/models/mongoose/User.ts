import mongoose, { Document, Model, Schema } from 'mongoose';
import type { UserRole } from '@/types/user';

export interface IUser extends Document<mongoose.Types.ObjectId> {
  username: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'user', enum: [ 'admin', 'user', 'editor' ] }
}, { timestamps: true });

export const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema); 