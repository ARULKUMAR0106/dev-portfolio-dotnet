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
              Full Stack .NET Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated Full Stack .NET Developer with 3+ years of experience in building 
              scalable web applications and RESTful APIs. My expertise spans across C#, ASP.NET Core, 
              SQL Server, and modern frontend technologies, with a proven track record of delivering 
              end-to-end solutions in fast-paced environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in troubleshooting, performance optimization, and implementing secure 
              authentication mechanisms. My experience includes working with ERP modules, 
              third-party system integrations, and cloud platforms like Azure and AWS.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="portfolio-card">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="portfolio-card">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Enterprise level Projects Completed</div>
              </div>
                            <div className="portfolio-card">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Customer support</div>
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