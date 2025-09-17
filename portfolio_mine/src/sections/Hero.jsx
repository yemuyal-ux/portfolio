import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../cartoonName.css';
import ParticleSymbols from '../components/ParticleSymbols';

gsap.registerPlugin(ScrollTrigger);

const HERO_NAME = 'ABHISHEK MAGAR';

const Hero = () => {

  const nameRef = useRef();
  const sectionRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    if (!nameRef.current || !sectionRef.current) return;
    const triggers = [];
    triggers.push(
      gsap.fromTo(
        nameRef.current,
        { y: 0, opacity: 1 },
        {
          y: -200,
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    );
    if (topRef.current) {
      triggers.push(
        gsap.fromTo(
          topRef.current,
          { y: 0, opacity: 1 },
          {
            y: -100,
            opacity: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      );
    }
    if (bottomRef.current) {
      triggers.push(
        gsap.fromTo(
          bottomRef.current,
          { y: 0, opacity: 1 },
          {
            y: 100,
            opacity: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      );
    }
    return () => {
      triggers.forEach(t => t && t.scrollTrigger && t.scrollTrigger.kill());
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center bg-white select-none relative"
    >
      {/* Particle symbols for Hero section */}
      <ParticleSymbols />
      {/* Greeting, name, and subtitle stacked together */}
      <div className="flex flex-col items-center justify-center w-full">
    <span ref={topRef} className="mb-2 text-lg sm:text-2xl md:text-3xl font-bold text-black text-center funky-top" style={{ letterSpacing: '0.04em', fontWeight: 600 }}>Hi, I am</span>
        <div
          ref={nameRef}
          className="cartoon-name cartoon-font text-4xl sm:text-6xl md:text-8xl font-bold text-black tracking-widest text-center"
          style={{ userSelect: 'none', lineHeight: 1.1 }}
        >
          {HERO_NAME.split('').map((char, idx) => (
            <span
              key={idx}
              className={
                'cartoon-char' +
                (hoveredIdx === idx
                  ? ' hovered'
                  : hoveredIdx !== null && char !== ' ' && idx !== hoveredIdx
                  ? ' squished'
                  : '')
              }
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <span
          ref={bottomRef}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-black text-center funky-bottom"
          style={{ letterSpacing: '0.04em', fontWeight: 600 }}
        >
          AI Student · Backend Developer · Problem Solver
        </span>
      </div>
    </section>
  );
};

export default Hero;