'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage () {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get('callbackUrl') || '/demo'; // fallback route

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
      callbackUrl
    });

    if (res?.error) {
      setError('Invalid username or password');
    } else if (res?.ok && res.url) {
      router.push(res.url);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h1 className="text-2xl font-bold">Login</h1>

        <div>
          <label className="block text-sm font-medium">username</label>
          <input
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
