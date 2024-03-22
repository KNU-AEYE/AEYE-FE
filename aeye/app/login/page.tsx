'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Parse access token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    // Save access token to local storage or state
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    router.push('/home');
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default LoginPage;

