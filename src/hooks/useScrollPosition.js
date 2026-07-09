import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll position and progress (0–100).
 * Throttled with requestAnimationFrame so state updates (and re-renders)
 * happen at most once per frame — keeps scrolling smooth.
 */
export function useScrollPosition() {
  const [scroll, setScroll] = useState({ y: 0, progress: 0 });

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (y / height) * 100 : 0;
      setScroll((prev) =>
        // Skip no-op updates (avoids re-renders when nothing changed)
        Math.abs(prev.y - y) < 1 ? prev : { y, progress }
      );
      ticking = false;
    };

    const handler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return scroll;
}
