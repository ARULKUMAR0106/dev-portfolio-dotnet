const Skills = () => {
  const skillCategories = [
    {
      title: ".NET Technologies",
      skills: [
        ".NET Framework", ".NET Core", "ASP.NET", "ASP.NET MVC", 
        "Web API", "Entity Framework", "LINQ", "WPF"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "C#", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Python"
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        "SQL Server", "Azure SQL", "MySQL", "MongoDB", "Redis", 
        "Visual Studio", "Git", "Azure DevOps"
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React", "Angular", "Bootstrap", "Tailwind CSS", "jQuery", 
        "SignalR", "AutoMapper", "NUnit"
      ]
    }
  ];

  return (
    <section id="skills" className="portfolio-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="hero-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="portfolio-card inline-block">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Always Learning
            </h3>
            <p className="text-muted-foreground">
              Currently exploring: .NET 8, Blazor, Microservices, Cloud Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;