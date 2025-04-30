
import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail, Zap, Code, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 overflow-hidden border-t dark:border-gray-800">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary via-accent to-primary/50"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-accent via-primary to-accent/50"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent dark:from-blue-400 dark:to-purple-500">
              Portfolio
            </h3>
            <p className="text-muted-foreground max-w-xs">
              A showcase of my creative work, projects, and professional experience.
              Designed and developed with passion and attention to detail.
            </p>
            <div className="pt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Zap size={14} className="mr-1" />
              <span>Crafted with passion and</span>
              <Heart size={14} className="mx-1 fill-red-500 text-red-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2">
              <div className="space-y-3">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Home
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  About
                </a>
                <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Education
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Projects
                </a>
              </div>
              <div className="space-y-3">
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Skills
                </a>
                <a href="#certifications" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Certifications
                </a>
                <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Testimonials
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/Karthi-1211" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/balu-karthik/" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://x.com/?lang=en" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://mail.google.com/mail/u/0/#inbox?compose=new" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                aria-label="Email Contact"
              >
                <Mail size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent dark:from-blue-600 dark:to-purple-600 text-white rounded-md hover:shadow-lg hover:from-accent hover:to-primary dark:hover:from-purple-600 dark:hover:to-blue-600 transition-all duration-300"
              >
                <span>Get in touch</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">About This Site</h4>
            <p className="text-sm text-muted-foreground">
              Built with modern web technologies including React, Tailwind CSS, and more. 
              Designed to be fully responsive and accessible.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Code size={14} className="text-primary dark:text-blue-400" />
              <span className="text-muted-foreground">Built with latest web standards</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.</p>
           <p className=" dark:border-gray-800 text-center "> Developed By ALAMANDA BALU KARTHIK
            <span className="inline-flex items-center mx-1">
              <Heart size={12} className="fill-red-500 text-red-500 mx-1" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
