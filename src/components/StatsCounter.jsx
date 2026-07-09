import { useCountUp } from '../hooks/useCountUp';

/**
 * Single animated statistic — counts up when scrolled into view.
 */
export default function StatsCounter({ icon: Icon, value, suffix = '', label }) {
  const [ref, count] = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full
                      bg-gold-gradient text-dark text-2xl shadow-gold">
        <Icon />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-gold font-heading">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-widest text-dark/70 dark:text-cream/70">
        {label}
      </p>
    </div>
  );
}
