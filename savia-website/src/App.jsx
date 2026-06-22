import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import TeamSection from './components/sections/TeamSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import { LanguageProvider } from './components/context/LanguageContext';
import './styles/globals.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        setScrollProgress(progress);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        {/* Scroll progress bar */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
        <Navbar />
        <main>
          <HeroSection id="inicio" />
          <ServicesSection id="servicios" />
          <ProcessSection id="como-trabajamos" />
          <AboutSection id="quienes-somos" />
          <ProjectsSection id="proyectos" />
          <TeamSection id="equipo" />
          <GallerySection id="galeria" />
          <TestimonialsSection />
          <ContactSection id="contacto" />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
