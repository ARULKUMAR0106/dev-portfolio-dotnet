const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Spac Softwares, Tamil Nadu, India",
      period: "May 2024 - Present",
      description: [
        "Developed and maintained ERP modules using .NET Core 8, C#, SQL Server, and WPF, ensuring scalability, stability, and smooth system performance.",
        "Designed and implemented RESTful APIs and integrated third-party systems for seamless data exchange.",
        "Built automated tasks including dynamic schema updates, and resolved bugs to optimize backend and frontend functionality.",
        "Collaborated on new development and enhancements, following best coding practices and using Git for version control."
      ],
      technologies: [".NET Core 8", "C#", "SQL Server", "WPF", "RESTful APIs", "Git"],
      current: true,
        color:"cyan"
    },
    {
      title: "Associate Developer",
      company: "Laserbeam Software, Tamil Nadu, India",
      period: "June 2022 - February 2024",
      description: [
        "Developed and maintained ASP.NET applications in C# with frontend (HTML, CSS, JavaScript) and backend services, ensuring secure and stable operations.",
        "Optimized SQL Server queries and stored procedures to enhance database performance.",
        "Implemented authentication mechanisms, resolved production issues, and coordinated AWS S3 report handling.",
        "Worked in Agile environment using Jira for task tracking and collaborated on releases to deliver high-quality solutions."
      ],
      technologies: ["ASP.NET", "C#", "HTML", "CSS", "JavaScript", "SQL Server", "AWS S3", "Jira"],
      current: false,
      color:"purple"
    },
    {
      title: "Trainee Software Developer",
      company: "Wisetech Source, Tamil Nadu, India",
      period: "April 2022 - June 2022",
      description: [
        "Developed a CRUD-based web application using ASP.NET Core MVC and SQL Server, gaining practical experience in full-stack .NET development.",
        "Assisted in troubleshooting and debugging application errors during development, laying a strong foundation for application support and maintenance skills."
      ],
      technologies: ["ASP.NET Core MVC", "SQL Server", "CRUD Operations", "Debugging"],
      current: false,
        color:"brown"
    }
  ];

  return (
    <section id="experience" className="portfolio-section bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="hero-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey through innovative software development
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/40 transform md:-translate-x-0.5"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-2 md:-translate-x-2 z-10 ${exp.current ? 'bg-primary animate-pulse' : 'bg-primary'} rounded-full border-4 border-background shadow-lg`}>
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                )}
              </div>
              
              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`portfolio-card relative   border-l border-r border-t border-b border-dashed border-slate-400 dark:border-slate-400`} style={{borderColor: exp.color}}  >
                  {/* Arrow pointing to timeline */}
                  <div className={`absolute top-6 w-4 h-4 bg-card border-l border-t border-border transform rotate-45 ${index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'} hidden md:block`}></div>
                  
                  {/* Period Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${exp.current ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {exp.period}
                    {exp.current && <span className="ml-1 w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse"></span>}
                  </div>
                  
                  {/* Job Details */}
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-foreground mb-4 font-medium">
                    {exp.company}
                  </h4>
                  
                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span className="text-primary mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Timeline End */}
          <div className="absolute left-4 md:left-1/2 bottom-0 w-4 h-4 bg-muted rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;