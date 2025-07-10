'use client';

import { signOut, useSession } from 'next-auth/react';
import type { ReactNode } from 'react';

interface LogoutButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function LogoutButton ({ children, className }: LogoutButtonProps) {
  const { status } = useSession();

  if (status !== 'authenticated') return null;

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      signOut({ callbackUrl: '/login' });
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`bg-red-600 text-white px-4 py-2 rounded${className ? ' ' + className : ''}`}
    >
      {children || 'Logout'}
    </button>
  );
} 