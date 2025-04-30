
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={cn(
        "fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-500 z-40",
        "transform transition-transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        isHovered ? "bg-accent shadow-accent/30" : "hover:bg-accent hover:shadow-lg"
      )}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top"
    >
      <div className="relative">
        <ArrowUp className={cn(
          "w-5 h-5 transition-transform duration-300",
          isHovered ? "transform -translate-y-1" : ""
        )} />
        {isHovered && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-white rounded-full animate-pulse"></div>
        )}
      </div>
    </button>
  );
};

export default ScrollToTop;
