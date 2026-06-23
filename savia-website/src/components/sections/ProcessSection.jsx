import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Target, Sprout, Recycle, RefreshCw } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import LeafWatermark from '../LeafWatermark';
import { useLang } from '../context/LanguageContext';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico inicial',
    desc: 'Analizamos el estado actual para fijar la línea base.',
    back: 'Partimos de evidencia, no de supuestos: levantamos una línea base real del sitio y sus actores, para que cada decisión tenga sustento.',
  },
  {
    icon: Target,
    title: 'De narrativa a cuantificación',
    desc: 'Formulamos un plan con metas claras, tiempos y KPIs medibles.',
    back: 'Convertimos los objetivos en indicadores con metas y plazos, para que el avance se pueda seguir y demostrar, no solo contar.',
  },
  {
    icon: Sprout,
    title: 'Implementación',
    desc: 'Acompañamos la ejecución con soporte continuo e insumos.',
    back: 'Acompañamos la puesta en marcha paso a paso y fortalecemos al equipo local, para que los resultados se sostengan en el tiempo.',
  },
  {
    icon: Recycle,
    title: 'De presentaciones ESG a modelos de ACV',
    desc: 'Llevamos la comunicación de resultados a la evaluación de impactos reales.',
    back: 'Vamos más allá del reporte: medimos el impacto real de productos y procesos con Análisis de Ciclo de Vida, respaldando con evidencia lo que se comunica.',
  },
];

const FlipStep = ({ step, index }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = step.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Girar tarjeta: ${step.title}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      className="relative h-64 cursor-pointer outline-none"
      style={{ perspective: 1000 }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'none' }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 rounded-2xl bg-cream p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-16 h-16 mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(27,67,50,0.08)' }}
            >
              <Icon size={30} className="text-secondary" />
            </div>
            <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-secondary text-cream text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
          </div>
          <h3 className="font-display text-lg font-bold text-primary mb-2">{step.title}</h3>
          <p className="text-primary/60 text-sm leading-relaxed">{step.desc}</p>
          <span className="mt-3 text-secondary text-xs flex items-center gap-1">
            <RefreshCw size={13} /> Tocar para ver más
          </span>
        </div>

        {/* Reverso */}
        <div
          className="absolute inset-0 rounded-2xl bg-primary p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-cream/50 text-xs tracking-wide mb-2">En detalle</span>
          <p className="text-cream text-sm leading-relaxed">{step.back}</p>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  return (
    <section
      id={id}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#0d2218' }}
      ref={ref}
    >
      {/* Fondo con hojas (verde del home, muy tenues) */}
      <LeafWatermark style={{ left: '-50px', top: '-20px', height: '280px', opacity: 0.09, transform: 'rotate(20deg)' }} />
      <LeafWatermark style={{ left: 'auto', right: '-60px', top: '30%', height: '360px', opacity: 0.07, transform: 'rotate(-150deg)' }} />
      <LeafWatermark style={{ left: 'auto', right: '24%', top: 'auto', bottom: '-90px', height: '220px', opacity: 0.06, transform: 'rotate(-35deg)' }} />
      <LeafWatermark style={{ left: '8%', top: 'auto', bottom: '-70px', height: '200px', opacity: 0.06, transform: 'rotate(60deg)' }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max relative z-10"
      >
        <SectionTitle badge={t.process.badge} title="De la estrategia a la medición del impacto" light />

        <motion.div
          variants={fadeInUp}
          className="text-white/80 max-w-5xl mx-auto mb-12 space-y-6 text-sm md:text-base leading-relaxed"
        >
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <FlipStep key={i} step={step} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
