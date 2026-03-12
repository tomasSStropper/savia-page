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
import BlogSection from './components/sections/BlogSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import { LanguageProvider } from './components/context/LanguageContext';
import './styles/globals.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
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
          <TestimonialsSection />
          <BlogSection id="blog" />
          <GallerySection id="galeria" />
          <ContactSection id="contacto" />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
