import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  useScrollAnimation,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  fadeInUp,
} from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const carouselImages = [
  '/images/about-ninos.png',
  '/images/about-presentacion.png',
  '/images/about-bandera-azul.png',
];

const teamItems = [
  {
    id: 1,
    header:
      'Ariadna Sánchez G. — Profesional en Sostenibilidad, Gestión de Proyectos Socioambientales, Educación e Interpretación Ambiental',
    body:
      'Profesional en Manejo de Recursos Naturales con más de 20 años de experiencia en la formulación, coordinación y evaluación de proyectos socioambientales y de extensión comunitaria. Experiencia sólida de trabajo con ONGs, así como consultora para entidades como Cornell University, UCR, UCI, PNUD y empresas privadas en comunidades rurales y costeras de la zona sur y norte del país y a nivel internacional. Experiencia en el desarrollo de iniciativas de conservación y sensibilización ambiental con diversas audiencias adaptando la comunicación estratégica a distintos contextos. Guía naturalista bilingüe (ES/EN) con más de 5.000 horas de facilitación educativa, conducción de grupos e interpretación ambiental. Experiencia en administración de negocios gastronómicos y turísticos. Su formación multidisciplinaria en recursos naturales, turismo y artes fortalece sus habilidades de comunicación, liderazgo y diseño de experiencias orientadas a generar cambios de comportamiento y promover una gobernanza local para el desarrollo sostenible y regenerativo.',
  },
  {
    id: 2,
    header: 'Carla Azofeifa R. — Consultora en Sostenibilidad',
    body: 'Falta Resumen',
  },
];

const AboutSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openItem, setOpenItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleItem = (itemId) => {
    setOpenItem((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section id={id} className="section-padding bg-cream" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              {carouselImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`About SAVIA ${index + 1}`}
                  className={`absolute inset-0 w-full h-[500px] object-cover transition-opacity duration-700 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gold rounded-br-2xl" />
          </motion.div>

          <motion.div variants={fadeInRight}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {t.about.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">{t.about.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-2">Misión:</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{t.about.mission}</p>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-primary mb-3">Valores:</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">Integridad:</span> {t.about.value1}
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">Rigor técnico:</span> {t.about.value2}
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">Innovación:</span> {t.about.value3}
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">Colaboración:</span> {t.about.value4}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">{t.about.teamTitle}</h4>
              <div className="space-y-3">
                {teamItems.map((item) => {
                  const isOpen = openItem === item.id;

                  return (
                    <motion.div key={item.id} variants={fadeInUp} className="border border-accent/20 rounded-xl p-4">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="w-full text-left flex justify-between items-start cursor-pointer gap-3"
                      >
                        <span className="font-medium text-primary text-sm leading-relaxed">{item.header}</span>
                        <ChevronDown
                          size={18}
                          className={`text-primary transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>
                      {isOpen ? (
                        <p className="text-sm text-gray-600 leading-relaxed mt-3">{item.body}</p>
                      ) : null}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
