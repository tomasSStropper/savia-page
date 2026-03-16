import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';
import { useLang } from '../context/LanguageContext';

const WORD_PAIRS = [
  'Empresas, Instituciones',
  'Personas, Organizaciones',
  'Comunidades, Instituciones',
  'Construcciones, Empresas',
  'Personas, Comunidades',
  'Organizaciones, Empresas',
];

const NEW_BLOCKS = [
  {
    title: 'Gestión de Residuos y Economía Circular',
    items: [
      'Planes de manejo de residuos sólidos y líquidos a nivel empresarial, institucional y para eventos masivos.',
      'Estrategias de reducción, reutilización y reciclaje a nivel empresarial y comunitario.',
      'Diseño de procesos basados en principios de circularidad y reducción de huella hídrica y de carbono.',
    ],
  },
  {
    title: 'Diagnósticos y Estrategias de Sostenibilidad',
    items: [
      'Evaluaciones de huella de carbono y agua.',
      'Auditorías de sostenibilidad.',
      'Planes de acción para la descarbonización y metas de emisiones netas cero.',
      'Diseño de reportes del "Qué" (ESG) al "Cómo" (ACV).',
    ],
  },
  {
    title: 'Educación y Capacitación para el Desarrollo Sostenible',
    items: [
      'Charlas y talleres en distintos temas (consumo responsable, reutilización, reciclaje, manejo de residuos orgánicos y especiales, alternativas al uso de materiales plásticos y productos químicos, manejo de sistemas de tratamiento de aguas residuales).',
      'Diseño, planificación y ejecución de actividades de sensibilización ambiental (festivales, cinéforos, actividades lúdicas y de expresión artística, limpiezas de espacios públicos con disposición final responsable...).',
      'Diseño, implementación y evaluación de programas y proyectos educativos.',
      'Formación en cumplimiento normativo ambiental.',
    ],
  },
  {
    title: 'Interpretación Ambiental',
    items: [
      'Interpretación de senderos y señalización en fincas y proyectos eco-turísticos.',
      'Inventarios de biodiversidad. Estos pueden hacerse de forma personalizada o de forma participativa mediante ciencia ciudadana.',
      'Elaboración de materiales didácticos y de comunicación estratégica.',
    ],
  },
];

const ServicesSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();
  const [pairIndex, setPairIndex] = useState(() => Math.floor(Math.random() * WORD_PAIRS.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setPairIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * WORD_PAIRS.length);
        } while (next === prev);
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
            Soluciones integrales a medida para
          </motion.h2>
          <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={pairIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent italic"
              >
                {WORD_PAIRS[pairIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtitle with rotating words (Cambio 3) */}
        <motion.div variants={fadeInUp} className="text-center mb-6 max-w-3xl mx-auto">
          <p className="text-gray-600 font-body text-lg leading-relaxed">
            Soluciones integrales a la medida para{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={pairIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-accent font-medium italic"
              >
                {WORD_PAIRS[pairIndex].toLowerCase()}
              </motion.span>
            </AnimatePresence>
            ...
          </p>
        </motion.div>

        {/* Description paragraphs (Cambio 3) */}
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gray-600 font-body text-base leading-relaxed">
            Asesoramos en la adopción de estrategias para el cumplimiento de estándares de sostenibilidad.
          </p>
          <p className="text-gray-600 font-body text-base leading-relaxed">
            Impulsamos la integración intersectorial, creando sinergias entre instituciones públicas y privadas y de distintos actores sociales para mejorar el entorno productivo y de las comunidades.
          </p>
          <p className="text-gray-600 font-body text-base leading-relaxed">
            Brindamos asesoría técnica para la formulación de políticas públicas, normativas y planificación a nivel nacional y local.
          </p>
        </motion.div>

        {/* Existing service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* New content blocks (Cambio 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {NEW_BLOCKS.map((block) => (
            <motion.div
              key={block.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-accent/20"
              style={{ boxShadow: '0 4px 24px rgba(27, 67, 50, 0.08)' }}
            >
              <h3 className="font-display text-xl font-bold text-primary mb-4">
                {block.title}
              </h3>
              <ul className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-body leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
