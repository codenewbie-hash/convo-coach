// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
      router.replace('/welcome');
    } else {
      router.replace('/app');
    }
  }, [router]);

  return null;
}
