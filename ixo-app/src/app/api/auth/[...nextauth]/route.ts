import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { Session, SessionStrategy, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import bcrypt from 'bcryptjs';

import { NEXTAUTH_SECRET } from '@/configs/auth';
import { initMongo } from '@/libs/mongodb';
import { UserModel } from '@/models/mongoose/User';
import { MONGODB_URI } from '@/configs/mongodb';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        await initMongo(MONGODB_URI!);
        if (!credentials?.username || !credentials?.password) return null;
        // Allow login by username or email
        const user = await UserModel.findOne({
          $or: [
            { username: credentials.username },
            { email: credentials.username }
          ]
        });
        if (!user) return null;
        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;
        return {
          id: user._id.toString(),
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
        token.role = user.role;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session ({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt' as SessionStrategy
  },
  secret: NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
