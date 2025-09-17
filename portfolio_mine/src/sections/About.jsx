
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../cartoonName.css';

const About = () => {
  const [exploringDispersed, setExploringDispersed] = useState(false);
  const [explodingDispersed, setExplodingDispersed] = useState(false);
  const [showAsh, setShowAsh] = useState(false);
  const exploringRefs = useRef([]);
  const explodingRefs = useRef([]);
  const sectionRef = useRef();
  const contentRef = useRef();

  // GSAP animation for EXPLODING
  useEffect(() => {
    if (explodingDispersed && explodingRefs.current.length) {
      explodingRefs.current.forEach((el) => {
        if (!el) return;
        const angle = Math.random() * 2 * Math.PI;
        const dist = 300 + Math.random() * 300;
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;
        const rot = (Math.random() - 0.5) * 240;
        gsap.to(el, {
          x,
          y,
          rotate: rot,
          opacity: 0.2 + Math.random() * 0.3,
          scale: 1.5 + Math.random() * 1.2,
          filter: 'blur(8px) grayscale(1) brightness(0.7)',
          duration: 1.2 + Math.random() * 0.7,
          ease: 'power4.in',
          onComplete: () => setShowAsh(true)
        });
      });
    }
  }, [explodingDispersed]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-[60vh] flex items-center justify-center py-20 bg-white select-none"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* About Me Box */}
  <div className="bg-white border-4 border-black rounded-3xl shadow-xl p-8 max-w-md cartoon-font text-black text-lg md:text-xl mb-8 md:mb-0" style={{ minWidth: '270px' }}>
          <div className="text-3xl md:text-4xl mb-2 font-bold" style={{ fontFamily: 'Luckiest Guy, Indie Flower, Permanent Marker, cursive', color: '#111', textShadow: '2px 4px 0 #fff' }}>
            About Me
          </div>
          <div>
            Hi! I'm <span style={{ fontWeight: 700 }}>Yemuyal</span> — an AI student who loves development and turning ideas into reality.<br /><br />
            I enjoy making my projects playful, creative, and fun. Whether it's web, code, or design, I like to bring a spark of imagination to everything I do.<br /><br />
            <span style={{ fontWeight: 700 }}>Let's build cool things together!</span>
          </div>
        </div>
        {/* Playful Interactive Message - vertical, big, centered */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2 cartoon-font text-3xl md:text-4xl lg:text-5xl" style={{ color: '#2d1e5e', textShadow: '2px 6px 0 #ffe082, 0 0 8px #fff' }}>
            I
            <span className="inline-block animate-pulse" style={{ color: '#ff0080', fontSize: '1.5em', filter: 'drop-shadow(0 2px 8px #ffe0f7)' }}>❤</span>
          </div>
          <div className="flex flex-col items-center gap-0 mt-2">
            {/* EXPLORING (disperses) */}
            <span
              className="cartoon-font text-5xl md:text-6xl lg:text-7xl mt-2 flex gap-1 exploring-particles"
              style={{
                letterSpacing: '0.08em',
                transform: 'rotate(-10deg) skewY(-6deg)',
                color: '#2d1e5e',
                textShadow: '2px 6px 0 #ffe082, 0 0 8px #fff',
                cursor: 'pointer',
                display: 'inline-flex',
              }}
              onClick={() => {
                setExploringDispersed(true);
                if (exploringRefs.current.length) {
                  exploringRefs.current.forEach((el) => {
                    if (!el) return;
                    const angle = Math.random() * 2 * Math.PI;
                    const dist = 200 + Math.random() * 200;
                    const x = Math.cos(angle) * dist;
                    const y = Math.sin(angle) * dist;
                    const rot = (Math.random() - 0.5) * 120;
                    gsap.to(el, {
                      x,
                      y,
                      rotate: rot,
                      opacity: 0.7 + Math.random() * 0.3,
                      scale: 1.2 + Math.random() * 0.7,
                      filter: 'blur(2px) brightness(1.2)',
                      duration: 1.6 + Math.random() * 0.7,
                      ease: 'power3.out',
                    });
                  });
                }
              }}
              title="Click to explore!"
            >
              {'EXPLORING'.split('').map((char, idx) => (
                <span
                  key={idx}
                  ref={el => exploringRefs.current[idx] = el}
                  className={`exploring-letter${exploringDispersed ? ' exploring-dispersed' : ''}`}
                  style={{ display: 'inline-block', transition: 'all 1.2s cubic-bezier(.4,1.5,.5,1.1)' }}
                >
                  {char}
                </span>
              ))}
            </span>
            {/* &&& */}
            <span
              className="cartoon-font text-3xl md:text-4xl lg:text-5xl text-[#2d1e5e]"
              style={{
                transform: 'rotate(7deg) skewY(4deg) translateX(12px)',
                display: 'inline-block',
                margin: '0.5em 0',
                letterSpacing: '0.15em',
              }}
            >
              &&&
            </span>
            {/* EXPLODING (explodes) */}
            <span
              className="cartoon-font text-5xl md:text-6xl lg:text-7xl mt-2 flex gap-1 exploding-particles"
              style={{
                color: '#3fa7ff',
                letterSpacing: '0.08em',
                transform: 'rotate(12deg) skewY(8deg) translateX(10px)',
                display: 'inline-flex',
                textShadow: '2px 6px 0 #b3e6ff, 0 0 8px #fff',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => {
                if (explodingRefs.current && !explodingDispersed) {
                  setExplodingDispersed(true);
                }
              }}
              title="Click to explode!"
            >
              {'EXPLODING'.split('').map((char, idx) => (
                <span
                  key={idx}
                  ref={el => explodingRefs.current[idx] = el}
                  className={`exploding-letter${explodingDispersed ? ' exploding-dispersed' : ''}`}
                  style={{ display: 'inline-block', transition: 'all 1.2s cubic-bezier(.4,1.5,.5,1.1)' }}
                >
                  {char}
                </span>
              ))}
              {showAsh && (
                <span className="ash-remnant cartoon-font" style={{
                  color: '#b3b3b3',
                  fontSize: '0.7em',
                  filter: 'blur(2.5px) grayscale(1)',
                  marginLeft: '0.5em',
                  letterSpacing: '0.2em',
                  opacity: 0.7,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  pointerEvents: 'none',
                }}>
                  ...ash
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About