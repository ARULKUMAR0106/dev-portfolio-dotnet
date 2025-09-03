import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import FadeInSection from '@/components/FadeInSection'; // 👈 import

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      <FadeInSection>
        <Experience />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Achievements />
      </FadeInSection>
    </div>
  );
};

export default Index;