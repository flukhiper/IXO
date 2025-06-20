import { User } from 'next-auth';

export const mockUser: Array<User> = [
  {
    id: '1',
    name: 'Admin User',
    email: '',
    username: 'admin',
    password: 'password',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Player User',
    email: '',
    username: 'guest',
    password: 'password',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];