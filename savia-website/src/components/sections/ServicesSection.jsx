import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';
import { useLang } from '../context/LanguageContext';

const ServicesSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  return (
    <section id={id} className="section-padding bg-white" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.services.badge} title={t.services.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
