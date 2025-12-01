const Achievements = () => {
  const achievements = [
        {
      title: "ERP Module Development",
      description: "Successfully developed from groudup and maintained complex ERP modules using .NET Core 8, ensuring scalability and system stability.",
      year: "2025",
      icon: "⚙️",
      color: " green"  
    },
    {
      title: ".NET Core 8 WebAPI with Entity Framework Core",
      description: "Certified in advanced .NET Core 8 development with Entity Framework Core, demonstrating expertise in modern web API development.",
      year: "2024",
      icon: "🏆",
      color: "pink"  
    },
    {
      title: "ISO 27001:2013 - Awareness Workshop",
      description: "Completed ISO 27001:2013 awareness training, gaining knowledge in information security management systems and best practices.",
      year: "2024",
      icon: "🔒",
      color: "red"  
    },

    {
      title: "Database Performance Optimization",
      description: "Optimized SQL Server queries and stored procedures, achieving significant performance improvements in production environments.",
      year: "2023",
      icon: "⚡",
      color: " cyan"  
    },
    {
      title: "Third-party System Integration",
      description: "Designed and implemented seamless integrations with third-party systems using RESTful APIs and secure data exchange protocols.",
      year: "2023",
      icon: "🔗",
      color: "purple"  
    },
 
  ];

  return (
    <section id="achievements" className="portfolio-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="hero-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones that define my professional journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className={`portfolio-card group border-l border-r border-t border-b border-dashed border-slate-400 dark:border-slate-400`} style={{borderColor: achievement.color}}>
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="text-sm text-primary font-medium mb-2">
                {achievement.year}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="portfolio-card-connect inline-block border-yellow-400 border-l border-r border-t border-b border-dashed border-slate-400 dark:border-slate-400">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-4">
              Ready to discuss your next project or opportunity?
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://mail.google.com/mail/?view=cm&to=arulkumar1062000@gmail.com"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/arulkumar-m"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/ARULKUMAR0106"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;