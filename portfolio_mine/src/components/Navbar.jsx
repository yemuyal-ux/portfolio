import React from 'react'



const pixelFont = {
  fontFamily: '"Press Start 2P", system-ui, sans-serif',
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white/60 border-b-4 border-gray-300 shadow-lg backdrop-blur-md" style={pixelFont}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between h-16">
        {/* Pixel Logo/Title */}
        <a href="#hero" className="text-lg sm:text-2xl font-bold text-purple-400 px-4 py-2 border-4 border-gray-300 bg-white/80 shadow-pixel mr-4 select-none" style={pixelFont}>
          <span>PIXELFOLIO</span>
        </a>
        {/* Pixel Navigation Links */}
        <div className="hidden md:flex space-x-2">
          {[
            { href: '#about', label: 'ABOUT' },
            { href: '#skills', label: 'SKILLS' },
            { href: '#projects', label: 'PROJECTS' },
            { href: '#education', label: 'EDU' },
            { href: '#contact', label: 'CONTACT' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 bg-white/70 text-purple-500 hover:bg-purple-100 hover:text-purple-700 transition-all duration-150 shadow-pixel text-xs sm:text-base select-none"
              style={pixelFont}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Pixel Mobile menu button (not functional) */}
        <button className="md:hidden p-2 border-4 border-gray-300 bg-white/70 text-purple-500 shadow-pixel" style={pixelFont}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar