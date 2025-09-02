const About = () => {
  return (
    <section id="about" className="portfolio-section bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions with cutting-edge technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              .NET Framework Expert
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With extensive experience in .NET Framework development, I specialize in building 
              enterprise-grade applications that are scalable, maintainable, and performant. 
              My expertise spans across web applications, desktop solutions, and API development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about clean code, best practices, and staying up-to-date with 
              the latest technologies in the .NET ecosystem. I enjoy solving complex problems 
              and delivering solutions that make a real impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="portfolio-card">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="portfolio-card">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-card">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl text-primary">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;