import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useLang();

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group h-96"
    >
      <img
        src={project.image}
        alt={lang === 'es' ? project.title : project.titleEN}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

      {/* Category badge */}
      <span className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-white text-xs font-semibold rounded-full">
        {lang === 'es' ? project.category : project.categoryEN}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
        {project.year}
      </span>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-lg font-bold text-white mb-2">
          {lang === 'es' ? project.title : project.titleEN}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-accent/20 text-light">
              {tag}
            </span>
          ))}
        </div>

        {/* Hover overlay with details */}
        <motion.div
          initial={false}
          animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-white/20 space-y-2">
            <div>
              <span className="text-accent text-xs font-semibold uppercase">{t.projects.challenge}</span>
              <p className="text-white/80 text-sm">{lang === 'es' ? project.challenge : project.challengeEN}</p>
            </div>
            <div>
              <span className="text-accent text-xs font-semibold uppercase">{t.projects.solution}</span>
              <p className="text-white/80 text-sm">{lang === 'es' ? project.solution : project.solutionEN}</p>
            </div>
            <div>
              <span className="text-accent text-xs font-semibold uppercase">{t.projects.results}</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {(lang === 'es' ? project.results : project.resultsEN).map((r, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-accent/30 text-white">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
