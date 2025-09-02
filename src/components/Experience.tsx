const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Spac Softwares, Tamil Nadu, India",
      period: "May 2024 - Present",
      description: "Developed and maintained ERP modules using .NET Core 8, C#, SQL Server, and WPF, ensuring scalability, stability, and smooth system performance. Designed RESTful APIs and integrated third-party systems for seamless data exchange.",
      technologies: [".NET Core 8", "C#", "SQL Server", "WPF", "RESTful APIs", "Git"]
    },
    {
      title: "Associate Developer",
      company: "Laserbeam Software, Tamil Nadu, India",
      period: "June 2022 - February 2024",
      description: "Developed and maintained ASP.NET applications in C# with frontend and backend services. Optimized SQL Server queries and stored procedures to enhance database performance. Implemented authentication mechanisms and coordinated AWS S3 report handling.",
      technologies: ["ASP.NET", "C#", "HTML", "CSS", "JavaScript", "SQL Server", "AWS S3", "Jira"]
    },
    {
      title: "Full-stack Developer Intern",
      company: "Wisetech Source, Tamil Nadu, India",
      period: "April 2022 - June 2022",
      description: "Developed a CRUD-based web application using ASP.NET Core MVC and SQL Server, gaining practical experience in full-stack .NET development. Assisted in troubleshooting and debugging application errors during development.",
      technologies: ["ASP.NET Core MVC", "SQL Server", "CRUD Operations", "Debugging"]
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