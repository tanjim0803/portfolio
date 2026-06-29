import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import LandingSection from "@/components/home/LandingSection";
import Portfolio from "@/components/home/Portfolio";
import Resume from "@/components/home/Resume";

export default function Home() {
  return (
    <div className="w-full">
      <LandingSection />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}
