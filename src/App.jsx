import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { WhyHireMe } from './components/WhyHireMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeRole, setActiveRole] = React.useState('fullstack');

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-200 selection:bg-amber-500 selection:text-black relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-orange-600/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar activeRole={activeRole} />
        <main>
          <Hero activeRole={activeRole} />
          <About activeRole={activeRole} setActiveRole={setActiveRole} />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <WhyHireMe />
          <Contact activeRole={activeRole} />
        </main>
        <Footer activeRole={activeRole} />
      </div>
    </div>
  );
}

export default App;
