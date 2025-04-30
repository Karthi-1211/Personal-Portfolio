
import React, { useEffect, useRef } from "react";

interface ScrollObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  animationClass = "section-transition-fade",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Initially hide the element
    element.style.opacity = "0";
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            setTimeout(() => {
              element.style.opacity = "1";
              element.classList.add(animationClass);
            }, delay);
            
            // Once animated, unobserve
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animationClass, delay, rootMargin, threshold]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollObserver;
