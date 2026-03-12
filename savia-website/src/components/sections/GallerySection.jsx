import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';

const galleryItems = [
  { src: '/images/hero-circle.jpg', alt: 'Talleres comunitarios', category: 1 },
  { src: '/images/hero-outdoor.jpg', alt: 'Educación en campo', category: 2 },
  { src: '/images/hero-kids.jpg', alt: 'Ciencia ciudadana', category: 4 },
  { src: '/images/hero-workshop.jpg', alt: 'Diagnósticos empresariales', category: 3 },
  { src: '/images/hero-ecomaletas.jpg', alt: 'Productos sostenibles', category: 4 },
];

const GallerySection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredItems =
    activeCategory === 0
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id={id} className="section-padding bg-white" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.gallery.badge} title={t.gallery.title} />

        {/* Category filters */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
          {t.gallery.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-accent/10 hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, i) => (
            <motion.div
              key={`${item.src}-${i}`}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
