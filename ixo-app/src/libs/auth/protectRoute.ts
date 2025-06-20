import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const protectRoute = async (fullPathWithQuery: string) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    const encodedCallback = encodeURIComponent(fullPathWithQuery);
    redirect(`/login?callbackUrl=${encodedCallback}`);
  }

  return session;
};
