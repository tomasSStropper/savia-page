import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { fadeInUp } from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useLang();
  const IconComponent = Icons[service.icon];
  const title = lang === 'es' ? service.title : service.titleEN;
  const bullets = (lang === 'es' ? service.bullets : service.bulletsEN) || [];

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl border border-accent/20 transition-all duration-400 relative overflow-hidden group flex flex-col"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 20px 60px rgba(27, 67, 50, 0.15)'
          : '0 4px 24px rgba(27, 67, 50, 0.08)',
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1 z-10 transition-all duration-400"
        style={{ backgroundColor: isHovered ? service.color : 'transparent' }}
      />

      {service.image && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={service.image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${service.color}20` }}
        >
          {IconComponent && <IconComponent size={28} style={{ color: service.color }} />}
        </div>

        <h3 className="font-display text-xl font-bold text-primary mb-4">{title}</h3>

        <ul className="space-y-2.5 mb-6">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 font-body text-sm text-gray-600 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        <button
          className="mt-auto text-sm font-semibold flex items-center gap-2 transition-colors"
          style={{ color: service.color }}
        >
          {t.services.learnMore}
          <Icons.ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
