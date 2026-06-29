"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const menuItems = [
  { id: "features", label: "Features" },
  { id: "portfolio", label: "Portfolio" },
  { id: "resume", label: "Resume" },
];

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection, activeSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-state={menuState ? "active" : "inactive"}
      className="fixed top-0 left-0 z-50 w-full bg-[#212428de] transition-all duration-300"
    >
      <div
        className={cn(
          "mx-auto max-w-full px-4 md:px-6 lg:px-12 transition-all duration-300",
          isScrolled && "shadow1 backdrop-blur-md",
        )}
      >
        <div className="relative flex items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="home"
              className="flex items-center space-x-2 cursor-pointer bg-transparent border-none"
            >
              <Logo />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 block cursor-pointer lg:hidden p-2 text-white"
            >
              {menuState ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="w-full hidden lg:block">
            <div className="flex items-center gap-10 justify-end">
              <ul className="flex gap-4 text-sm font-montserrat">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm tracking-wide uppercase transition-all duration-400 cursor-pointer text-body hover:text-primary",
                      activeSection === "home" && "text-white",
                    )}
                  >
                    Home
                  </button>
                </li>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm tracking-wide uppercase transition-all duration-400 cursor-pointer text-body hover:text-primary",
                        activeSection === item.id && "text-white",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="flex w-fit">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className={cn(
                    "text-primary bg-transparent hover:bg-transparent font-montserrat font-semibold tracking-wider shadow-shadow-1 p-6 rounded-lg uppercase text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1",
                    activeSection === "contact" &&
                      "bg-background-color-2 shadow-shadow-2",
                  )}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Overlay */}
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-background-color-2 border-b border-neutral-800 p-6 shadow-2xl transition-all duration-300 transform origin-top lg:hidden",
            menuState
              ? "opacity-100 scale-y-100 block"
              : "opacity-0 scale-y-0 hidden",
          )}
        >
          <ul className="space-y-4 font-montserrat font-medium">
            <li>
              <button
                onClick={() => {
                  scrollToSection("home");
                  setMenuState(false);
                }}
                className={cn(
                  "block w-full text-left py-2 px-4 rounded-md",
                  activeSection === "home"
                    ? "text-primary bg-neutral-900"
                    : "text-neutral-400",
                )}
              >
                Home
              </button>
            </li>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setMenuState(false);
                  }}
                  className={cn(
                    "block w-full text-left py-2 px-4 rounded-md",
                    activeSection === item.id
                      ? "text-primary bg-neutral-900"
                      : "text-neutral-400",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMenuState(false);
                }}
                className={cn(
                  "block w-full text-left py-2 px-4 rounded-md text-primary font-bold",
                )}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
