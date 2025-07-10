import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import type { UserRole } from '@/types/user';

export async function requireRole (request: Request, allowedRoles: UserRole[]) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !allowedRoles.includes(session.user.role as UserRole)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  return session;
} 