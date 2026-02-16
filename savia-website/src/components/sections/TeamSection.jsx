import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import TeamCard from '../ui/TeamCard';
import { team } from '../../data/team';
import { useLang } from '../context/LanguageContext';

const TeamSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();

  return (
    <section id={id} className="section-padding bg-cream" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.team.badge} title={t.team.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
