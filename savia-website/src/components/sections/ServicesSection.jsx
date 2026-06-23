import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';
import { useLang } from '../context/LanguageContext';

const ServicesSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  const mergedServices = services.slice(0, 4).map((service, index) => ({
    ...service,
    title: t.services.cards[index].title,
    titleEN: t.services.cards[index].titleEN,
    bullets: t.services.cards[index].bullets || [],
    bulletsEN: t.services.cards[index].bulletsEN || [],
  }));

  return (
    <section id={id} className="section-padding bg-cream" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
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
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary max-w-4xl mx-auto"
          >
            {t.services.title}
          </motion.h2>
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
