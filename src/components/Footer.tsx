import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
              <span className="text-sm">arulkumardevan@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={18} />
              <span className="text-sm">+91 9345 5555 22</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-muted-foreground hover:text-foreground transition-colors">
              <MapPin size={18} />
              <span className="text-sm">Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors">
                Download Resume
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-4">Connect With Me</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://linkedin.com/in/arulkumar-devan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/arulkumardevan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:arulkumardevan@gmail.com"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Arulkumar Devan. All rights reserved. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;