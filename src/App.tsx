/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, lazy, Suspense } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#030712]">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] will-change-transform">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.05)_0%,_rgba(0,0,0,0)_50%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_50%_0%,_rgba(139,92,246,0.05)_0%,_rgba(0,0,0,0)_50%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-slate-500">Loading...</div>}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
