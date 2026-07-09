import { useScrollPosition } from '../hooks/useScrollPosition';

/**
 * Thin gold progress bar fixed to the top of the viewport.
 */
export default function ScrollProgress() {
  const { progress } = useScrollPosition();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gold-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
