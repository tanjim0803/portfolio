// hooks/useSmoothScroll.js
"use client";

import { useEffect, useCallback, useState } from "react";

export const useSmoothScroll = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(elementId);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollToSection, activeSection };
};
