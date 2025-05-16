import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { Session, SessionStrategy, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

import { NEXTAUTH_SECRET } from '@/configs/auth';
import { mockUser } from '@/mock/user';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        
        const user = mockUser.find(
          (user) =>
            user.username === credentials?.username &&
            user.password === credentials?.password
        );

        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        };
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.role = user.role; // attach role
      }
      return token;
    },
    async session ({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.role = token.role; // pass role to session
      }
      return session;
    }
  },
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt' as SessionStrategy // or "database" if you use a DB-backed session
  },
  secret: NEXTAUTH_SECRET // set in .env file
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
