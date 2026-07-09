import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll position and progress (0–100).
 * Used by the navbar (sticky styling), scroll progress bar and back-to-top button.
 */
export function useScrollPosition() {
  const [scroll, setScroll] = useState({ y: 0, progress: 0 });

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (y / height) * 100 : 0;
      setScroll({ y, progress });
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return scroll;
}
