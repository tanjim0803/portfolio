import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import LandingSection from "@/components/home/LandingSection";
import Projects from "@/components/home/Projects";
import Resume from "@/components/home/Resume";

export default function Home() {
  return (
    <div className="w-full font-montserrat">
      <LandingSection />
      <Features />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
