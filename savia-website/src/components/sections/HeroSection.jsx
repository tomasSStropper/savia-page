import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useLang } from '../context/LanguageContext';
import { fadeInUp, fadeInDown, staggerContainer } from '../../hooks/useScrollAnimation';

const HeroSection = ({ id }) => {
  const { t } = useLang();

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0D1F15' }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(82,183,136,0.3) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(82,183,136,0.2) 0%, transparent 70%)' }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInDown}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-8"
          style={{ borderColor: 'rgba(82, 183, 136, 0.3)', background: 'rgba(82, 183, 136, 0.1)' }}
        >
          <span className="text-sm text-light font-medium">
            🌿 {t.hero.badge}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ color: '#F8F4E9' }}
        >
          {t.hero.titlePart1}
          <span className="text-accent">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(248, 244, 233, 0.7)' }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <ScrollLink to="contacto" smooth duration={800}>
            <button className="px-8 py-4 bg-accent text-dark font-semibold rounded-full hover:bg-gold transition-all duration-300 flex items-center gap-2 justify-center">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </button>
          </ScrollLink>
          <ScrollLink to="proyectos" smooth duration={800}>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center">
              {t.hero.ctaSecondary}
            </button>
          </ScrollLink>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-8 md:gap-16"
        >
          {[
            { end: 50, suffix: '+', label: t.hero.stat1Label },
            { end: 200, prefix: '+', label: t.hero.stat2Label },
            { end: 8, label: t.hero.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-accent">
                <AnimatedCounter end={stat.end} suffix={stat.suffix || ''} prefix={stat.prefix || ''} />
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ScrollLink to="enfoque" smooth duration={800}>
          <ArrowDown size={24} className="text-white/40 cursor-pointer hover:text-accent transition-colors" />
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default HeroSection;
