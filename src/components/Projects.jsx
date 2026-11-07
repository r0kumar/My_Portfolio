import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ activeFilter: propFilter, setActiveFilter: propSetFilter }) => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [localFilter, setLocalFilter] = useState('All');

  const activeFilter = propFilter !== undefined ? propFilter : localFilter;
  const setActiveFilter = propSetFilter || setLocalFilter;

  React.useEffect(() => {
    const handleCustomFilter = (e) => {
      if (e.detail) {
        setActiveFilter(e.detail);
      }
    };
    window.addEventListener('set-project-filter', handleCustomFilter);
    return () => window.removeEventListener('set-project-filter', handleCustomFilter);
  }, [setActiveFilter]);

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
                FEATURED PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Some of My Recent Work
            </h2>
          </div>

          <div>
            <button
              onClick={() => setActiveFilter('All')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-[#121A29] hover:bg-[#162238] border border-white/10 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md shadow-orange-500/20'
                    : 'bg-[#121A29] text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-[#121A29]/90 border border-white/[0.08] hover:border-amber-500/40 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 cursor-pointer relative overflow-hidden"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0A0E17] border border-white/5 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A29] via-transparent to-transparent opacity-40" />

                {/* Top-Right Quick Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & External Link */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded-md text-amber-400 hover:bg-amber-500/10 transition-colors"
                      title="Open Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  )}
                </div>
              </div>

              {/* Stack Badges Row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1A253A] border border-white/5 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
