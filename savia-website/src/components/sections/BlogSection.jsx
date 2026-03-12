import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = ({ id }) => {
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
        <SectionTitle badge={t.blog.badge} title={t.blog.title} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.blog.posts.map((post, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder image */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white/60 text-sm font-body tracking-wide uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-secondary text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition-colors">
                  {t.blog.readMore}
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
