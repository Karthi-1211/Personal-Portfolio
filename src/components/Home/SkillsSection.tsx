import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Zap } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

const skillsData: SkillCategory[] = [
  {
    name: "Front-end",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layout"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <line x1="9" x2="9" y1="21" y2="9" />
      </svg>
    ),
    skills: [
      { name: "HTML & CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "JavaServlets", level: 4 },
    ],
  },
  {
    name: "Back-end",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-server"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express", level: 5 },
      { name: "MongoDB", level: 5 },
      { name: "PostgreSQL", level: 3 },
      { name: "Firebase", level: 4 },
    ],
  },
  {
    name: "Tools & Others",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-wrench"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Artificial Intelligence(AI)", level: 5 },
      { name: "Machine learning", level: 5 },
      { name: "Internet of Things(IOT)", level: 5 },
      { name: "Git & GitHub", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Tableau", level: 4 },
      
    ],
  },
];

const getLevelDescription = (level: number): string => {
  switch (level) {
    case 1:
      return "Beginner";
    case 2:
      return "Basic";
    case 3:
      return "Intermediate";
    case 4:
      return "Advanced";
    case 5:
      return "Expert";
    default:
      return "Unknown";
  }
};

const SkillBar: React.FC<{
  level: number;
  name: string;
  animationStarted: boolean;
}> = ({ level, name, animationStarted }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="w-full mb-4 group">
          <div className="flex justify-between mb-1">
            <span className="font-medium flex items-center gap-1.5 group-hover:text-primary transition-colors duration-300">
              {name}
              {level === 5 && (
                <Zap
                  size={16}
                  className="text-amber-500 animate-pulse-slow"
                />
              )}
            </span>
            <span className="text-muted-foreground text-sm">{level * 20}%</span>
          </div>
          <div className="w-full bg-secondary/80 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
              style={{
                width: animationStarted ? `${level * 20}%` : "0%",
              }}
            >
              <div className="absolute top-0 right-0 h-full w-5 bg-white/20 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-primary/20">
        <div className="flex justify-between">
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">
            {name}
          </h4>
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded-full font-medium">
            {getLevelDescription(level)}
          </span>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {level >= 4 ? (
            <p>
              Expert-level proficiency with extensive experience in complex
              projects.
            </p>
          ) : level >= 3 ? (
            <p>
              Solid working knowledge with practical experience in real-world
              applications.
            </p>
          ) : (
            <p>
              Foundational knowledge with growing experience in practical
              applications.
            </p>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationStarted(true);
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

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50 opacity-50"></div>
        <div className="absolute top-40 left-10 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Decorative elements */}
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
              My Skills
              <span className="absolute -right-8 -top-8">
                <Sparkles
                  className="w-6 h-6 text-indigo-500/70 dark:text-indigo-400/70 animate-pulse-slow"
                />
              </span>
            </h2>
          </div>
          <p className="text-center max-w-2xl text-muted-foreground mt-4 mb-12">
            A comprehensive overview of my technical skills and proficiency levels
            across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={cn(
                "bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30",
                "opacity-0 animate-slide-in-bottom",
                "hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 dark:hover:border-indigo-700/30 transition-all duration-300",
                activeCategory === categoryIndex
                  ? "ring-2 ring-indigo-300/20 dark:ring-indigo-500/20 shadow-lg"
                  : ""
              )}
              style={{
                animationDelay: `${categoryIndex * 0.2}s`,
                animationFillMode: "forwards",
              }}
              onMouseEnter={() => setActiveCategory(categoryIndex)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    "p-3 rounded-lg transition-all duration-500",
                    activeCategory === categoryIndex
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white scale-110"
                      : "bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300"
                  )}
                >
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-xl">
                  {category.name}
                </h3>
              </div>

              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  level={skill.level}
                  name={skill.name}
                  animationStarted={animationStarted}
                />
              ))}

              <div
                className={cn(
                  "w-full h-1 mt-4 bg-gradient-to-r from-indigo-300/0 via-indigo-500/30 to-purple-500/0 dark:from-indigo-400/0 dark:via-indigo-400/30 dark:to-purple-400/0 rounded-full",
                  "transform scale-x-0 transition-transform duration-500",
                  activeCategory === categoryIndex ? "scale-x-100" : ""
                )}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-block relative">
            <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden">
              <a
                href="/Alamanda_Balu_Karthik.pdf" // Specify the path to your resume file
                download="Alamanda_Balu_Karthik.pdf" // Optional: specify the downloaded file name
                className="relative z-10 flex items-center gap-2"
              >
                Download My Resume
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
                  className="lucide lucide-download transition-transform group-hover:translate-y-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </a>
              <span className="absolute inset-0 bg-violet-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
            <div
              className="absolute -bottom-1 -right-1 w-full h-full border-2 border-indigo-300/30 dark:border-indigo-700/30 rounded-lg -z-10 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;