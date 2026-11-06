"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`cursor-pointer fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-shadow-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-shadow-2 active:scale-95 md:right-8 md:bottom-8
  ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-5 opacity-0"
  }
`}
    >
      <ArrowUp size={28} strokeWidth={1.8} />
    </button>
  );
}
