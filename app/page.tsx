import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import GitHub from "@/components/sections/GitHub";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <GitHub />
      <Resume />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
