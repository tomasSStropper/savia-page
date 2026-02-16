import { motion } from 'framer-motion';
import { Search, ClipboardList, Settings, BarChart3 } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const AboutSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  const steps = [
    { icon: Search, num: '01', title: t.about.step1Title, desc: t.about.step1Desc },
    { icon: ClipboardList, num: '02', title: t.about.step2Title, desc: t.about.step2Desc },
    { icon: Settings, num: '03', title: t.about.step3Title, desc: t.about.step3Desc },
    { icon: BarChart3, num: '04', title: t.about.step4Title, desc: t.about.step4Desc },
  ];

  return (
    <section id={id} className="section-padding bg-cream" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600"
                alt="Costa Rican rainforest - environmental consulting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gold rounded-br-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeInRight}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-accent/10 text-secondary border border-accent/20">
              {t.about.badge}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              {t.about.description}
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <step.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-accent/60">{step.num}</span>
                      <h4 className="font-semibold text-primary">{step.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
