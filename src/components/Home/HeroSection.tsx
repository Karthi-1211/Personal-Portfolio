import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles, Stars, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = [
    "Full stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Creative Developer",
    "Web Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const spans = title.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prev) => (prev + 1) % professions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center gradient-bg relative pt-20 overflow-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:via-violet-900/20 dark:to-gray-900"
      data-scroll-section
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s", transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div
          className="absolute top-[40%] right-[20%] w-40 h-40 bg-primary/20 dark:bg-primary/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "2s", transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[15%] w-56 h-56 bg-accent/20 dark:bg-accent/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1.5s", transform: `translateY(${scrollY * -0.08}px)` }}
        ></div>

        {/* Enhanced particle effects */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary dark:bg-primary/70 rounded-full animate-ping"></div>
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent dark:bg-accent/70 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-primary dark:bg-primary/70 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-accent dark:bg-accent/70 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary dark:bg-primary/70 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Add shooting stars effect */}
        <div className="shooting-star"></div>
        <div className="shooting-star" style={{ animationDelay: "1.5s" }}></div>
        <div className="shooting-star" style={{ animationDelay: "3s" }}></div>
        <div className="shooting-star" style={{ animationDelay: "4.5s" }}></div>

        {/* Add animated gradient mesh */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30 overflow-hidden">
          <div className="gradient-mesh"></div>
        </div>
      </div>

      <div
        className="container z-10 flex-1 flex flex-col justify-center items-center text-center gap-6"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="relative">
          <div className="absolute -top-12 -left-12 text-primary/40 dark:text-primary/60 animate-float">
            <Stars size={36} strokeWidth={1.5} />
          </div>
          <div
            className="absolute -bottom-8 -right-12 text-accent/40 dark:text-accent/60 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <Sparkles size={28} strokeWidth={1.5} />
          </div>
          <div className="absolute top-0 right-0 text-primary/30 dark:text-primary/50 animate-spin-slow">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="1 3"
              />
            </svg>
          </div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 dark:text-white"
          >
            {"Hello, I'm".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in opacity-0"
                style={{ animationFillMode: "forwards" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            <span className="relative text-black dark:text-white">
              <span className="font-bold text=10xl md:text-6xl lg:text-5xl">
                Alamanda Balu Karthik
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-amber-500 dark:from-blue-400 dark:to-purple-500 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards", transformOrigin: "left" }}></span>
            </span>
          </h1>
        </div>

        <p
          className="text-lg text-muted-foreground dark:text-gray-300 max-w-xl animate-fade-in opacity-0 relative"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          "I craft innovative, user-focused web solutions that empower businesses to thrive, 
          blending cutting-edge technology with stunning design to deliver seamless, impactful digital experiences."
          <span className="absolute -right-4 top-0 animate-pulse-slow text-primary dark:text-blue-400">
            <Zap size={16} className="opacity-70" />
          </span>
        </p>

        <div className="flex flex-col mt-2 mb-4">
          <div className="flex items-center justify-center text-xl mb-1">
            <span className="text-gradient font-medium">I am a</span>
          </div>
          <div className="h-8 overflow-hidden">
            <div
              className="profession-slider"
              style={{
                transform: `translateY(-${professionIndex * 32}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              {professions.map((profession, index) => (
                <div
                  key={index}
                  className="profession-item text-xl font-medium text-primary dark:text-blue-400 h-8 flex items-center justify-center"
                >
                  {profession}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-in opacity-0"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="btn-primary shadow-lg hover:shadow-primary/20 dark:hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm dark:bg-blue-600/80 dark:text-white"
          >
            <span className="relative z-10">See My Work</span>
            <span className="absolute inset-0 bg-accent dark:bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </a>
          <a
            href="#contact"
            className="font-medium text-primary dark:text-blue-400 hover:text-accent dark:hover:text-blue-300 hover:translate-x-1 transition-all duration-300 px-6 py-3 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-accent dark:after:bg-blue-400 after:transition-all hover:after:w-full relative group"
          >
            Get In Touch
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
              className="lucide lucide-arrow-right absolute opacity-0 group-hover:opacity-100 top-1/2 -right-6 transition-all duration-300 transform -translate-y-1/2 group-hover:-translate-y-1/2 group-hover:right-0"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 shadow-md hover:bg-white dark:hover:bg-white/20 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 text-primary dark:text-blue-400 group-hover:text-accent dark:group-hover:text-blue-300 transition-colors" />
        </a>
      </div>

      {/* Enhanced decorative corner elements */}
      <div className="absolute top-12 left-12 w-20 h-20 border border-primary/10 dark:border-blue-500/20 rounded-full opacity-50"></div>
      <div className="absolute bottom-12 right-12 w-32 h-32 border border-accent/10 dark:border-purple-500/20 rounded-full opacity-50"></div>
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-dashed border-primary/5 dark:border-blue-500/10 rounded-full opacity-30 animate-spin-slow"
        style={{ animationDuration: "30s" }}
      ></div>
    </section>
  );
};

export default HeroSection;