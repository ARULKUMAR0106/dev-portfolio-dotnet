const Achievements = () => {
  const achievements = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      description: "Demonstrated expertise in developing cloud applications and services on Microsoft Azure platform.",
      year: "2023",
      icon: "🏆"
    },
    {
      title: "Best Performance Optimization Project",
      description: "Improved application response time by 60% through database optimization and caching strategies.",
      year: "2022",
      icon: "⚡"
    },
    {
      title: "Team Leadership Excellence",
      description: "Successfully led a team of 5 developers to deliver a complex enterprise solution 2 weeks ahead of schedule.",
      year: "2022",
      icon: "👥"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to .NET community projects with 100+ GitHub stars and meaningful contributions.",
      year: "2021-Present",
      icon: "🔓"
    },
    {
      title: "Innovation Award",
      description: "Recognized for implementing automated deployment pipeline that reduced deployment time by 80%.",
      year: "2021",
      icon: "💡"
    },
    {
      title: "Client Satisfaction Excellence",
      description: "Maintained 98% client satisfaction rate across all project deliveries with zero critical bugs in production.",
      year: "2020-Present",
      icon: "⭐"
    }
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
            <div key={index} className="portfolio-card group">
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
          <div className="portfolio-card inline-block">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-4">
              Ready to discuss your next project or opportunity?
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors">
                Contact Me
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;