
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import WorkSection from '../components/WorkSection';
import LinksSection from '../components/LinksSection';
import Footer from '../components/Footer';
import BackgroundCarousel from '../components/BackgroundCarousel';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'work', 'links'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <BackgroundCarousel />
      <div className="relative z-10">
        <Navigation activeSection={activeSection} />
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <WorkSection />
        <LinksSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
