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
      data-state={menuState && "active"}
      className="fixed z-20 w-full bg-background-color-2"
    >
      <div
        className={cn(
          "mx-auto max-w-full px-4 md:-6 lg:px-12 transition-all duration-300",
          isScrolled && "shadow1 bg-[#212428de]",
        )}
      >
        <div className="relative flex items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <div className="flex justify-between items-center w-full">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Logo />
            </Link>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          <div className="w-full inset-0 m-auto hidden size-fit lg:block">
            <div className="flex items-center gap-10 justify-end">
              <ul className="flex gap-8 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${
                      activeSection === "home"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    // className="text-lightn hover:text-primary block duration-150 text-sm font-montserrat"
                  >
                    <span>Home</span>
                  </button>
                </li>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                      // className="text-lightn hover:text-primary block duration-150 text-sm font-montserrat"
                    >
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm" className="hidden">
                  <Link href="#">
                    <span>Mode</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="text-primary bg-bg-linear-2 hover:bg-bg-linear-2 hover:-translate-y-1 duration-300 shadow-shadow-1 py-5 px-7.5 rounded-sm uppercase text-sm"
                >
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${
                      activeSection === "contact"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    // className="text-lightn hover:text-primary block duration-150 text-sm font-montserrat"
                  >
                    <span>{"Contact"}</span>
                  </button>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
          <div className="lg:hidden">
            <ul className="space-y-6 text-base">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
