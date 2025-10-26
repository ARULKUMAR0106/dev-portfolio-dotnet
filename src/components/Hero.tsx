import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import resumePDF from '/src/assets/Resume/ARULKUMAR.pdf';
import heroImage from '/src/assets/images/herobg.jpg';
import { Link } from "react-router-dom";
import TorchLight from '@/contexts/TorchLight';
  
const Hero = () => {
  const { t } = useLanguage();

  return (
    
<section
  id="home"
  className="min-h-screen  flex items-center justify-center relative overflow-hidden "

>
     
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${heroImage})` ,transform: 'scale(1.1)' }}
      /> */}

      <div className="absolute inset-0  " />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 transition-opacity duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-muted-foreground">{t('hero.greeting')}</span>
          <br />
          <span className="glow-text">{t('hero.name')}</span>
        </h1>
        
        <div className="typing-animation text-2xl md:text-3xl font-semibold text-primary mb-4 inline-block">
          {t('hero.role')}
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
   
          {/* <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
      <a href={resumePDF}>
   Resume
</a>
          </Button> */}
          <a href={resumePDF} target='_blank' rel="noopener noreferrer" download="ARULKUMAR.pdf">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              {t('hero.downloadCV')}
            </Button>
          </a>
          <Link target='_blank' to="/resume" className="">
            <Button 
              variant="outline" 
              className="text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              {t('hero.viewProjects')}
            </Button>
          </Link>
                  

        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>arulkumar1062000@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <span>+91 6383254196</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Open to relocate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;