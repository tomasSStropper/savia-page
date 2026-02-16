import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/useScrollAnimation';

const SectionTitle = ({ badge, title, light = false }) => {
  return (
    <div className="text-center mb-16">
      <motion.span
        variants={fadeInUp}
        className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
          light
            ? 'bg-white/10 text-light border border-white/20'
            : 'bg-accent/10 text-secondary border border-accent/20'
        }`}
      >
        {badge}
      </motion.span>
      <motion.h2
        variants={fadeInUp}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto ${
          light ? 'text-cream' : 'text-primary'
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
