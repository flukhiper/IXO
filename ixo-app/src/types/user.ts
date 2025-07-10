import type { DefaultUser, DefaultSession } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';

export type UserRole = 'admin' | 'user' | 'editor';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      id: string;
      role?: UserRole;
    };
  }
  
  interface User extends DefaultUser {
    username?: string;
    password?: string;
    role?: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
  
declare module 'next-auth/jwt' {
  interface JWT extends Record<string, unknown>, DefaultJWT {
    id: string;
    role?: UserRole;
  }
}