import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

/**
 * Contact info card — icon, label and a value that can be a link.
 */
export default function ContactCard({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full
                      bg-gold/10 text-gold text-2xl transition-colors duration-300
                      group-hover:bg-gold-gradient group-hover:text-dark">
        <Icon />
      </div>
      <h4 className="text-lg font-semibold text-dark dark:text-cream">{label}</h4>
      <p className="mt-1 text-sm text-dark/70 dark:text-cream/70 break-words">{value}</p>
    </>
  );

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }}
      className="group rounded-2xl bg-white dark:bg-dark-soft p-7 text-center shadow-soft
                 border border-transparent hover:border-gold/40 transition-all">
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
           className="flex flex-col items-center">
          {content}
        </a>
      ) : (
        <div className="flex flex-col items-center">{content}</div>
      )}
    </motion.div>
  );
}
