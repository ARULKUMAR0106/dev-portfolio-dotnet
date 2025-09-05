import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import FadeInSection from '@/components/FadeInSection'; 

const Index = () => {
  return (
    
    <div className="min-h-screen">
      <Navigation />

      <FadeInSection id="home"  >
        <Hero />
      </FadeInSection>

      <FadeInSection id="skills"  >
        <Skills />
      </FadeInSection>

      <FadeInSection id="experience"  >
        <Experience />
      </FadeInSection>

      <FadeInSection id="about"  >
        <About />
      </FadeInSection>

      <FadeInSection id="achievements"  >
        <Achievements />
      </FadeInSection>
    </div>
  );
};

export default Index;