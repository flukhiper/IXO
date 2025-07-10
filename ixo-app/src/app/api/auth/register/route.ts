import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import { initMongo } from '@/libs/mongodb';
import { UserModel } from '@/models/mongoose/User';
import { MONGODB_URI } from '@/configs/mongodb';

export async function POST (req: NextRequest) {
  await initMongo(MONGODB_URI!);
  const { username, email, password, name } = await req.json();
  if (!username || !email || !password || !name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  const existing = await UserModel.findOne({ $or: [ { username }, { email } ] });
  if (existing) {
    return NextResponse.json({ error: 'Username or email already exists' }, { status: 409 });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await UserModel.create({ username, email, password: hashed, name });
  const { password: _, ...userData } = user.toObject();
  return NextResponse.json(userData, { status: 201 });
} 