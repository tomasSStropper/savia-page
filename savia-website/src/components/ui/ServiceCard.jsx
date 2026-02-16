import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { fadeInUp } from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useLang();
  const IconComponent = Icons[service.icon];

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-8 border border-accent/20 transition-all duration-400 cursor-pointer relative overflow-hidden group"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 20px 60px rgba(27, 67, 50, 0.15)'
          : '0 4px 24px rgba(27, 67, 50, 0.08)',
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-400"
        style={{
          backgroundColor: isHovered ? service.color : 'transparent',
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ backgroundColor: `${service.color}20` }}
      >
        {IconComponent && <IconComponent size={28} style={{ color: service.color }} />}
      </div>
      <h3 className="font-display text-xl font-bold text-primary mb-3">
        {lang === 'es' ? service.title : service.titleEN}
      </h3>
      <p className="text-gray-600 mb-4 font-body text-sm leading-relaxed">
        {lang === 'es' ? service.description : service.descriptionEN}
      </p>
      <motion.ul
        initial={false}
        animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden space-y-2 mb-4"
      >
        {(lang === 'es' ? service.items : service.itemsEN).map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isHovered ? { opacity: 1, x: 0, transition: { delay: i * 0.05 } } : { opacity: 0, x: -10 }}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        initial={false}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        className="text-sm font-semibold flex items-center gap-2 transition-colors"
        style={{ color: service.color }}
      >
        {t.services.learnMore}
        <Icons.ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
