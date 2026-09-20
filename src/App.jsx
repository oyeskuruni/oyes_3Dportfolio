import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { PageLoader3D } from './components/loader/PageLoader3D';
import { CustomCursor } from './components/ui/CustomCursor';
import { GlobalCanvas3D } from './components/3d/GlobalCanvas3D';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Process } from './components/sections/Process';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function MainContent() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 light:bg-slate-50 light:text-slate-900 transition-colors duration-300 relative selection:bg-cyan-500 selection:text-slate-950 bg-grid-pattern overflow-x-hidden">
      {/* Context-aware custom cursor */}
      <CustomCursor />

      {/* Global 3D Visual System: Fullsite Depth & Parallax */}
      <GlobalCanvas3D />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Process />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <ThemeProvider>
      <CursorProvider>
        {/* 3D Cinematic Entrance Loader */}
        <PageLoader3D onComplete={() => setLoaderFinished(true)} />

        {/* Portfolio Application */}
        <MainContent />
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
