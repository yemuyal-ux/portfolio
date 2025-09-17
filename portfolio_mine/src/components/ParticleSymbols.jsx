import React, { useEffect, useRef } from 'react';

const SYMBOLS = ['*', '#', '$', '%', '=', '-', '~', '@', '&', '?', '!', '^'];

function ParticleSymbols() {
  const containerRef = useRef();
  useEffect(() => {
    const count = 32;
    const container = containerRef.current;
    if (!container) return;
    const particles = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      el.style.position = 'fixed';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = Math.random() * 100 + 'vh';
      el.style.fontSize = (Math.random() * 1.2 + 0.7) + 'rem';
      el.style.color = '#111';
      el.style.opacity = 0.7 + Math.random() * 0.3;
      el.style.pointerEvents = 'none';
      el.style.zIndex = 0;
      el.style.fontWeight = 700;
      el.style.fontFamily = 'monospace, system-ui, sans-serif';
      el.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
      el.style.transition = 'none';
      container.appendChild(el);
      // Animate
      const duration = 8 + Math.random() * 6;
      const xMove = (Math.random() - 0.5) * 80;
      const yMove = -100 - Math.random() * 100;
      el.animate([
        { transform: el.style.transform, opacity: el.style.opacity },
        { transform: `translate(${xMove}vw, ${yMove}vh) ` + el.style.transform, opacity: 0.1 }
      ], {
        duration: duration * 1000,
        iterations: Infinity,
        delay: Math.random() * 4000,
        direction: 'alternate',
        easing: 'cubic-bezier(.6,.1,.4,1.1)'
      });
      particles.push(el);
    }
    return () => {
      particles.forEach(el => el.remove());
    };
  }, []);
  return <div ref={containerRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} aria-hidden />;
}

export default ParticleSymbols;
