import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// Returns the session or redirects to login if not authenticated
export const protectRoute = async (fullPathWithQuery: string) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    const encodedCallback = encodeURIComponent(fullPathWithQuery);
    redirect(`/login?callbackUrl=${encodedCallback}`);
  }

  return session; // session.user will have id, name, email, role
};
