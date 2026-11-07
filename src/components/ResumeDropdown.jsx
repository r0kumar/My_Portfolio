import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeDropdown = ({
  activeRole = 'fullstack',
  variant = 'default',
  align = 'left',
  dropDirection = 'down', // 'down' or 'up'
  buttonText = 'Download Resume',
  className = '',
}) => {
  const { resumes } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const firstItemRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Focus first item when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstItemRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleDownload = async (resumeKey) => {
    const resume = resumes[resumeKey];
    if (!resume) return;

    try {
      const response = await fetch(resume.path, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = resume.path;
        link.download = resume.fileName;
        link.setAttribute('download', resume.fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false);
      } else {
        showToast('Resume file not found. Please add it to /public/resumes/');
      }
    } catch {
      showToast('Resume file not found. Please add it to /public/resumes/');
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Alignment classes for dropdown menu
  const getPositionClasses = () => {
    let classes = '';
    // Vertical placement
    if (dropDirection === 'up') {
      classes += 'bottom-full mb-2 ';
    } else {
      classes += 'top-full mt-2 ';
    }

    // Horizontal placement
    if (align === 'right') {
      classes += 'right-0 ';
    } else if (align === 'center') {
      classes += 'left-1/2 -translate-x-1/2 ';
    } else {
      classes += 'left-0 ';
    }
    return classes;
  };

  // Button styles based on variant
  const renderTriggerButton = () => {
    switch (variant) {
      case 'hero':
        return (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-slate-200 bg-[#121A29]/90 hover:bg-[#162238] border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-black/40 group ${className}`}
          >
            <Download className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>{buttonText}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>
        );

      case 'navbar':
        return (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={`relative group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-300 hover:text-white border border-white/10 hover:border-amber-500/40 bg-white/[0.03] hover:bg-amber-500/[0.08] transition-all duration-200 cursor-pointer ${className}`}
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>{buttonText}</span>
            <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>
        );

      case 'footer':
        return (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={`inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors cursor-pointer group ${className}`}
          >
            <Download className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>{buttonText}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>
        );

      case 'card':
      case 'default':
      default:
        return (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-[#121A29] hover:bg-[#162238] border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group ${className}`}
          >
            <Download className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>{buttonText}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>
        );
    }
  };

  const isMernRecommended = activeRole === 'fullstack';
  const isDaRecommended = activeRole === 'dataAnalyst';

  return (
    <div ref={containerRef} className="relative inline-block text-left w-auto">
      {renderTriggerButton()}

      {/* Popover / Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className={`absolute ${getPositionClasses()} w-72 sm:w-80 rounded-2xl bg-[#0F1626] border border-amber-500/30 shadow-2xl shadow-black/90 p-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150`}
        >
          {/* Ambient top highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-t-2xl pointer-events-none" />

          {/* Header Tag */}
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/5 flex items-center justify-between">
            <span>Select Resume Version</span>
            <span className="text-amber-400 font-semibold">PDF Download</span>
          </div>

          <div className="p-1 space-y-1 mt-1">
            {/* Option 1: Full Stack / MERN */}
            <button
              ref={firstItemRef}
              type="button"
              role="menuitem"
              onClick={() => handleDownload('mern')}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-start gap-3 group/item cursor-pointer border ${
                isMernRecommended
                  ? 'bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/15'
                  : 'bg-[#141E32]/60 border-transparent hover:bg-[#1A253A] hover:border-white/10'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#1C273E] border border-white/10 flex items-center justify-center text-amber-400 shrink-0 group-hover/item:border-amber-400 transition-colors mt-0.5">
                <FileText className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors">
                    {resumes.mern.title}
                  </span>
                  {isMernRecommended && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-amber-400 text-black shadow-sm shrink-0">
                      <Check className="w-2.5 h-2.5" /> Recommended
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 truncate">
                  {resumes.mern.fileName}
                </p>
              </div>

              <Download className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-amber-400 shrink-0 mt-1 transition-colors" />
            </button>

            {/* Option 2: Data Analyst */}
            <button
              type="button"
              role="menuitem"
              onClick={() => handleDownload('dataAnalyst')}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-start gap-3 group/item cursor-pointer border ${
                isDaRecommended
                  ? 'bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/15'
                  : 'bg-[#141E32]/60 border-transparent hover:bg-[#1A253A] hover:border-white/10'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#1C273E] border border-white/10 flex items-center justify-center text-amber-400 shrink-0 group-hover/item:border-amber-400 transition-colors mt-0.5">
                <FileText className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-xs font-bold text-white group-hover/item:text-amber-300 transition-colors">
                    {resumes.dataAnalyst.title}
                  </span>
                  {isDaRecommended && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-amber-400 text-black shadow-sm shrink-0">
                      <Check className="w-2.5 h-2.5" /> Recommended
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 truncate">
                  {resumes.dataAnalyst.fileName}
                </p>
              </div>

              <Download className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-amber-400 shrink-0 mt-1 transition-colors" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Missing File Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-red-950/90 border border-red-500/40 text-red-200 text-xs shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
