// hooks/useSmoothScroll.js
import { useState, useEffect } from "react";

export function useSmoothScroll() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset matches the height of your sticky header (roughly 80px)
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        });
    }
  };

  // Intersection Observer updates active tab as user scrolls naturally
  useEffect(() => {
    const sectionIds = ["home", "features", "portfolio", "resume", "contact"];
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Triggers when section is roughly in the center
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { scrollToSection, activeSection };
}