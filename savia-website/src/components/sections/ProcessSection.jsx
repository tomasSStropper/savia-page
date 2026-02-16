import { motion } from 'framer-motion';
import { Search, FileText, Settings, Award } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';

const ProcessSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  const steps = [
    { icon: Search, title: t.process.step1Title, desc: t.process.step1Desc },
    { icon: FileText, title: t.process.step2Title, desc: t.process.step2Desc },
    { icon: Settings, title: t.process.step3Title, desc: t.process.step3Desc },
    { icon: Award, title: t.process.step4Title, desc: t.process.step4Desc },
  ];

  return (
    <section id={id} className="section-padding bg-primary dot-pattern" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.process.badge} title={t.process.title} light />

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
