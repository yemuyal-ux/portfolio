


const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center select-none py-16 px-4" style={{ background: '#fff', margin: '0', width: '100vw', position: 'relative', left: '50%', right: '50%', transform: 'translateX(-50%)', boxSizing: 'border-box' }}>
      {/* Wiggly SVG line above section, full white bg */}
      <div className="w-full flex justify-center items-center" style={{ background: '#fff', position: 'absolute', top: '-32px', left: 0, right: 0, width: '100vw' }}>
        <svg viewBox="0 0 600 32" width="99vw" height="32" style={{ minWidth: '400px', maxWidth: '1800px', background: '#fff', display: 'block' }}>
          <path d="M0 16 Q 45 2, 90 16 T 180 16 T 270 16 Q 315 32, 360 16 T 450 16 Q 495 0, 540 16 T 600 16" stroke="#222" strokeWidth="6" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2d1e5e] mb-10 tracking-widest text-center cartoon-font">
        Get in Touch
      </h2>
      <div className="flex gap-14 mb-4">
        <a href="https://github.com/Abkas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#111"/>
          </svg>
        </a>
        <a href="mailto:abhishekmgr321@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
            <rect x="2" y="4" width="20" height="16" rx="4" fill="#fff" stroke="#111" strokeWidth="2"/>
            <path d="M22 6.5 12 13 2 6.5" stroke="#111" strokeWidth="2"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/abhishekmagar-np/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" stroke="#111" strokeWidth="2"/>
            <path d="M7 10v6M7 7v.01M12 10v6m0 0v-3a2 2 0 0 1 4 0v3" stroke="#111" strokeWidth="2"/>
          </svg>
        </a>
      </div>
      <div className="text-[#2d1e5e] cartoon-font text-lg">&copy; {new Date().getFullYear()} Abhishek Magar</div>
    </section>
  );
}

export default Contact