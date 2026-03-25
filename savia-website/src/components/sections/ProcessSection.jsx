import { motion } from 'framer-motion';
import { Search, FileText, Settings, Award } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';

const ProcessSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

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
        <SectionTitle badge="Cómo Trabajamos" title="De la estrategia a la medición del impacto" light />

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

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-accent/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center relative"
              >
                {/* Dot on line */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto relative z-10">
                    <step.icon size={28} className="text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-dark text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>

                {/* Vertical connection line for mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-accent/30 mx-auto mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
