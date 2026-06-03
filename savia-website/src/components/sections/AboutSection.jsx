import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const AboutSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();
  const [openTeam, setOpenTeam] = useState(null);

  return (
    <section id={id} className="section-padding bg-cream" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
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

          <div className="mt-8">
            <h4 className="font-semibold text-primary mb-4">Nuestro Equipo</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {/* Ariadna */}
              <div className="border border-accent/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent">
                <div className="h-1.5 bg-gradient-to-r from-secondary to-accent" />
                <div className="p-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-accent">
                    <span className="text-accent font-semibold text-lg">AS</span>
                  </div>
                  <h5 className="font-semibold text-primary text-sm text-center mb-1">Ariadna Sánchez G.</h5>
                  <p className="text-xs text-accent text-center leading-tight mb-3">
                    Profesional en Sostenibilidad, Gestión de Proyectos Socioambientales, Educación e Interpretación Ambiental
                  </p>
                  <div className="h-px bg-gray-100 mb-3" />
                  <button
                    onClick={() => setOpenTeam(openTeam === 'ariadna' ? null : 'ariadna')}
                    className="w-full flex items-center justify-between text-xs text-gray-500 hover:text-accent transition-colors"
                  >
                    <span>{openTeam === 'ariadna' ? 'Cerrar perfil' : 'Ver perfil completo'}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${openTeam === 'ariadna' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openTeam === 'ariadna' && (
                    <p className="text-xs text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                      Profesional en Manejo de Recursos Naturales con más de 20 años de experiencia en la formulación, coordinación y evaluación de proyectos socioambientales y de extensión comunitaria. Experiencia sólida de trabajo con ONGs, así como consultora para entidades como Cornell University, UCR, UCI, PNUD y empresas privadas en comunidades rurales y costeras de la zona sur y norte del país y a nivel internacional. Experiencia en el desarrollo de iniciativas de conservación y sensibilización ambiental con diversas audiencias adaptando la comunicación estratégica a distintos contextos. Guía naturalista bilingüe (ES/EN) con más de 5.000 horas de facilitación educativa, conducción de grupos e interpretación ambiental. Experiencia en administración de negocios gastronómicos y turísticos. Su formación multidisciplinaria en recursos naturales, turismo y artes fortalece sus habilidades de comunicación, liderazgo y diseño de experiencias orientadas a generar cambios de comportamiento y promover una gobernanza local para el desarrollo sostenible y regenerativo.
                    </p>
                  )}
                </div>
              </div>

              {/* Carla */}
              <div className="border border-accent/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent">
                <div className="h-1.5 bg-gradient-to-r from-secondary to-accent" />
                <div className="p-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-semibold text-lg">CA</span>
                  </div>
                  <h5 className="font-semibold text-primary text-sm text-center mb-1">Carla Azofeifa R.</h5>
                  <p className="text-xs text-accent text-center leading-tight mb-3">
                    Consultora en Sostenibilidad
                  </p>
                  <div className="h-px bg-gray-100 mb-3" />
                  <button
                    onClick={() => setOpenTeam(openTeam === 'carla' ? null : 'carla')}
                    className="w-full flex items-center justify-between text-xs text-gray-500 hover:text-accent transition-colors"
                  >
                    <span>{openTeam === 'carla' ? 'Cerrar perfil' : 'Ver perfil completo'}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${openTeam === 'carla' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openTeam === 'carla' && (
                    <p className="text-xs text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                      Falta Resumen
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
