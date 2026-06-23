import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects, otherActivities } from '../../data/projects';
import { useLang } from '../context/LanguageContext';

const ProjectsSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  const enCurso = projects.filter((p) => p.status === 'curso');
  const pasados = projects.filter((p) => p.status === 'pasado');

  return (
    <section id={id} className="section-padding bg-white" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.projects.badge} title="Proyectos y Actividades" />

        {/* ---- Proyectos en curso ---- */}
        <motion.h3
          variants={fadeInUp}
          className="font-display text-2xl font-bold text-primary mb-6 mt-4"
        >
          Proyectos en curso
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enCurso.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ---- Proyectos y actividades pasadas ---- */}
        <motion.h3
          variants={fadeInUp}
          className="font-display text-2xl font-bold text-primary mb-6 mt-16"
        >
          Proyectos y actividades pasadas
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pasados.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Tarjeta especial: otras actividades */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden bg-primary flex flex-col"
          >
            <div className="h-44 w-full bg-secondary flex items-center justify-center">
              <Leaf size={52} className="text-accent/30" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-lg font-bold text-white leading-snug mb-3">
                {otherActivities.title}
              </h3>
              <ul className="space-y-2">
                {otherActivities.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-light/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
