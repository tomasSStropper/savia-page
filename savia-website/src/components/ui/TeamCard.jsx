import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { fadeInUp } from '../../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const TeamCard = ({ member }) => {
  const { lang, t } = useLang();

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-b from-light/20 to-white rounded-2xl p-8 border border-accent/10 text-center group hover:shadow-lg transition-all duration-400"
    >
      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-all duration-400 group-hover:scale-105">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-display text-xl font-bold text-primary mb-1">{member.name}</h3>
      <p className="text-accent font-medium text-sm mb-1">
        {lang === 'es' ? member.role : member.roleEN}
      </p>
      <p className="text-gray-500 text-xs mb-4">
        {lang === 'es' ? member.specialty : member.specialtyEN}
      </p>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {lang === 'es' ? member.bio : member.bioEN}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {member.certifications.map((cert, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-secondary font-medium"
          >
            {cert}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-1 text-xs text-gray-500 mb-4">
        {member.education.map((edu, i) => (
          <span key={i} className="block">{edu}</span>
        ))}
      </div>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
        aria-label={`${t.team.viewLinkedin} - ${member.name}`}
      >
        <Linkedin size={18} />
        {t.team.viewLinkedin}
      </a>
    </motion.div>
  );
};

export default TeamCard;
