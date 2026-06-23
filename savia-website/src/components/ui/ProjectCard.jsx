import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Leaf, ExternalLink } from 'lucide-react';
import { fadeInUp } from '../../hooks/useScrollAnimation';

const Field = ({ label, children }) => (
  <div>
    <span className="text-accent text-xs font-semibold uppercase tracking-wide">{label}</span>
    <div className="text-light/80 text-sm leading-relaxed mt-0.5">{children}</div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  const hasDetails =
    project.challenge ||
    (project.results && project.results.length) ||
    project.partners ||
    project.implementation ||
    (project.links && project.links.length);

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl overflow-hidden bg-primary flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen o placeholder de marca */}
      <div className="relative h-44 w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <Leaf size={52} className="text-accent/30" />
          </div>
        )}
        {project.credit && (
          <span className="absolute bottom-2 right-2 text-[10px] text-white/60 bg-black/30 px-2 py-0.5 rounded-full">
            {project.credit}
          </span>
        )}
      </div>

      {/* Cuerpo */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-white leading-snug">
          {project.title}
        </h3>
        {project.location && (
          <p className="text-light/60 text-xs mt-1">{project.location}</p>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-1 rounded-full bg-accent/15 text-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Botón desplegar (solo si hay detalle) */}
        {hasDetails && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-4 w-full flex items-center justify-between text-xs text-light/70 hover:text-accent transition-colors"
          >
            <span>{open ? 'Cerrar' : 'Ver detalle'}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        {/* Detalle desplegable */}
        <motion.div
          initial={false}
          animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-white/15 space-y-3">
            {project.challenge && <Field label="Desafío">{project.challenge}</Field>}

            {project.results && project.results.length > 0 && (
              <Field label="Resultados">
                <ul className="space-y-1.5 mt-1">
                  {project.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </Field>
            )}

            {project.implementation && (
              <Field label="Implementación">{project.implementation}</Field>
            )}

            {project.partners && (
              <Field label="Socios estratégicos">{project.partners}</Field>
            )}

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-1">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-light hover:text-accent inline-flex items-center gap-1 transition-colors"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
