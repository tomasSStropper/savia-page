import { motion } from 'framer-motion';
import { Search, FileText, Settings, Award } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';

const ProcessSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();


  const stepVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.25,
        ease: [0.4, 0, 0.2, 1],
        delay: i * 0.7,
      },
    }),
  };
  const steps = [
    {
      icon: Search,
      title: 'Diagnóstico Inicial',
      desc: 'Analizamos el estado actual del sitio para el establecimiento de la línea base.',
    },
    {
      icon: FileText,
      title: 'De narrativa → a cuantificación',
      desc: 'Formulamos un plan contextualizado con metas claras, tiempos y KPIs medibles.',
    },
    {
      icon: Settings,
      title: 'Implementación',
      desc: 'Acompañamos la ejecución con soporte continuo e insumos.',
    },
    {
      icon: Award,
      title: 'De presentaciones ESG → a modelos de ACV',
      desc: 'Llevamos la comunicación de resultados a procesos de evaluación de impactos reales de productos o procesos a través de Análisis de Ciclo de Vida.',
    },
  ];

  return (
    <section id={id} className="section-padding bg-primary dot-pattern" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.process.badge} title="De la estrategia a la medición del impacto" light />

        <motion.div variants={fadeInUp} className="text-white/80 max-w-5xl mx-auto mb-12 space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Nuestros servicios abarcan todo el ciclo para la implementación de proyectos: desde el diagnóstico, la formulación, ejecución, evaluación y seguimiento. Brindamos asesoría para el impulso y mejoramiento de proyectos existentes en cualquier etapa.
          </p>
          <p>
            El desarrollo de proyectos y actividades de extensión comunitaria y educación ambiental pueden ser dirigidos a una amplia variedad de audiencias — niñez y adolescencia, empresarios, tomadores de decisión, científicos, entre otros — tanto en contextos urbanos como rurales, territorios indígenas o zonas costeras.
          </p>
          <p>
            Tanto para capacitación como para fortalecimiento organizacional, acompañamos procesos de cambio con metodologías participativas, técnicas y creativas adaptadas a cada contexto.
          </p>
        </motion.div>

        {/* Serpentine / snake layout: row 1 -> 1,2 ; row 2 -> 4,3 (right to left) */}
        <div className="relative max-w-5xl mx-auto">
          {/* S-curve connector that guides the reading 1 -> 2 -> 3 -> 4 (desktop only) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 24 26 H 71 Q 76 26 76 33 V 67 Q 76 74 71 74 H 24"
              fill="none"
              stroke="#52B788"
              strokeWidth="0.45"
              strokeDasharray="1.6 1.8"
              strokeOpacity="0.45"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-28 md:gap-y-14 relative z-10">
            {steps.map((step, i) => {
              // Snake placement: 1 top-left, 2 top-right, 3 bottom-right, 4 bottom-left
              const placement = [
                'md:col-start-1 md:row-start-1',
                'md:col-start-2 md:row-start-1',
                'md:col-start-2 md:row-start-2',
                'md:col-start-1 md:row-start-2',
              ][i];
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className={`relative ${placement}`}
                >
                  <div className="relative h-full rounded-2xl border border-accent/15 bg-white/5 backdrop-blur-sm p-7 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07]">
                    {/* Icon circle + numbered badge */}
                    <div className="relative mx-auto mb-6 w-16 h-16">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center relative z-10">
                        <step.icon size={28} className="text-accent" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-dark text-xs font-bold flex items-center justify-center z-20">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
