import React from "react";
import { FileText, Award, Heart, Zap, Code, Briefcase, Sparkles, Star, Sprout } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container relative overflow-visible px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        {/* Add decorative elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-20 left-20 opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 opacity-10 rotate-45">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="58" height="58" stroke="currentColor" strokeWidth="0.5" />
            <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="0.5" />
            <rect x="20" y="20" width="20" height="20" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="relative inline-block mb-2">
            <h2 className="section-title">
              About Me
              <span className="absolute -right-8 -top-8">
                <Star size={16} className="text-primary/70 animate-pulse-slow" fill="currentColor" fillOpacity={0.3} />
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            As a passionate Full Stack Web Developer, I specialize in building innovative projects that integrate AI, Machine Learning, and IoT technologies.
            With extensive experience in creating dynamic web applications, I’ve developed numerous AI-driven solutions and machine learning models to solve real-world problems. 
            My expertise in IoT has led to the successful execution of various projects, blending hardware and software to deliver seamless, smart systems. 
            I thrive on tackling complex challenges and continuously enhancing my skills to stay at the forefront of technology.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            My journey began with a degree in Computer Science, followed by
            years of practical experience working with coding and new technologies. 
            I love solving complex problems and turning ideas
            into reality through clean, efficient code.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            When I'm not immersed in coding, I'm diving into cutting-edge technologies, experimenting with new frameworks, or unwinding with outdoor adventures.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  3+ Years Coding
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-white shadow-xl border-primary/20"
                side="right"
                align="start"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-primary">3+ Years Coding</h3>
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Extensive experience with various programming languages and frameworks, 
                  specializing in modern web technologies and developments.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  10+ Projects
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-white shadow-xl border-primary/20"
                side="bottom"
                align="start"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-primary">10+ Projects</h3>
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  As a student, I've successfully completed over 10 diverse projects, 
                  ranging from e-commerce platforms to web applications and IOT projects, AI Agents, showcasing my skills in real-world scenarios.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  Certifications
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-white shadow-xl border-primary/20"
                side="left"
                align="start"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-primary">10+ Certifications</h3>
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                Earned numerous certifications and accolades for delivering cutting-edge solutions, 
                mastering advanced technologies, and driving innovation in diverse projects.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  100% Passion
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-white shadow-xl border-primary/20"
                side="right"
                align="start"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-primary">100% Passion</h3>
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Deeply passionate about crafting exceptional digital experiences that 
                  combine aesthetics with functionality. Always excited to take on new challenges.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  IoT Innovator
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-white shadow-xl border-primary/20"
                side="bottom"
                align="start"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-primary">IoT Innovator</h3>
                  <Sprout className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Designed smart IoT solutions like plant monitoring systems, integrating sensors and web interfaces for real-time data.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  Tech Explorer
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-white shadow-xl border-primary/20"
                side="left"
                align="start"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-primary">Tech Explorer</h3>
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Always diving into the latest tools, from React for dynamic web apps to TensorFlow for machine learning models.
                  Eager to experiment with emerging tech like IoT frameworks and AI agents to push project boundaries.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="mt-8">
            <a href="Alamanda_Balu_Karthik.pdf" className="btn-primary shadow-lg hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Download CV
              </span>
              <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          </div>
        </div>
        
        <div className="relative animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <div className="aspect-square relative z-10 rounded-2xl overflow-hidden shadow-xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-accent/20 before:z-10 group">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            
            {/* Add a floating element with stats */}
            <div className="absolute -bottom-6 right-6 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 bg-white p-3 rounded-lg shadow-xl z-20">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-slate-700">Creative Developer</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/20 rounded-2xl -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute -top-4 -left-4 w-[calc(100%-16px)] h-[calc(100%-16px)] border-2 border-primary/10 rounded-2xl -z-10 animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
          
          {/* Add animated dots around the image */}
          <div className="absolute -top-2 left-1/2 w-3 h-3 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 -right-2 w-2 h-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: "0.7s" }}></div>
          <div className="absolute -bottom-2 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: "1.4s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;