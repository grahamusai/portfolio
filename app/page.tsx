import About from "./components/about"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Contact from "./components/contact"
import FooterSection from "./components/footer"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { Footer } from "react-day-picker"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <FooterSection />
    </div>
  )
}
