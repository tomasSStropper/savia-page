import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import ServiceCard from '../ui/ServiceCard';
import BranchWatermark from '../ui/BranchWatermark';
import { services } from '../../data/services';
import { useLang } from '../context/LanguageContext';

const ServicesSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();
  const WORD_PAIRS = t.services.wordPairs || [
    "Empresas, Instituciones",
    "Personas, Organizaciones"
  ];
  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % WORD_PAIRS.length);
    }, 3500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mergedServices = services.slice(0, 4).map((service, index) => ({
    ...service,
    title: t.services.cards[index].title,
    titleEN: t.services.cards[index].titleEN,
    bullets: t.services.cards[index].bullets || [],
    bulletsEN: t.services.cards[index].bulletsEN || [],
  }));

  return (
    <section id={id} className="section-padding bg-cream relative overflow-hidden" ref={ref}>
      <BranchWatermark style={{ top: '-30px', right: '-20px', height: '42vh', opacity: 0.14, transform: 'rotate(150deg)' }} />
      <BranchWatermark style={{ top: 'auto', bottom: '-30px', left: '-20px', right: 'auto', height: '36vh', opacity: 0.12, transform: 'rotate(-25deg) scaleX(-1)' }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max relative z-10"
      >
        <div className="text-center mb-6">
          <motion.span
            variants={fadeInUp}
            className="inline-block px-6 py-2.5 rounded-full text-base md:text-lg font-medium bg-primary text-cream border border-primary"
          >
            {t.services.badge}
          </motion.span>
        </div>

        <div className="text-center mb-8">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary"
          >
            {t.services.titleLine1}
          </motion.h2>
          <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={pairIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary italic"
              >
                {WORD_PAIRS[pairIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gray-600 font-body text-base leading-relaxed">{t.services.description1}</p>
          <p className="text-gray-600 font-body text-base leading-relaxed">{t.services.description2}</p>
          <p className="text-gray-600 font-body text-base leading-relaxed">{t.services.description3}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mergedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
