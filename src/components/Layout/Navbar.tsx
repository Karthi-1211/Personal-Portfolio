import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold text-black dark:text-white relative group"
        >
          <span className="relative z-10">Balu Karthik's Portfolio</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {[
                "home",
                "about",
                "education",
                "projects",
                "skills",
                "certifications",
                "testimonials",
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <ThemeToggle className="" />
              </li>
            </ul>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-300 shadow-lg ${
          isOpen ? "max-h-screen py-6" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="container">
          <nav className="flex flex-col space-y-4">
            {[
              "home",
              "about",
              "education",
              "projects",
              "skills",
              "certifications",
              "testimonials",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-medium py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;