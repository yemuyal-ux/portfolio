
import React from 'react';

const pixelFont = {
  fontFamily: '"Press Start 2P", system-ui, sans-serif',
};

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#222" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M7.12 9.5H4.88V19h2.24V9.5ZM6 8.38a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6ZM19.12 19h-2.23v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V19h-2.23V9.5h2.14v1.3h.03c.3-.56 1.04-1.15 2.14-1.15 2.29 0 2.71 1.5 2.71 3.44V19Z"/></svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1DA1F2"/><path fill="#fff" d="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.18 11.82-11.82 11.82-2.35 0-4.54-.69-6.38-1.87.33.04.66.06 1 .06 1.95 0 3.75-.66 5.18-1.77-1.82-.03-3.36-1.23-3.89-2.87.25.04.5.07.77.07.36 0 .72-.05 1.05-.14-1.9-.38-3.33-2.06-3.33-4.08v-.05c.56.31 1.2.5 1.88.52a4.13 4.13 0 0 1-1.84-3.43c0-.76.2-1.47.55-2.08a11.7 11.7 0 0 0 8.5 4.3c-.07-.3-.1-.62-.1-.94 0-2.28 1.85-4.13 4.13-4.13 1.19 0 2.27.5 3.02 1.3a8.18 8.18 0 0 0 2.62-1c-.29.9-.9 1.66-1.7 2.14a8.23 8.23 0 0 0 2.37-.65c-.52.8-1.17 1.5-1.93 2.06Z"/></svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#222"/><path fill="#fff" d="M4 8.25V16c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V8.25l-8 5-8-5Z"/><path fill="#fff" d="M20 6.75A1.25 1.25 0 0 0 18.75 5.5H5.25A1.25 1.25 0 0 0 4 6.75v.1l8 5 8-5v-.1Z"/></svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center select-none py-16 px-4" style={{ background: '#fff', margin: '0', width: '100vw', position: 'relative', left: '50%', right: '50%', transform: 'translateX(-50%)', boxSizing: 'border-box' }}>
      {/* Wiggly SVG line above section, full white bg */}
      <div className="w-full flex justify-center items-center" style={{ background: '#fff', position: 'absolute', top: '-32px', left: 0, right: 0, width: '100vw' }}>
        <svg viewBox="0 0 600 32" width="99vw" height="32" style={{ minWidth: '400px', maxWidth: '1800px', background: '#fff', display: 'block' }}>
          <path d="M0 16 Q 45 2, 90 16 T 180 16 T 270 16 Q 315 32, 360 16 T 450 16 Q 495 0, 540 16 T 600 16" stroke="#222" strokeWidth="6" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2d1e5e] mb-10 tracking-widest text-center" style={pixelFont}>
        Get in Touch
      </h2>
      <div className="flex gap-10 mb-4">
        {socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title={s.name}>
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact