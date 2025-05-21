import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, Code, Eye, Star, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  visible: boolean;
  active: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: "A Smart IoT Enabled System for Leaf Disease Detection with Severity and Pesticide Recommendation",
    description:
      "An IoT-based agricultural tool for detecting leaf diseases and recommending pesticides, integrated with a web dashboard.",
    tags: ["Flask","IOT", "Machine Learning","Gemini AI" ,"ESP32 Cam","ESP8266"],
    imageUrl: "https://www.niubol.com/static/upload/image/20250114/1736824575504341.jpeg",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/PlantCare-AI",
    featured: true,
  },
  {
    id: 2,
    title: "AI Full Stack Mock Interview APP",
    description:
      "A platform for practicing technical interviews with AI-driven feedback, built with React, Node.js, and real-time analytics.",
    tags: ["React", "NextJS", "Clerk", "Tailwindcss","DrizzleORM","PostgreSQL","Gemini AI"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://ai-mock-interview-drab.vercel.app/",
    githubUrl: "https://github.com/Karthi-1211/AI-Mock-Interview",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio showcasing projects with smooth animations, built using React, TypeScript, and Tailwind CSS.",
    tags: ["ReactJS", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    liveUrl: "https://portfolio-self-six-39.vercel.app/",
    githubUrl: "https://github.com/Karthi-1211/Personal-Portfolio",
    featured: true,
  },
  {
    id: 4,
    title: "Web Based AI Agent",
    description:
      "A responsive portfolio showcasing projects with smooth animations, built using React, TypeScript, and Tailwind CSS.",
    tags: ["ReactJS", "Tailwind CSS", "Python", "Gemini AI","Playwright"],
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*6oxuBAFs8inGVycEsSXzug.jpeg",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/My-AI-Agent",
    featured: true,
  },
  {
    id: 5,
    title: "Drowsiness Detection System",
    description:
      "A real-time system using computer vision to detect driver drowsiness and alert users, built with Python and React.",
    tags: ["Python", "OpenCV", "Dlib", "Numpy","PyGame"],
    imageUrl: "https://www.bosch-mobility.com/media/global/solutions/passenger-cars-and-light-commercial-vehicles/driver-assistance-systems/driver-drowsiness-detection/thumbnail_fahrermuedigkeitserkennung.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/Real-time-Drowsiness-Detection-using-ML",
    featured:true,
  },
  {
    id: 6,
    title: "GrokGPT",
    description:
      "An AI-powered chatbot with natural language processing, integrated with Firebase for real-time interactions.",
    tags: ["Python", "Langchain", "Streamlit", "GroqAPI","LLM"],
    imageUrl: "https://www.fmj.co.uk/wp-content/uploads/2022/04/iStock-1206796363.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/GroqGPT",
  },
  {
    id: 7,
    title: "Real Time Human Detection System",
    description:
      "A security system using machine learning for real-time human detection via live video feeds.",
    tags: ["Python", "OpenCV", "NumPy", "Imutils", "Argparse","HOG","SVM","YOLO"],
    imageUrl: "https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=612x612&w=0&k=20&c=PYcoBVyeVF5CNR4m6BAWbteF3Cvo2DxOURHMYGglTx0=",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/Real-time-Human-Activity-Recognition-ML",
  },
  {
    id: 8,
    title: "AI Speech Bot",
    description:
      "A voice-activated assistant supporting speech-to-text and text-to-speech, built with React and cloud APIs.",
    tags: ["HTML","CSS", "JavaScript", "SpeechRecognition API", "Web Speech API","ScoketIO"],
    imageUrl: "https://assets.techcircle.in/uploads/article-image/2019/03/images/18008-voice-rf.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/AI-Speech-Bot",
  },
  {
    id: 7,
    title: "Internet Of Things",
    description:
      "A security system using machine learning for real-time human detection via live video feeds.",
    tags: ["Ardunio", "ESP8266", "ESP32 Cam", "LED","Servo Motor"],
    imageUrl: "https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/Internet-of-Things",
  },
  {
    id: 9,
    title: "Expense Tracker",
    description:
      "A personal finance app for tracking expenses and budgets, featuring data visualization and secure authentication.",
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    imageUrl: "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/Expense-Tracker",
  },
  
  {
    id: 10,
    title: "Delay Management System",
    description:
      "A logistics tool for tracking and optimizing delivery schedules, with real-time updates and analytics.",
    tags: ["HTML", "CSS", "Bootstrap","Java Servlets","MySQL(via XAMPP)","Apache Tomcat"],
    imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/Delay-Management-System",
  },
  {
    id: 11,
    title: "Student Management System",
    description:
      "A platform for managing student records, grades, and attendance, with a user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript","PHP","(MySQL)","XAMPP (Apache)"],
    imageUrl: "https://frontcore.com/wp-content/uploads/2020/03/Top-features-and-functions-in-a-training-management-system.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Karthi-1211/Student-Management-System",
  },
  
  
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  visible,
  active,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "group bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30",
            "opacity-0 animate-slide-in-bottom",
            "hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 dark:hover:border-indigo-700/30 transition-all duration-300",
            active ? "ring-2 ring-indigo-300/20 dark:ring-indigo-500/20 shadow-lg" : ""
          )}
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
          onMouseEnter={() => {
            setIsHovered(true);
            onMouseEnter();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            onMouseLeave();
          }}
        >
          <div className="aspect-video overflow-hidden relative rounded-t-2xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-indigo-500/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <Eye size={18} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-indigo-500/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>

            {project.featured && (
              <div className="absolute top-3 left-3 bg-indigo-600/90 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1 shadow-lg animate-pulse-slow">
                <Star size={12} fill="white" />
                <span>Featured</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full transition-all duration-300 hover:bg-indigo-200 hover:scale-105 hover:shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-display font-bold text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-2">
              {project.title}
              {project.featured && <Zap size={16} className="text-amber-500" />}
            </h3>
            <p className="text-muted-foreground mt-2 mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-violet-500 before:transition-all before:duration-300 hover:before:w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-violet-500 before:transition-all before:duration-300 hover:before:w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
            </div>
            <div
              className={cn(
                "w-full h-1 mt-4 bg-gradient-to-r from-indigo-300/0 via-indigo-500/30 to-purple-500/0 dark:from-indigo-400/0 dark:via-indigo-400/30 dark:to-purple-400/0 rounded-full",
                "transform scale-x-0 transition-transform duration-500",
                active ? "scale-x-100" : ""
              )}
            ></div>
          </div>
          <div className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-xs font-semibold py-1 px-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-1">
              <Code size={12} className="text-indigo-600 dark:text-indigo-300" />
              Project {index + 1}
            </div>
          </div>

          {isHovered && (
            <div className="absolute inset-0 border-2 border-indigo-300/20 dark:border-indigo-700/20 rounded-2xl pointer-events-none"></div>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-indigo-200/20 dark:border-indigo-700/20">
        <div className="flex justify-between">
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">
            {project.title}
          </h4>
          {project.featured && (
            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const handleToggleProjects = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50 opacity-50"></div>
        <div className="absolute top-40 left-10 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Particle effects */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-indigo-500/40 rounded-full animate-ping"></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-500/40 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-violet-500/30 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative inline-block">
            <h2 className="section-title mb-0">
              My Projects
              <span className="absolute -right-8 -top-8">
                <Sparkles
                  className="w-6 h-6 text-indigo-500/70 dark:text-indigo-400/70 animate-pulse-slow"
                />
              </span>
            </h2>
          </div>
          <p className="text-center max-w-2xl text-muted-foreground mt-4 mb-12">
            Explore my recent work and projects that showcase my skills and expertise in web development, AI, and IoT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              visible={visible}
              active={activeProject === index}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-block relative">
            <button
              onClick={handleToggleProjects}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less Projects" : "View All Projects"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "lucide transition-transform group-hover:translate-x-1",
                    showAll ? "lucide-arrow-left rotate-180" : "lucide-arrow-right"
                  )}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-violet-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              <div
                className="absolute -bottom-1 -right-1 w-full h-full border-2 border-indigo-300/30 dark:border-indigo-700/30 rounded-lg -z-10 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
