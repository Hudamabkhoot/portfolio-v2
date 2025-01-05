import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import SkillsSection from "@/components/skills/SkillsSection";


export default function Home() {
  return (
    <div className="bg-main-white overflow-x-hidden select-none font-cairo flex flex-col gap-20">
      <Hero />
      <About />
      <Projects />
      <SkillsSection />
      <Contact />
    </div>
  );
}
