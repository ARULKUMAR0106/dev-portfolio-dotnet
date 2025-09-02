const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "C#", "SQL", "JavaScript", "HTML5", "CSS3"
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        ".NET 8", "ASP.NET Core", "Entity Framework Core", "Web API", 
        "LINQ", "WPF", "XAML"
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        "Microsoft SQL Server", "Stored Procedures", "Views", "Triggers", 
        "Performance Tuning", "Azure DevOps", "AWS S3"
      ]
    },
    {
      title: "DevOps & Security",
      skills: [
        "Git", "Postman", "Visual Studio", "VS Code", 
        "JWT", "OAuth2.0", "Role-based Access Control", "Agile/Scrum"
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
              Current Focus
            </h3>
            <p className="text-muted-foreground">
              Specializing in: .NET Core 8, ERP Development, RESTful APIs, Performance Optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;