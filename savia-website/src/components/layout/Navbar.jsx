import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { useLang } from '../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, to: 'inicio' },
    { label: t.nav.about, to: 'enfoque' },
    { label: t.nav.services, to: 'servicios' },
    { label: t.nav.team, to: 'equipo' },
    { label: t.nav.projects, to: 'proyectos' },
    { label: t.nav.contact, to: 'contacto' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 40px rgba(27,67,50,0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <ScrollLink to="inicio" smooth duration={800} className="cursor-pointer">
            <div className="flex flex-col">
              <span
                className={`font-display text-2xl font-bold tracking-wide transition-colors duration-400 ${
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                SAVIA
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase font-body transition-colors duration-400 ${
                  scrolled ? 'text-gray-500' : 'text-white/60'
                }`}
              >
                Sustainability Advisors
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={800}
                offset={-80}
                className={`text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-accent ${
                  scrolled ? 'text-dark' : 'text-white/90'
                }`}
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className={`text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${
                scrolled
                  ? 'border-gray-300 text-dark hover:border-accent'
                  : 'border-white/30 text-white hover:border-white/60'
              }`}
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <ScrollLink to="contacto" smooth duration={800}>
              <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-gold transition-all duration-300 flex items-center gap-2">
                {t.nav.cta}
                <ArrowRight size={16} />
              </button>
            </ScrollLink>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-dark" />
            ) : (
              <Menu size={24} className={scrolled ? 'text-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={800}
                offset={-80}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-bold text-primary cursor-pointer hover:text-accent transition-colors"
              >
                {link.label}
              </ScrollLink>
            ))}
            <button
              onClick={toggleLang}
              className="text-sm font-medium px-4 py-2 rounded-full border border-gray-300 text-dark"
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'English' : 'Español'}
            </button>
            <ScrollLink to="contacto" smooth duration={800} onClick={() => setMobileOpen(false)}>
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-gold transition-all">
                {t.nav.cta}
              </button>
            </ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
