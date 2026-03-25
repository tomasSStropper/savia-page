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
    description: t.services.cards[index].description,
    descriptionEN: t.services.cards[index].descriptionEN,
    items: [t.services.cards[index].description],
    itemsEN: [t.services.cards[index].descriptionEN],
  }));


  return (
    <section id={id} className="section-padding bg-white" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        {/* Badge */}
        <div className="text-center mb-6">
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-secondary border border-accent/20"
          >
            {t.services.badge}
          </motion.span>
        </div>

        {/* Animated Title (Cambio 2) */}
        <div className="text-center mb-8">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary"
          >
            {t.services.title}
          </motion.h2>
        </div>

        {/* Description paragraphs (Cambio 3) */}
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gray-600 font-body text-base leading-relaxed">
            {t.services.description1}
          </p>
          <p className="text-gray-600 font-body text-base leading-relaxed">
            {t.services.description2}
          </p>
          <p className="text-gray-600 font-body text-base leading-relaxed">
            {t.services.description3}
          </p>
        </motion.div>

        {/* Existing service cards */}
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
