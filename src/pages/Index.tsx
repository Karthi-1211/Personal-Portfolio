
import React, { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import AboutSection from "@/components/Home/AboutSection";
import SkillsSection from "@/components/Home/SkillsSection";
import ContactSection from "@/components/Home/ContactSection";
import ScrollToTop from "@/components/Home/ScrollToTop";
import CertificationsSection from "@/components/Home/CertificationsSection";
import ScrollObserver from "@/components/Layout/ScrollObserver";
import EducationSection from "@/components/Home/EducationSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

const Index = () => {
  // Initialize parallax effect
  useEffect(() => {
    const parallaxElements = document.querySelectorAll("[data-scroll]");
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-scroll-speed") || "0.1";
        const direction = element.getAttribute("data-scroll-direction") || "vertical";
        
        if (direction === "vertical") {
          (element as HTMLElement).style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
        } else if (direction === "horizontal") {
          (element as HTMLElement).style.transform = `translateX(${scrollY * parseFloat(speed)}px)`;
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add CSS variables for parallax effects
  useEffect(() => {
    const updateParallaxVars = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${scrollY}px`);
    };
    
    window.addEventListener("scroll", updateParallaxVars);
    return () => window.removeEventListener("scroll", updateParallaxVars);
  }, []);
  
  // Add CSS class to enable smooth scrolling
  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll");
    
    return () => {
      document.documentElement.classList.remove("smooth-scroll");
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero doesn't need ScrollObserver as it's always visible on load */}
        <HeroSection />
        
        <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
          <AboutSection />
        </ScrollObserver>
        
        <ScrollObserver animationClass="section-transition-slide" threshold={0.1}>
          <EducationSection />
        </ScrollObserver>
        
        <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
          <ProjectsSection />
        </ScrollObserver>
        
        <ScrollObserver animationClass="section-transition-slide" threshold={0.1}>
          <SkillsSection />
        </ScrollObserver>
        
        <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
          <CertificationsSection />
        </ScrollObserver>
        
        <ScrollObserver animationClass="section-transition-slide" threshold={0.1}>
          <TestimonialsSection />
        </ScrollObserver>
        
        <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
          <ContactSection />
        </ScrollObserver>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
