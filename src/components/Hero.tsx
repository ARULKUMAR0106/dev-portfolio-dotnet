import { Button } from '@/components/ui/button';

import resumePDF from '/src/assets/Resume/ARULKUMAR_CV.pdf';
  import  heroImage from '/src/assets/images/herobg.jpg';
  import { Link } from "react-router-dom";
  
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" >
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${heroImage})` ,transform: 'scale(1.1)' }}
      /> */}

      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"  />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">ARULKUMAR</span>
          <br />
          <span className="hero-text">MUTHUSAMI</span>
        </h1>
        
        <div className="typing-animation text-2xl md:text-3xl font-semibold text-primary mb-4 inline-block">
          Software Developer
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          3+ years of experience building scalable web applications and RESTful APIs using 
          C#, ASP.NET Core, SQL Server, and modern frontend technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            About My Work
          </Button>
          {/* <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
      <a href={resumePDF}>
   Resume
</a>
          </Button> */}
                    <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
      <a href={resumePDF} target='_blank' rel="noopener noreferrer" download="ARULKUMAR_CV.pdf">
  Download Resume
</a>
          </Button>
                    <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
               <Link target='_blank' to="/resume" className="text-blue-500 hover:bg-primary hover:text-primary-foreground ">
  View Resume
</Link>
          </Button>

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
            <span>Ready to relocate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;