import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';

const testimonials = {
  es: [
    {
      quote: "SAVIA nos acompañó desde cero hasta obtener nuestra certificación de Carbono Neutral. El proceso fue claro, ordenado y los resultados superaron nuestras expectativas.",
      author: "Gerente General",
      company: "Empresa Manufacturera, San José",
      rating: 5,
    },
    {
      quote: "La claridad con que Carla y su equipo nos explicaron cada paso del proceso de Bandera Azul fue fundamental para que todo nuestro equipo se comprometiera.",
      author: "Directora de Operaciones",
      company: "Municipalidad Regional, Costa Rica",
      rating: 5,
    },
    {
      quote: "Pensábamos que la sostenibilidad era costosa y complicada. SAVIA nos demostró que es una inversión con retorno real.",
      author: "Propietario",
      company: "Hotel Boutique, Guanacaste",
      rating: 5,
    },
  ],
  en: [
    {
      quote: "SAVIA accompanied us from scratch to obtaining our Carbon Neutral certification. The process was clear, organized, and the results exceeded our expectations.",
      author: "General Manager",
      company: "Manufacturing Company, San José",
      rating: 5,
    },
    {
      quote: "The clarity with which Carla and her team explained each step of the Blue Flag process was fundamental for our entire team's commitment.",
      author: "Operations Director",
      company: "Regional Municipality, Costa Rica",
      rating: 5,
    },
    {
      quote: "We thought sustainability was expensive and complicated. SAVIA showed us it's an investment with real returns.",
      author: "Owner",
      company: "Boutique Hotel, Guanacaste",
      rating: 5,
    },
  ],
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useScrollAnimation();
  const { lang, t } = useLang();
  const items = testimonials[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.testimonials.badge} title={t.testimonials.title} />

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-soft text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: items[current].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-display text-lg md:text-xl text-primary leading-relaxed mb-8 italic">
                "{items[current].quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-primary">{items[current].author}</p>
                <p className="text-sm text-gray-500">{items[current].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="text-primary" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-accent w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="text-primary" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
