import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service }) => {
  const IconComponent = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl p-8 border border-accent/20 relative overflow-hidden"
      style={{
        boxShadow: '0 4px 24px rgba(27, 67, 50, 0.08)',
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: service.color }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ backgroundColor: `${service.color}20` }}
      >
        {IconComponent && <IconComponent size={28} style={{ color: service.color }} />}
      </div>
      <h3 className="font-display text-xl font-bold text-primary mb-4">
        {service.title}
      </h3>
      <ul className="space-y-3">
        {service.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600 font-body leading-relaxed"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
