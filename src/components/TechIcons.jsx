import React from 'react';

export const TechIcon = ({ name, className = "w-6 h-6", color }) => {
  switch (name.toLowerCase()) {
    case 'react':
    case 'react.js':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
    case 'next.js':
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <circle cx="90" cy="90" r="90" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
          <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#next-g1)"/>
          <path d="M115.816 54H127.93V103.5H115.816V54Z" fill="url(#next-g2)"/>
          <defs>
            <linearGradient id="next-g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="next-g2" x1="121" y1="54" x2="120.799" y2="92.87" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'nodejs':
    case 'node.js':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#68A063">
          <path d="M16 2.3l12.7 7.3v14.8L16 29.7 3.3 22.4V9.6L16 2.3zm0 2.8L5.7 10.9v10.2L16 26.9l10.3-5.8V10.9L16 5.1z"/>
          <path d="M16 8.5l7.5 4.3v8.6L16 25.7l-7.5-4.3v-8.6L16 8.5z"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M15.9 2c-4 0-6.6.4-7.8 1.6-1.3 1.2-1.3 2.5-1.3 5.4h9.1v1.3H6.8c-2.9 0-5.1.7-6 2.3-.9 1.6-.8 4-.8 6.7 0 2.7-.1 5.1.8 6.7.9 1.6 3.1 2.3 6 2.3h2.6v-3.7c0-2.8 2.4-5.1 5.2-5.1h5.1c1.5 0 2.6-1.2 2.6-2.6V8.9c0-2.9 0-4.2-1.3-5.4C19.8 2.3 17.5 2 15.9 2zm-2.4 2.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" fill="#3776AB"/>
          <path d="M16.1 30c4 0 6.6-.4 7.8-1.6 1.3-1.2 1.3-2.5 1.3-5.4h-9.1v-1.3h9.1c2.9 0 5.1-.7 6-2.3.9-1.6.8-4 .8-6.7 0-2.7.1-5.1-.8-6.7-.9-1.6-3.1-2.3-6-2.3h-2.6v3.7c0 2.8-2.4 5.1-5.2 5.1h-5.1c-1.5 0-2.6 1.2-2.6 2.6v7.7c0 2.9 0 4.2 1.3 5.4 1.2 1.2 3.5 1.5 5.1 1.5zm2.4-2.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFD43B"/>
        </svg>
      );
    case 'sql':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#00758F">
          <ellipse cx="16" cy="7" rx="12" ry="4" fill="#00758F"/>
          <path d="M4 7v6c0 2.2 5.4 4 12 4s12-1.8 12-4V7" fill="none" stroke="#00758F" strokeWidth="2.5"/>
          <path d="M4 13v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6" fill="none" stroke="#00758F" strokeWidth="2.5"/>
          <path d="M4 19v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6" fill="none" stroke="#00758F" strokeWidth="2.5"/>
        </svg>
      );
    case 'powerbi':
    case 'power bi':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect x="4" y="16" width="6" height="12" rx="1.5" fill="#F2C811"/>
          <rect x="13" y="10" width="6" height="18" rx="1.5" fill="#F2C811"/>
          <rect x="22" y="4" width="6" height="24" rx="1.5" fill="#F2C811"/>
        </svg>
      );
    case 'excel':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect x="2" y="4" width="28" height="24" rx="3" fill="#1D6F42"/>
          <path d="M11 11l4.5 5-4.5 5h2.8l3.1-3.6 3.1 3.6h2.8l-4.5-5 4.5-5h-2.8l-3.1 3.6-3.1-3.6H11z" fill="#FFF"/>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="4" fill="#3178C6"/>
          <path d="M18.8 19.8c.6.9 1.6 1.4 2.8 1.4 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.4-2.3-2-2.1-.8-3.5-1.7-3.5-3.6 0-2 1.6-3.4 3.9-3.4 1.5 0 2.7.5 3.5 1.5l-1.4 1.4c-.6-.7-1.3-1-2.1-1-1 0-1.7.5-1.7 1.3 0 .8.6 1.2 2.1 1.8 2.3.9 3.7 1.8 3.7 3.8 0 2.2-1.7 3.6-4.1 3.6-1.8 0-3.2-.6-4.1-1.8l1.3-1.6zm-11-7.1h9.4V15h-3.6v9.3H11V15H7.8v-2.3z" fill="#FFF"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
          <path d="M18.5 22.5c.7.8 1.6 1.3 2.7 1.3 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.3-2.1-1.9-2-.8-3.3-1.6-3.3-3.4 0-1.8 1.5-3.2 3.7-3.2 1.4 0 2.5.5 3.3 1.4l-1.3 1.4c-.5-.6-1.2-.9-2-.9-.9 0-1.5.5-1.5 1.2 0 .7.5 1.1 2 1.7 2.2.8 3.5 1.7 3.5 3.6 0 2.1-1.6 3.4-3.9 3.4-1.7 0-3-.6-3.9-1.7l1.5-1.7zm-8 .2c.4.6.8 1 1.7 1 .8 0 1.4-.3 1.4-1.5v-8.2h2.2v8.2c0 2.2-1.3 3.3-3.4 3.3-1.8 0-2.8-.9-3.3-2l1.4-.8z" fill="#000"/>
        </svg>
      );
    case 'tailwind':
    case 'tailwind css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#47A248">
          <path d="M16.1 1.6s-.3.3-.7.9c-2.4 3.7-6.9 10.3-6.9 15.9 0 6.6 4.6 11.2 7.6 12 0 0 .4.1.4.1s.4 0 .4-.1c3-0.8 7.6-5.4 7.6-12 0-5.6-4.5-12.2-6.9-15.9-.4-.6-.7-.9-.7-.9h-.8zm-.3 15.1c0 4.1-.7 7.7-1.1 9.8-.2-1.6-.9-4.8-.9-9.8 0-4.6 1-8.5 2-10.9 0 3.3 0 7.7 0 10.9zm.6 0c0-3.2 0-7.6 0-10.9 1 2.4 2 6.3 2 10.9 0 5-.7 8.2-.9 9.8-.4-2.1-1.1-5.7-1.1-9.8z"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#4169E1">
          <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm4.5 21.2c-.6.3-1.3.4-2.1.4-2.2 0-3.6-1.3-4.1-3.6-.3-1.4-.4-3.1-.3-4.9.4.1.8.2 1.3.2 1.6 0 2.9-.8 3.5-2.2.4.9.9 1.6 1.6 2.1-.2 2.7-.1 5.6.1 8zm1.9-8.7c-.5.4-1.2.6-1.9.6-.9 0-1.7-.4-2.1-1.1-.3-.6-.3-1.3-.1-2.1.4-1.5 1.7-2.6 3.1-2.6.9 0 1.6.4 2 1.1.4.8.4 1.7.1 2.5-.2.6-.6 1.2-1.1 1.6z"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#F05032">
          <path d="M30.4 14.5l-12.9-13c-.8-.8-2.1-.8-2.9 0l-3.3 3.3 4.2 4.2c.9-.3 2 .1 2.6.7.7.7.9 1.8.5 2.7l4 4c.9-.4 2-.2 2.7.5 1 1 1 2.7 0 3.8s-2.7 1-3.8 0c-.8-.8-.9-2-.5-2.9l-3.8-3.8v7.4c.5.3.9.7 1.1 1.3.6 1.3 0 2.8-1.3 3.4-1.3.6-2.8 0-3.4-1.3-.4-.8-.3-1.7.1-2.4v-7.6c-.4-.7-.3-1.6.1-2.4l-4.1-4.1-6.1 6.1c-.8.8-.8 2.1 0 2.9l12.9 12.9c.8.8 2.1.8 2.9 0l13.4-13.4c.8-.8.8-2.1 0-2.8z"/>
        </svg>
      );
    case 'postman':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <circle cx="16" cy="16" r="14" fill="#FF6C37"/>
          <path d="M12 10l8 6-8 6V10z" fill="#FFF"/>
        </svg>
      );
    case 'netlify':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="4" fill="#00C7B7"/>
          <path d="M16 6l-6 10h12L16 6zm0 20l6-10H10l6 10z" fill="#FFF"/>
        </svg>
      );
    case 'render':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="4" fill="#46E3B7"/>
          <path d="M10 8h6a6 6 0 010 12h-6V8zm0 8h6a2 2 0 000-4h-6v4zm6 0l5 8h-3l-4.5-8h2.5z" fill="#000"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#2496ED">
          <path d="M29.6 13.5c-.5-.4-1.4-.5-2.1-.3-.3-1.3-1.2-2.3-2.5-2.8l-.6-.2-.3.6c-.6 1.2-.5 2.5 0 3.6-1.4.9-3.2 1.2-5.7 1.2H1.4c-.2.9-.3 1.9-.3 2.9 0 5.8 4.4 10.5 10.3 10.5 6.7 0 11.5-4.5 13.8-9.7 2.6-.1 4.5-1.4 5.2-3.4.1-.3.2-.6.2-.9-.3-.5-.6-1.1-1-1.5zM6.9 14.9H4.3v-2.6h2.6v2.6zm3.5 0H7.8v-2.6h2.6v2.6zm3.5 0h-2.6v-2.6h2.6v2.6zm3.5 0h-2.6v-2.6h2.6v2.6zm-7-3.5H7.8V8.8h2.6v2.6zm3.5 0h-2.6V8.8h2.6v2.6zm3.5 0h-2.6V8.8h2.6v2.6zm3.5 3.5h-2.6v-2.6h2.6v2.6zm0-3.5h-2.6V8.8h2.6v2.6z"/>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="#FF9900">
          <path d="M10.2 17.5c0-.8.6-1.4 1.8-1.5l2.7-.2v-.9c0-1.2-.6-1.8-1.9-1.8-1.1 0-1.7.4-2.1 1.2l-1.3-.8c.7-1.3 1.9-1.8 3.5-1.8 2.2 0 3.4 1.1 3.4 3.1v4.7h-1.5v-1.1c-.6.8-1.6 1.3-2.6 1.3-1.4 0-2-.9-2-2.2zm4.5-.4v-.6l-2.4.2c-.8.1-1.1.4-1.1.9 0 .6.4.9 1.1.9.9.1 1.9-.4 2.4-1.4zm6.6 2.9l-2.2-7.8h1.7l1.4 5.7 1.4-5.7h1.6l1.4 5.7 1.4-5.7h1.6l-2.2 7.8h-1.6l-1.4-5.6-1.4 5.6h-1.7z"/>
          <path d="M26.2 24.2c-3.7 2.7-8.9 4.1-14.4 4.1-4.7 0-9.2-1.2-11.8-3.3-.2-.2-.2-.5 0-.7.3-.2.6-.1.8.1 2.5 1.9 6.6 3 11 3 5.1 0 10-1.3 13.5-3.8.3-.2.7-.1.9.1.2.3.2.7 0 .9z"/>
        </svg>
      );
    default:
      return (
        <div className={`${className} rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
