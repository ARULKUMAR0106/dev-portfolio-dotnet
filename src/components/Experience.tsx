const Experience = () => {
  const experiences = [
    {
      title: "Senior .NET Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of enterprise applications using .NET Framework and .NET Core. Architected scalable solutions serving 10,000+ users.",
      technologies: [".NET Core", "C#", "Azure", "SQL Server", "React"]
    },
    {
      title: ".NET Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using ASP.NET MVC. Improved system performance by 40% through optimization.",
      technologies: ["ASP.NET MVC", "Entity Framework", "JavaScript", "Bootstrap"]
    },
    {
      title: "Junior Software Developer",
      company: "StartUp Dynamics",
      period: "2019 - 2020",
      description: "Built RESTful APIs and desktop applications. Collaborated with cross-functional teams to deliver quality software solutions.",
      technologies: [".NET Framework", "Web API", "WPF", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="portfolio-section bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="hero-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across diverse industries
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-foreground mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;