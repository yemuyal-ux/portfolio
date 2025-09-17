
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../cartoonName.css';

const About = () => {
  const sectionRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!contentRef.current || !sectionRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-[60vh] flex items-center justify-start py-20 bg-white select-none"
    >
      <div
        ref={contentRef}
        className="relative ml-8 sm:ml-16 md:ml-32 max-w-xl px-10 py-12 text-left"
        style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 0 0 4px #222', border: '2px solid #222' }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 tracking-widest cartoon-font">ABOUT ME</h2>
        <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed funky-bottom">
          Hi, I’m Abhishek Magar, a passionate developer and AI enthusiast. I enjoy building creative and functional web applications, exploring emerging technologies, and solving challenging problems. When I’m not coding, I’m learning new tech trends, designing projects, or finding ways to make ideas come to life.
        </p>
      </div>
    </section>
  );
}

export default About